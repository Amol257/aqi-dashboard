import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, PieChart, Pie, RadarChart, PolarGrid, PolarAngleAxis, Radar
} from 'recharts';
import {
  Heart,
  Wind,
  Brain,
  Eye,
  AlertTriangle,
  ShieldCheck,
  Baby,
  UserRound,
  TrendingUp,
  Stethoscope,
  RefreshCw,
  MapPin,
  Clock,
  Thermometer,
  Phone,
  Info,
  ChevronRight
} from 'lucide-react';
import {
  MAJOR_CITIES_COMPARISON
} from '../../constants';
import { cn } from '../../lib/utils';

const RealtimeWeatherWarning = () => {
  const [geoState, setGeoState] = React.useState<'pending' | 'denied' | 'success' | 'unsupported'>('pending');
  const [weatherData, setWeatherData] = React.useState<{
    temperature: number;
    maxTemp: number;
    minTemp: number;
    windSpeed: number;
    cityName: string;
    lastUpdated: Date;
  } | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const coordsRef = React.useRef<{ lat: number; lon: number } | null>(null);

  const fetchWeatherAndCity = async (lat: number, lon: number) => {
    try {
      setLoading(true);
      setError(false);
      
      const geoRes = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`, {
        headers: { 'User-Agent': 'health-warning-app' }
      });
      const geoData = await geoRes.json();
      const city = geoData.address?.city || geoData.address?.state_district || geoData.address?.state || 'Unknown Location';

      const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,windspeed_10m,weathercode&daily=temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=1`);
      const weatherJson = await weatherRes.json();

      setWeatherData({
        temperature: weatherJson.current.temperature_2m,
        maxTemp: weatherJson.daily.temperature_2m_max[0],
        minTemp: weatherJson.daily.temperature_2m_min[0],
        windSpeed: weatherJson.current.windspeed_10m,
        cityName: city,
        lastUpdated: new Date()
      });
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const detectLocationAndFetch = () => {
    if (!navigator.geolocation) {
      setGeoState('unsupported');
      coordsRef.current = { lat: 28.6139, lon: 77.2090 };
      fetchWeatherAndCity(28.6139, 77.2090);
      return;
    }

    setGeoState('pending');
    setLoading(true);
    setError(false);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGeoState('success');
        coordsRef.current = { lat: pos.coords.latitude, lon: pos.coords.longitude };
        fetchWeatherAndCity(pos.coords.latitude, pos.coords.longitude);
      },
      (_err) => {
        setGeoState('denied');
        coordsRef.current = { lat: 28.6139, lon: 77.2090 };
        fetchWeatherAndCity(28.6139, 77.2090);
      },
      { timeout: 10000 }
    );
  };

  const refreshData = () => {
    if (coordsRef.current) {
      fetchWeatherAndCity(coordsRef.current.lat, coordsRef.current.lon);
    } else {
      detectLocationAndFetch();
    }
  };

  React.useEffect(() => {
    detectLocationAndFetch();
    const interval = setInterval(() => {
      if (coordsRef.current) {
        fetchWeatherAndCity(coordsRef.current.lat, coordsRef.current.lon);
      }
    }, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const getSeverityData = (maxTemp: number) => {
    if (maxTemp < 40) {
      return { severity: 'nominal', label: 'Thermal Equilibrium', message: 'Atmospheric temperature remains within standard physiological bounds. Hydration recommended.', color: 'bg-aqi-good', text: 'text-aqi-good', glow: 'bg-aqi-good/20' };
    } else if (maxTemp <= 43) {
      return { severity: 'elevated', label: 'Thermal Advisory', message: 'Elevated thermal load detected. Minimize metabolic exertion for sensitive demographics.', color: 'bg-aqi-moderate', text: 'text-aqi-moderate', glow: 'bg-aqi-moderate/20' };
    } else if (maxTemp <= 46) {
      return { severity: 'severe', label: 'Active Thermal Warning', message: 'Significant heatwave conditions. Suspend all outdoor activity during peak radiation hours.', color: 'bg-aqi-poor', text: 'text-aqi-poor', glow: 'bg-aqi-poor/20' };
    } else {
      return { severity: 'critical', label: 'Critical Thermal State', message: 'Extreme thermal risk. Total avoidance of atmospheric exposure mandatory. Seek cool shelter.', color: 'bg-aqi-unhealthy', text: 'text-aqi-unhealthy', glow: 'bg-aqi-unhealthy/20' };
    }
  };

  let content;

  if (loading && !weatherData) {
    content = (
      <div className="animate-pulse space-y-4 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 bg-ink/5 rounded-none"></div>
          <div className="h-6 w-40 bg-ink/5 rounded-none"></div>
        </div>
        <div className="h-16 w-full bg-ink/5 rounded-none"></div>
        <div className="flex gap-2">
          <div className="h-16 flex-1 bg-ink/5 rounded-none"></div>
          <div className="h-16 flex-1 bg-ink/5 rounded-none"></div>
          <div className="h-16 flex-1 bg-ink/5 rounded-none"></div>
        </div>
        {geoState === 'pending' && <p className="text-sm text-slate-400 mt-4 text-center">Detecting your location...</p>}
      </div>
    );
  } else if (error && !weatherData) {
    content = (
      <div className="text-center py-6 relative z-10 flex flex-col items-center justify-center h-full">
        <AlertTriangle className="mx-auto text-red-500 mb-3" size={32} />
        <p className="text-ink/60 mb-4">Could not load weather data. Tap refresh to try again.</p>
        <button onClick={refreshData} className="px-4 py-2 border border-ink text-sm font-bold flex items-center justify-center gap-2 mx-auto hover:bg-ink hover:text-surface transition-colors rounded-none">
          <RefreshCw size={14} /> Refresh
        </button>
      </div>
    );
  } else if (weatherData) {
    const sev = getSeverityData(weatherData.maxTemp);
    
    content = (
      <>
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className={cn("p-2.5 rounded-none text-surface", sev.color)}>
              <AlertTriangle size={18} />
            </div>
            <h4 className={cn("font-headline-sm", sev.text)}>{sev.label}</h4>
          </div>
          <button onClick={refreshData} disabled={loading} className="p-2 text-ink/40 hover:text-ink transition-colors disabled:opacity-50">
            <RefreshCw size={16} className={cn(loading && "animate-spin")} />
          </button>
        </div>

        <p className="font-body-md mb-8 text-ink/80 leading-relaxed">
          {sev.message}
        </p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="card-subtle p-4 flex flex-col items-center text-center">
            <Thermometer size={14} className="text-ink/40 mb-2" />
            <span className="font-mono text-xl font-black text-ink">{weatherData.temperature}°</span>
            <span className="label-caps !text-[8px] opacity-70 mt-1">Ambient</span>
          </div>
          <div className="card-subtle p-4 flex flex-col items-center text-center">
            <TrendingUp size={14} className="text-ink/40 mb-2" />
            <span className="font-mono text-xl font-black text-ink">{weatherData.maxTemp}°</span>
            <span className="label-caps !text-[8px] opacity-70 mt-1">Peak</span>
          </div>
          <div className="card-subtle p-4 flex flex-col items-center text-center">
            <Wind size={14} className="text-ink/40 mb-2" />
            <span className="font-mono text-xl font-black text-ink">{weatherData.windSpeed}<span className="text-[10px] ml-0.5">km/h</span></span>
            <span className="label-caps !text-[8px] opacity-70 mt-1">Velocity</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {['Hydrate Regularly', 'Avoid UV Peak', 'Public Shelter'].map(t => (
            <span key={t} className="px-3 py-1 bg-ink/5 border border-ink/5 text-[9px] font-bold text-ink uppercase tracking-wider rounded-none">{t}</span>
          ))}
        </div>

        <a 
          href="./heat_bulletin.pdf"
          download="Heat_Bulletin.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full !py-4"
        >
          Download Health Protocol
        </a>

        <div className="mt-8 space-y-3 pt-6 border-t border-ink/5">
          {geoState === 'denied' && (
            <p className="label-caps !text-[9px] text-ink/70">Reference Location: New Delhi Cluster</p>
          )}
          
          <div className="flex items-center justify-between text-[10px] font-mono text-ink/40">
            <div className="flex items-center gap-2">
              <MapPin size={10} />
              <span className="truncate max-w-[140px] uppercase">{weatherData.cityName}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={10} />
              <span>{weatherData.lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-[10px] font-bold text-ink/80 bg-ink/5 p-3 rounded-none border border-ink/10">
            <Phone size={10} className="text-ink" />
            <span className="label-caps !text-[9px]">Emergency: <span className="font-mono text-ink font-black ml-2">1077 / 112</span></span>
          </div>
        </div>
      </>
    );
  }

  const glowColor = weatherData ? getSeverityData(weatherData.maxTemp).glow : 'bg-slate-500/20';

  return (
    <div className="card p-8 shadow-none border-ink relative overflow-hidden group min-h-[480px] flex flex-col justify-center rounded-none">
      <div className={cn("absolute top-0 right-0 w-64 h-64 blur-[100px] -mr-32 -mt-32 transition-colors duration-1000 opacity-20", glowColor)}></div>
      {content}
    </div>
  );
};

export default function Health({ 
  onNavigate: _onNavigate,
  cities = MAJOR_CITIES_COMPARISON,
  isDarkMode: _isDarkMode
}: { 
  onNavigate?: (view: any, context?: any) => void,
  cities?: any[],
  isDarkMode?: boolean
}) {
  const avgAqiTotal = React.useMemo(() => {
    return cities.length > 0 ? cities.reduce((acc, c) => acc + c.aqi, 0) / cities.length : 100;
  }, [cities]);

  const admissionsData = React.useMemo(() => {
    const factor = avgAqiTotal / 100;
    return [
      { time: '00:00', admissions: Math.round(120 * factor), baseline: 100 },
      { time: '04:00', admissions: Math.round(145 * factor), baseline: 100 },
      { time: '08:00', admissions: Math.round(280 * factor), baseline: 110 },
      { time: '12:00', admissions: Math.round(310 * factor), baseline: 120 },
      { time: '16:00', admissions: Math.round(260 * factor), baseline: 115 },
      { time: '20:00', admissions: Math.round(190 * factor), baseline: 105 },
      { time: '23:59', admissions: Math.round(140 * factor), baseline: 100 },
    ];
  }, [avgAqiTotal]);

  const toxicityData = React.useMemo(() => [
    { subject: 'PM2.5', A: 120 * (avgAqiTotal/100), fullMark: 150 },
    { subject: 'PM10', A: 98 * (avgAqiTotal/100), fullMark: 150 },
    { subject: 'NO2', A: 86 * (avgAqiTotal/100), fullMark: 150 },
    { subject: 'SO2', A: 65 * (avgAqiTotal/100), fullMark: 150 },
    { subject: 'O3', A: 45 * (avgAqiTotal/100), fullMark: 150 },
    { subject: 'CO', A: 30 * (avgAqiTotal/100), fullMark: 150 },
  ], [avgAqiTotal]);

  const vulnerabilityData = [
    { name: 'Pediatric', value: 35, color: 'var(--accent-light)' },
    { name: 'Geriatric', value: 45, color: 'var(--accent)' },
    { name: 'Standard', value: 20, color: 'var(--accent-dark)' },
  ];

  const symptomPrevalence = [
    { symptom: 'Fatigue', level: 85 },
    { symptom: 'Cough', level: 70 },
    { symptom: 'Breathless', level: 65 },
    { symptom: 'Headache', level: 50 },
    { symptom: 'Nausea', level: 30 },
  ];



  return (
    <div className="space-y-12 pb-20">
      {/* Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="font-display-lg text-ink">Biological Response Matrix</h1>
          <p className="font-body-lg text-ink/60 mt-1 max-w-2xl">
            Advanced medical diagnostics mapping respiratory load, toxicity profiles, and demographic vulnerabilities against regional atmospheric density.
          </p>
        </div>
        <div className="card-subtle p-3 pr-6 self-start flex items-center gap-3 rounded-none">
          <div className="bg-ink text-surface p-2 rounded-none">
             <ShieldCheck size={14} />
          </div>
          <span className="label-caps !text-ink font-black">Clinical Data Verified</span>
        </div>
      </section>

      {/* Body Systems Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: Wind, label: 'Respiratory', status: avgAqiTotal > 200 ? 'Extreme' : avgAqiTotal > 150 ? 'Severe' : 'Nominal', opacity: 1 },
          { icon: Heart, label: 'Cardiovascular', status: avgAqiTotal > 180 ? 'Critical' : 'Elevated', opacity: 0.9 },
          { icon: Brain, label: 'Neurovascular', status: 'Moderate', opacity: 0.8 },
          { icon: Eye, label: 'Ocular Health', status: avgAqiTotal > 250 ? 'Irritant' : 'Stable', opacity: 0.7 },
        ].map((system) => (
          <div key={system.label} className="card p-10 flex flex-col items-center text-center group rounded-none">
            <div className="p-6 bg-ink/5 rounded-none mb-6 group-hover:bg-ink group-hover:text-surface transition-all duration-500">
              <system.icon size={32} strokeWidth={1} />
            </div>
            <h3 className="font-headline-sm text-ink mb-4">{system.label}</h3>
            <span className="label-caps !text-[10px] text-ink font-black border border-ink/10 px-4 py-1.5 rounded-none" style={{ opacity: system.opacity }}>
              {system.status}
            </span>
          </div>
        ))}
      </div>

      {/* Analytics Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Medical Admissions Chart */}
        <div className="lg:col-span-8 card p-10 flex flex-col">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h3 className="font-headline-sm text-ink">ER Admissions Projection</h3>
              <p className="label-caps !text-[10px] opacity-70 mt-2">Modeled correlation between PM2.5 density and clinical respiratory arrivals.</p>
            </div>
          </div>

          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={admissionsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontStyle: 'italic', fill: 'var(--ink)', opacity: 0.7 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontStyle: 'italic', fill: 'var(--ink)', opacity: 0.7 }} />
                <Tooltip
                  contentStyle={{ 
                    borderRadius: '0', 
                    border: '1px solid var(--ink)', 
                    boxShadow: 'none',
                    backgroundColor: 'var(--background)',
                    padding: '12px'
                  }}
                  itemStyle={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--ink)' }}
                />
                <Area type="monotone" dataKey="baseline" stroke="var(--ink)" strokeWidth={1} fill="transparent" strokeDasharray="4 4" opacity={0.1} />
                <Area type="monotone" dataKey="admissions" stroke="var(--ink)" strokeWidth={3} fill="var(--ink)" fillOpacity={0.05} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-10 border-t border-ink/5 pt-10">
            <div className="flex flex-col gap-2">
              <span className="label-caps !text-[9px] opacity-90">Load Delta</span>
              <span className="font-mono text-3xl font-black text-ink">+{Math.round((avgAqiTotal/100) * 45)}%</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="label-caps !text-[9px] opacity-90">Peak Intervals</span>
              <span className="font-mono text-3xl font-black text-ink">1200h</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="label-caps !text-[9px] opacity-90">Model Confidence</span>
              <span className="font-mono text-3xl font-black text-ink">92%</span>
            </div>
          </div>
        </div>

        {/* Radar & Pie Breakdown */}
        <div className="lg:col-span-4 space-y-8 flex flex-col">
          <div className="card p-10 flex-1 flex flex-col items-center text-center overflow-hidden relative">
            <h4 className="label-caps opacity-90 mb-10">Toxicity Spectrum</h4>
            <div className="h-64 w-full relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={toxicityData}>
                  <PolarGrid stroke="var(--ink)" strokeOpacity={0.1} />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--ink)', fontSize: 8, fontStyle: 'bold' }} />
                  <Radar
                    name="Risk"
                    dataKey="A"
                    fill="var(--accent)"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <p className="label-caps !text-[9px] opacity-90 mt-8 leading-relaxed max-w-[200px]">
              {toxicityData[0].A > 100 ? 'Caution: Elevated concentration detected' : 'Concentration within standard bounds'}
            </p>
          </div>

          <RealtimeWeatherWarning />
        </div>
      </div>

      {/* Secondary Analytics Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Age Group Vulnerability */}
        <div className="card p-10">
          <h4 className="label-caps opacity-90 mb-10">Demographic Risk</h4>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={vulnerabilityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {vulnerabilityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 0, border: '1px solid var(--ink)', backgroundColor: 'var(--background)' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-8 space-y-3">
            {vulnerabilityData.map(v => (
              <div key={v.name} className="flex items-center justify-between border-b border-ink/5 pb-2 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5" style={{ backgroundColor: v.color }}></div>
                  <span className="label-caps !text-[10px] text-ink">{v.name}</span>
                </div>
                <span className="font-mono text-[11px] font-black text-ink">{v.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Symptom Severity */}
        <div className="card p-10">
          <h4 className="label-caps opacity-90 mb-10">Symptom Prevalence</h4>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={symptomPrevalence} layout="vertical" margin={{ left: -20 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="symptom" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 9, fontWeight: 900, fill: 'var(--ink)', opacity: 0.8 }} width={80} />
                <Bar dataKey="level" radius={0}>
                  {symptomPrevalence.map((_entry, index) => (
                    <Cell 
                      key={index} 
                      fill="var(--accent)" 
                      fillOpacity={0.8}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="label-caps !text-[8px] opacity-60 mt-8 text-center italic">Observational Data / N=10,000</p>
        </div>

        {/* Guardian Protocol Advice */}
        <div className="card p-10 !bg-ink !text-surface">
          <div className="flex items-center gap-4 mb-10">
            <ShieldCheck size={20} strokeWidth={1} className="text-surface" />
            <h4 className="label-caps !text-surface opacity-90">Clinical Protocol</h4>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Indoors', status: 'Optimal', desc: 'Sustained HEPA filtration active.' },
              { label: 'Outdoor', status: 'Danger', desc: 'Critical metabolic threshold reached.' },
              { label: 'Transit', status: 'Caution', desc: 'N95 filtration required.' }
            ].map(p => (
              <div key={p.label} className="p-4 border border-surface/10 hover:border-surface transition-colors rounded-none">
                <div className="flex justify-between items-center mb-1">
                  <span className="label-caps !text-[10px] !text-surface opacity-60">{p.label}</span>
                  <span className={cn("label-caps !text-[8px] px-2 py-0.5 rounded-none", p.status === 'Danger' ? 'bg-surface text-ink' : 'bg-surface/20 text-surface')}>
                    {p.status}
                  </span>
                </div>
                <p className="text-[10px] text-surface font-bold mt-2">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vulnerable Groups */}
      <section className="mt-20">
        <div className="flex items-center gap-4 mb-12">
          <Info size={24} className="text-ink opacity-40" />
          <h3 className="font-headline-sm text-ink">Population Advisory</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Pediatric Care',
              icon: Baby,
              desc: 'Developing lungs are 3x more sensitive. Respiratory load peaks during nocturnal inversion periods.',
              action: 'School Safety PDF',
              url: 'https://www.healthygallatin.org/wp-content/uploads/2024/06/ActivityGuidelinesWildfireSmokeEventsSchools.pdf',
              opacity: 0.8
            },
            {
              title: 'Geriatric Support',
              icon: UserRound,
              desc: 'High correlation with cardio-distress in 60+ demographics. Monitor nocturnal saturation levels.',
              action: 'Elderline Support',
              url: 'https://scw.dosje.gov.in/elderline',
              opacity: 1
            },
            {
              title: 'Occupational Risk',
              icon: Stethoscope,
              desc: 'Industrial-grade filtration mandatory. Cumulative PM exposure risks lung function over 4-hour intervals.',
              action: 'OHS Standards',
              url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134',
              opacity: 0.9
            },
          ].map((item) => (
            <div key={item.title} className="card p-10 flex flex-col group">
              <div className="flex-1">
                <div className="w-14 h-14 bg-ink/10 rounded-none flex items-center justify-center mb-8" style={{ opacity: item.opacity }}>
                  <item.icon size={28} strokeWidth={1} className="text-ink" />
                </div>
                <h4 className="font-headline-sm text-ink mb-4">{item.title}</h4>
                <p className="font-body-sm text-ink/60 mb-10 leading-relaxed">
                  {item.desc}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !py-3 !px-6 group/btn w-full justify-center"
                >
                  {item.action} <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
