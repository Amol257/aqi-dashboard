# 🌫️ India AQI Dashboard — Atmospheric Clarity

> **National air quality dashboard with real-time health impact analysis and monitoring telemetry.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-amol257.github.io-brightgreen?style=flat-square&logo=github)](https://amol257.github.io/aqi-dashboard/)
[![TypeScript](https://img.shields.io/badge/TypeScript-94%25-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

---

## 📌 Overview

**India AQI Dashboard** is a full-featured web application for visualizing and understanding air quality across India. It combines an interactive map, AI-powered health insights via Google Gemini, pollution trend charts, and a curated news feed — all in one clean, responsive interface.

---

## ✨ Features

- **🗺️ Interactive Map** — Leaflet-powered map of India with city-level AQI markers and color-coded pollution zones
- **📊 Trend Charts** — Visualize historical and comparative AQI data across cities using Recharts
- **🤖 AI Health Insights** — Google Gemini AI generates contextual health recommendations based on current air quality
- **📰 News Engine** — Dynamic pollution news feed with fallback to a local dataset for high availability
- **💨 Health Impact Analysis** — Real-time analysis of AQI levels and their effects on different population groups
- **📱 Responsive Design** — Optimized for desktop, tablet, and mobile with a mobile-first philosophy
- **✨ Premium UI** — Fluid glassmorphism UI with smooth animations powered by Motion
- **🔄 Automated Pipeline** — Daily data ingestion and normalization from official government sources

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19, TypeScript |
| Styling | Tailwind CSS v4 |
| Mapping | Leaflet, React-Leaflet |
| Charts | Recharts |
| AI | Google Gemini AI (`@google/genai`) |
| Data Processing | Python 3.12, Requests |
| Build Tool | Vite 6 |
| Icons | Lucide React |
| Deployment | Vercel |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- A [Google Gemini API key](https://aistudio.google.com/app/apikey) (free tier available)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Amol257/india-aqi-dashboard.git
cd india-aqi-dashboard

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local
```

Edit `.env.local` with your credentials:

```env
GEMINI_API_KEY="your_gemini_api_key_here"
APP_URL="http://localhost:3000"
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
india-aqi-dashboard/
├── .github/workflows/        # Automated Data Refresh + Deploy pipelines
├── public/
│   ├── data/                 # Dynamic datasets (local_aqi.json)
│   └── db/cities/            # High-resolution city imagery
├── scripts/
│   ├── fetch_aqi_data.py     # Python script to pull from data.gov.in
│   ├── sync_constants.py     # Script to patch frontend constants with fresh data
│   └── download_images.py    # Utility for managing city assets
├── src/
│   ├── components/           # UI Views (Summary, CityDive, etc.)
│   ├── lib/                  # Utilities and UI helpers
│   └── constants.ts          # Core dataset and static mappings
├── index.html                # HTML entry point
├── package.json              # Dependencies and scripts
└── vite.config.ts            # Vite configuration
```

---

## 📦 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server at `localhost:3000` |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | TypeScript type-check (`tsc --noEmit`) |
| `npm run deploy` | Build and deploy to GitHub Pages |
| `npm run clean` | Remove the `dist/` directory |

---

## 🌐 Deployment

This project is optimized for deployment on **GitHub Pages**.

1. **Automated**: Every push to `main` (and every hour) triggers the [Hourly AQI Data Refresh + Deploy](.github/workflows/hourly_refresh.yml) workflow.
2. **Manual**: You can deploy manually using `npm run deploy`.
3. **Configuration**: Ensure you go to **Settings > Pages** in your GitHub repository and set the source to **GitHub Actions**.
4. **Environment**: Add your `DATA_GOV_API_KEY` to **Settings > Secrets and variables > Actions** for the data refresh script to function in CI.

---

## 🔑 Environment Variables

| Variable | Required | Description |
|---|---|---|
| `VITE_GEMINI_API_KEY` | ✅ | Google Gemini AI API key — get one free at [aistudio.google.com](https://aistudio.google.com/app/apikey) |
| `DATA_GOV_API_KEY` | ❌ | API key for data.gov.in (only required for manual script execution) |

---

## 📡 Data Pipeline & Refresh Rate

The dashboard uses a sophisticated hybrid data pipeline to ensure accuracy and performance:

### 1. Daily Server-Side Refresh
Every day at **06:30 AM IST (01:00 UTC)**, a GitHub Action triggers the following workflow:
- **Fetch**: The `fetch_aqi_data.py` script pulls fresh records from the [official Data.gov.in API](https://api.data.gov.in/).
- **Process**: Data is cleaned, aggregated by city, and health impact metrics (like respiratory admission estimates) are calculated.
- **Sync**: The `sync_constants.ts` script patches the frontend's static metadata to ensure search and filtering indices remain current.
- **Deploy**: A fresh build is automatically deployed to GitHub Pages.

### 2. Live Frontend Polling
- **10-Minute Cycles**: Once the application is loaded in a browser, it performs a local fetch of the `/data/local_aqi.json` file every **10 minutes**.
- **Real-Time UI**: This ensures that if you leave the dashboard open, it will automatically reflect the most recent data ingested by the server without requiring a page reload.

### 3. Data Source
Air quality data is sourced from the **National Air Quality Index (NAQI)** via the Open Government Data (OGD) Platform India.

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

Please ensure `npm run lint` passes before submitting.

---

## 📄 License

This project is open-source. See the repository for details.

---

<p align="center">Made with ❤️ for cleaner air and clearer data</p>
