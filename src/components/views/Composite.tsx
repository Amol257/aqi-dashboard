import { useMemo, useState } from 'react';
import { 
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Cell
} from 'recharts';
import { Cloud, Factory, Sun, Download, Filter, Shield, Activity, Wind, Layers, TrendingUp } from 'lucide-react';
import { 
  MAJOR_CITIES_COMPARISON, 
  STATIONS_DATA, 
  POLLUTANTS_SUMMARY
} from '../../constants';
import { cn, exportToCSV } from '../../lib/utils';

export default function Composite({ 
  onNavigate,
  stations = STATIONS_DATA,
  cities = MAJOR_CITIES_COMPARISON,
  isDarkMode: _isDarkMode
}: { 
  onNavigate?: (view: any, context?: any) => void,
  stations?: any[],
  cities?: any[],
  isDarkMode?: boolean
}) {
  const [activePollutant, setActivePollutant] = useState('pm25');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);

  const allCities = cities;

  const correlationData = useMemo(() => {
    // Map UI ID to CSV ID
    const pollutantMap: Record<string, string> = {
      'pm25': 'PM2.5',
      'pm10': 'PM10',
      'no2': 'NO2',
      'so2': 'SO2',
      'o3': 'OZONE',
      'co': 'CO'
    };
    const csvId = pollutantMap[activePollutant] || activePollutant;

    return stations.map(stn => {
      const pollutantVal = (stn.pollutant_values as Record<string, any>)?.[csvId] || 0;
      return {
        city: stn.location,
        x: pollutantVal,
        y: stn.aqi,
        region: stn.region.replace(' India', '')
      };
    }).filter(d => (selectedRegion === 'All' || d.region === selectedRegion) && d.x > 0);
  }, [activePollutant, selectedRegion, stations]);

  const dynamicPollutants = useMemo(() => {
    const pollutantMap: Record<string, string> = {
      'pm25': 'PM2.5',
      'pm10': 'PM10',
      'no2': 'NO2',
      'so2': 'SO2',
      'o3': 'OZONE',
      'co': 'CO'
    };

    return POLLUTANTS_SUMMARY.map(p => {
      const csvId = pollutantMap[p.id] || p.id;
      const relevantStations = stations.filter(s => 
        (selectedRegion === 'All' || s.region.startsWith(selectedRegion)) && 
        (s.pollutant_values as Record<string, any>)?.[csvId] !== undefined
      );
      
      const avgVal = relevantStations.length > 0 
        ? Math.round(relevantStations.reduce((acc, s) => acc + ((s.pollutant_values as Record<string, any>)?.[csvId] || 0), 0) / relevantStations.length)
        : p.value;

      // Dynamic status based on value
      let status = "Good";
      if (avgVal > 150) status = "Poor";
      else if (avgVal > 75) status = "Moderate";

      return {
        ...p,
        value: avgVal,
        status: status,
        icon: p.id === 'pm25' ? Cloud : p.id === 'pm10' ? Factory : Sun
      };
    });
  }, [selectedRegion, stations]);

  return (
    <div className="space-y-12 pb-20">
      {/* Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="font-display-lg text-ink">Composite Intelligence</h1>
          <p className="font-body-lg text-ink/60 mt-1 max-w-2xl">
            Real-time weighted integration of {stations.length} monitoring stations across the national sensor grid.
          </p>
        </div>
        <div className="flex gap-3 self-start">
          <button 
            onClick={() => exportToCSV(stations, 'aqi_composite_data')}
            className="btn-primary rounded-none shadow-none"
          >
            <Download size={14} /> Export Dataset
          </button>
          <div className="relative">
            <button 
              onClick={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
              className="btn-secondary rounded-none shadow-none"
            >
              <Filter size={14} /> {selectedRegion === 'All' ? 'National Grid' : selectedRegion}
            </button>
            {isRegionDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 card z-30 py-4 animate-in fade-in slide-in-from-top-2 duration-200 rounded-none shadow-none border-ink">
                <div className="px-6 mb-2">
                  <span className="label-caps !text-[9px] opacity-30">Select Sector</span>
                </div>
                {['All', 'North', 'South', 'East', 'West', 'Central'].map(region => (
                  <button 
                    key={region}
                    className={cn(
                      "w-full text-left px-6 py-2 label-caps !text-[11px] hover:bg-ink/5 transition-colors flex items-center justify-between",
                      selectedRegion === region ? "text-ink font-black bg-ink/5" : "text-ink/60"
                    )}
                    onClick={() => {
                      setSelectedRegion(region);
                      setIsRegionDropdownOpen(false);
                    }}
                  >
                    {region === 'All' ? 'National' : `${region} Sector`}
                    {selectedRegion === region && <div className="w-1.5 h-1.5 bg-ink" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Correlation Plot Area */}
        <div className="lg:col-span-8 card p-10 flex flex-col group">
          <div className="flex items-center justify-between mb-10">
            <h3 className="font-headline-sm text-ink">Variable Distribution</h3>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-ink"></div>
                <span className="label-caps !text-ink/40">Critical Density</span>
              </div>
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full bg-ink/40 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 bg-ink"></span>
                </div>
            </div>
          </div>

          <div className="relative w-full aspect-video card-subtle overflow-hidden px-4 py-6 border-none rounded-none">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="1 4" vertical={false} stroke="var(--ink)" opacity={0.1} />
                <XAxis type="number" dataKey="x" hide domain={[0, 'auto']} />
                <YAxis type="number" dataKey="y" hide domain={[0, 500]} />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      const pollutantMap: Record<string, string> = {
                        'pm25': 'PM2.5', 'pm10': 'PM10', 'no2': 'NO2', 'so2': 'SO2', 'o3': 'OZONE', 'co': 'CO'
                      };
                      const csvId = pollutantMap[activePollutant] || activePollutant;
                      const unit = POLLUTANTS_SUMMARY.find(p => p.id === activePollutant)?.unit || '';
                      
                      return (
                        <div className="card p-4 border-ink shadow-none min-w-[140px] rounded-none">
                          <p className="label-caps !text-ink opacity-40 mb-2">{data.city}</p>
                          <div className="space-y-1">
                            <div className="flex justify-between items-baseline">
                              <span className="font-mono text-[9px] text-ink/40">AQI</span>
                              <span className="font-mono text-xs font-black text-ink">{data.y}</span>
                            </div>
                            <div className="flex justify-between items-baseline">
                              <span className="font-mono text-[9px] text-ink/40">{csvId}</span>
                              <span className="font-mono text-xs font-bold text-ink">{data.x} {unit}</span>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Scatter name="National Telemetry" data={correlationData}>
                  {correlationData.map((entry, index) => {
                    const ratio = entry.y / 500;
                    const fill = ratio > 0.6 ? 'var(--accent-light)' : ratio > 0.3 ? 'var(--accent)' : 'var(--accent-dark)';
                    return (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={fill} 
                        fillOpacity={0.7}
                        stroke={fill}
                        strokeWidth={0.5}
                      />
                    );
                  })}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-8 px-6 py-2 border-t border-ink/5">
              <div className="label-caps !text-[9px] opacity-40">Axis X: {activePollutant.toUpperCase()} Density</div>
              <div className="label-caps !text-[9px] opacity-40">Axis Y: Composite Result</div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-8">
            {[
              { label: 'Pearson R', value: '0.89' },
              { label: 'Sensor Yield', value: stations.length.toString() },
              { label: 'Confid. Int.', value: '98%' },
            ].map(stat => (
              <div key={stat.label} className="text-center border-r border-ink/5 last:border-0">
                <div className="label-caps !text-[10px] opacity-40 mb-3">{stat.label}</div>
                <div className="font-mono text-3xl font-black text-ink">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pollutant Cards */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {dynamicPollutants.map((poll) => {
            const Icon = poll.icon;
            const isActive = activePollutant === poll.id;
            return (
              <button 
                key={poll.id} 
                onClick={() => setActivePollutant(poll.id)}
                className={cn(
                  "card p-6 border-l-4 transition-all text-left group rounded-none shadow-none",
                  isActive ? "border-l-ink bg-ink/5" : "border-l-transparent hover:bg-ink/5"
                )}
                style={{ 
                  borderLeftColor: isActive ? 'var(--ink)' : 'var(--ink)' 
                }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={cn(
                    "p-2 rounded-none transition-colors",
                    isActive ? "bg-ink text-surface" : "bg-ink/5 text-ink/40"
                  )}>
                    <Icon size={18} />
                  </div>
                  <span className={cn(
                    "label-caps !text-[9px] px-2 py-1 text-ink",
                  )}>
                    {poll.status}
                  </span>
                </div>
                
                <div className="font-mono text-3xl font-black text-ink mb-1">
                  {poll.value} <span className="text-xs opacity-40 font-bold">{poll.unit}</span>
                </div>
                <div className="label-caps opacity-60 mb-4">
                  {poll.name}
                </div>
                
                <div className="flex-1 h-2 bg-ink/5 rounded-none overflow-hidden mt-6">
                  <div 
                    className="h-full bg-ink transition-all duration-1000" 
                    style={{ 
                      width: `${Math.min(100, (poll.value / (poll.id === 'pm25' ? 300 : poll.id === 'pm10' ? 400 : poll.id === 'co' ? 10 : 200)) * 100)}%`,
                      opacity: isActive ? 1 : 0.6
                    }}
                  />
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <span className="label-caps !text-[8px] opacity-30">Avg Grid Shift</span>
                  <span className={cn("font-mono text-[10px] font-bold", poll.change.includes('+') ? "text-ink" : "text-ink/40")}>{poll.change}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Health Impact Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'Protection: N95', sub: 'Mandatory in high-density sectors', icon: Shield },
          { label: 'Filtration: HEPA', sub: 'Indoor atmospheric isolation advised', icon: Wind },
          { label: 'Activity: Limited', sub: 'Suspend aerobic exertion in hotspots', icon: Activity },
        ].map((item) => (
          <div key={item.label} className="card p-8 flex items-center gap-8 hover:bg-ink/5 transition-colors cursor-default rounded-none shadow-none">
            <div className="w-14 h-14 bg-ink/5 flex items-center justify-center rounded-none group-hover:bg-ink group-hover:text-surface transition-all duration-500">
              <item.icon size={32} strokeWidth={1.5} />
            </div>
            <div>
              <div className="font-bold text-base text-ink leading-tight mb-1">{item.label}</div>
              <div className="label-caps !text-[10px] opacity-40">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* National Geographic Dispersion */}
      <div className="card p-12 relative overflow-hidden group">
        <div className="absolute -top-10 -right-10 text-ink opacity-[0.03]">
           <Layers size={240} className="rotate-[-15deg]" />
        </div>
        
        <div className="relative z-10">
          <h3 className="font-headline-lg text-ink mb-12">Geographic Dispersion</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-10">
            {allCities.slice(0, 12).map((city) => (
              <div 
                key={city.name} 
                className="flex flex-col gap-3 group/chip cursor-pointer"
                onClick={() => onNavigate?.('city-dive', city.name)}
              >
                <div className="label-caps !text-[9px] opacity-40 flex items-center justify-between">
                  {city.name.replace(' NCR', '')}
                  <TrendingUp size={10} className="opacity-0 group-hover/chip:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-end justify-between gap-4 border-b border-ink/5 pb-3 transition-all group-hover/chip:border-ink">
                  <span className="font-mono text-3xl font-black tracking-tighter text-ink leading-none">{city.aqi}</span>
                  <div 
                    className="w-1 bg-ink transition-all duration-700" 
                    style={{ 
                      height: `${Math.min(30, (city.aqi / 500) * 30)}px`,
                      opacity: city.aqi > 200 ? 1 : 0.3
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => onNavigate?.('stations')}
              className="btn-secondary !px-12 !py-4 !text-xs"
            >
              Examine All {stations.length} Monitoring Nodes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
