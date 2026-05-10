import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer
} from 'recharts';
import { Radio, Search, SlidersHorizontal, Map, Settings2, Download, FileDown, ChevronDown } from 'lucide-react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { STATIONS_DATA } from '../../constants';
import { cn, exportToCSV } from '../../lib/utils';

export default function Stations({ 
  onNavigate: _onNavigate,
  stations: initialStations = STATIONS_DATA, 
  lastUpdated: initialLastUpdated = null,
  isDarkMode = false
}: { 
  onNavigate?: (view: any, context?: any) => void,
  stations?: any[],
  lastUpdated?: string | null,
  isDarkMode?: boolean
}) {
  const [stations, setStations] = React.useState(initialStations);
  const [lastUpdated, setLastUpdated] = React.useState<string | null>(initialLastUpdated);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [region, setRegion] = React.useState('All India');
  const [statusFilter, setStatusFilter] = React.useState('All');
  const [mapAqiFilters, setMapAqiFilters] = React.useState(['0-50', '51-100', '101-150', '151-200', '201-250', '250+']);
  const [sortOrder, setSortOrder] = React.useState<'asc' | 'desc' | 'none'>('none');
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);

  React.useEffect(() => {
    setStations(initialStations);
    setLastUpdated(initialLastUpdated);
  }, [initialStations, initialLastUpdated]);

  // Dynamic counts derived from stations data
  const totalSites = stations.length;
  const activeCount = stations.filter(s => s.status === 'ACTIVE' && s.aqi > 0).length;
  const offlineCount = stations.filter(s => s.status !== 'ACTIVE' || s.aqi === 0).length;
  const serviceCount = 0; // future implementation

  const toggleAqiFilter = (filter: string) => {
    setMapAqiFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter) 
        : [...prev, filter]
    );
  };

  const getAqiCategory = (aqi: number) => {
    if (aqi <= 50) return '0-50';
    if (aqi <= 100) return '51-100';
    if (aqi <= 150) return '101-150';
    if (aqi <= 200) return '151-200';
    if (aqi <= 250) return '201-250';
    return '250+';
  };

  const getAqiColor = (aqi: number) => {
    if (aqi <= 50) return 'var(--aqi-good)';
    if (aqi <= 100) return 'var(--aqi-moderate)';
    if (aqi <= 200) return 'var(--aqi-poor)';
    if (aqi <= 300) return 'var(--aqi-unhealthy)';
    if (aqi <= 400) return 'var(--aqi-very-poor)';
    return 'var(--aqi-hazardous)';
  };

  // Base filtering (Region, Status, Search)
  const baseFilteredStations = React.useMemo(() => {
    let result = stations.filter(s => {
      if (region !== 'All India' && s.region !== region) return false;
      if (statusFilter !== 'All' && s.status !== statusFilter) return false;
      if (searchQuery && !s.location.toLowerCase().includes(searchQuery.toLowerCase()) && !s.city.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    });
    return result;
  }, [stations, region, statusFilter, searchQuery]);

  // Final filtered list including legend toggles for Map and Table
  const filteredStations = React.useMemo(() => {
    let result = [...baseFilteredStations];
    
    if (mapAqiFilters.length > 0) {
      result = result.filter(s => mapAqiFilters.includes(getAqiCategory(s.aqi)));
    }

    if (sortOrder === 'asc') {
      result.sort((a, b) => a.aqi - b.aqi);
    } else if (sortOrder === 'desc') {
      result.sort((a, b) => b.aqi - a.aqi);
    }
    // Default (none) remains in original order

    return result;
  }, [baseFilteredStations, mapAqiFilters, sortOrder]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredStations.length / itemsPerPage);
  const paginatedStations = React.useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredStations.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredStations, currentPage, itemsPerPage]);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, region, statusFilter, mapAqiFilters]);

  const goodAqiCount = baseFilteredStations.filter(s => s.aqi <= 100).length;
  const mediumAqiCount = baseFilteredStations.filter(s => s.aqi > 100 && s.aqi <= 200).length;
  const highAqiCount = baseFilteredStations.filter(s => s.aqi > 200).length;

  const histogramData = [
    { range: '0-50', count: baseFilteredStations.filter(s => s.aqi <= 50).length, color: 'var(--aqi-good)', isActive: mapAqiFilters.length === 0 || mapAqiFilters.includes('0-50') },
    { range: '51-100', count: baseFilteredStations.filter(s => s.aqi > 50 && s.aqi <= 100).length, color: 'var(--aqi-moderate)', isActive: mapAqiFilters.length === 0 || mapAqiFilters.includes('51-100') },
    { range: '101-150', count: baseFilteredStations.filter(s => s.aqi > 100 && s.aqi <= 150).length, color: 'var(--aqi-poor)', isActive: mapAqiFilters.length === 0 || mapAqiFilters.includes('101-150') },
    { range: '151-200', count: baseFilteredStations.filter(s => s.aqi > 150 && s.aqi <= 200).length, color: 'var(--aqi-unhealthy)', isActive: mapAqiFilters.length === 0 || mapAqiFilters.includes('151-200') },
    { range: '201-250', count: baseFilteredStations.filter(s => s.aqi > 200 && s.aqi <= 250).length, color: 'var(--aqi-very-poor)', isActive: mapAqiFilters.length === 0 || mapAqiFilters.includes('201-250') },
    { range: '250+', count: baseFilteredStations.filter(s => s.aqi > 250).length, color: 'var(--aqi-hazardous)', isActive: mapAqiFilters.length === 0 || mapAqiFilters.includes('250+') }
  ];

  return (
    <div className="space-y-12 pb-20">
      {/* Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="font-display-lg text-ink">Network Infrastructure</h1>
          <p className="font-body-lg text-ink/60 mt-1 max-w-2xl">
            Real-time telemetry and distribution analysis of {activeCount} active monitoring nodes across the national sensor grid.
            {lastUpdated && <span className="block label-caps !text-[9px] mt-4 opacity-80">Grid Sync: {new Date(lastUpdated).toLocaleString()}</span>}
          </p>
        </div>
        <div className="flex items-center gap-3 card-subtle p-3 pr-6 self-start rounded-none">
          <div className="bg-ink text-surface p-2 rounded-none">
             <Radio size={14} />
          </div>
          <span className="label-caps !text-ink font-black">{activeCount} Monitoring Nodes</span>
        </div>
      </section>

      {/* Filter Dock */}
      <div className="card p-8 flex flex-col md:flex-row items-stretch md:items-center gap-8 rounded-none sticky top-20 z-30 transition-all shadow-none border-ink">
        {/* Left: Search */}
        <div className="w-64 flex items-center gap-4 px-2 group shrink-0">
          <Search size={18} className="text-ink/20 group-focus-within:text-ink transition-colors" />
          <input 
            type="text" 
            placeholder="Search monitoring nodes..." 
            className="bg-transparent border-none p-0 outline-none font-headline-sm !text-lg w-full placeholder:text-ink/20 text-ink tracking-normal"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-16 bg-ink/10"></div>

        {/* Right: Filters & Action */}
        <div className="flex items-center justify-between gap-6 flex-1 w-full">
          <div className="flex items-center gap-8 flex-wrap">
            {/* Region Filter */}
            <div className="flex items-center gap-3 border-b border-ink/5 pb-1">
              <span className="label-caps !text-[8px] opacity-40">Region</span>
              <div className="flex items-center gap-1">
                <select 
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="bg-transparent border-none p-0 label-caps !text-[10px] text-ink focus:ring-0 cursor-pointer font-black text-left appearance-none"
                >
                  <option>All India</option>
                  <option>North India</option>
                  <option>South India</option>
                  <option>West India</option>
                  <option>East India</option>
                  <option>Central India</option>
                </select>
                <ChevronDown size={10} className="text-ink/40" />
              </div>
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-3 border-b border-ink/5 pb-1">
              <span className="label-caps !text-[8px] opacity-40">Status</span>
              <div className="flex items-center gap-1">
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-transparent border-none p-0 label-caps !text-[10px] text-ink focus:ring-0 cursor-pointer font-black text-left appearance-none"
                >
                  <option value="All">All ({totalSites})</option>
                  <option value="ACTIVE">Live ({activeCount})</option>
                  <option value="SERVICE">Service ({serviceCount})</option>
                  <option value="OFFLINE">Offline ({offlineCount})</option>
                </select>
                <ChevronDown size={10} className="text-ink/40" />
              </div>
            </div>

            {/* Order Filter */}
            <div className="flex items-center gap-3 border-b border-ink/5 pb-1">
              <span className="label-caps !text-[8px] opacity-40">Order</span>
              <div className="flex items-center gap-1">
                <select 
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as any)}
                  className="bg-transparent border-none p-0 label-caps !text-[10px] text-ink focus:ring-0 cursor-pointer font-black text-left appearance-none"
                >
                  <option value="none">Standard</option>
                  <option value="asc">AQI Asc.</option>
                  <option value="desc">AQI Desc.</option>
                </select>
                <ChevronDown size={10} className="text-ink/40" />
              </div>
            </div>
          </div>

          <button className="btn-primary !bg-ink !text-surface !py-2.5 px-5 rounded-none shadow-none flex items-center justify-center gap-2 hover:!bg-ink/90 transition-all shrink-0 whitespace-nowrap ml-auto group">
            <SlidersHorizontal size={14} className="opacity-80 group-hover:opacity-100 transition-opacity" /> 
            <span className="label-caps !text-[10px] !text-surface font-black tracking-widest">Advanced</span>
          </button>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 card p-10 flex flex-col rounded-none">
          <div className="flex justify-between items-start mb-10">
            <div>
              <h3 className="font-headline-sm text-ink">Spatial Intelligence</h3>
              <p className="label-caps !text-[10px] opacity-70 mt-2">Grid density across major metropolitan clusters</p>
            </div>
            <Map size={24} className="text-ink opacity-40" />
          </div>

          {/* Interactive Legend Above Map - 6 Ranges */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { id: '0-50', color: 'bg-aqi-good', label: '0-50', count: baseFilteredStations.filter(s => s.aqi > 0 && s.aqi <= 50).length },
              { id: '51-100', color: 'bg-aqi-moderate', label: '51-100', count: baseFilteredStations.filter(s => s.aqi > 50 && s.aqi <= 100).length },
              { id: '101-150', color: 'bg-aqi-poor', label: '101-150', count: baseFilteredStations.filter(s => s.aqi > 100 && s.aqi <= 150).length },
              { id: '151-200', color: 'bg-aqi-unhealthy', label: '151-200', count: baseFilteredStations.filter(s => s.aqi > 150 && s.aqi <= 200).length },
              { id: '201-250', color: 'bg-aqi-very-poor', label: '201-250', count: baseFilteredStations.filter(s => s.aqi > 200 && s.aqi <= 250).length },
              { id: '250+', color: 'bg-aqi-hazardous', label: '250+', count: baseFilteredStations.filter(s => s.aqi > 250).length },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => toggleAqiFilter(item.id)}
                className={cn(
                  "flex items-center gap-3 px-4 py-2 card-subtle transition-all active:scale-95 rounded-none",
                  mapAqiFilters.includes(item.id) 
                    ? "bg-ink text-surface border-ink" 
                    : "opacity-40"
                )}
              >
                <div className={cn("w-1.5 h-1.5", mapAqiFilters.includes(item.id) ? "bg-surface" : item.color)} />
                <span className="label-caps !text-[9px]">{item.label}</span>
                <span className="font-mono text-[10px] font-black opacity-60 ml-2">{item.count}</span>
              </button>
            ))}
          </div>

          <div className="h-[400px] w-full card-subtle relative overflow-hidden group border-none z-0 rounded-none">
            <MapContainer 
              center={[22.5937, 78.9629]} 
              zoom={4} 
              style={{ height: '100%', width: '100%' }} 
              zoomControl={false}
              scrollWheelZoom={false}
            >
              <TileLayer
                url={isDarkMode 
                  ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                  : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                }
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              />
              {filteredStations.map(s => (
                <CircleMarker
                  key={s.id}
                  center={[s.lat, s.lng]}
                  radius={8}
                  fillColor={getAqiColor(s.aqi)}
                  color="var(--surface)"
                  weight={1}
                  fillOpacity={0.8}
                >
                  <Popup className="card border-ink p-0">
                    <div className="text-center p-4">
                      <p className="font-bold text-sm text-ink leading-tight mb-1">{s.location}</p>
                      <p className="label-caps !text-[9px] opacity-70 mb-3">{s.city}</p>
                      <div className="inline-block px-4 py-1.5 bg-ink text-surface font-mono text-xs font-black">
                        {s.aqi} AQI
                      </div>
                    </div>
                  </Popup>
                </CircleMarker>
              ))}
            </MapContainer>
          </div>
        </div>

        <div className="md:col-span-4 card p-10 flex flex-col rounded-none">
          <h3 className="label-caps opacity-70 mb-12">Network Range Dist.</h3>
          <div className="flex-1 min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={histogramData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-light)" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="var(--accent-dark)" stopOpacity={0.3}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="1 4" vertical={false} stroke="var(--ink)" opacity={0.1} />
                <Bar 
                  dataKey="count" 
                  fill="url(#barGradient)"
                  stroke="var(--accent)"
                  strokeWidth={1}
                  isAnimationActive={false}
                />
                <XAxis dataKey="range" hide />
                <YAxis hide />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-between mt-8 border-t border-ink/5 pt-4">
            <span className="label-caps !text-[9px] opacity-70">Grid Minimum</span>
            <span className="label-caps !text-[9px] opacity-70">Critical Density</span>
          </div>
        </div>
      </div>

      {/* Secondary Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8">
        <div className="md:col-span-3 card p-8 !bg-ink !text-surface flex flex-col justify-between group rounded-none">
          <div>
            <p className="label-caps !text-surface opacity-60">Network Integrity</p>
            <div className="font-data-huge !text-5xl !text-surface mt-4">
              {((activeCount / totalSites) * 100).toFixed(1)}%
            </div>
          </div>
          <div className="h-1 w-full bg-surface/10 rounded-none overflow-hidden mt-8">
            <div className="h-full bg-accent transition-all duration-1000" style={{ width: `${(activeCount / totalSites) * 100}%`, backgroundColor: 'var(--accent)' }}></div>
          </div>
          <p className="label-caps !text-[9px] !text-surface mt-6 opacity-60">Nodes Active: {activeCount} / {totalSites}</p>
        </div>

        <div className="md:col-span-3 card p-8 flex flex-col justify-between rounded-none">
          <div>
            <p className="label-caps opacity-90">Avg Latency</p>
            <div className="font-data-huge !text-5xl text-ink mt-4">1.2s</div>
          </div>
          <div className="flex items-baseline gap-1 mt-8 h-12">
            {[30, 50, 40, 90].map((h, i) => (
              <div key={i} className="flex-1" style={{ height: `${h}%`, backgroundColor: 'var(--accent)', opacity: 0.3 + (i * 0.2) }} />
            ))}
          </div>
        </div>

          <div className="md:col-span-6 card p-8 md:p-12 shadow-none border-ink relative overflow-hidden group flex flex-col justify-center rounded-none">
            <div className="relative z-10">
              <h4 className="font-headline-sm text-ink mb-8">Network Health Status</h4>
              <div className="grid grid-cols-3 gap-10">
                {[
                  { l: 'Operational', v: activeCount, o: 1, c: 'text-ink' },
                  { l: 'Maintenance', v: serviceCount, o: 0.4, c: 'text-ink/40' },
                  { l: 'Offline', v: offlineCount, o: 0.4, c: 'text-ink/40' },
                ].map(i => (
                  <div key={i.l} className={cn("transition-all", i.c)}>
                    <div className="font-mono text-4xl font-black tracking-tighter" style={{ opacity: i.o }}>{i.v}</div>
                    <div className="label-caps !text-[10px] opacity-70 mt-2">{i.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <Settings2 size={160} className="absolute -bottom-8 -right-8 text-ink opacity-[0.03] group-hover:rotate-12 transition-transform duration-1000" />
          </div>
      </div>

      <section className="card border-ink mt-16 overflow-hidden rounded-none">
        <div className="px-10 py-8 border-b border-ink/5 flex justify-between items-center bg-ink/5">
          <div className="flex items-center gap-10">
            <div className="flex items-baseline gap-4">
              <h3 className="font-headline-sm text-ink">Global Node Inventory</h3>
              <span className="label-caps !text-[9px] opacity-40 font-black tracking-widest">
                {activeCount} LIVE / {offlineCount} OFFLINE
              </span>
            </div>
            <div className="flex items-center gap-4 border-l border-ink/10 pl-10">
              <span className="label-caps !text-[10px] opacity-30">Yield</span>
              <select 
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="bg-transparent border-none label-caps !text-[11px] text-ink focus:ring-0 cursor-pointer"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => exportToCSV(filteredStations, 'aqi_stations_data')}
              className="btn-secondary !py-2 rounded-none"
            >
              <Download size={14} /> CSV
            </button>
            <button 
              onClick={() => exportToCSV(filteredStations, 'aqi_stations_full_report')}
              className="btn-primary !py-2 rounded-none"
            >
              <FileDown size={14} /> Export Dataset
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-ink/5">
                <th className="px-10 py-6 label-caps opacity-80">Identifier</th>
                <th className="px-10 py-6 label-caps opacity-80">Location Node</th>
                <th className="px-10 py-6 label-caps opacity-80">Telemetry Array</th>
                <th className="px-10 py-6 label-caps opacity-80">Index Result</th>
                <th className="px-10 py-6 label-caps opacity-80">Node Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/5">
              {paginatedStations.length > 0 ? paginatedStations.map(s => (
                <tr key={s.id} className="hover:bg-ink/5 transition-colors group cursor-pointer">
                  <td className="px-10 py-6 font-mono text-xs font-black text-ink/40 tracking-tighter">#{s.id}</td>
                  <td className="px-10 py-6">
                    <p className="font-bold text-sm text-ink">{s.location}</p>
                    <p className="label-caps !text-[9px] opacity-70 mt-1">{s.city}</p>
                  </td>
                  <td className="px-10 py-6">
                    <div className="flex gap-2">
                      {s.pollutants.map((p: string) => <span key={p} className="px-2 py-1 bg-ink/5 text-ink label-caps !text-[8px] rounded-none">{p}</span>)}
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-ink" style={{ opacity: s.aqi > 200 ? 1 : 0.2 }} />
                      <span className="font-mono text-xl font-black text-ink tracking-tighter">{s.aqi}</span>
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <span className={cn(
                      "label-caps !text-[9px] px-3 py-1 rounded-none flex items-center gap-2 w-fit font-black",
                      (s.status === 'ACTIVE' && s.aqi > 0) ? "bg-ink !text-surface" : "bg-ink/10 text-ink"
                    )}>
                      {(s.status === 'ACTIVE' && s.aqi > 0) ? (
                        <div className="w-1 h-1 rounded-full bg-surface animate-pulse" />
                      ) : (
                        <div className="w-1 h-1 rounded-full bg-ink/40" />
                      )}
                      {(s.status === 'ACTIVE' && s.aqi > 0) ? 'LIVE' : 'OFFLINE'}
                    </span>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={5} className="px-10 py-32 text-center">
                    <div className="flex flex-col items-center gap-6 opacity-20">
                      <Search size={64} strokeWidth={1} />
                      <p className="label-caps">Null Reference: No nodes match parameters</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="px-10 py-10 border-t border-ink/5 flex items-center justify-between">
            <p className="label-caps !text-[9px] opacity-80">
              Rendering Node <span className="text-ink">{(currentPage - 1) * itemsPerPage + 1}</span> — <span className="text-ink">{Math.min(currentPage * itemsPerPage, filteredStations.length)}</span> of <span className="text-ink">{filteredStations.length}</span>
            </p>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="btn-secondary !p-2 disabled:opacity-10"
              >
                <Radio size={14} className="rotate-90" />
              </button>
              
              <div className="flex items-center gap-3">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) pageNum = i + 1;
                  else if (currentPage <= 3) pageNum = i + 1;
                  else if (currentPage >= totalPages - 2) pageNum = totalPages - 4 + i;
                  else pageNum = currentPage - 2 + i;
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={cn(
                        "font-mono text-[10px] font-black w-8 h-8 rounded-none transition-all",
                        currentPage === pageNum 
                          ? "bg-ink text-surface" 
                          : "text-ink/40 hover:bg-ink/5"
                      )}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button 
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="btn-secondary !p-2 disabled:opacity-10"
              >
                <Radio size={14} className="-rotate-90" />
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
