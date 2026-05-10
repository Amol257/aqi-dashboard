import React from 'react';
import { 
  ResponsiveContainer, 
  Cell, PieChart, Pie
} from 'recharts';
import { FileDown, Filter, Thermometer, Wind, Droplets, MapPin, TrendingUp, TrendingDown, ShieldAlert, X, RefreshCw, Clock, Activity, Search as SearchIcon, Sun, Smile, Shield, Home, Users, AlertTriangle, Phone } from 'lucide-react';
import { 
  MAJOR_CITIES_COMPARISON,
  CITY_DIVE_PIE_DATA,
  TOTAL_CITIES,
  CityData,
  STATIONS_DATA
} from '../../constants';
import { cn, getCityImage, exportToCSV } from '../../lib/utils';



export default function CityDive({ 
  onNavigate,
  initialCity = 'Delhi', 
  cities = MAJOR_CITIES_COMPARISON,
  isDarkMode: _isDarkMode
}: { 
  onNavigate?: (view: any, context?: any) => void,
  initialCity?: string | any,
  cities?: any[],
  isDarkMode?: boolean
}) {
  const allCities = cities;
  
  const [selectedCity, setSelectedCity] = React.useState<CityData>(() => {
    if (initialCity) {
      if (typeof initialCity === 'object' && initialCity.name) {
        return initialCity;
      }
      const found = allCities.find(c => c.name === initialCity);
      if (found) return found;
    }
    return MAJOR_CITIES_COMPARISON[0];
  });
  
  React.useEffect(() => {
    if (initialCity) {
      if (typeof initialCity === 'object') {
        setSelectedCity(initialCity);
      } else {
        const found = allCities.find(c => c.name === initialCity);
        if (found) setSelectedCity(found);
      }
    }
  }, [initialCity, allCities]);

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [dropdownSearch, setDropdownSearch] = React.useState('');
  
  const filteredDropdownCities = [...allCities]
    .filter(c => 
      c.name.toLowerCase().includes(dropdownSearch.toLowerCase()) ||
      c.state.toLowerCase().includes(dropdownSearch.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));
  
  const [healthData, setHealthData] = React.useState<{
    pm25: number, 
    pm10: number, 
    no2: number, 
    so2: number, 
    ozone: number, 
    station: string,
    usAqi: number, // Derived from PM2.5 for severity logic
    respiratoryAdmissions?: number
  } | null>(null);
  const [healthLoading, setHealthLoading] = React.useState(false);
  const [healthError, setHealthError] = React.useState(false);
  const [lastUpdated, setLastUpdated] = React.useState<string>('');
  const [noDataError, setNoDataError] = React.useState(false);

  const fetchAirQuality = React.useCallback(async (city: CityData) => {
    setHealthLoading(true);
    setHealthError(false);
    setNoDataError(false);
    try {
      // 1. Try Local Data First (Requested Switch)
      const baseUrl = ((import.meta as any).env?.BASE_URL || '/').replace(/\/$/, '');
      const localResponse = await fetch(`${baseUrl}/data/local_aqi.json`);
      const rootData = await localResponse.json();
      const localDataMap = rootData.city_aggregation || {};
      
      // Try exact match or underscore match
      const cityName = city.name.trim();
      const apiCityName = cityName.replace(/\s+/g, '_');
      const cityInfo = localDataMap[cityName] || localDataMap[apiCityName];

      if (cityInfo && cityInfo.pollutants && Object.keys(cityInfo.pollutants).length > 0) {
        const p = cityInfo.pollutants;
        const pm25 = p['PM2.5']?.value ?? cityInfo.avgPm25 ?? 0;
        const pm10 = p['PM10']?.value ?? 0;
        const no2 = p['NO2']?.value ?? 0;
        const so2 = p['SO2']?.value ?? 0;
        const ozone = p['OZONE']?.value ?? 0;
        const station = p['PM2.5']?.station || p['PM10']?.station || cityInfo.name;
        const lastUpdate = p['PM2.5']?.lastUpdate || p['PM10']?.lastUpdate || 'Local Dataset';

        setHealthData({
          pm25,
          pm10,
          no2,
          so2,
          ozone,
          station,
          usAqi: Math.round(pm25 * 1.2),
          respiratoryAdmissions: cityInfo.respiratoryAdmissions
        });
        setLastUpdated(lastUpdate);
        setHealthLoading(false);
        return; // Success with local data
      }

      // 2. Fallback to API if local data not found (Keep for future)
      const apiCity = city.name.trim().replace(/\s+/g, '_');
      const apiKey = '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b';
      const url = `https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=${apiKey}&format=json&filters[city]=${apiCity}&limit=100`;

      const response = await fetch(url);
      const data = await response.json();
      
      if (!data.records || data.records.length === 0) {
        setNoDataError(true);
        return;
      }

      const records = data.records;
      const pm25Record = records.find((r: any) => r.pollutant_id === 'PM2.5');
      const pm10Record = records.find((r: any) => r.pollutant_id === 'PM10');
      const no2Record = records.find((r: any) => r.pollutant_id === 'NO2');
      const so2Record = records.find((r: any) => r.pollutant_id === 'SO2');
      const ozoneRecord = records.find((r: any) => r.pollutant_id === 'OZONE');

      const pm25 = parseFloat(pm25Record?.avg_value ?? '0');
      const pm10 = parseFloat(pm10Record?.avg_value ?? '0');
      const no2 = parseFloat(no2Record?.avg_value ?? '0');
      const so2 = parseFloat(so2Record?.avg_value ?? '0');
      const ozone = parseFloat(ozoneRecord?.avg_value ?? '0');
      
      const lastUpdate = pm25Record?.last_update || pm10Record?.last_update || '';
      const station = pm25Record?.station || pm10Record?.station || city.name;

      setHealthData({
        pm25,
        pm10,
        no2,
        so2,
        ozone,
        station,
        usAqi: Math.round(pm25 * 1.2)
      });
      setLastUpdated(lastUpdate);
    } catch (err) {
      console.error('Data Fetch Error:', err);
      setHealthError(true);
    } finally {
      setHealthLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchAirQuality(selectedCity);
    const interval = setInterval(() => fetchAirQuality(selectedCity), 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, [selectedCity, fetchAirQuality]);
  
  const pieData = CITY_DIVE_PIE_DATA;

  const getHealthSeverity = (pm25: number) => {
    if (pm25 <= 12) return { label: 'Good', color: 'text-aqi-good', bg: 'bg-aqi-good/10', border: 'border-aqi-good/20', accent: 'var(--aqi-good)' };
    if (pm25 <= 35) return { label: 'Moderate', color: 'text-aqi-moderate', bg: 'bg-aqi-moderate/10', border: 'border-aqi-moderate/20', accent: 'var(--aqi-moderate)' };
    if (pm25 <= 55) return { label: 'Poor', color: 'text-aqi-poor', bg: 'bg-aqi-poor/10', border: 'border-aqi-poor/20', accent: 'var(--aqi-poor)' };
    if (pm25 <= 150) return { label: 'Unhealthy', color: 'text-aqi-unhealthy', bg: 'bg-aqi-unhealthy/10', border: 'border-aqi-unhealthy/20', accent: 'var(--aqi-unhealthy)' };
    return { label: 'Hazardous', color: 'text-aqi-hazardous', bg: 'bg-aqi-hazardous/10', border: 'border-aqi-hazardous/20', accent: 'var(--aqi-hazardous)' };
  };

  const getSeverityActions = (pm25: number) => {
    if (pm25 <= 12) {
      return [
        { icon: Sun, label: "Air is clean today", subtitle: "SAFE FOR ALL OUTDOOR ACTIVITY.", color: "text-ink/60" },
        { icon: Smile, label: "Great day to go outside", subtitle: "UV PROTECTION STILL RECOMMENDED.", color: "text-ink/60" }
      ];
    }
    if (pm25 <= 35) {
      return [
        { icon: Shield, label: "Wear N95 Mask", subtitle: "RECOMMENDED FOR SENSITIVE INDIVIDUALS.", color: "text-ink/60" },
        { icon: Wind, label: "Ventilate carefully", subtitle: "OPEN WINDOWS DURING COOLER HOURS ONLY.", color: "text-ink/60" }
      ];
    }
    if (pm25 <= 55) {
      return [
        { icon: Shield, label: "Wear N95 Mask", subtitle: "MANDATORY FOR OUTDOOR ACTIVITIES.", color: "text-ink/60" },
        { icon: Droplets, label: "Indoor Protection", subtitle: "KEEP AIR PURIFIERS ON HIGH MODE.", color: "text-ink/60" }
      ];
    }
    if (pm25 <= 150) {
      return [
        { icon: ShieldAlert, label: "Wear N95 Mask", subtitle: "MANDATORY FOR ALL OUTDOOR ACTIVITIES.", color: "text-ink/60" },
        { icon: Home, label: "Stay Indoors", subtitle: "LIMIT ALL OUTDOOR EXPOSURE.", color: "text-ink/60" },
        { icon: Users, label: "Check on elderly & children", subtitle: "HIGH-RISK GROUPS MUST STAY INDOORS.", color: "text-ink/60" }
      ];
    }
    return [
      { icon: AlertTriangle, label: "Stay Indoors — Seal Windows", subtitle: "AVOID ALL OUTDOOR ACTIVITY.", color: "text-ink/60" },
      { icon: Wind, label: "Air Purifier Mandatory", subtitle: "REPLACE FILTER IF USED HEAVILY.", color: "text-ink/60" },
      { icon: Phone, label: "Call 112 if needed", subtitle: "SEEK HELP FOR BREATHING DIFFICULTY.", color: "text-ink/60" }
    ];
  };

  const severity = healthData ? getHealthSeverity(healthData.pm25) : null;
  const pctRise = healthData ? Math.max(0, Math.min(Math.round(((healthData.pm25 - 15) / 15) * 100), 200)) : 0;

  return (
    <div className="space-y-section-margin pb-10">
      {/* Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="font-display-lg text-ink">Region Analysis</h1>
          <p className="font-body-lg text-ink/60 mt-1 max-w-2xl">
            In-depth air quality analytics for {allCities.length} monitored regions across India.
          </p>
        </div>
        <div className="flex gap-3 self-start">
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="btn-secondary"
            >
              <Filter size={16} /> {selectedCity.name}
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 bg-surface border border-ink/10 rounded-lg shadow-none z-30 overflow-hidden py-2">
                <div className="px-4 py-2 border-b border-ink/5 mb-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="label-caps !text-ink/40">Select Region</span>
                    <button onClick={() => setIsDropdownOpen(false)} className="text-ink/40 hover:text-ink transition-colors">
                      <X size={14} />
                    </button>
                  </div>
                  <div className="relative">
                    <SearchIcon size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-ink/40" />
                    <input 
                      type="text"
                      placeholder="Find a city..."
                      value={dropdownSearch}
                      onChange={(e) => setDropdownSearch(e.target.value)}
                      className="w-full pl-8 pr-3 py-1.5 bg-ink/5 border border-ink/10 rounded-md text-[11px] text-ink outline-none focus:border-ink/40 transition-colors font-mono"
                      autoFocus
                    />
                  </div>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {filteredDropdownCities.map(city => (
                    <button 
                      key={city.name}
                      onClick={() => {
                        setSelectedCity(city);
                        setIsDropdownOpen(false);
                        setDropdownSearch('');
                      }}
                      className={cn(
                        "w-full text-left px-4 py-2.5 text-xs font-bold hover:bg-ink/5 transition-colors flex items-center gap-3",
                        selectedCity.name === city.name ? "bg-ink/10 text-ink" : "text-ink/60"
                      )}
                    >
                      <img 
                        src={getCityImage(city.name, city.imageUrl, city.state)} 
                        alt="" 
                        className="w-8 h-8 rounded-none object-cover border border-ink/10" 
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1564507592333-c60657451dd6?auto=format&fit=crop&q=80&w=100';
                        }}
                      />
                      <div>
                        <div className="text-ink">{city.name}</div>
                        <div className="label-caps !text-[8px] opacity-40">{city.state}</div>
                      </div>
                      <div className={cn(
                        "ml-auto font-mono text-[9px] px-1.5 py-0.5 rounded-none font-black",
                        city.aqi > 300 ? "bg-aqi-hazardous text-white" : 
                        city.aqi > 200 ? "bg-aqi-unhealthy text-white" : 
                        city.aqi > 100 ? "bg-aqi-poor text-white" : 
                        city.aqi > 50 ? "bg-aqi-moderate text-ink" : "bg-aqi-good text-white"
                      )}>
                        {city.aqi}
                      </div>
                    </button>
                  ))}
                  {filteredDropdownCities.length === 0 && (
                    <div className="px-4 py-6 text-center label-caps opacity-40">
                      No matching regions found
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <button 
            onClick={() => exportToCSV([selectedCity], `aqi_report_${selectedCity.name.toLowerCase()}`)}
            className="btn-primary rounded-none"
          >
            <FileDown size={16} /> Export Data
          </button>
        </div>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-card-gap items-stretch">
        {/* Featured City Card */}
        <div className="lg:col-span-8 bg-ink/5 rounded-none h-full flex flex-col justify-end group cursor-pointer transition-all duration-500 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full">
            <img 
              src={getCityImage(selectedCity.name, selectedCity.imageUrl, selectedCity.state)} 
              alt={selectedCity.name} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1564507592333-c60657451dd6?auto=format&fit=crop&q=80&w=1200';
              }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent"></div>
          </div>
          
          <div className="relative z-10 p-10 flex flex-col md:flex-row items-end justify-between gap-6">
            <div>
              <span className="label-caps !bg-surface !text-ink px-3 py-1 mb-4 inline-block">
                {selectedCity.status}
              </span>
              <h2 className="font-display-lg !text-white !text-5xl">{selectedCity.name}, {selectedCity.state}</h2>
              <p className="font-body-lg !text-white/80 mt-3 max-w-xl">
                {selectedCity.description || `Current air quality in ${selectedCity.name} is ${selectedCity.status.toLowerCase()} with a concentration of ${selectedCity.pm25} µg/m³ of PM2.5.`}
              </p>
              <div className="flex items-center gap-6 text-white/90 mt-6 label-caps">
                <div className="flex items-center gap-1.5"><Thermometer size={14} /> 32°C</div>
                <div className="flex items-center gap-1.5"><Wind size={14} /> 12km/h W</div>
                <div className="flex items-center gap-1.5"><Droplets size={14} /> 64% Hum</div>
              </div>
            </div>
            
            <div className="bg-surface/10 backdrop-blur-md p-6 rounded-none border border-surface/20 text-center min-w-[160px]">
              <div className="text-white/60 label-caps">AQI Index</div>
              <div className="font-data-huge !text-white !text-6xl mt-1">{selectedCity.aqi}</div>
              <div className="text-white/40 label-caps mt-2">{selectedCity.trend === 'up' ? 'Rising' : 'Falling'}</div>
            </div>
          </div>
        </div>

        {/* National AQI Range Chart */}
        <div className="lg:col-span-4 border border-ink/10 rounded-none p-6 flex flex-col items-center h-full">
          <h3 className="font-headline-sm self-start mb-6 text-ink">National Breakdown</h3>
          
          <div className="relative w-full aspect-square max-w-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={0}
                  dataKey="value"
                >
                  {pieData.map((_entry, index) => {
                    const colors = ['var(--accent-light)', 'var(--accent)', 'var(--accent-dark)'];
                    return <Cell key={`cell-${index}`} fill={colors[index % 3]} strokeWidth={0} />;
                  })}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="font-display-md !text-3xl text-ink">{TOTAL_CITIES}</div>
              <div className="label-caps !text-[9px] opacity-40">Sensor Sites</div>
            </div>
          </div>

          <div className="w-full mt-6 space-y-3">
            {pieData.map((item, index) => {
              const colors = ['var(--accent-light)', 'var(--accent)', 'var(--accent-dark)'];
              return (
                <div key={item.name} className="flex items-center justify-between p-1.5 group">
                  <div className="flex items-center gap-3">
                    <div className="w-3.5 h-3.5" style={{ backgroundColor: colors[index % 3] }}></div>
                    <span className="font-mono text-xs font-bold text-ink/60 group-hover:text-ink transition-colors">{item.name}</span>
                  </div>
                  <span className="label-caps !text-[9px] opacity-40">{item.value} Regions</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top Polluted Bar Chart */}
        <div className="lg:col-span-8 border border-ink/10 rounded-none p-10 h-full flex flex-col">
          <div className="flex items-center justify-between mb-10">
            <h3 className="font-headline-sm text-ink">Priority Observations</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-ink"></div>
              <span className="label-caps !text-ink/80">Critical Density</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {allCities.slice().sort((a, b) => b.aqi - a.aqi).slice(0, 20).map((city) => (
              <div key={city.name} className="group cursor-pointer" onClick={() => setSelectedCity(city)}>
                <div className="flex justify-between items-end mb-2">
                  <span className="font-mono text-[11px] font-bold text-ink/90 group-hover:text-ink transition-colors">{city.name}</span>
                  <span className="font-mono text-[11px] font-black text-ink">{city.aqi}</span>
                </div>
                <div className="h-1 w-full bg-ink/5 rounded-none overflow-hidden flex">
                  <div 
                    className="h-full transition-all duration-700"
                    style={{ 
                      width: `${Math.min(100, (city.aqi / 500) * 100)}%`,
                      background: 'linear-gradient(90deg, var(--accent-dark), var(--accent-light))',
                      opacity: 0.8
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-auto pt-8 border-t border-ink/5 flex justify-center">
            <button 
              onClick={() => onNavigate && onNavigate('stations')}
              className="text-ink label-caps flex items-center gap-2 hover:opacity-60 transition-opacity group"
            >
              Examine Sensor Network <TrendingUp size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Health Advisory */}
        <div className={cn(
          "lg:col-span-4 border border-ink/10 p-6 overflow-hidden relative h-full flex flex-col",
          (healthError || noDataError) && "border-ink"
        )}>
          {healthLoading && !healthData ? (
            <div className="flex flex-col items-center justify-center py-20 space-y-4">
              <RefreshCw className="animate-spin text-ink/70" size={32} />
              <p className="label-caps opacity-70">Synchronizing Data...</p>
            </div>
          ) : healthError ? (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
              <ShieldAlert className="text-ink/60" size={32} />
              <p className="font-body-md text-ink">Telemetric link failed. Verify connectivity.</p>
              <button 
                onClick={() => fetchAirQuality(selectedCity)}
                className="btn-primary rounded-none !text-[10px]"
              >
                Retry Link
              </button>
            </div>
          ) : noDataError ? (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
              <ShieldAlert className="text-ink/60" size={32} />
              <p className="font-body-md text-ink leading-tight">No telemetric data available for {selectedCity.name}.</p>
              <button 
                onClick={() => fetchAirQuality(selectedCity)}
                className="btn-secondary rounded-none !text-[10px]"
              >
                Check Alternate
              </button>
            </div>
          ) : healthData && severity ? (
            <>
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-ink text-surface">
                    <ShieldAlert size={18} />
                  </div>
                  <h4 className="font-headline-sm text-ink">Health Status</h4>
                </div>
                <div className="label-caps !text-[9px] px-2 py-1 bg-ink/10">
                  {severity.label}
                </div>
              </div>
              
              <div className="mb-6 relative z-10">
                <p className="font-body-md text-ink leading-snug">
                  {severity.label === 'Good' && `Air quality in ${selectedCity.name} is pristine today. Sensor readings confirm safe limits.`}
                  {severity.label === 'Moderate' && `Moderate PM2.5 levels detected in ${selectedCity.name}. Precautionary measures recommended.`}
                  {severity.label === 'Unhealthy for Sensitive Groups' && `Severe PM2.5 concentrations in ${selectedCity.name}. Vulnerability risk increased by ${pctRise}%.`}
                  {severity.label === 'Unhealthy' && `Critical air quality in ${selectedCity.name}. PM2.5 is ${Math.round(healthData.pm25 / 15)}x above baseline limits.`}
                  {severity.label === 'Hazardous' && `Extreme atmospheric toxicity in ${selectedCity.name}. All exposure represents severe health risk.`}
                </p>
                {healthData.respiratoryAdmissions && healthData.respiratoryAdmissions > 0 && (
                  <div className="mt-4 p-4 border border-ink/5 flex items-center gap-4">
                    <Activity size={18} className="text-ink" />
                    <div>
                      <p className="label-caps !text-[8px] opacity-40 leading-none mb-1">Local Health Load</p>
                      <p className="font-body-sm text-ink font-bold">
                        {healthData.respiratoryAdmissions.toLocaleString()} critical respiratory admissions recorded.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Stat Tiles */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {[
                  { label: 'PM2.5', value: healthData.pm25 },
                  { label: 'PM10', value: healthData.pm10 },
                  { label: 'NO2', value: healthData.no2 },
                  { label: 'SO2', value: healthData.so2 }
                ].map((stat) => (
                  <div key={stat.label} className="border border-ink/10 p-3 text-center">
                    <div className="label-caps !text-[8px] opacity-40 mb-1">{stat.label}</div>
                    <div className="font-mono text-base font-bold text-ink">{stat.value}</div>
                    <div className="label-caps !text-[7px] opacity-20">µg/m³</div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 relative z-10">
                {getSeverityActions(healthData.pm25).map((action, idx) => {
                  const Icon = action.icon;
                  return (
                    <div key={idx} className="flex gap-4 p-4 border border-ink/10 items-center hover:bg-ink/5 transition-colors">
                      <div className="text-ink opacity-60"><Icon size={20} /></div>
                      <div>
                        <p className="font-bold text-sm text-ink leading-tight">{action.label}</p>
                        <p className="label-caps !text-[9px] opacity-40 mt-1">{action.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-auto pt-6 border-t border-ink/5 flex flex-col gap-3 relative z-10">
                <div className="flex items-center gap-1.5 opacity-40">
                  <MapPin size={10} />
                  <span className="label-caps !text-[8px] truncate">{healthData.station}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5 opacity-40">
                    <Clock size={10} />
                    <span className="label-caps !text-[8px]">{lastUpdated}</span>
                  </div>
                  <button 
                    onClick={() => fetchAirQuality(selectedCity)}
                    className={cn(
                      "p-1.5 rounded hover:bg-ink/5 transition-all text-ink",
                      healthLoading && "animate-spin"
                    )}
                  >
                    <RefreshCw size={14} />
                  </button>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>

      {/* Regional Comparison Grid */}
      <div className="mt-16">
        <h3 className="font-headline-lg text-ink mb-10">Regional Intelligence</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-card-gap">
          {cities.slice().sort((a, b) => b.aqi - a.aqi).slice(0, 4).map((city) => (
            <div key={city.name} className="card p-8 hover:scale-[1.02] transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="label-caps opacity-40 mb-2">{city.name}</h4>
                  <div className="font-data-huge !text-4xl text-ink group-hover:scale-110 transition-transform origin-left">{city.aqi}</div>
                </div>
                <span className="label-caps !text-[10px] flex items-center px-2 py-1 rounded bg-ink !text-surface">
                  {city.trend === 'down' ? <TrendingDown size={14} className="mr-1.5" /> : city.trend === 'up' ? <TrendingUp size={14} className="mr-1.5" /> : <div className="w-1.5 h-1.5 rounded-full bg-surface mr-1.5 animate-pulse" />}
                  {city.trendValue || 'LIVE'}
                </span>
              </div>
              <p className="font-body-sm text-ink/40 leading-relaxed uppercase">
                {city.aqi <= 50 ? `${city.status} conditions. Outdoor activity favorable.` : 
                 city.aqi <= 100 ? `${city.status} quality. Minor pollution levels detected.` : 
                 city.aqi <= 200 ? `${city.status} risk. Sensitive groups should exercise caution.` : 
                 city.aqi <= 300 ? `${city.status} alert. Health impacts expected for general public.` :
                 `${city.status} hazard. Serious health effects likely across all demographics.`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
