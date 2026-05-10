/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useRef, useEffect } from 'react';
import { flushSync } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard,
  Search,
  Menu,
  X,
  Bell,
  Settings,
  Moon,
  Sun,
  Radio,
  Activity,
  Building2,
  BarChart3,
  HeartPulse
} from 'lucide-react';
import { cn, getCityImage } from './lib/utils';
import Summary from './components/views/Summary';
import CityDive from './components/views/CityDive';
import Composite from './components/views/Composite';
import Stations from './components/views/Stations';
import Health from './components/views/Health';
import { MAJOR_CITIES_COMPARISON, TOP_POLLUTED_CITIES, STATIONS_DATA, CityData } from './constants';

type View = 'summary' | 'city-dive' | 'composite' | 'stations' | 'health';

export default function App() {
  const [activeView, setActiveView] = useState<View>('summary');
  const [activeContext, setActiveContext] = useState<string | CityData | undefined>(undefined);
  
  const [stations, setStations] = useState<any[]>(STATIONS_DATA);
  const [cities, setCities] = useState<CityData[]>([]);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const blurTimerRef = useRef<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isHealthModalOpen, setIsHealthModalOpen] = useState(false);
  const [userLocationData, setUserLocationData] = useState<{ city: string; aqi: number | null } | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const notifications = useMemo(() => {
    if (cities.length === 0) return [];
    const sortedCities = [...cities].sort((a, b) => b.aqi - a.aqi);
    const severeCities = sortedCities.filter(c => c.aqi > 200);
    const goodCities = sortedCities.filter(c => c.aqi < 50);
    const notes = [];

    if (severeCities.length > 0) {
      notes.push({ id: 1, title: `AQI Alert: ${severeCities[0].name}`, message: `AQI has reached "${severeCities[0].status}" levels (${severeCities[0].aqi}).`, time: 'Just now', type: 'error' });
    }
    if (goodCities.length > 0) {
      notes.push({ id: 2, title: `Better Air: ${goodCities[0].name}`, message: `Air quality improved to "${goodCities[0].status}" (${goodCities[0].aqi}).`, time: '1h ago', type: 'success' });
    } else if (sortedCities.length > 0) {
      notes.push({ id: 2, title: `Update: ${sortedCities[sortedCities.length-1].name}`, message: `Best air quality in the region: ${sortedCities[sortedCities.length-1].aqi} AQI.`, time: '2h ago', type: 'success' });
    }
    const avgAqi = Math.round(cities.reduce((acc, c) => acc + c.aqi, 0) / cities.length);
    notes.push({ id: 3, title: 'Health Insight', message: avgAqi > 100 ? 'Regional average AQI is elevated.' : 'Air quality is within acceptable limits.', time: '5h ago', type: 'warning' });
    return notes;
  }, [cities]);

  const allCities = useMemo(() => {
    // If we have dynamic cities, use them. Otherwise fallback to constants.
    return cities.length > 0 ? cities : MAJOR_CITIES_COMPARISON;
  }, [cities]);

  useEffect(() => {
    const fetchLatestData = async () => {
      try {
        const response = await fetch('data/local_aqi.json');
        if (response.ok) {
          const data = await response.json();
          if (data.stations) setStations(data.stations);
          if (data.city_aggregation) {
            const dynamicCities: CityData[] = Object.values(data.city_aggregation).map((c: any) => {
              const staticRef = [...MAJOR_CITIES_COMPARISON, ...TOP_POLLUTED_CITIES].find(sc => sc.name === c.name);
              return {
                name: c.name,
                state: c.state,
                aqi: c.avgAqi,
                status: c.avgAqi > 300 ? "Severe" : c.avgAqi > 200 ? "Very Poor" : c.avgAqi > 100 ? "Poor" : c.avgAqi > 50 ? "Moderate" : "Good",
                pm25: c.pollutants?.["PM2.5"]?.value || Math.round(c.avgAqi * 0.6),
                trend: staticRef?.trend || "stable",
                trendValue: staticRef?.trendValue || "LIVE",
                imageUrl: staticRef?.imageUrl || `db/cities/${c.name}/${c.name}.jpg`,
                admissions: c.respiratoryAdmissions,
                density: c.density,
                category: c.category,
                description: staticRef?.description || `Real-time monitoring indicates ${c.avgAqi} AQI in ${c.name}.`
              };
            });
            setCities(dynamicCities);
          }
          setLastUpdated(data.fetchedAt);
        }
      } catch (error) {
        console.error("Failed to fetch latest AQI data:", error);
      } finally {
        }
    };
    fetchLatestData();
  }, []);

  useEffect(() => {
    if (!navigator.geolocation) return;

    const detectLocation = () => {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude: lat, longitude: lon } = pos.coords;
        try {
          // Get city name
          const geoRes = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`, {
            headers: { 'User-Agent': 'aqi-health-app' }
          });
          const geoData = await geoRes.json();
          const city = geoData.address?.city || geoData.address?.town || geoData.address?.village || geoData.address?.state_district || 'Your Area';

          // Get AQI from Open-Meteo
          const aqiRes = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=us_aqi`);
          const aqiData = await aqiRes.json();
          const aqi = aqiData.current?.us_aqi || null;

          setUserLocationData({ city, aqi });
        } catch (err) {
          console.error("Error fetching location AQI:", err);
        }
      }, (err) => {
        console.warn("Location access denied or failed:", err);
      }, { timeout: 10000 });
    };

    detectLocation();
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    return () => {
      if (blurTimerRef.current) window.clearTimeout(blurTimerRef.current);
    };
  }, []);

  const toggleTheme = (targetMode: boolean) => {
    if (isDarkMode === targetMode) return;
    
    // Check for View Transitions API support
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      (document as any).startViewTransition(() => {
        flushSync(() => {
          setIsDarkMode(targetMode);
        });
      });
    } else {
      setIsDarkMode(targetMode);
    }
  };

  const searchResults = allCities.filter(city => 
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navItems = [
    { id: 'summary', label: 'Summary', icon: LayoutDashboard },
    { id: 'city-dive', label: 'City Dive', icon: Building2 },
    { id: 'composite', label: 'Composite', icon: BarChart3 },
    { id: 'stations', label: 'Stations', icon: Radio },
    { id: 'health', label: 'Health', icon: HeartPulse },
  ];

  const handleNavigate = (view: View, context?: any) => {
    setActiveView(view);
    if (context) setActiveContext(context);
    window.scrollTo(0, 0);
  };

  const renderView = () => {
    switch (activeView) {
      case 'summary': return <Summary onNavigate={handleNavigate} stations={stations} cities={allCities} lastUpdated={lastUpdated} isDarkMode={isDarkMode} />;
      case 'city-dive': return <CityDive onNavigate={handleNavigate} initialCity={activeContext} cities={allCities} isDarkMode={isDarkMode} />;
      case 'composite': return <Composite onNavigate={handleNavigate} stations={stations} cities={allCities} isDarkMode={isDarkMode} />;
      case 'stations': return <Stations onNavigate={handleNavigate} stations={stations} lastUpdated={lastUpdated} isDarkMode={isDarkMode} />;
      case 'health': return <Health onNavigate={handleNavigate} cities={allCities} isDarkMode={isDarkMode} />;
      default: return <Summary onNavigate={handleNavigate} stations={stations} cities={allCities} lastUpdated={lastUpdated} isDarkMode={isDarkMode} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-sans selection:bg-ink/10 transition-colors duration-300">
      {/* Top App Bar */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-surface border-b border-ink/10 z-50 flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden p-2 hover:bg-ink/5 rounded-full transition-colors"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <span className="text-xl font-bold tracking-tight text-ink font-sans uppercase truncate max-w-[120px] sm:max-w-none">AQI Health India</span>
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          <div className="flex items-center bg-ink/5 rounded-lg px-3 md:px-4 py-1.5 border border-ink/20 focus-within:border-ink transition-all relative">
            <Search className="text-ink/70 mr-2" size={16} />
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => {
                blurTimerRef.current = window.setTimeout(() => setIsSearchFocused(false), 200);
              }}
              className="bg-transparent border-none outline-none text-sm w-20 sm:w-32 md:w-64 placeholder:text-ink/60"
            />
            
            {/* Search Results Dropdown */}
            {isSearchFocused && searchQuery && (
              <div className="absolute top-full left-0 mt-2 w-full bg-surface border border-ink/20 shadow-none rounded-xl max-h-64 overflow-y-auto z-50">
                {searchResults.length > 0 ? (
                  searchResults.map((city, index) => (
                    <div 
                      key={index} 
                      className="px-4 py-3 hover:bg-ink/5 cursor-pointer flex justify-between items-center border-b border-ink/10 last:border-0 group"
                      onMouseDown={() => {
                        handleNavigate('city-dive', city);
                        setSearchQuery('');
                        setIsSearchFocused(false);
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg overflow-hidden bg-ink/5 shrink-0">
                          <img 
                            src={getCityImage(city.name, city.imageUrl, city.state)} 
                            alt="" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 grayscale"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1564507592333-c60657451dd6?auto=format&fit=crop&q=80&w=100';
                            }}
                          />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-ink">{city.name}</div>
                          <div className="text-[10px] text-ink/60 uppercase font-mono">{city.state}</div>
                        </div>
                      </div>
                      <div className={cn(
                        "font-mono text-xs font-bold px-2 py-1 rounded",
                        city.aqi > 200 ? "text-error bg-error-container" : "text-ink bg-ink/5"
                      )}>
                        {city.aqi}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-3 text-sm text-ink/40">No cities found</div>
                )}
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-1 md:gap-3">
            <div className="relative">
              <button 
                onClick={() => {
                  setIsNotificationsOpen(!isNotificationsOpen);
                  setIsSettingsOpen(false);
                }}
                className={cn(
                  "p-2 rounded-full transition-all relative group",
                  isNotificationsOpen ? "bg-ink/5" : "hover:bg-ink/5"
                )}
              >
                <Bell className={cn("transition-colors", isNotificationsOpen ? "text-ink" : "text-ink/60 group-hover:text-ink")} size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
              </button>

              <AnimatePresence>
                {isNotificationsOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsNotificationsOpen(false)} />
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full right-0 mt-3 w-80 bg-surface border border-ink/20 shadow-none rounded-2xl overflow-hidden z-20"
                    >
                      <div className="p-4 border-b border-ink/10 flex justify-between items-center bg-ink/5">
                        <h3 className="label-caps text-ink">Notifications</h3>
                        <button className="text-[10px] font-bold text-ink hover:underline">Mark all read</button>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.map(n => (
                          <div key={n.id} className="p-4 border-b border-ink/5 hover:bg-ink/5 transition-colors cursor-pointer group">
                            <div className="flex justify-between items-start mb-1">
                              <span className="font-bold text-xs group-hover:text-ink transition-colors text-ink">{n.title}</span>
                              <span className="text-[9px] text-ink/70 font-bold uppercase font-mono">{n.time}</span>
                            </div>
                            <p className="text-[11px] text-ink/80 leading-relaxed">{n.message}</p>
                          </div>
                        ))}
                      </div>
                      <button className="w-full py-3 label-caps text-ink/70 hover:text-ink transition-colors border-t border-ink/10">
                        View All Notifications
                      </button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <div className="relative">
              <button 
                onClick={() => {
                  setIsSettingsOpen(!isSettingsOpen);
                  setIsNotificationsOpen(false);
                }}
                className={cn(
                  "p-2 rounded-full transition-all group",
                  isSettingsOpen ? "bg-ink/5" : "hover:bg-ink/5"
                )}
              >
                <Settings className={cn("transition-colors", isSettingsOpen ? "text-ink" : "text-ink/80 group-hover:text-ink")} size={20} />
              </button>

              <AnimatePresence>
                {isSettingsOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsSettingsOpen(false)} />
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full right-0 mt-3 w-64 bg-surface border border-ink/20 shadow-none rounded-2xl overflow-hidden z-20"
                    >
                      <div className="p-4 border-b border-ink/10 bg-ink/5">
                        <h3 className="label-caps text-ink">Preferences</h3>
                      </div>
                      <div className="p-2 space-y-1">
                        <div className="px-3 py-2 space-y-2">
                          <span className="label-caps !text-[10px] !text-ink/40">Theme Mode</span>
                          <div className="grid grid-cols-2 gap-2">
                            <button 
                              onClick={() => toggleTheme(false)}
                              className={cn(
                                "py-3 rounded-lg font-mono text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-1.5",
                                !isDarkMode 
                                  ? "bg-ink text-surface" 
                                  : "bg-ink/5 text-ink/60 hover:bg-ink/10"
                              )}
                            >
                              <Sun size={14} /> Light
                            </button>
                            <button 
                              onClick={() => toggleTheme(true)}
                              className={cn(
                                "py-3 rounded-lg font-mono text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-1.5",
                                isDarkMode 
                                  ? "bg-ink text-surface" 
                                  : "bg-ink/5 text-ink/60 hover:bg-ink/10"
                              )}
                            >
                              <Moon size={14} /> Dark
                            </button>
                          </div>
                        </div>
                        <div className="px-3 py-2 flex items-center justify-between hover:bg-ink/5 rounded-lg cursor-pointer transition-colors">
                          <span className="text-xs font-bold text-ink">Language</span>
                          <span className="label-caps !text-[10px] !text-ink/40">English</span>
                        </div>
                        <div className="px-3 py-2 flex items-center justify-between hover:bg-ink/5 rounded-lg cursor-pointer transition-colors">
                          <span className="text-xs font-bold text-ink">Units</span>
                          <span className="label-caps !text-[10px] !text-ink/40">AQI (US)</span>
                        </div>
                        <div className="h-px bg-ink/10 my-2" />
                      </div>
                      <div className="p-3 bg-ink/5 text-center">
                        <p className="font-mono text-[9px] text-ink/40 uppercase tracking-tighter">v2.4.0 Stable Build</p>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </header>

      {/* Side Navigation Bar */}
      <aside className={cn(
        "fixed left-0 top-0 bottom-0 w-64 glass-panel pt-20 px-4 z-40 transition-transform duration-300 ease-in-out md:translate-x-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="mb-10 px-2">
          <h2 className="text-4xl font-black font-sans text-ink tracking-tighter">India AQI</h2>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40 font-black mt-1">NATIONAL DASHBOARD</p>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveView(item.id as View);
                  setIsSidebarOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-4 px-4 py-4 rounded-none transition-all duration-300 group relative",
                  isActive 
                    ? "bg-ink/5 text-ink font-black border-l-[6px] border-ink" 
                    : "text-ink/60 hover:text-ink hover:bg-ink/5"
                )}
              >
                <div className={cn(
                  "p-1.5 rounded-none transition-colors",
                  isActive ? "bg-ink/10" : "bg-ink/5 group-hover:bg-ink/10"
                )}>
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className={cn(
                  "text-[16px] tracking-tight",
                  isActive ? "font-black" : "font-semibold"
                )}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="mt-auto mb-10 px-2">
          <div className="card-subtle p-4">
            <p className="label-caps mb-2 text-ink/60">SYSTEM STATUS</p>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-ink rounded-none animate-pulse"></span>
              <span className="text-xs font-semibold text-ink">
                {lastUpdated ? `Sync: ${new Date(lastUpdated).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true})}` : 'Real-time Sync Active'}
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="pt-24 pb-20 px-4 md:px-6 md:ml-64 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="will-change-[opacity,transform]"
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 h-16 glass-panel md:hidden z-50 flex items-center justify-around px-2 pb-safe transition-colors">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id as View)}
              className={cn(
                "flex flex-col items-center gap-1 transition-all duration-200",
                isActive ? "text-ink scale-110" : "text-ink/60"
              )}
            >
              <Icon size={20} fill={isActive ? "currentColor" : "none"} />
              <span className="font-mono text-[10px] uppercase tracking-wider">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Health Diagnostic Modal */}
      <AnimatePresence>
        {isHealthModalOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsHealthModalOpen(false)}
              className="absolute inset-0 bg-ink/40 backdrop-blur-md" 
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-surface rounded-2xl shadow-none border border-ink overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-ink/5 flex items-center justify-center text-ink shadow-none">
                      <Activity size={24} />
                    </div>
                    <div>
                      <h3 className="font-display-md !text-xl text-ink">Guardian Briefing</h3>
                      <p className="label-caps">AI Health Diagnostic</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsHealthModalOpen(false)}
                    className="p-2 hover:bg-ink/5 rounded-full transition-colors"
                  >
                    <X size={20} className="text-ink/40" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Risk Score */}
                  <div className="card-subtle p-6">
                    {(() => {
                      const currentAqi = userLocationData?.aqi ?? Math.round(cities.reduce((a, b) => a + b.aqi, 0) / (cities.length || 1));
                      const isHighRisk = currentAqi > 150;
                      return (
                        <>
                          <div className="flex items-end justify-between mb-2">
                            <span className="font-display text-4xl font-black text-ink uppercase tracking-tighter">
                              {userLocationData?.city || 'Location Unknown'}
                            </span>
                            <span className={cn(
                              "label-caps !text-[10px] px-3 py-1 rounded-full",
                              isHighRisk ? "bg-aqi-hazardous-bg text-aqi-hazardous border border-aqi-hazardous/20" : "bg-aqi-good-bg text-aqi-good border border-aqi-good/20"
                            )}>
                              {isHighRisk ? 'Critical' : 'Nominal'}
                            </span>
                          </div>
                          <div className="font-display text-8xl font-black text-ink leading-none mt-2">
                            {currentAqi} <span className="text-sm font-mono text-ink/40 uppercase tracking-widest">AQI</span>
                          </div>
                        </>
                      );
                    })()}
                  </div>

                  {/* Recommendations */}
                  <div className="space-y-3">
                    <h4 className="label-caps">Guardian Protocol</h4>
                    {(() => {
                      const currentAqi = userLocationData?.aqi ?? Math.round(cities.reduce((a, b) => a + b.aqi, 0) / (cities.length || 1));
                      return [
                        { icon: Sun, text: "Optimal for outdoor activities", active: currentAqi < 100 },
                        { icon: Activity, text: "Mask recommended for sensitive groups", active: currentAqi >= 100 },
                        { icon: Bell, text: "Avoid high-traffic zones today", active: true }
                      ].filter(r => r.active).map((rec, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-surface border border-ink/10 rounded-xl hover:border-ink transition-colors">
                          <rec.icon size={18} className="text-ink" />
                          <span className="text-sm font-semibold text-ink">{rec.text}</span>
                        </div>
                      ));
                    })()}
                  </div>
                </div>

                <button 
                  onClick={() => {
                    handleNavigate('health');
                    setIsHealthModalOpen(false);
                  }}
                  className="w-full mt-8 btn-primary"
                >
                  See Full Health Report
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Contextual FAB */}
      <button 
        onClick={() => setIsHealthModalOpen(true)}
        className={cn(
          "fixed right-6 bottom-20 md:bottom-8 w-14 h-14 bg-ink text-surface rounded-xl shadow-none flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group z-30",
          (userLocationData?.aqi ?? (cities.reduce((a, b) => a + b.aqi, 0) / (cities.length || 1))) > 150 ? "animate-pulse" : ""
        )}
      >
        <Activity size={24} className="group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
}
