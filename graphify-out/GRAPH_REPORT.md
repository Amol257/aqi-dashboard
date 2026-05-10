# Graph Report - src  (2026-05-10)

## Corpus Check
- Corpus is ~43,226 words - fits in a single context window. You may not need a graph.

## Summary
- 35 nodes · 82 edges · 7 communities (6 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_City Analysis & Visualization|City Analysis & Visualization]]
- [[_COMMUNITY_Dashboard Layout & Comparative Views|Dashboard Layout & Comparative Views]]
- [[_COMMUNITY_Health Diagnostics & Main Application|Health Diagnostics & Main Application]]
- [[_COMMUNITY_Data Models & Static Constants|Data Models & Static Constants]]
- [[_COMMUNITY_Stations Data & Utility Layer|Stations Data & Utility Layer]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 11 edges
2. `MAJOR_CITIES_COMPARISON` - 6 edges
3. `STATIONS_DATA` - 5 edges
4. `getAllCities()` - 5 edges
5. `getCityImage()` - 5 edges
6. `exportToCSV()` - 4 edges
7. `CityData` - 3 edges
8. `TOP_POLLUTED_CITIES` - 3 edges
9. `POLLUTANTS_SUMMARY` - 3 edges
10. `CityDive()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `cn()`  [EXTRACTED]
  App.tsx → lib/utils.ts
- `CityDive()` --calls--> `cn()`  [EXTRACTED]
  components/views/CityDive.tsx → lib/utils.ts
- `RealtimeWeatherWarning()` --calls--> `cn()`  [EXTRACTED]
  components/views/Health.tsx → lib/utils.ts
- `Summary()` --calls--> `cn()`  [EXTRACTED]
  components/views/Summary.tsx → lib/utils.ts
- `CityDive()` --calls--> `getCityImage()`  [EXTRACTED]
  components/views/CityDive.tsx → lib/utils.ts

## Communities (7 total, 1 thin omitted)

### Community 0 - "City Analysis & Visualization"
Cohesion: 0.33
Nodes (7): getCityImage(), View, AQI_DISTRIBUTION, CITY_DIVE_PIE_DATA, CityData, TOP_POLLUTED_CITIES, CityDive()

### Community 1 - "Dashboard Layout & Comparative Views"
Cohesion: 0.43
Nodes (4): getAllCities(), MAJOR_CITIES_COMPARISON, POLLUTANTS_SUMMARY, STATIONS_DATA

### Community 2 - "Health Diagnostics & Main Application"
Cohesion: 0.33
Nodes (5): cn(), App(), POLLUTANT_STATS, RealtimeWeatherWarning(), Summary()

### Community 3 - "Data Models & Static Constants"
Cohesion: 0.4
Nodes (4): CITIES_WITH_IMAGES, COMPOSITE_SCATTER_DATA, EXECUTIVE_INSIGHT, WEEKLY_FORECAST

## Knowledge Gaps
- **5 isolated node(s):** `View`, `WEEKLY_FORECAST`, `COMPOSITE_SCATTER_DATA`, `EXECUTIVE_INSIGHT`, `CITIES_WITH_IMAGES`
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Health Diagnostics & Main Application` to `City Analysis & Visualization`, `Dashboard Layout & Comparative Views`, `Stations Data & Utility Layer`?**
  _High betweenness centrality (0.094) - this node is a cross-community bridge._
- **Why does `MAJOR_CITIES_COMPARISON` connect `Dashboard Layout & Comparative Views` to `City Analysis & Visualization`, `Health Diagnostics & Main Application`, `Data Models & Static Constants`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Why does `getCityImage()` connect `City Analysis & Visualization` to `Dashboard Layout & Comparative Views`, `Stations Data & Utility Layer`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **What connects `View`, `WEEKLY_FORECAST`, `COMPOSITE_SCATTER_DATA` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._