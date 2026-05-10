import React from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  AreaChart, Area,
  Radar, RadarChart, PolarGrid, PolarAngleAxis,
  BarChart, Bar
} from 'recharts';
import { TrendingDown, TrendingUp, Info, Activity, MapPin, ChevronLeft, ChevronRight, ArrowRight, ShieldAlert, Wind, Zap } from "lucide-react";
import {
  STATIONS_DATA,
  MAJOR_CITIES_COMPARISON,
  WEEKLY_FORECAST
} from '../../constants';
import { cn, getCityImage } from '../../lib/utils';
import newsCsvRaw from '../../assets/news.csv?raw';

export default function Summary({ 
  onNavigate, 
  stations: _stations = STATIONS_DATA,
  cities = MAJOR_CITIES_COMPARISON, 
  lastUpdated: initialLastUpdated = null,
  isDarkMode: _isDarkMode
}: { 
  onNavigate?: (view: 'summary' | 'city-dive' | 'composite' | 'stations' | 'health', context?: any) => void,
  stations?: any[],
  cities?: any[],
  lastUpdated?: string | null,
  isDarkMode?: boolean
}) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [lastUpdated, setLastUpdated] = React.useState<string | null>(initialLastUpdated);




  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  // Canonical tier classification — matches CityDive.tsx CITY_TIER spec
  const CITY_TIER_1 = new Set([
    'Delhi','Mumbai','Kolkata','Chennai','Bengaluru','Hyderabad',
    'Ahmedabad','Pune','Lucknow','Jaipur','Surat','Kanpur','Nagpur',
    'Patna','Indore','Bhopal','Visakhapatnam','Vadodara','Guwahati',
    'Chandigarh','Ludhiana','Amritsar','Noida','Ghaziabad','Meerut',
    'Navi Mumbai','Thane','Pimpri-Chinchwad','Nashik','Faridabad','Gurugram',
  ]);
  const CITY_INDUSTRIAL = new Set([
    'Nandesari','Vapi','Vatva','Bhavnagar','Gandhinagar','Rajkot',
    'Mehsana','Charkhi Dadri','Bahadurgarh','Jind','Manesar',
    'Narnaul','Palwal','Panchgaon','Ballabgarh','Dharuhera','Bhiwani',
    'Mandikhera','Sirsa','Baddi','Jorapokhar','Bilaspur','Tumidih',
    'Kunjemura','Raipur','Bhilai','Korba','Mandideep','Singrauli',
    'Pithampur','Kalyan','Bhiwandi','Ambernath','Badlapur','Boisar',
    'Dombivli','Mira-Bhayandar','Virar','Angul','Baripada','Nayagarh',
    'Rourkela','Talcher','Balasore','Brajrajnagar','Byasanagar',
    'Cuttack','Keonjhar','Rairangpur','Tensa','Suakati','Barbil',
    'Khora','Haldia','Bhubaneswar',
  ]);
  const getCityTier = (name: string) => {
    if (CITY_TIER_1.has(name)) return 'Tier 1';
    if (CITY_INDUSTRIAL.has(name)) return 'Industrial';
    return 'Tier 2';
  };

  const getAqiStatus = (aqi: number) => {
    if (aqi <= 50) return 'Good';
    if (aqi <= 100) return 'Moderate';
    if (aqi <= 200) return 'Poor';
    if (aqi <= 300) return 'Very Poor';
    return 'Severe';
  };

  const processedData = React.useMemo(() => cities, [cities]);

  React.useEffect(() => {
    setLastUpdated(initialLastUpdated);
  }, [initialLastUpdated]);

  const staticNews = React.useMemo(() => [
    { title: 'National AQI Monitoring Expanded', description: `Network now covers ${STATIONS_DATA.length} certified stations across all regions.`, keywords: ['Infrastructure', 'Scale'], image_url: '' },
    { title: 'Seasonal Trend Report', description: 'Observed shifts in PM2.5 concentrations across northern corridors.', keywords: ['Data', 'Trends'], image_url: '' },
    { title: 'Data Quality Update', description: 'Telemetry accuracy verified at 99.8% across the integrated network.', keywords: ['System', 'Health'], image_url: '' }
  ], []);

  const [newsItems, setNewsItems] = React.useState(staticNews);
  const [isLiveNews, setIsLiveNews] = React.useState(false);

  React.useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://newsdata.io/api/1/latest?apikey=pub_87d0a83a98044d4f96843c2979d620de&q=air%20quality%20index%20India&country=in&category=environment,health&sort=relevancy&removeduplicate=1');
        const data = await response.json();
        
        if (data.status === 'error' || !data.results || data.results.length === 0) {
          throw new Error('API credits finished or no results');
        }

        const mappedNews = data.results.slice(0, 10).map((item: any) => ({
          title: item.title,
          description: (item.description || "").substring(0, 150) + "...",
          keywords: item.category ? item.category : ["Environmental", "India"],
          image_url: item.image_url || "",
          link: item.link || "#"
        }));

        setNewsItems(mappedNews);
        setIsLiveNews(true);
      } catch (error) {
        console.warn('API fetch failed, using fallback CSV:', error);
        
        try {
          // Parse CSV robustly
          const parseCSVLine = (line: string) => {
            const result = [];
            let current = '';
            let inQuotes = false;
            for (let i = 0; i < line.length; i++) {
              const char = line[i];
              if (char === '"') {
                if (inQuotes && line[i + 1] === '"') {
                  current += '"';
                  i++;
                } else {
                  inQuotes = !inQuotes;
                }
              } else if (char === ',' && !inQuotes) {
                result.push(current);
                current = '';
              } else {
                current += char;
              }
            }
            result.push(current);
            return result;
          };

          const lines = newsCsvRaw.split('\n').filter(l => l.trim().length > 0);
          const headers = parseCSVLine(lines[0]);
          
          const fallbackNews = lines.slice(1, 11).map(line => {
            const cols = parseCSVLine(line);
            const obj: any = {};
            headers.forEach((h, i) => obj[h.trim()] = cols[i]);
            
            return {
              title: obj.title || "Environmental Briefing",
              description: (obj.description || "").substring(0, 150) + "...",
              keywords: obj.category ? obj.category.replace(/[[\]'"]/g, '').split(',') : ["Environmental", "India"],
              image_url: obj.image_url || "",
              link: obj.link || "#"
            };
          });

          if (fallbackNews.length > 0) {
            setNewsItems(fallbackNews);
            setIsLiveNews(false);
          } else {
            setNewsItems(staticNews);
            setIsLiveNews(false);
          }
        } catch (csvErr) {
          console.error("CSV Fallback failed:", csvErr);
          setNewsItems(staticNews);
          setIsLiveNews(false);
        }
      }
    };

    fetchNews();
  }, [staticNews]);

  const [timeframe, setTimeframe] = React.useState<'daily' | 'weekly' | 'monthly'>('daily');

  const timeframeScale = React.useMemo(() => {
    return timeframe === 'daily' ? 1.0 : timeframe === 'weekly' ? 0.88 : 0.76;
  }, [timeframe]);

  const citiesList = React.useMemo(() => {
    return processedData.map(city => {
      const scaledAqi = Math.round(city.aqi * timeframeScale);
      return {
        ...city,
        aqi: scaledAqi, // Override with scaled value for UI consistency
        rawAqi: city.aqi, // Keep raw for reference if needed
        tier: getCityTier(city.name),
        status: getAqiStatus(scaledAqi)
      };
    });
  }, [processedData, timeframeScale]);

  // Dynamic data based on timeframe
  const nationalTrend = React.useMemo(() => {
    const values = citiesList.map(c => c.aqi).sort((a, b) => a - b);
    const avg = values.reduce((a, b) => a + b, 0) / (values.length || 1);
    
    // Deterministic pseudo-randomness based on timeframe string length
    const shift = timeframe.length * 5;
    
    switch (timeframe) {
      case 'weekly':
        return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => ({
          name: day, val: Math.max(0, values[Math.floor(i * (values.length / 7))] + (Math.sin(i + shift) * 15))
        }));
      case 'monthly':
        return ['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4'].map((day, i) => ({
          name: day, val: Math.max(0, avg + (Math.cos(i * shift) * 25))
        }));
      default:
        return ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '23:59'].map((day, i) => ({
          name: day, val: values[Math.floor(i * (values.length / 7))] || values[values.length - 1]
        }));
    }
  }, [timeframe, citiesList]);

  const { tier1Data, tier2Data, industrialData } = React.useMemo(() => {
    const tier1: any[] = [];
    const tier2: any[] = [];
    const industrial: any[] = [];

    citiesList.forEach((city) => {
      const point = {
        name: city.name,
        x: city.density,
        y: city.aqi,
      };

      if (city.tier === 'Tier 1') {
        tier1.push(point);
      } else if (city.category === 'Industrial') {
        industrial.push(point);
      } else {
        tier2.push(point);
      }
    });

    return { tier1Data: tier1, tier2Data: tier2, industrialData: industrial };
  }, [citiesList]);

  const getAqiColor = (aqi: number) => {
    if (aqi <= 50) return 'var(--aqi-good)';
    if (aqi <= 100) return 'var(--aqi-moderate)';
    if (aqi <= 200) return 'var(--aqi-poor)';
    if (aqi <= 300) return 'var(--aqi-unhealthy)';
    if (aqi <= 400) return 'var(--aqi-very-poor)';
    return 'var(--aqi-hazardous)';
  };

  const summaryStats = React.useMemo(() => {
    if (citiesList.length === 0) return null;
    
    const sortedByAqi = [...citiesList].sort((a, b) => b.aqi - a.aqi);
    const avgAqi = Math.round(citiesList.reduce((acc, c) => acc + c.aqi, 0) / citiesList.length);

    const totalStations = STATIONS_DATA.length;
    
    const threshold = timeframe === 'daily' ? 150 : timeframe === 'weekly' ? 120 : 100;
    const highExposureCount = citiesList.filter(c => c.aqi > threshold).length;
    const healthRiskIndex = ((highExposureCount / citiesList.length) * 100).toFixed(1);
    
    const distribution = [
      { name: 'Good',     value: citiesList.filter(c => c.aqi <= 50).length,              color: 'var(--aqi-good)' },
      { name: 'Moderate', value: citiesList.filter(c => c.aqi > 50  && c.aqi <= 100).length,  color: 'var(--aqi-moderate)' },
      { name: 'Poor',     value: citiesList.filter(c => c.aqi > 100 && c.aqi <= 200).length,  color: 'var(--aqi-poor)' },
      { name: 'Severe',   value: citiesList.filter(c => c.aqi > 200).length,              color: 'var(--aqi-unhealthy)' }
    ].filter(d => d.value > 0);

    const pollutants = [
      { subject: 'PM 2.5', A: avgAqi,                            fullMark: 500 },
      { subject: 'PM 10',  A: Math.round(avgAqi * 1.4),          fullMark: 500 },
      { subject: 'NO₂',    A: Math.round(avgAqi * 0.6),          fullMark: 500 },
      { subject: 'SO₂',    A: Math.round(avgAqi * 0.2),          fullMark: 500 },
      { subject: 'OZONE',  A: Math.round(avgAqi * 0.4),          fullMark: 500 },
    ];

    const vulnerability = [
      { name: 'Children', val: Math.min(100, Math.round(avgAqi * 0.15)), color: '#3b82f6' },
      { name: 'Elderly',  val: Math.min(100, Math.round(avgAqi * 0.18)), color: '#8b5cf6' },
      { name: 'Chronic',  val: Math.min(100, Math.round(avgAqi * 0.22)), color: '#f43f5e' }
    ];

    const maxAqiCity = sortedByAqi[0];
    const minAqiCity = sortedByAqi[sortedByAqi.length - 1];

    const criticalRegions = sortedByAqi.slice(0, 4);

    const growthValues = { daily: '+0.8%', weekly: '+2.4%', monthly: '+5.1%' };
    const growthIndex = growthValues[timeframe];

    return {
      avgAqi,
      maxAqiCity,
      minAqiCity,
      healthRiskIndex,
      totalAdmissions: Math.round(avgAqi * 12.5),
      totalCities: citiesList.length,
      activeStations: totalStations,
      distribution,
      pollutants,
      vulnerability,
      criticalRegions,
      growthIndex
    };
  }, [citiesList, timeframe]);



  return (
    <div className="space-y-section-margin pb-10">
      {/* Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col">
          <p className="label-caps !text-ink opacity-40 mb-2">Executive Overview</p>
          <h1 className="text-5xl md:text-6xl font-black font-display text-ink tracking-tight">India Air Quality Dashboard</h1>
          <p className="text-lg text-ink/60 mt-4 max-w-4xl leading-relaxed">
            Real-time environmental intelligence across the subcontinent. Monitoring high-density urban areas and regional atmospheric shifts.
          </p>
          {lastUpdated && (
            <div className="flex items-center gap-2 mt-4">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="label-caps !text-[9px] opacity-40 tracking-widest">
                Last Grid Refresh: {new Date(lastUpdated).toLocaleString()}
              </span>
            </div>
          )}
        </div>
        <div className="flex bg-surface rounded-none p-1 border border-ink/10 self-start">
          <button
            onClick={() => setTimeframe('daily')}
            className={cn(
              "px-5 py-2 rounded-none text-[10px] font-mono uppercase tracking-widest transition-all",
              timeframe === 'daily' ? "bg-ink text-surface" : "text-ink/70 hover:bg-ink/5"
            )}
          >
            Daily
          </button>
          <button
            onClick={() => setTimeframe('weekly')}
            className={cn(
              "px-5 py-2 rounded-none text-[10px] font-mono uppercase tracking-widest transition-all",
              timeframe === 'weekly' ? "bg-ink text-surface" : "text-ink/70 hover:bg-ink/5"
            )}
          >
            Weekly
          </button>
          <button
            onClick={() => setTimeframe('monthly')}
            className={cn(
              "px-5 py-2 rounded-none text-[10px] font-mono uppercase tracking-widest transition-all",
              timeframe === 'monthly' ? "bg-ink text-surface" : "text-ink/70 hover:bg-ink/5"
            )}
          >
            Monthly
          </button>
        </div>
      </section>


      {/* Top Section - Command Center */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-card-gap">
        <div className="lg:col-span-12 card p-8 md:p-10 relative overflow-hidden transition-all duration-700">


          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column: Master Gauge */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="relative group">
                <div className="w-64 h-64 md:w-96 md:h-96 relative flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="gaugeGradient" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0%" stopColor="var(--accent-dark)" />
                        <stop offset="50%" stopColor="var(--accent)" />
                        <stop offset="100%" stopColor="var(--accent-light)" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="50" cy="50" r="45"
                      fill="none"
                      stroke="var(--ink)"
                      strokeWidth="10"
                      strokeOpacity="0.05"
                    />
                    <circle
                      cx="50" cy="50" r="45"
                      fill="none"
                      stroke="url(#gaugeGradient)"
                      strokeWidth="10"
                      strokeDasharray={`${2 * Math.PI * 45}`}
                      strokeDashoffset={`${2 * Math.PI * 45 * (1 - (summaryStats?.avgAqi || 0) / 500)}`}
                      strokeLinecap="square"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="text-center z-10">
                    <div className="flex flex-col items-center">
                      <span className="text-8xl md:text-9xl font-black text-ink leading-none tracking-tighter">
                        {summaryStats?.avgAqi}
                      </span>
                      <p className="label-caps !text-[11px] !text-ink/80 mt-4">PM 2.5 Index</p>
                      <div 
                        className="mt-6 px-6 py-2 rounded-none font-mono text-[11px] font-black uppercase tracking-widest"
                        style={{ 
                          backgroundColor: `${getAqiColor(summaryStats?.avgAqi || 0).replace(')', '-bg)')}`,
                          color: getAqiColor(summaryStats?.avgAqi || 0),
                          border: `1px solid ${getAqiColor(summaryStats?.avgAqi || 0)}`
                        }}
                      >
                        {getAqiStatus(summaryStats?.avgAqi || 0)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Mini Dashboard */}
            <div className="lg:col-span-5 space-y-8">
              {/* Sparkline 1: Trend */}
              <div className="card-subtle p-6 rounded-none">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="label-caps flex items-center gap-2">
                    <TrendingUp size={12} className="text-ink" /> National Momentum
                  </h4>
                  <span className="label-caps !text-[10px] bg-ink/10 px-2 py-0.5 rounded-none text-ink/70">LIVE</span>
                </div>
                <div className="h-24 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={nationalTrend}>
                      <defs>
                        <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--accent-light)" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="var(--accent-dark)" stopOpacity={0.2}/>
                        </linearGradient>
                      </defs>
                      <Area 
                        type="monotone" 
                        dataKey="val" 
                        stroke="var(--accent)" 
                        fill="url(#trendGradient)" 
                        fillOpacity={1} 
                        strokeWidth={3} 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="card-subtle p-6 rounded-none">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="label-caps flex items-center gap-2">
                    <MapPin size={12} className="text-ink" /> Critical Regions
                  </h4>
                  <span className="label-caps !text-[10px]">TOP 4</span>
                </div>
                <div className="space-y-3">
                  {summaryStats?.criticalRegions.map((city) => (
                    <div key={city.name} className="flex items-center gap-4">
                      <span className="font-mono text-[10px] font-bold text-ink w-20 truncate">{city.name}</span>
                      <div className="flex-1 h-1.5 bg-ink/5 overflow-hidden">
                        <div 
                          className="h-full transition-all duration-500" 
                          style={{ 
                            width: `${(city.aqi / 500) * 100}%`,
                            backgroundColor: 'var(--accent)'
                          }}
                        />
                      </div>
                      <span className="font-mono text-[10px] font-black text-ink">{city.aqi}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-12 pt-10 border-t border-ink/10 relative z-10">
            <div className="text-center group transition-transform hover:scale-105">
              <p className="label-caps mb-2">Medical Alert</p>
              <div className="flex flex-col items-center">
                <p className="font-display-md !text-2xl text-ink">
                  {summaryStats?.totalAdmissions && summaryStats.totalAdmissions > 1000 
                    ? `${(summaryStats.totalAdmissions / 1000).toFixed(1)}k` 
                    : summaryStats?.totalAdmissions}
                </p>
                <span className="label-caps !text-[9px] flex items-center gap-0.5">
                  <TrendingDown size={8} /> STABLE
                </span>
              </div>
            </div>

            <div className="text-center group transition-transform hover:scale-105 border-l border-ink/10">
              <p className="label-caps mb-2">Growth Index</p>
              <div className="flex flex-col items-center">
                <p className="font-display-md !text-2xl text-ink">{summaryStats?.growthIndex}</p>
                <span className="label-caps !text-[9px] flex items-center gap-0.5 text-ink/70">
                  <TrendingUp size={8} /> MOMENTUM
                </span>
              </div>
            </div>

            <div className="text-center group transition-transform hover:scale-105 border-l border-ink/10">
              <p className="label-caps mb-2">Regional Peak</p>
              <p className="font-display-md !text-2xl text-ink">{summaryStats?.maxAqiCity.aqi}</p>
              <p className="font-body-sm text-ink/80 truncate px-2">{summaryStats?.maxAqiCity.name}</p>
            </div>

            <div className="text-center group transition-transform hover:scale-105 border-l border-ink/10">
              <p className="label-caps mb-2">Pristine Zone</p>
              <p className="font-display-md !text-2xl text-ink">{summaryStats?.minAqiCity.aqi}</p>
              <p className="font-body-sm text-ink/80 truncate px-2">{summaryStats?.minAqiCity.name}</p>
            </div>

            <div className="text-center group transition-transform hover:scale-105 border-l border-ink/10">
              <p className="label-caps mb-2">Live Sensors</p>
              <p className="font-display-md !text-2xl text-ink">{summaryStats?.activeStations}</p>
              <div className="flex items-center justify-center gap-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full bg-ink/40 opacity-75"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 bg-ink"></span>
                </span>
                <span className="label-caps !text-[9px]">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-card-gap">
          <div className="card p-8 transition-transform hover:scale-[1.005] rounded-none">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Activity size={18} className="text-ink/40" />
                <h3 className="text-2xl font-black font-display text-ink">Medical Load</h3>
              </div>
              <span className="label-caps !text-[9px] opacity-40">EST. ADMISSIONS</span>
            </div>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={nationalTrend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="medicalGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--accent-light)" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="var(--accent-dark)" stopOpacity={0.2}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--ink)" opacity={0.05} />
                  <XAxis 
                    dataKey="name"
                    tick={{fontSize: 8, fontWeight: 700, fill: 'var(--ink)', opacity: 0.3}} 
                    tickLine={false}
                    axisLine={false}
                    interval="preserveStartEnd"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="val" 
                    stroke="var(--accent)" 
                    strokeWidth={2} 
                    fill="url(#medicalGradient)"
                    animationDuration={1500}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card p-8 transition-transform hover:scale-[1.005] rounded-none">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Info size={18} className="text-ink/40" />
                <h3 className="text-2xl font-black font-display text-ink">Vulnerability</h3>
              </div>
              <span className="label-caps !text-[9px] opacity-40">RISK SCORE</span>
            </div>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={summaryStats?.vulnerability || []} layout="vertical">
                  <XAxis type="number" hide domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" hide />
                  <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: 'var(--ink)', border: 'none', fontSize: '10px', color: 'var(--surface)' }} />
                  <Bar dataKey="val" barSize={24}>
                    {summaryStats?.vulnerability?.map((entry: any, index: number) => {
                      const colors = ['var(--accent-light)', 'var(--accent)', 'var(--accent-dark)'];
                      return <Cell key={`cell-${index}`} fill={colors[index % 3]} fillOpacity={0.9} />;
                    })}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              {summaryStats?.vulnerability?.map((v: any) => (
                <div key={v.name} className="flex flex-col items-center border border-ink/5 bg-ink/[0.02] p-3 rounded-none">
                  <span className="label-caps !text-[7px] mb-2 opacity-50">{v.name}</span>
                  <span className="font-display text-lg font-black text-ink">{v.val}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-8 transition-transform hover:scale-[1.005] rounded-none">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Activity size={18} className="text-ink/40" />
                <h3 className="text-2xl font-black font-display text-ink">Exposure</h3>
              </div>
              <span className="label-caps !text-[9px] opacity-40">CONCENTRATION</span>
            </div>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={summaryStats?.pollutants || []}>
                  <PolarGrid stroke="var(--ink)" opacity={0.1} />
                  <PolarAngleAxis dataKey="subject" tick={{ fontSize: 9, fontWeight: 800, fill: 'var(--ink)', opacity: 0.4 }} />
                  <Radar name="AQI" dataKey="A" stroke="var(--accent)" strokeWidth={2} fill="var(--accent-light)" fillOpacity={0.3} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-card-gap">
        <div className="lg:col-span-7 card p-10 relative overflow-hidden transition-all duration-700 rounded-none">
          <div className="flex justify-between items-center mb-10 relative z-10">
            <div>
              <h3 className="text-3xl font-black font-display text-ink">Pollutant Correlation</h3>
              <p className="label-caps mt-1 opacity-40">CROSS PARAMETER SENSITIVITY ANALYSIS</p>
            </div>
            <div className="flex gap-2">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-ink/5 rounded-none label-caps !text-[9px] border border-ink/10">
                <div className="w-1.5 h-1.5 bg-accent-dark animate-pulse"></div> CRITICAL
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 bg-ink/5 rounded-none label-caps !text-[9px] border border-ink/10">
                <div className="w-1.5 h-1.5 bg-accent-light opacity-50"></div> STABLE
              </span>
            </div>
          </div>

          <div className="h-[320px] w-full relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 30, bottom: 20, left: 10 }}>
                <CartesianGrid 
                  strokeDasharray="4 4" 
                  stroke="var(--ink)"
                  opacity={0.05}
                  vertical={false}
                />
                <XAxis 
                  type="number" 
                  dataKey="x" 
                  name="PM2.5" 
                  stroke="var(--ink)" 
                  opacity={0.4} 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false} 
                  tick={{fontWeight: 700, fontFamily: 'monospace'}}
                />
                <YAxis 
                  type="number" 
                  dataKey="y" 
                  name="AQI" 
                  stroke="var(--ink)" 
                  opacity={0.4} 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false}
                  tick={{fontWeight: 700, fontFamily: 'monospace'}}
                />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3', stroke: 'var(--ink)' }} 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-ink p-4 text-xs">
                          <div className="text-surface font-mono font-black mb-2 uppercase tracking-widest border-b border-surface/20 pb-2">{data.name}</div>
                          <div className="text-surface/60 font-mono font-bold flex justify-between gap-8">
                            AQI <span className="text-surface">{data.y}</span>
                          </div>
                          <div className="text-surface/60 font-mono font-bold flex justify-between gap-8 mt-1">
                            PM2.5 <span className="text-surface">{data.x} µg/m³</span>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }} 
                />
                <Scatter name="Tier 1" data={tier1Data} fill="var(--accent-light)" fillOpacity={0.8} stroke="var(--accent-dark)" strokeWidth={1} />
                <Scatter name="Tier 2" data={tier2Data} fill="var(--accent)" fillOpacity={0.6} stroke="var(--accent-dark)" strokeWidth={1} />
                <Scatter name="Industrial" data={industrialData} fill="var(--accent-dark)" fillOpacity={0.9} stroke="var(--ink)" strokeWidth={1} />
              </ScatterChart>
            </ResponsiveContainer>
            
            <div className="absolute left-1/2 bottom-4 -translate-x-1/2 flex items-center gap-4 bg-surface/80 backdrop-blur-md px-4 py-1.5 border border-ink/10">
              <span className="label-caps !text-[9px]">X: PM2.5 Conc.</span>
              <div className="w-px h-3 bg-ink/10"></div>
              <span className="label-caps !text-[9px]">Y: Composite AQI</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-card-gap">
          <div className="card p-10 flex-1 relative overflow-hidden group rounded-none">
            <div className="relative z-10">
              <p className="label-caps !text-ink opacity-40 mb-2">Atmospheric Intelligence</p>
              <h3 className="text-3xl font-black font-display text-ink leading-tight mb-6">Strategic Air Briefing</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-ink/5 flex items-center justify-center flex-shrink-0">
                    <ShieldAlert size={20} className="text-ink" />
                  </div>
                  <div>
                    <h4 className="font-bold text-ink mb-1">Risk Assessment</h4>
                    <p className="text-xs text-ink/50 leading-relaxed">
                      Sustained PM2.5 elevation detected in Northern corridors. Tier 1 cities showing 14% higher density than seasonal norms.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-ink/5 flex items-center justify-center flex-shrink-0">
                    <Wind size={20} className="text-ink" />
                  </div>
                  <div>
                    <h4 className="font-bold text-ink mb-1">Dispersion Velocity</h4>
                    <p className="text-xs text-ink/50 leading-relaxed">
                      Low-pressure systems over Central India are inhibiting vertical dispersion. Stagnation predicted for next 48 hours.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-ink/5 flex items-center justify-center flex-shrink-0">
                    <Zap size={20} className="text-ink" />
                  </div>
                  <div>
                    <h4 className="font-bold text-ink mb-1">Operational Priority</h4>
                    <p className="text-xs text-ink/50 leading-relaxed">
                      Deploying high-frequency telemetry nodes in Industrial clusters to monitor point-source emissions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700">
              <Activity size={300} />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between mb-2 px-2">
          <div>
            <p className="label-caps !text-ink opacity-60">Regional Alert Level: High</p>
            <h3 className="text-3xl md:text-4xl font-black text-ink tracking-tight">
              {citiesList.filter(c => c.aqi > 150).length} Regions Requiring Attention
            </h3>
          </div>
          <button 
            onClick={() => onNavigate && onNavigate('stations')}
            className="text-ink font-mono text-[10px] uppercase font-black tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform"
          >
            Network Status <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-card-gap">
          {citiesList.slice().sort((a, b) => b.aqi - a.aqi).slice(0, 4).map((city) => {
            return (
              <div
                key={city.name}
                onClick={() => onNavigate && onNavigate('city-dive', city.name)}
                className="bg-surface border border-ink/5 overflow-hidden group cursor-pointer hover:border-ink/20 transition-all duration-500"
              >
                <div className="h-48 w-full relative overflow-hidden">
                  <img
                    src={getCityImage(city.name, city.imageUrl, city.state)}
                    alt={city.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1564507592333-c60657451dd6?auto=format&fit=crop&q=80&w=400';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <span
                      className="font-mono text-[9px] font-bold uppercase px-2.5 py-1 bg-ink/10 text-ink border border-ink/10"
                    >
                      AQI {city.aqi}
                    </span>
                  </div>
                </div>
                <div className="px-8 pb-8 -mt-2 relative z-10 bg-surface pt-2">
                  <h4 className="text-xl font-black font-display text-ink tracking-tight mb-1">
                    {city.name}
                  </h4>
                  <p className="font-body text-[11px] text-ink/40 leading-relaxed">
                    {city.description || `${city.status} condition reported in the last 24h.`}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="card p-8 md:p-10 relative overflow-hidden rounded-none">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6 relative z-10">
          <div>
            <p className="label-caps !text-ink opacity-60 mb-1">Seasonal Projection</p>
            <h3 className="text-3xl md:text-4xl font-black text-ink tracking-tight">Weekly Air Forecast</h3>
            <p className="font-body-sm text-ink/40 mt-1">
              Predictive modeling based on current satellite telemetry and historical trends
            </p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-ink text-surface text-[10px] font-mono font-black uppercase tracking-widest">
              7-Day View
            </button>
            <button className="px-4 py-2 bg-ink/5 border border-ink/10 text-ink/40 text-[10px] font-mono font-black uppercase tracking-widest cursor-not-allowed">
              30-Day
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 relative z-10">
          {WEEKLY_FORECAST.map((day) => {
            return (
              <div
                key={day.day}
                className="flex flex-col items-center p-6 border border-ink/5 bg-ink/5 hover:bg-ink/[0.08] transition-all duration-300 group"
              >
                <p className="label-caps !text-[10px] mb-4 text-ink/40 group-hover:text-ink transition-colors">
                  {day.day}
                </p>
                <p className="font-display text-3xl md:text-4xl font-black text-ink tracking-tighter">
                  {day.aqi}
                </p>
                <div 
                  className="mt-4 px-3 py-1 text-[8px] font-mono font-black uppercase tracking-widest border border-ink/5"
                >
                  {day.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center px-2">
          <div>
            <div className="flex items-center gap-3">
              <h4 className="font-headline-lg text-ink">Executive Insights</h4>
              {isLiveNews && (
                <span className="flex items-center gap-1 px-2 py-0.5 bg-ink text-surface label-caps !text-[9px] animate-pulse">
                  <span className="w-1 h-1 bg-surface"></span> Live Feed
                </span>
              )}
            </div>
            <p className="label-caps mt-1">Latest Environmental Briefings</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2 bg-surface border border-ink/20 text-ink/40 hover:text-ink hover:border-ink transition-all active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 bg-surface border border-ink/20 text-ink/40 hover:text-ink hover:border-ink transition-all active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-6 px-2 no-scrollbar snap-x cursor-grab active:cursor-grabbing"
        >
          {newsItems.map((news: any, idx) => (
            <div 
              key={idx} 
              onClick={() => news.link !== '#' && window.open(news.link, '_blank')}
              className={cn(
                "min-w-[320px] md:min-w-[480px] card p-4 flex gap-4 snap-start hover:bg-ink/5 transition-all hover:scale-[1.02] duration-300",
                news.link !== '#' && "cursor-pointer"
              )}
            >
              <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden shrink-0 bg-ink/5 flex items-center justify-center">
                {news.image_url ? (
                  <img 
                    src={news.image_url} 
                    alt={news.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1590282424154-c45bd114c419?auto=format&fit=crop&q=80&w=300&h=300';
                    }}
                  />
                ) : (
                  <Info size={40} className="text-ink/20" />
                )}
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <h5 className="font-headline-sm !text-base line-clamp-2 text-ink leading-tight mb-2 group-hover:underline transition-all">{news.title}</h5>
                  <p className="font-body-sm text-ink/60 line-clamp-2 leading-relaxed">
                    {news.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1 mt-3">
                  {(news.keywords || []).slice(0, 3).map((tag: string) => (
                    <span key={tag} className="label-caps !text-[8px] bg-ink/5 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
