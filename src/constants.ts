export interface CityData {
  name: string;
  state: string;
  aqi: number;
  status: string;
  pm25: number;
  pm10?: number;
  o3?: number;
  no2?: number;
  admissions?: number;
  trend: 'up' | 'down' | 'stable';
  trendValue?: string;
  imageUrl?: string;
  description?: string;
  lat?: number;
  lng?: number;
}

export const NATIONAL_AQI_AVG = 138;
export const TOTAL_CITIES = 246;
export const TOTAL_STATIONS = 511;

export const TOP_POLLUTED_CITIES: CityData[] = [
  {
    "name": "Khora",
    "state": "Uttar Pradesh",
    "aqi": 244,
    "status": "Very Poor",
    "pm25": 244,
    "trend": "up",
    "admissions": 3078,
    "imageUrl": "./db/cities/Khora/Khora.jpg",
    "description": "Critical levels due to local industrial discharge and high urban density."
  },
  {
    "name": "Charkhi Dadri",
    "state": "Haryana",
    "aqi": 90,
    "status": "Moderate",
    "pm25": 54,
    "trend": "up",
    "admissions": 2762,
    "imageUrl": "./db/cities/Charkhi Dadri/Charkhi Dadri.jpg",
    "description": "Severe hazardous zone with heavy particulate suspension from agricultural activity."
  },
  {
    "name": "Hajipur",
    "state": "Bihar",
    "aqi": 43,
    "status": "Good",
    "pm25": 38,
    "trend": "up",
    "admissions": 2877,
    "imageUrl": "./db/cities/Hajipur/Hajipur.jpg",
    "description": "Severe air quality with high industrial smoke entrapment and stagnant air."
  },
  {
    "name": "Rohtak",
    "state": "Haryana",
    "aqi": 99,
    "status": "Moderate",
    "pm25": 88,
    "trend": "up",
    "admissions": 2986,
    "imageUrl": "./db/cities/Rohtak/Rohtak.jpg",
    "description": "Hazardous conditions with stagnant air and high construction dust content."
  },
  {
    "name": "Modinagar",
    "state": "Uttar Pradesh",
    "aqi": 155,
    "status": "Poor",
    "pm25": 155,
    "trend": "up",
    "admissions": 2687,
    "imageUrl": "./db/cities/Modinagar/Modinagar.jpg",
    "description": "Severe industrial zone impact with concentrated PM 2.5 levels today."
  },
  {
    "name": "Tirupati",
    "state": "Andhra Pradesh",
    "aqi": 47,
    "status": "Good",
    "pm25": 28,
    "trend": "up",
    "admissions": 2629,
    "imageUrl": "./db/cities/Tirupati/Tirupati.jpg",
    "description": "Severe particulate matter levels due to heavy pilgrimage transit traffic."
  },
  {
    "name": "Jind",
    "state": "Haryana",
    "aqi": 144,
    "status": "Poor",
    "pm25": 144,
    "trend": "up",
    "admissions": 2735,
    "imageUrl": "./db/cities/Jind/Jind.jpg",
    "description": "Severe dust pollution exacerbated by seasonal agricultural waste burning."
  },
  {
    "name": "Baddi",
    "state": "Himachal Pradesh",
    "aqi": 156,
    "status": "Poor",
    "pm25": 67,
    "trend": "up",
    "admissions": 2856,
    "imageUrl": "./db/cities/Baddi/Baddi.jpg",
    "description": "Severe industrial belt pollution trapped in the valley topography."
  },
  {
    "name": "Mandi Gobindgarh",
    "state": "Punjab",
    "aqi": 128,
    "status": "Poor",
    "pm25": 81,
    "trend": "up",
    "admissions": 2546,
    "imageUrl": "./db/cities/Mandi Gobindgarh/Mandi Gobindgarh.jpg",
    "description": "Severe hazardous air from extensive local steel and power plant units."
  },
  {
    "name": "Suakati",
    "state": "Odisha",
    "aqi": 58,
    "status": "Moderate",
    "pm25": 31,
    "trend": "up",
    "admissions": 2675,
    "imageUrl": "./db/cities/Suakati/Suakati.jpg",
    "description": "Severe levels in the local mining belt with high mineral dust suspension."
  }
];

export const WEEKLY_FORECAST = [
  { day: "MON", aqi: 184, label: "Poor", color: "var(--aqi-poor)" },
  { day: "TUE", aqi: 192, label: "Poor", color: "var(--aqi-poor)" },
  { day: "WED", aqi: 215, label: "Very Poor", color: "var(--aqi-very-poor)" },
  { day: "THU", aqi: 142, label: "Poor", color: "var(--aqi-poor)" },
  { day: "FRI", aqi: 88, label: "Moderate", color: "var(--aqi-moderate)" },
  { day: "SAT", aqi: 74, label: "Moderate", color: "var(--aqi-moderate)" },
  { day: "SUN", aqi: 112, label: "Poor", color: "var(--aqi-poor)" },
];

export const MAJOR_CITIES_COMPARISON: CityData[] = [
  {
    "name": "Delhi",
    "state": "Delhi",
    "aqi": 327,
    "status": "Severe",
    "pm25": 91,
    "trend": "up",
    "trendValue": "18%",
    "admissions": 8760,
    "imageUrl": "./db/cities/Delhi/Delhi.jpg",
    "description": "Hazardous smog accumulation due to low wind speeds and stubble burning."
  },
  {
    "name": "Mumbai",
    "state": "Maharashtra",
    "aqi": 87,
    "status": "Moderate",
    "pm25": 23,
    "trend": "down",
    "trendValue": "12%",
    "admissions": 7885,
    "imageUrl": "./db/cities/Mumbai/Mumbai.jpg",
    "description": "Moderate air quality. Seasonal sea breeze helping in dispersion."
  },
  {
    "name": "Bengaluru",
    "state": "Karnataka",
    "aqi": 104,
    "status": "Poor",
    "pm25": 35,
    "trend": "stable",
    "trendValue": "STABLE",
    "admissions": 5737,
    "imageUrl": "./db/cities/Bengaluru/Bengaluru.jpg",
    "description": "Good air quality. Occasional rain showers helping dispersion."
  },
  {
    "name": "Kolkata",
    "state": "West Bengal",
    "aqi": 92,
    "status": "Moderate",
    "pm25": 36,
    "trend": "up",
    "trendValue": "8%",
    "admissions": 6115,
    "imageUrl": "./db/cities/Kolkata/Kolkata.jpg",
    "description": "Poor air quality. High humidity and industrial smoke trapped."
  },
  {
    "name": "Chennai",
    "state": "Tamil Nadu",
    "aqi": 144,
    "status": "Poor",
    "pm25": 47,
    "trend": "stable",
    "admissions": 5490,
    "imageUrl": "./db/cities/Chennai/Chennai.jpg",
    "description": "Satisfactory air quality levels thanks to strong coastal wind dispersion."
  },
  {
    "name": "Hyderabad",
    "state": "Telangana",
    "aqi": 71,
    "status": "Moderate",
    "pm25": 28,
    "trend": "stable",
    "admissions": 5498,
    "imageUrl": "./db/cities/Hyderabad/Hyderabad.jpg",
    "description": "Moderate levels due to urban construction and vehicular density."
  }
];

export const STATIONS_DATA = [
  {
    "id": "1",
    "location": "Bardowali, Agartala - Tripura SPCB",
    "city": "Agartala, Tripura",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 23.8175497,
    "lng": 91.2726974,
    "aqi": 58,
    "pollutants": [
      "CO",
      "SO2",
      "PM10",
      "NH3",
      "PM2.5",
      "NO2",
      "OZONE"
    ],
    "pollutant_values": {
          "SO2": 8.0,
          "PM2.5": 58.0,
          "NO2": 16.0
    }
  },
  {
    "id": "2",
    "location": "Manoharpur, Agra - UPPCB",
    "city": "Agra, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 27.23711,
    "lng": 78.01936,
    "aqi": 122,
    "pollutants": [
      "CO",
      "PM10",
      "NH3",
      "OZONE",
      "PM2.5",
      "NO2",
      "SO2"
    ],
    "pollutant_values": {
          "PM2.5": 122.0,
          "SO2": 30.0,
          "PM10": 86.0,
          "OZONE": 5.0,
          "NO2": 29.0,
          "NH3": 1.0,
          "CO": 21.0
    }
  },
  {
    "id": "3",
    "location": "Rohta, Agra - UPPCB",
    "city": "Agra, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 27.106972,
    "lng": 78.000111,
    "aqi": 119,
    "pollutants": [
      "NO2",
      "OZONE",
      "PM2.5",
      "NH3",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "NO2": 15.0,
          "PM10": 119.0,
          "NH3": 5.0,
          "OZONE": 12.0,
          "CO": 28.0,
          "PM2.5": 41.0,
          "SO2": 15.0
    }
  },
  {
    "id": "4",
    "location": "Sanjay Palace, Agra - UPPCB",
    "city": "Agra, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 27.19865833,
    "lng": 78.00598056,
    "aqi": 86,
    "pollutants": [
      "CO",
      "PM10",
      "OZONE",
      "SO2",
      "PM2.5",
      "NO2"
    ],
    "pollutant_values": {
          "PM2.5": 68.0,
          "NO2": 4.0,
          "CO": 24.0,
          "OZONE": 7.0,
          "SO2": 2.0,
          "PM10": 86.0
    }
  },
  {
    "id": "5",
    "location": "Shastripuram, Agra - UPPCB",
    "city": "Agra, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 27.19862,
    "lng": 77.92066,
    "aqi": 95,
    "pollutants": [
      "SO2",
      "CO",
      "PM2.5",
      "NH3",
      "NO2",
      "PM10",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 95.0,
          "NO2": 33.0,
          "PM2.5": 50.0,
          "NH3": 3.0,
          "SO2": 11.0,
          "CO": 12.0,
          "OZONE": 39.0
    }
  },
  {
    "id": "6",
    "location": "Shahjahan Garden, Agra - UPPCB",
    "city": "Agra, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 27.169338,
    "lng": 78.03582,
    "aqi": 100,
    "pollutants": [
      "NH3",
      "SO2",
      "CO",
      "NO2",
      "PM2.5",
      "PM10"
    ],
    "pollutant_values": {
          "PM10": 100.0,
          "NO2": 13.0,
          "NH3": 1.0,
          "CO": 20.0,
          "SO2": 37.0,
          "OZONE": 1.0,
          "PM2.5": 85.0
    }
  },
  {
    "id": "7",
    "location": "Sector-3B Avas Vikas Colony, Agra - UPPCB",
    "city": "Agra, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 27.19412,
    "lng": 77.96237,
    "aqi": 104,
    "pollutants": [
      "OZONE",
      "NH3",
      "SO2",
      "CO",
      "NO2"
    ],
    "pollutant_values": {
          "PM10": 104.0,
          "NH3": 11.0,
          "SO2": 21.0,
          "PM2.5": 80.0,
          "CO": 8.0,
          "OZONE": 14.0,
          "NO2": 35.0
    }
  },
  {
    "id": "8",
    "location": "SAC ISRO Satellite, Ahmedabad - IITM",
    "city": "Ahmedabad, Gujarat",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 23.023389,
    "lng": 72.515201,
    "aqi": 58,
    "pollutants": [
      "SO2",
      "PM10",
      "NO2",
      "CO",
      "OZONE",
      "PM2.5",
      "NH3"
    ],
    "pollutant_values": {
          "PM2.5": 47.0,
          "NO2": 19.0,
          "NH3": 2.0,
          "OZONE": 18.0,
          "SO2": 4.0,
          "PM10": 58.0,
          "CO": 44.0
    }
  },
  {
    "id": "9",
    "location": "SVPI Airport Hansol, Ahmedabad - IITM",
    "city": "Ahmedabad, Gujarat",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 23.076793,
    "lng": 72.627874,
    "aqi": 76,
    "pollutants": [
      "PM2.5",
      "NO2",
      "CO",
      "PM10",
      "NH3",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 36.0,
          "NO2": 34.0,
          "NH3": 2.0,
          "SO2": 7.0,
          "CO": 34.0,
          "PM10": 76.0,
          "OZONE": 4.0
    }
  },
  {
    "id": "10",
    "location": "Chandkheda, Ahmedabad - IITM",
    "city": "Ahmedabad, Gujarat",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 23.107969,
    "lng": 72.574648,
    "aqi": 72,
    "pollutants": [
      "NH3",
      "PM2.5",
      "OZONE",
      "PM10",
      "NO2",
      "CO",
      "SO2"
    ],
    "pollutant_values": {
          "PM10": 72.0,
          "SO2": 8.0,
          "PM2.5": 40.0,
          "CO": 49.0,
          "NO2": 10.0,
          "OZONE": 8.0,
          "NH3": 6.0
    }
  },
  {
    "id": "11",
    "location": "Raikhad, Ahmedabad - IITM",
    "city": "Ahmedabad, Gujarat",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 23.020509,
    "lng": 72.579261,
    "aqi": 68,
    "pollutants": [
      "NH3",
      "PM10",
      "CO",
      "NO2",
      "OZONE",
      "PM2.5",
      "SO2"
    ],
    "pollutant_values": {
          "NH3": 2.0,
          "CO": 37.0,
          "NO2": 10.0,
          "SO2": 5.0,
          "PM10": 68.0,
          "OZONE": 10.0,
          "PM2.5": 32.0
    }
  },
  {
    "id": "12",
    "location": "SAC ISRO Bopal, Ahmedabad - IITM",
    "city": "Ahmedabad, Gujarat",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 23.041137,
    "lng": 72.456691,
    "aqi": 52,
    "pollutants": [
      "PM10",
      "PM2.5",
      "OZONE",
      "SO2",
      "NO2",
      "NH3"
    ],
    "pollutant_values": {
          "NH3": 2.0,
          "CO": 9.0,
          "OZONE": 12.0,
          "SO2": 1.0,
          "PM2.5": 45.0,
          "NO2": 4.0,
          "PM10": 52.0
    }
  },
  {
    "id": "13",
    "location": "Gyaspur, Ahmedabad - IITM",
    "city": "Ahmedabad, Gujarat",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 22.977134,
    "lng": 72.553024,
    "aqi": 86,
    "pollutants": [
      "PM2.5",
      "PM10",
      "CO",
      "NO2",
      "NH3",
      "OZONE",
      "SO2"
    ],
    "pollutant_values": {}
  },
  {
    "id": "14",
    "location": "Maninagar, Ahmedabad - GPCB",
    "city": "Ahmedabad, Gujarat",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 23.002657,
    "lng": 72.591912,
    "aqi": 93,
    "pollutants": [
      "PM2.5",
      "CO",
      "OZONE",
      "NO2",
      "PM10",
      "SO2"
    ],
    "pollutant_values": {
          "OZONE": 17.0,
          "PM2.5": 72.0,
          "PM10": 93.0,
          "NO2": 34.0,
          "SO2": 17.0,
          "CO": 47.0
    }
  },
  {
    "id": "15",
    "location": "Rakhial, Ahmedabad - IITM",
    "city": "Ahmedabad, Gujarat",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 23.016834,
    "lng": 72.625775,
    "aqi": 76,
    "pollutants": [
      "NO2",
      "SO2",
      "CO",
      "OZONE",
      "PM2.5",
      "PM10",
      "NH3"
    ],
    "pollutant_values": {
          "NH3": 5.0,
          "NO2": 13.0,
          "SO2": 18.0,
          "PM2.5": 29.0,
          "PM10": 76.0,
          "CO": 40.0,
          "OZONE": 5.0
    }
  },
  {
    "id": "16",
    "location": "Tarakpur, Ahmednagar - MPCB",
    "city": "Ahmednagar, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.10122,
    "lng": 74.73339,
    "aqi": 27,
    "pollutants": [
      "PM10",
      "NH3",
      "CO",
      "SO2",
      "OZONE",
      "NO2"
    ],
    "pollutant_values": {
          "NO2": 10.0,
          "SO2": 15.0,
          "OZONE": 16.0,
          "PM10": 27.0,
          "NH3": 5.0,
          "CO": 17.0,
          "PM2.5": 23.0
    }
  },
  {
    "id": "17",
    "location": "Sikulpuikawn, Aizawl - Mizoram PCB",
    "city": "Aizawl, Mizoram",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 23.7176342,
    "lng": 92.7192841,
    "aqi": 26,
    "pollutants": [
      "NO2",
      "SO2",
      "CO",
      "PM2.5",
      "PM10"
    ],
    "pollutant_values": {
          "NO2": 1.0,
          "PM10": 26.0,
          "SO2": 14.0,
          "CO": 3.0,
          "OZONE": 6.0
    }
  },
  {
    "id": "18",
    "location": "Civil Lines,  Ajmer - RSPCB",
    "city": "Ajmer, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 26.470859,
    "lng": 74.646594,
    "aqi": 92,
    "pollutants": [
      "PM2.5",
      "SO2",
      "PM10",
      "OZONE",
      "NO2",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "PM10": 92.0,
          "NH3": 6.0,
          "PM2.5": 31.0,
          "NO2": 33.0,
          "OZONE": 6.0,
          "SO2": 8.0,
          "CO": 31.0
    }
  },
  {
    "id": "19",
    "location": "Ramdaspeth, Akola - MPCB",
    "city": "Akola, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 20.719516,
    "lng": 77.000253,
    "aqi": 71,
    "pollutants": [
      "PM10",
      "SO2",
      "PM2.5",
      "NO2",
      "NH3",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 51.0,
          "PM10": 71.0,
          "NO2": 13.0,
          "NH3": 7.0,
          "CO": 21.0,
          "OZONE": 7.0,
          "SO2": 2.0
    }
  },
  {
    "id": "20",
    "location": "Moti Doongri, Alwar - RSPCB",
    "city": "Alwar, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 27.554793,
    "lng": 76.611536,
    "aqi": 140,
    "pollutants": [
      "NO2",
      "SO2",
      "CO",
      "PM2.5",
      "PM10",
      "NH3",
      "OZONE"
    ],
    "pollutant_values": {
          "NO2": 55.0,
          "SO2": 39.0,
          "PM2.5": 140.0,
          "OZONE": 67.0,
          "PM10": 95.0,
          "NH3": 11.0,
          "CO": 40.0
    }
  },
  {
    "id": "21",
    "location": "Secretariat, Amaravati - APPCB",
    "city": "Amaravati, Andhra_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 16.5150833,
    "lng": 80.5181667,
    "aqi": 68,
    "pollutants": [
      "NO2",
      "PM10",
      "CO",
      "NH3",
      "SO2",
      "PM2.5",
      "OZONE"
    ],
    "pollutant_values": {
          "CO": 6.0,
          "PM2.5": 31.0,
          "PM10": 68.0,
          "NO2": 31.0,
          "SO2": 15.0,
          "NH3": 3.0,
          "OZONE": 27.0
    }
  },
  {
    "id": "22",
    "location": "Patti Mehar, Ambala - HSPCB",
    "city": "Ambala, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 30.379589,
    "lng": 76.778328,
    "aqi": 118,
    "pollutants": [
      "OZONE",
      "PM2.5",
      "NO2",
      "PM10",
      "SO2",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "CO": 59.0,
          "OZONE": 35.0,
          "PM2.5": 94.0,
          "NO2": 6.0,
          "NH3": 8.0,
          "PM10": 118.0,
          "SO2": 48.0
    }
  },
  {
    "id": "23",
    "location": "Chinchpada, Ambernath - MPCB",
    "city": "Ambernath, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.215784,
    "lng": 73.199781,
    "aqi": 59,
    "pollutants": [
      "PM2.5",
      "CO",
      "SO2",
      "OZONE",
      "PM10",
      "NO2",
      "NH3"
    ],
    "pollutant_values": {
          "PM2.5": 34.0,
          "PM10": 59.0,
          "NH3": 4.0,
          "OZONE": 5.0,
          "NO2": 4.0,
          "CO": 9.0,
          "SO2": 2.0
    }
  },
  {
    "id": "24",
    "location": "Shivneri Colony, Amravati - MPCB",
    "city": "Amravati, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 20.9402359,
    "lng": 77.7895248,
    "aqi": 30,
    "pollutants": [
      "NO2",
      "PM10",
      "OZONE",
      "PM2.5",
      "CO",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "NO2": 7.0,
          "OZONE": 5.0,
          "PM10": 30.0,
          "PM2.5": 25.0,
          "SO2": 5.0,
          "CO": 17.0,
          "NH3": 2.0
    }
  },
  {
    "id": "25",
    "location": "Shri Shivaji Science College, Amravati - MPCB",
    "city": "Amravati, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 20.939198,
    "lng": 77.765701,
    "aqi": 41,
    "pollutants": [
      "NH3",
      "CO",
      "SO2",
      "PM2.5",
      "PM10",
      "OZONE",
      "NO2"
    ],
    "pollutant_values": {
          "NH3": 3.0,
          "NO2": 10.0,
          "CO": 19.0,
          "PM2.5": 32.0,
          "PM10": 41.0,
          "OZONE": 5.0
    }
  },
  {
    "id": "26",
    "location": "Golden Temple, Amritsar - PPCB",
    "city": "Amritsar, Punjab",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 31.62,
    "lng": 74.876512,
    "aqi": 87,
    "pollutants": [
      "NO2",
      "SO2",
      "CO",
      "PM10",
      "NH3",
      "PM2.5",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 75.0,
          "PM10": 87.0,
          "NO2": 43.0,
          "NH3": 9.0,
          "SO2": 13.0,
          "CO": 27.0,
          "OZONE": 51.0
    }
  },
  {
    "id": "27",
    "location": "Gulzarpet, Anantapur - APPCB",
    "city": "Anantapur, Andhra_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 14.675886,
    "lng": 77.593027,
    "aqi": 139,
    "pollutants": [
      "PM10",
      "OZONE",
      "PM2.5",
      "NO2",
      "NH3",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "OZONE": 25.0,
          "PM2.5": 139.0,
          "NO2": 19.0,
          "SO2": 11.0,
          "PM10": 103.0,
          "NH3": 3.0,
          "CO": 26.0
    }
  },
  {
    "id": "28",
    "location": "Hakimapada, Angul - OSPCB",
    "city": "Angul, Odisha",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 20.832874,
    "lng": 85.104082,
    "aqi": 50,
    "pollutants": [
      "PM2.5",
      "NO2",
      "NH3",
      "OZONE",
      "PM10",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "NH3": 6.0,
          "PM2.5": 28.0,
          "OZONE": 15.0,
          "SO2": 8.0,
          "PM10": 42.0,
          "NO2": 11.0,
          "CO": 50.0
    }
  },
  {
    "id": "29",
    "location": "GIDC, Ankleshwar - GPCB",
    "city": "Ankleshwar, Gujarat",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 21.613267,
    "lng": 73.010555,
    "aqi": 60,
    "pollutants": [
      "CO",
      "NO2",
      "NH3",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 60.0,
          "CO": 60.0,
          "PM2.5": 42.0,
          "SO2": 20.0,
          "OZONE": 9.0,
          "NH3": 5.0,
          "NO2": 15.0
    }
  },
  {
    "id": "30",
    "location": "Kharahiya Basti, Araria - BSPCB",
    "city": "Araria, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 26.146529,
    "lng": 87.454184,
    "aqi": 39,
    "pollutants": [
      "NO2",
      "CO",
      "SO2",
      "OZONE",
      "PM2.5",
      "PM10",
      "NH3"
    ],
    "pollutant_values": {
          "PM10": 32.0,
          "SO2": 21.0,
          "OZONE": 38.0,
          "NO2": 14.0,
          "CO": 11.0,
          "PM2.5": 39.0,
          "NH3": 4.0
    }
  },
  {
    "id": "31",
    "location": "New DM Office, Arrah - BSPCB",
    "city": "Arrah, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 25.5626095,
    "lng": 84.663264,
    "aqi": 53,
    "pollutants": [
      "PM10",
      "NO2",
      "OZONE",
      "NH3",
      "CO",
      "PM2.5",
      "SO2"
    ],
    "pollutant_values": {
          "NO2": 7.0,
          "SO2": 5.0,
          "CO": 53.0,
          "OZONE": 7.0,
          "NH3": 2.0
    }
  },
  {
    "id": "32",
    "location": "Evelyn Lodge, Asansol - WBPCB",
    "city": "Asansol, West_Bengal",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 23.697936,
    "lng": 86.944395,
    "aqi": 75,
    "pollutants": [
      "NO2",
      "NH3",
      "CO",
      "OZONE",
      "PM2.5",
      "PM10",
      "SO2"
    ],
    "pollutant_values": {
          "CO": 28.0,
          "PM2.5": 21.0,
          "OZONE": 17.0,
          "PM10": 27.0,
          "NO2": 14.0,
          "NH3": 6.0,
          "SO2": 75.0
    }
  },
  {
    "id": "33",
    "location": "Trivenidevi Bhalotia College, Asansol - WBPCB",
    "city": "Asansol, West_Bengal",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 23.616515,
    "lng": 87.119133,
    "aqi": 38,
    "pollutants": [
      "SO2",
      "PM2.5",
      "PM10",
      "NH3",
      "NO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 29.0,
          "NH3": 6.0,
          "CO": 35.0,
          "NO2": 9.0,
          "PM2.5": 38.0,
          "SO2": 31.0,
          "OZONE": 7.0
    }
  },
  {
    "id": "34",
    "location": "Asansol Court Area, Asansol - WBPCB",
    "city": "Asansol, West_Bengal",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 23.685297,
    "lng": 86.945968,
    "aqi": 41,
    "pollutants": [
      "SO2",
      "CO",
      "PM2.5",
      "PM10",
      "NO2",
      "NH3",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 34.0,
          "PM10": 41.0,
          "NH3": 3.0,
          "CO": 25.0,
          "NO2": 31.0,
          "OZONE": 29.0,
          "SO2": 12.0
    }
  },
  {
    "id": "35",
    "location": "Mahabir Colliery, Asansol - WBPCB",
    "city": "Asansol, West_Bengal",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 23.618183,
    "lng": 87.105718,
    "aqi": 49,
    "pollutants": [
      "SO2",
      "PM2.5",
      "NH3",
      "PM10",
      "NO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "SO2": 8.0,
          "CO": 49.0,
          "PM2.5": 44.0,
          "OZONE": 13.0,
          "PM10": 41.0,
          "NO2": 2.0
    }
  },
  {
    "id": "36",
    "location": "Gurdeo Nagar, Aurangabad - BSPCB",
    "city": "Aurangabad, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 24.75746,
    "lng": 84.366208,
    "aqi": 102,
    "pollutants": [
      "OZONE",
      "NO2",
      "SO2",
      "PM10",
      "CO",
      "PM2.5",
      "NH3"
    ],
    "pollutant_values": {
          "SO2": 8.0,
          "CO": 102.0,
          "NH3": 1.0,
          "NO2": 8.0,
          "OZONE": 6.0
    }
  },
  {
    "id": "37",
    "location": "Rachnakar Colony, Aurangabad - MPCB",
    "city": "Aurangabad, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.863756,
    "lng": 75.321188,
    "aqi": 47,
    "pollutants": [
      "NH3",
      "PM10",
      "OZONE",
      "SO2",
      "NO2",
      "PM2.5",
      "CO"
    ],
    "pollutant_values": {
          "SO2": 5.0,
          "CO": 27.0,
          "PM2.5": 38.0,
          "PM10": 47.0,
          "NO2": 11.0,
          "NH3": 1.0,
          "OZONE": 9.0
    }
  },
  {
    "id": "38",
    "location": "More Chowk Waluj, Aurangabad - MPCB",
    "city": "Aurangabad, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.8389439,
    "lng": 75.244448,
    "aqi": 51,
    "pollutants": [
      "NH3",
      "PM2.5",
      "OZONE",
      "PM10",
      "CO",
      "NO2",
      "SO2"
    ],
    "pollutant_values": {
          "PM2.5": 50.0,
          "SO2": 29.0,
          "CO": 33.0,
          "NH3": 7.0,
          "PM10": 51.0,
          "NO2": 10.0,
          "OZONE": 12.0
    }
  },
  {
    "id": "39",
    "location": "HIMUDA Complex Phase-1, Baddi - HPPCB",
    "city": "Baddi, Himachal Pradesh",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 30.943887,
    "lng": 76.801991,
    "aqi": 156,
    "pollutants": [
      "NO2",
      "PM10",
      "SO2",
      "CO",
      "PM2.5",
      "NH3",
      "OZONE"
    ],
    "pollutant_values": {
          "CO": 36.0,
          "NH3": 7.0,
          "PM2.5": 67.0,
          "PM10": 156.0,
          "SO2": 15.0,
          "OZONE": 23.0,
          "NO2": 12.0
    }
  },
  {
    "id": "40",
    "location": "Katrap, Badlapur - MPCB",
    "city": "Badlapur, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.16485,
    "lng": 73.23409,
    "aqi": 48,
    "pollutants": [
      "PM10",
      "NO2",
      "SO2",
      "PM2.5",
      "OZONE",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 43.0,
          "OZONE": 26.0,
          "PM10": 48.0,
          "NO2": 16.0,
          "NH3": 7.0,
          "CO": 18.0,
          "SO2": 3.0
    }
  },
  {
    "id": "41",
    "location": "Vidayagiri, Bagalkot - KSPCB",
    "city": "Bagalkot, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 16.172806,
    "lng": 75.659694,
    "aqi": 51,
    "pollutants": [
      "OZONE",
      "SO2",
      "CO",
      "NO2",
      "NH3",
      "PM2.5",
      "PM10"
    ],
    "pollutant_values": {
          "PM2.5": 32.0,
          "NH3": 1.0,
          "PM10": 51.0,
          "NO2": 10.0,
          "SO2": 10.0,
          "OZONE": 18.0,
          "CO": 28.0
    }
  },
  {
    "id": "42",
    "location": "Sardar Patel Inter College, Baghpat - UPPCB",
    "city": "Baghpat, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.964949,
    "lng": 77.278761,
    "aqi": 137,
    "pollutants": [
      "OZONE",
      "NH3",
      "NO2",
      "PM2.5",
      "SO2",
      "PM10",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 72.0,
          "NO2": 9.0,
          "NH3": 1.0,
          "OZONE": 49.0,
          "PM10": 137.0,
          "SO2": 7.0,
          "CO": 15.0
    }
  },
  {
    "id": "43",
    "location": "Arya Nagar, Bahadurgarh - HSPCB",
    "city": "Bahadurgarh, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.6701,
    "lng": 76.9254,
    "aqi": 47,
    "pollutants": [
      "PM2.5",
      "SO2",
      "NH3",
      "CO",
      "PM10",
      "NO2",
      "OZONE"
    ],
    "pollutant_values": {
          "OZONE": 24.0,
          "CO": 47.0
    }
  },
  {
    "id": "44",
    "location": "Kalidaspur, Balasore - OSPCB",
    "city": "Balasore, Odisha",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 21.51161,
    "lng": 86.89088,
    "aqi": 82,
    "pollutants": [
      "SO2",
      "CO",
      "PM10",
      "NO2",
      "PM2.5",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 54.0,
          "PM10": 82.0,
          "CO": 47.0,
          "NO2": 17.0,
          "NH3": 3.0,
          "SO2": 5.0,
          "OZONE": 49.0
    }
  },
  {
    "id": "45",
    "location": "Nathu Colony, Ballabgarh - HSPCB",
    "city": "Ballabgarh, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.3419248,
    "lng": 77.319699,
    "aqi": 175,
    "pollutants": [
      "NH3",
      "PM10",
      "PM2.5",
      "SO2",
      "NO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "SO2": 4.0,
          "PM10": 175.0,
          "CO": 53.0,
          "OZONE": 5.0
    }
  },
  {
    "id": "46",
    "location": "Rati Talai, Banswara - RSPCB",
    "city": "Banswara, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 23.55519,
    "lng": 74.44001,
    "aqi": 85,
    "pollutants": [
      "SO2",
      "PM2.5",
      "OZONE",
      "PM10",
      "NO2",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "PM10": 85.0,
          "CO": 22.0,
          "OZONE": 33.0,
          "SO2": 3.0,
          "PM2.5": 54.0
    }
  },
  {
    "id": "47",
    "location": "Bamboliya, Baran - RSPCB",
    "city": "Baran, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 25.106006,
    "lng": 76.469948,
    "aqi": 74,
    "pollutants": [
      "NH3",
      "SO2",
      "OZONE",
      "NO2",
      "CO",
      "PM2.5",
      "PM10"
    ],
    "pollutant_values": {
          "CO": 44.0,
          "NO2": 25.0,
          "OZONE": 60.0,
          "PM10": 74.0,
          "NH3": 2.0,
          "PM2.5": 24.0,
          "SO2": 8.0
    }
  },
  {
    "id": "48",
    "location": "Forest Office, Barbil - OSPCB",
    "city": "Barbil, Odisha",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 22.1166054,
    "lng": 85.3945546,
    "aqi": 76,
    "pollutants": [
      "PM2.5",
      "NO2",
      "NH3",
      "OZONE",
      "PM10",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "SO2": 11.0,
          "CO": 21.0,
          "PM2.5": 47.0,
          "PM10": 76.0,
          "NO2": 5.0,
          "NH3": 3.0,
          "OZONE": 22.0
    }
  },
  {
    "id": "49",
    "location": "Civil Lines, Bareilly - UPPCB",
    "city": "Bareilly, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.359581,
    "lng": 79.414455,
    "aqi": 85,
    "pollutants": [
      "OZONE",
      "SO2",
      "PM10",
      "NH3",
      "PM2.5",
      "NO2",
      "CO"
    ],
    "pollutant_values": {
          "SO2": 20.0,
          "PM10": 36.0,
          "NO2": 9.0,
          "CO": 25.0,
          "NH3": 6.0,
          "PM2.5": 38.0,
          "OZONE": 85.0
    }
  },
  {
    "id": "50",
    "location": "Rajendra Nagar, Bareilly - UPPCB",
    "city": "Bareilly, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.38910936,
    "lng": 79.42963708,
    "aqi": 11,
    "pollutants": [
      "OZONE",
      "NO2",
      "CO",
      "NH3",
      "SO2",
      "PM2.5",
      "PM10"
    ],
    "pollutant_values": {
          "NO2": 10.0,
          "CO": 11.0,
          "NH3": 1.0,
          "SO2": 5.0,
          "OZONE": 8.0
    }
  },
  {
    "id": "51",
    "location": "Meher Colony, Baripada - OSPCB",
    "city": "Baripada, Odisha",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 21.941841,
    "lng": 86.728318,
    "aqi": 69,
    "pollutants": [
      "PM10",
      "PM2.5",
      "CO",
      "NH3",
      "NO2",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 69.0,
          "NO2": 10.0,
          "OZONE": 56.0,
          "SO2": 10.0,
          "CO": 23.0,
          "PM2.5": 66.0,
          "NH3": 2.0
    }
  },
  {
    "id": "52",
    "location": "Railway Colony, Barmer - RSPCB",
    "city": "Barmer, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 25.747299,
    "lng": 71.393989,
    "aqi": 36,
    "pollutants": [
      "CO",
      "OZONE",
      "PM10",
      "SO2",
      "PM2.5",
      "NO2",
      "NH3"
    ],
    "pollutant_values": {
          "OZONE": 36.0,
          "CO": 13.0,
          "PM2.5": 21.0,
          "SO2": 4.0,
          "NO2": 6.0,
          "NH3": 6.0
    }
  },
  {
    "id": "53",
    "location": "SVSPA Campus, Barrackpore - WBPCB",
    "city": "Barrackpore, West_Bengal",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.7605581,
    "lng": 88.3617589,
    "aqi": 46,
    "pollutants": [
      "NH3",
      "PM10",
      "SO2",
      "PM2.5",
      "NO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "SO2": 11.0,
          "OZONE": 8.0,
          "NO2": 14.0,
          "NH3": 7.0,
          "PM10": 46.0,
          "CO": 40.0,
          "PM2.5": 35.0
    }
  },
  {
    "id": "54",
    "location": "Hardev Nagar, Bathinda - PPCB",
    "city": "Bathinda, Punjab",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 30.233011,
    "lng": 74.907758,
    "aqi": 78,
    "pollutants": [
      "NO2",
      "SO2",
      "PM2.5",
      "PM10",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 41.0,
          "NO2": 32.0,
          "CO": 78.0,
          "PM10": 70.0,
          "SO2": 16.0
    }
  },
  {
    "id": "55",
    "location": "Lohiyanagar, Begusarai - BSPCB",
    "city": "Begusarai, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 25.42742023,
    "lng": 86.13886079,
    "aqi": 40,
    "pollutants": [
      "NH3",
      "CO",
      "NO2",
      "SO2",
      "PM2.5",
      "PM10",
      "OZONE"
    ],
    "pollutant_values": {
          "NH3": 16.0,
          "OZONE": 40.0,
          "NO2": 8.0,
          "SO2": 15.0,
          "CO": 17.0
    }
  },
  {
    "id": "56",
    "location": "CBD Belapur, Belapur - MPCB",
    "city": "Belapur, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.0243902,
    "lng": 73.0406721,
    "aqi": 33,
    "pollutants": [
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "NH3": 3.0,
          "PM2.5": 22.0,
          "PM10": 33.0,
          "NO2": 21.0,
          "CO": 30.0,
          "SO2": 9.0,
          "OZONE": 18.0
    }
  },
  {
    "id": "57",
    "location": "Ramteerth Nagar, Belgaum - KSPCB",
    "city": "Belgaum, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 15.888653,
    "lng": 74.541751,
    "aqi": 54,
    "pollutants": [
      "OZONE",
      "NH3",
      "PM2.5",
      "NO2",
      "SO2",
      "PM10"
    ],
    "pollutant_values": {
          "PM2.5": 32.0,
          "OZONE": 19.0,
          "PM10": 42.0,
          "NH3": 4.0,
          "SO2": 54.0,
          "NO2": 35.0
    }
  },
  {
    "id": "58",
    "location": "Jayanagar 5th Block, Bengaluru - KSPCB",
    "city": "Bengaluru, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 12.920984,
    "lng": 77.584908,
    "aqi": 45,
    "pollutants": [
      "OZONE",
      "SO2",
      "PM2.5",
      "PM10",
      "NO2",
      "CO"
    ],
    "pollutant_values": {
          "PM10": 42.0,
          "SO2": 27.0,
          "PM2.5": 39.0,
          "NO2": 10.0,
          "NH3": 1.0,
          "OZONE": 45.0,
          "CO": 9.0
    }
  },
  {
    "id": "59",
    "location": "RVCE-Mailasandra, Bengaluru - KSPCB",
    "city": "Bengaluru, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 12.921418,
    "lng": 77.502466,
    "aqi": 29,
    "pollutants": [
      "PM10",
      "NH3",
      "PM2.5",
      "NO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "OZONE": 29.0,
          "CO": 4.0
    }
  },
  {
    "id": "60",
    "location": "Shivapura_Peenya, Bengaluru - KSPCB",
    "city": "Bengaluru, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 13.0246342,
    "lng": 77.5080115,
    "aqi": 51,
    "pollutants": [
      "PM2.5",
      "NH3",
      "PM10",
      "NO2",
      "SO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 51.0,
          "NO2": 29.0,
          "SO2": 4.0,
          "OZONE": 29.0,
          "PM2.5": 27.0,
          "NH3": 4.0
    }
  },
  {
    "id": "61",
    "location": "Bapuji Nagar, Bengaluru - KSPCB",
    "city": "Bengaluru, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 12.951913,
    "lng": 77.539784,
    "aqi": 42,
    "pollutants": [
      "PM10",
      "SO2",
      "PM2.5",
      "NH3",
      "CO",
      "NO2",
      "OZONE"
    ],
    "pollutant_values": {
          "NO2": 28.0,
          "PM2.5": 30.0,
          "PM10": 42.0,
          "NH3": 3.0,
          "SO2": 29.0,
          "OZONE": 30.0
    }
  },
  {
    "id": "62",
    "location": "City Railway Station, Bengaluru - KSPCB",
    "city": "Bengaluru, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 12.9756843,
    "lng": 77.5660749,
    "aqi": 104,
    "pollutants": [
      "CO",
      "PM10",
      "NO2",
      "SO2"
    ],
    "pollutant_values": {
          "SO2": 10.0,
          "PM10": 104.0,
          "NO2": 29.0
    }
  },
  {
    "id": "63",
    "location": "Silk Board, Bengaluru - KSPCB",
    "city": "Bengaluru, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 12.917348,
    "lng": 77.622813,
    "aqi": 93,
    "pollutants": [
      "CO",
      "NO2",
      "PM10",
      "NH3",
      "SO2",
      "PM2.5",
      "OZONE"
    ],
    "pollutant_values": {
          "NH3": 4.0,
          "SO2": 2.0,
          "PM2.5": 38.0,
          "NO2": 11.0,
          "PM10": 93.0,
          "OZONE": 19.0
    }
  },
  {
    "id": "64",
    "location": "BTM Layout, Bengaluru - CPCB",
    "city": "Bengaluru, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 12.9135218,
    "lng": 77.5950804,
    "aqi": 60,
    "pollutants": [
      "CO",
      "PM10",
      "NO2",
      "PM2.5",
      "NH3",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 28.0,
          "SO2": 16.0,
          "OZONE": 21.0,
          "NH3": 3.0,
          "CO": 48.0,
          "PM10": 60.0,
          "NO2": 22.0
    }
  },
  {
    "id": "65",
    "location": "BWSSB Kadabesanahalli, Bengaluru - CPCB",
    "city": "Bengaluru, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 12.9352049,
    "lng": 77.6814488,
    "aqi": 60,
    "pollutants": [
      "NH3",
      "SO2",
      "PM10",
      "CO",
      "PM2.5",
      "NO2",
      "OZONE"
    ],
    "pollutant_values": {
          "CO": 37.0,
          "NH3": 1.0,
          "SO2": 3.0,
          "PM2.5": 60.0,
          "NO2": 6.0,
          "OZONE": 20.0
    }
  },
  {
    "id": "66",
    "location": "Hebbal, Bengaluru - KSPCB",
    "city": "Bengaluru, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 13.029152,
    "lng": 77.585901,
    "aqi": 32,
    "pollutants": [
      "PM10",
      "CO",
      "PM2.5",
      "NO2",
      "OZONE",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "PM10": 32.0,
          "CO": 10.0,
          "PM2.5": 18.0,
          "NO2": 18.0,
          "NH3": 2.0,
          "SO2": 11.0,
          "OZONE": 2.0
    }
  },
  {
    "id": "67",
    "location": "Hombegowda Nagar, Bengaluru - KSPCB",
    "city": "Bengaluru, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 12.938539,
    "lng": 77.5901,
    "aqi": 50,
    "pollutants": [
      "PM10",
      "NH3",
      "PM2.5",
      "NO2",
      "SO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "OZONE": 25.0,
          "PM2.5": 30.0,
          "PM10": 50.0,
          "NO2": 26.0,
          "CO": 8.0,
          "NH3": 1.0,
          "SO2": 6.0
    }
  },
  {
    "id": "68",
    "location": "Jigani, Bengaluru - KSPCB",
    "city": "Bengaluru, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 12.7816279,
    "lng": 77.6299145,
    "aqi": 64,
    "pollutants": [
      "NO2",
      "SO2",
      "NH3",
      "CO",
      "OZONE",
      "PM2.5",
      "PM10"
    ],
    "pollutant_values": {
          "PM10": 64.0,
          "CO": 51.0,
          "OZONE": 22.0,
          "NO2": 28.0,
          "NH3": 3.0,
          "SO2": 16.0,
          "PM2.5": 40.0
    }
  },
  {
    "id": "69",
    "location": "Sanegurava Halli, Bengaluru - KSPCB",
    "city": "Bengaluru, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 12.990328,
    "lng": 77.5431385,
    "aqi": 47,
    "pollutants": [
      "CO"
    ],
    "pollutant_values": {
          "NO2": 18.0,
          "PM10": 47.0,
          "SO2": 6.0,
          "CO": 22.0
    }
  },
  {
    "id": "70",
    "location": "Kamalnath Nagar, Bettiah - BSPCB",
    "city": "Bettiah, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 26.80365,
    "lng": 84.51954,
    "aqi": 43,
    "pollutants": [
      "NO2",
      "CO",
      "PM2.5",
      "NH3",
      "PM10",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "NO2": 28.0,
          "CO": 43.0,
          "NH3": 3.0,
          "SO2": 13.0,
          "OZONE": 23.0
    }
  },
  {
    "id": "71",
    "location": "Mayaganj, Bhagalpur - BSPCB",
    "city": "Bhagalpur, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 25.265194,
    "lng": 87.012947,
    "aqi": 31,
    "pollutants": [
      "NO2",
      "PM2.5",
      "PM10",
      "SO2",
      "CO",
      "OZONE",
      "NH3"
    ],
    "pollutant_values": {
          "SO2": 19.0,
          "CO": 31.0,
          "NH3": 2.0,
          "OZONE": 18.0,
          "NO2": 8.0
    }
  },
  {
    "id": "72",
    "location": "DM Office_Kachari Chowk, Bhagalpur - BSPCB",
    "city": "Bhagalpur, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 25.251013,
    "lng": 86.989001,
    "aqi": 83,
    "pollutants": [
      "NO2",
      "OZONE",
      "PM2.5",
      "PM10",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "PM2.5": 30.0,
          "NH3": 4.0,
          "CO": 15.0,
          "OZONE": 17.0,
          "PM10": 83.0,
          "NO2": 12.0,
          "SO2": 23.0
    }
  },
  {
    "id": "73",
    "location": "Krishna Nagar, Bharatpur - RSPCB",
    "city": "Bharatpur, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 27.215415,
    "lng": 77.50873,
    "aqi": 64,
    "pollutants": [
      "PM2.5",
      "NO2",
      "SO2",
      "CO",
      "OZONE",
      "PM10",
      "NH3"
    ],
    "pollutant_values": {
          "OZONE": 43.0,
          "NO2": 14.0,
          "PM10": 64.0,
          "PM2.5": 20.0,
          "NH3": 8.0,
          "CO": 16.0
    }
  },
  {
    "id": "74",
    "location": "Vidhyanagar, Bhavnagar - Nexteng Enviro",
    "city": "Bhavnagar, Gujarat",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 21.755417,
    "lng": 72.139056,
    "aqi": 82,
    "pollutants": [
      "CO",
      "OZONE",
      "NO2",
      "SO2",
      "PM2.5",
      "PM10",
      "NH3"
    ],
    "pollutant_values": {
          "PM10": 49.0,
          "NH3": 4.0,
          "PM2.5": 35.0,
          "SO2": 7.0,
          "NO2": 46.0,
          "CO": 82.0,
          "OZONE": 20.0
    }
  },
  {
    "id": "75",
    "location": "Hathkhoj, Bhilai - CECB",
    "city": "Bhilai, Chhattisgarh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 21.224231,
    "lng": 81.40835,
    "aqi": 28,
    "pollutants": [
      "PM10",
      "NO2",
      "NH3",
      "CO",
      "PM2.5",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 24.0,
          "NH3": 5.0,
          "CO": 15.0,
          "NO2": 16.0,
          "SO2": 16.0,
          "PM10": 28.0,
          "OZONE": 13.0
    }
  },
  {
    "id": "76",
    "location": "32Bungalows, Bhilai - CECB",
    "city": "Bhilai, Chhattisgarh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 21.194815,
    "lng": 81.31477,
    "aqi": 30,
    "pollutants": [
      "SO2",
      "PM10",
      "PM2.5",
      "NH3",
      "OZONE",
      "CO",
      "NO2"
    ],
    "pollutant_values": {
          "PM2.5": 20.0,
          "OZONE": 15.0,
          "PM10": 30.0,
          "NH3": 3.0,
          "SO2": 11.0,
          "CO": 14.0,
          "NO2": 7.0
    }
  },
  {
    "id": "77",
    "location": "Civic Center, Bhilai - Bhilai Steel Plant",
    "city": "Bhilai, Chhattisgarh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 21.185571,
    "lng": 81.343175,
    "aqi": 20,
    "pollutants": [
      "CO",
      "PM10",
      "NO2",
      "OZONE",
      "PM2.5",
      "SO2",
      "NH3"
    ],
    "pollutant_values": {
          "PM2.5": 12.0,
          "OZONE": 11.0,
          "PM10": 16.0,
          "NO2": 16.0,
          "NH3": 1.0,
          "SO2": 10.0,
          "CO": 20.0
    }
  },
  {
    "id": "78",
    "location": "Pratap Nagar, Bhilwara - RSPCB",
    "city": "Bhilwara, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 25.339605,
    "lng": 74.618883,
    "aqi": 94,
    "pollutants": [
      "CO",
      "PM10",
      "SO2",
      "OZONE",
      "PM2.5",
      "NO2",
      "NH3"
    ],
    "pollutant_values": {
          "NH3": 4.0,
          "SO2": 17.0,
          "CO": 54.0,
          "PM2.5": 45.0,
          "PM10": 94.0,
          "NO2": 12.0
    }
  },
  {
    "id": "79",
    "location": "RIICO Ind. Area III, Bhiwadi - RSPCB",
    "city": "Bhiwadi, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.194909,
    "lng": 76.862296,
    "aqi": 51,
    "pollutants": [
      "NH3",
      "OZONE",
      "PM2.5",
      "SO2",
      "PM10",
      "CO",
      "NO2"
    ],
    "pollutant_values": {
          "NO2": 51.0,
          "SO2": 10.0,
          "CO": 35.0,
          "NH3": 8.0
    }
  },
  {
    "id": "80",
    "location": "Vasundhara Nagar_UIT, Bhiwadi - RSPCB",
    "city": "Bhiwadi, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.207266,
    "lng": 76.829265,
    "aqi": 107,
    "pollutants": [
      "PM10",
      "NO2",
      "NH3",
      "SO2",
      "PM2.5",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 107.0,
          "NO2": 20.0,
          "CO": 35.0,
          "SO2": 10.0,
          "PM2.5": 73.0,
          "NH3": 8.0,
          "OZONE": 22.0
    }
  },
  {
    "id": "81",
    "location": "Gokul Nagar, Bhiwandi - MPCB",
    "city": "Bhiwandi, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.309073,
    "lng": 73.057223,
    "aqi": 16,
    "pollutants": [
      "CO",
      "NH3",
      "OZONE",
      "NO2",
      "SO2",
      "PM2.5",
      "PM10"
    ],
    "pollutant_values": {
          "OZONE": 16.0,
          "CO": 4.0
    }
  },
  {
    "id": "82",
    "location": "H.B. Colony, Bhiwani - HSPCB",
    "city": "Bhiwani, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.806223,
    "lng": 76.141105,
    "aqi": 131,
    "pollutants": [
      "OZONE",
      "NO2",
      "NH3",
      "PM2.5",
      "PM10",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 131.0,
          "PM10": 115.0,
          "OZONE": 14.0,
          "CO": 22.0,
          "NO2": 8.0,
          "NH3": 2.0,
          "SO2": 13.0
    }
  },
  {
    "id": "83",
    "location": "Paryavaran Parisar, Bhopal - MPPCB",
    "city": "Bhopal, Madhya Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 23.210494,
    "lng": 77.425409,
    "aqi": 43,
    "pollutants": [
      "PM10",
      "CO",
      "PM2.5",
      "NO2",
      "NH3",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "CO": 13.0,
          "PM10": 43.0,
          "NO2": 14.0,
          "SO2": 5.0,
          "PM2.5": 30.0,
          "NH3": 5.0,
          "OZONE": 27.0
    }
  },
  {
    "id": "84",
    "location": "T T Nagar, Bhopal - MPPCB",
    "city": "Bhopal, Madhya Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 23.233584,
    "lng": 77.400574,
    "aqi": 62,
    "pollutants": [
      "PM10",
      "NH3",
      "SO2",
      "OZONE",
      "PM2.5",
      "NO2",
      "CO"
    ],
    "pollutant_values": {
          "CO": 23.0,
          "OZONE": 27.0,
          "NH3": 6.0,
          "SO2": 22.0,
          "PM10": 62.0
    }
  },
  {
    "id": "85",
    "location": "Idgah Hills, Bhopal - MPPCB",
    "city": "Bhopal, Madhya Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 23.264759,
    "lng": 77.381568,
    "aqi": 78,
    "pollutants": [
      "NH3",
      "SO2",
      "PM2.5",
      "PM10",
      "NO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 35.0,
          "NH3": 1.0,
          "NO2": 17.0,
          "PM10": 78.0,
          "SO2": 6.0
    }
  },
  {
    "id": "86",
    "location": "Lingraj Mandir, Bhubaneswar - OSPCB",
    "city": "Bhubaneswar, Odisha",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 20.24079,
    "lng": 85.836784,
    "aqi": 56,
    "pollutants": [
      "PM2.5",
      "PM10",
      "NO2",
      "NH3",
      "SO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "NO2": 18.0,
          "NH3": 3.0,
          "SO2": 5.0,
          "OZONE": 27.0,
          "PM2.5": 50.0,
          "PM10": 51.0,
          "CO": 56.0
    }
  },
  {
    "id": "87",
    "location": "Patia, Bhubaneswar - OSPCB",
    "city": "Bhubaneswar, Odisha",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 20.34652,
    "lng": 85.8163,
    "aqi": 55,
    "pollutants": [
      "PM10",
      "NH3",
      "CO",
      "PM2.5",
      "SO2",
      "OZONE",
      "NO2"
    ],
    "pollutant_values": {
          "PM10": 55.0,
          "SO2": 8.0,
          "PM2.5": 32.0,
          "NO2": 7.0,
          "OZONE": 37.0,
          "NH3": 2.0,
          "CO": 36.0
    }
  },
  {
    "id": "88",
    "location": "D M Colony, Bihar Sharif - BSPCB",
    "city": "Bihar Sharif, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 25.204762,
    "lng": 85.51496,
    "aqi": 105,
    "pollutants": [
      "SO2",
      "NO2",
      "OZONE",
      "PM10",
      "NH3",
      "PM2.5",
      "CO"
    ],
    "pollutant_values": {
          "SO2": 7.0,
          "OZONE": 2.0,
          "NO2": 9.0,
          "NH3": 3.0,
          "CO": 105.0
    }
  },
  {
    "id": "89",
    "location": "MM Ground, Bikaner - RSPCB",
    "city": "Bikaner, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.018792,
    "lng": 73.292658,
    "aqi": 97,
    "pollutants": [
      "OZONE",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 23.0,
          "CO": 18.0,
          "OZONE": 38.0,
          "PM10": 97.0,
          "NO2": 10.0,
          "NH3": 2.0
    }
  },
  {
    "id": "90",
    "location": "Mangala, Bilaspur - NTPC",
    "city": "Bilaspur, Chhattisgarh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.08815,
    "lng": 82.13737,
    "aqi": 18,
    "pollutants": [
      "PM2.5",
      "SO2",
      "PM10",
      "NO2",
      "CO"
    ],
    "pollutant_values": {
          "PM10": 16.0,
          "PM2.5": 16.0,
          "NO2": 18.0
    }
  },
  {
    "id": "91",
    "location": "Tata Township, Bileipada - OSPCB",
    "city": "Bileipada, Odisha",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 22.06156703,
    "lng": 85.47409613,
    "aqi": 108,
    "pollutants": [
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "OZONE": 15.0,
          "PM2.5": 108.0,
          "NO2": 16.0,
          "PM10": 95.0,
          "NH3": 5.0,
          "SO2": 7.0,
          "CO": 26.0
    }
  },
  {
    "id": "92",
    "location": "Khaira, Boisar - MPCB",
    "city": "Boisar, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.786089,
    "lng": 72.757971,
    "aqi": 46,
    "pollutants": [
      "OZONE",
      "PM2.5",
      "PM10",
      "SO2",
      "NO2",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "PM10": 46.0,
          "SO2": 3.0,
          "CO": 7.0,
          "PM2.5": 35.0
    }
  },
  {
    "id": "93",
    "location": "GM Office, Brajrajnagar - OSPCB",
    "city": "Brajrajnagar, Odisha",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 21.8004996,
    "lng": 83.8396977,
    "aqi": 43,
    "pollutants": [
      "SO2",
      "PM10",
      "CO",
      "OZONE",
      "PM2.5",
      "NO2",
      "NH3"
    ],
    "pollutant_values": {
          "NO2": 19.0,
          "PM10": 37.0,
          "SO2": 24.0,
          "NH3": 5.0,
          "PM2.5": 26.0,
          "CO": 29.0,
          "OZONE": 43.0
    }
  },
  {
    "id": "94",
    "location": "Yamunapuram, Bulandshahr - UPPCB",
    "city": "Bulandshahr, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.406963,
    "lng": 77.849831,
    "aqi": 157,
    "pollutants": [
      "PM2.5",
      "NO2",
      "NH3",
      "SO2",
      "PM10",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "NO2": 17.0,
          "SO2": 13.0,
          "CO": 41.0,
          "OZONE": 5.0,
          "PM2.5": 86.0,
          "PM10": 157.0,
          "NH3": 16.0
    }
  },
  {
    "id": "95",
    "location": "New Colony, Bundi - RSPCB",
    "city": "Bundi, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 25.435774,
    "lng": 75.644272,
    "aqi": 74,
    "pollutants": [
      "OZONE",
      "SO2",
      "PM2.5",
      "NH3",
      "CO",
      "PM10",
      "NO2"
    ],
    "pollutant_values": {
          "PM2.5": 35.0,
          "SO2": 5.0,
          "PM10": 74.0,
          "NO2": 33.0,
          "NH3": 5.0,
          "CO": 17.0
    }
  },
  {
    "id": "96",
    "location": "Charitra Van, Buxar - BSPCB",
    "city": "Buxar, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 25.56752,
    "lng": 83.966379,
    "aqi": 30,
    "pollutants": [
      "NH3",
      "PM10",
      "SO2",
      "PM2.5",
      "OZONE",
      "NO2",
      "CO"
    ],
    "pollutant_values": {
          "CO": 24.0,
          "OZONE": 13.0,
          "NH3": 3.0,
          "SO2": 30.0,
          "NO2": 9.0
    }
  },
  {
    "id": "97",
    "location": "Ferro Chrome Colony, Byasanagar - OSPCB",
    "city": "Byasanagar, Odisha",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 20.94185,
    "lng": 86.1151,
    "aqi": 67,
    "pollutants": [
      "NH3",
      "NO2",
      "PM2.5",
      "PM10",
      "SO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "NO2": 13.0,
          "PM2.5": 67.0,
          "CO": 23.0,
          "OZONE": 38.0,
          "PM10": 67.0,
          "SO2": 7.0,
          "NH3": 1.0
    }
  },
  {
    "id": "98",
    "location": "15th Mile-Nongthymmai, Byrnihat - Meghalaya PCB",
    "city": "Byrnihat, Meghalaya",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 26.05374,
    "lng": 91.86796,
    "aqi": 23,
    "pollutants": [
      "CO"
    ],
    "pollutant_values": {
          "CO": 23.0
    }
  },
  {
    "id": "99",
    "location": "Central Academy for SFS, Byrnihat - PCBA",
    "city": "Byrnihat, Assam",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 26.071318,
    "lng": 91.87488,
    "aqi": 71,
    "pollutants": [
      "PM10",
      "CO",
      "NH3",
      "PM2.5",
      "NO2",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "CO": 57.0,
          "OZONE": 21.0,
          "PM10": 70.0,
          "PM2.5": 71.0,
          "NO2": 8.0,
          "NH3": 4.0,
          "SO2": 30.0
    }
  },
  {
    "id": "100",
    "location": "Urban, Chamarajanagar - KSPCB",
    "city": "Chamarajanagar, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 11.55358,
    "lng": 76.55521,
    "aqi": 46,
    "pollutants": [
      "CO",
      "PM10",
      "NH3",
      "PM2.5",
      "NO2",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 46.0,
          "CO": 23.0,
          "NH3": 2.0,
          "PM2.5": 32.0,
          "NO2": 29.0,
          "SO2": 4.0,
          "OZONE": 26.0
    }
  },
  {
    "id": "101",
    "location": "Sector-53, Chandigarh - CPCC",
    "city": "Chandigarh, Chandigarh",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 30.719859,
    "lng": 76.738637,
    "aqi": 46,
    "pollutants": [
      "CO",
      "NO2",
      "PM2.5",
      "PM10",
      "SO2",
      "NH3",
      "OZONE"
    ],
    "pollutant_values": {
          "SO2": 6.0,
          "PM10": 45.0,
          "OZONE": 18.0,
          "PM2.5": 42.0,
          "NH3": 27.0,
          "NO2": 42.0,
          "CO": 46.0
    }
  },
  {
    "id": "102",
    "location": "Sector 22, Chandigarh - CPCC",
    "city": "Chandigarh, Chandigarh",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 30.735567,
    "lng": 76.775714,
    "aqi": 61,
    "pollutants": [
      "NO2",
      "NH3",
      "PM2.5",
      "PM10",
      "SO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "NH3": 17.0,
          "SO2": 6.0,
          "PM10": 61.0,
          "NO2": 32.0,
          "CO": 39.0,
          "PM2.5": 42.0,
          "OZONE": 10.0
    }
  },
  {
    "id": "103",
    "location": "Sector-25, Chandigarh - CPCC",
    "city": "Chandigarh, Chandigarh",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 30.751462,
    "lng": 76.762879,
    "aqi": 101,
    "pollutants": [
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 101.0,
          "NH3": 11.0,
          "CO": 22.0,
          "PM2.5": 82.0,
          "NO2": 8.0,
          "SO2": 7.0,
          "OZONE": 29.0
    }
  },
  {
    "id": "104",
    "location": "MIDC Khutala, Chandrapur - MPCB",
    "city": "Chandrapur, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.9775302,
    "lng": 79.2337086,
    "aqi": 62,
    "pollutants": [
      "NH3",
      "CO",
      "NO2",
      "OZONE",
      "PM10"
    ],
    "pollutant_values": {
          "PM2.5": 21.0,
          "CO": 40.0,
          "OZONE": 15.0,
          "PM10": 62.0,
          "SO2": 5.0
    }
  },
  {
    "id": "105",
    "location": "Chauhan Colony, Chandrapur - MPCB",
    "city": "Chandrapur, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.9629,
    "lng": 79.298714,
    "aqi": 47,
    "pollutants": [
      "PM10",
      "CO",
      "PM2.5",
      "NO2",
      "OZONE"
    ],
    "pollutant_values": {
          "OZONE": 17.0,
          "CO": 43.0,
          "PM2.5": 16.0,
          "NO2": 12.0,
          "PM10": 47.0,
          "NH3": 2.0,
          "SO2": 17.0
    }
  },
  {
    "id": "106",
    "location": "Mini Secretariat, Charkhi Dadri - HSPCB",
    "city": "Charkhi Dadri, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.593883,
    "lng": 76.270653,
    "aqi": 90,
    "pollutants": [
      "PM2.5",
      "SO2",
      "CO",
      "PM10",
      "NH3",
      "NO2",
      "OZONE"
    ],
    "pollutant_values": {
          "OZONE": 28.0,
          "PM10": 90.0,
          "NH3": 6.0,
          "CO": 13.0
    }
  },
  {
    "id": "107",
    "location": "Manali, Chennai - CPCB",
    "city": "Chennai, TamilNadu",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 13.164544,
    "lng": 80.26285,
    "aqi": 69,
    "pollutants": [
      "NO2",
      "SO2",
      "CO",
      "PM2.5",
      "PM10",
      "OZONE",
      "NH3"
    ],
    "pollutant_values": {
          "OZONE": 9.0,
          "PM10": 69.0,
          "CO": 32.0,
          "SO2": 6.0,
          "PM2.5": 34.0,
          "NO2": 10.0,
          "NH3": 6.0
    }
  },
  {
    "id": "108",
    "location": "Perungudi, Chennai - TNPCB",
    "city": "Chennai, TamilNadu",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 12.9533,
    "lng": 80.2357,
    "aqi": 144,
    "pollutants": [
      "CO",
      "NO2",
      "NH3",
      "SO2",
      "OZONE",
      "PM2.5",
      "PM10"
    ],
    "pollutant_values": {
          "NO2": 6.0,
          "OZONE": 1.0,
          "PM2.5": 53.0,
          "SO2": 5.0,
          "CO": 38.0,
          "PM10": 144.0
    }
  },
  {
    "id": "109",
    "location": "Velachery Res. Area, Chennai - CPCB",
    "city": "Chennai, TamilNadu",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 13.0052189,
    "lng": 80.2398125,
    "aqi": 95,
    "pollutants": [
      "SO2",
      "PM10",
      "NO2",
      "NH3",
      "PM2.5",
      "OZONE"
    ],
    "pollutant_values": {
          "NO2": 12.0,
          "OZONE": 10.0,
          "SO2": 6.0,
          "PM2.5": 57.0,
          "PM10": 95.0,
          "NH3": 3.0
    }
  },
  {
    "id": "110",
    "location": "Royapuram, Chennai - TNPCB",
    "city": "Chennai, TamilNadu",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 13.1036,
    "lng": 80.2909,
    "aqi": 54,
    "pollutants": [
      "PM10",
      "SO2",
      "CO",
      "OZONE",
      "NO2",
      "PM2.5",
      "NH3"
    ],
    "pollutant_values": {
          "OZONE": 33.0,
          "CO": 54.0
    }
  },
  {
    "id": "111",
    "location": "Kodungaiyur, Chennai - TNPCB",
    "city": "Chennai, TamilNadu",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 13.1278,
    "lng": 80.2642,
    "aqi": 70,
    "pollutants": [
      "NO2",
      "OZONE",
      "PM2.5",
      "PM10",
      "NH3",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 60.0,
          "PM10": 70.0,
          "SO2": 6.0,
          "CO": 30.0,
          "OZONE": 29.0,
          "NH3": 4.0,
          "NO2": 14.0
    }
  },
  {
    "id": "112",
    "location": "Manali Village, Chennai - TNPCB",
    "city": "Chennai, TamilNadu",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 13.1662,
    "lng": 80.2584,
    "aqi": 124,
    "pollutants": [
      "CO",
      "NO2",
      "PM2.5",
      "PM10",
      "NH3",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "NO2": 17.0,
          "NH3": 2.0,
          "CO": 52.0,
          "PM10": 45.0,
          "OZONE": 124.0,
          "PM2.5": 33.0,
          "SO2": 14.0
    }
  },
  {
    "id": "113",
    "location": "Arumbakkam, Chennai - TNPCB",
    "city": "Chennai, TamilNadu",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 13.0664,
    "lng": 80.2112,
    "aqi": 87,
    "pollutants": [
      "SO2",
      "PM2.5",
      "PM10",
      "NO2",
      "NH3"
    ],
    "pollutant_values": {
          "SO2": 2.0,
          "PM2.5": 44.0,
          "NH3": 4.0,
          "PM10": 87.0,
          "NO2": 16.0
    }
  },
  {
    "id": "114",
    "location": "Chikkaballapur Rural, Chikkaballapur - KSPCB",
    "city": "Chikkaballapur, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 13.428828,
    "lng": 77.731418,
    "aqi": 73,
    "pollutants": [
      "PM10",
      "NH3",
      "PM2.5",
      "NO2",
      "SO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "NH3": 1.0,
          "NO2": 4.0,
          "PM10": 73.0,
          "PM2.5": 20.0
    }
  },
  {
    "id": "115",
    "location": "Kalyana Nagara, Chikkamagaluru - KSPCB",
    "city": "Chikkamagaluru, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 13.328028,
    "lng": 75.797056,
    "aqi": 14,
    "pollutants": [
      "NH3",
      "CO",
      "NO2",
      "OZONE"
    ],
    "pollutant_values": {
          "CO": 9.0,
          "OZONE": 14.0
    }
  },
  {
    "id": "116",
    "location": "Gangineni Cheruvu, Chittoor - APPCB",
    "city": "Chittoor, Andhra_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 13.20488,
    "lng": 79.097889,
    "aqi": 71,
    "pollutants": [
      "SO2",
      "CO",
      "NH3",
      "PM2.5",
      "PM10",
      "NO2",
      "OZONE"
    ],
    "pollutant_values": {
          "SO2": 16.0,
          "PM2.5": 71.0,
          "CO": 14.0,
          "OZONE": 35.0,
          "NO2": 31.0,
          "NH3": 7.0,
          "PM10": 66.0
    }
  },
  {
    "id": "117",
    "location": "Shastri Nagar, Chittorgarh - RSPCB",
    "city": "Chittorgarh, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 24.892047,
    "lng": 74.623527,
    "aqi": 72,
    "pollutants": [
      "NH3",
      "CO",
      "PM10",
      "NO2",
      "SO2",
      "OZONE",
      "PM2.5"
    ],
    "pollutant_values": {
          "SO2": 10.0,
          "CO": 5.0,
          "PM2.5": 54.0,
          "PM10": 72.0,
          "NH3": 6.0
    }
  },
  {
    "id": "118",
    "location": "Subash Chowk, Churu - RSPCB",
    "city": "Churu, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.296139,
    "lng": 74.961696,
    "aqi": 118,
    "pollutants": [
      "PM10",
      "SO2",
      "NH3",
      "PM2.5",
      "CO",
      "NO2",
      "OZONE"
    ],
    "pollutant_values": {
          "NO2": 6.0,
          "NH3": 6.0,
          "CO": 18.0,
          "PM2.5": 27.0,
          "OZONE": 30.0,
          "SO2": 4.0,
          "PM10": 118.0
    }
  },
  {
    "id": "119",
    "location": "SIDCO Kurichi, Coimbatore - TNPCB",
    "city": "Coimbatore, TamilNadu",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 10.942451,
    "lng": 76.978996,
    "aqi": 33,
    "pollutants": [
      "NO2",
      "NH3",
      "PM10",
      "SO2",
      "CO",
      "PM2.5",
      "OZONE"
    ],
    "pollutant_values": {
          "SO2": 26.0,
          "PM2.5": 33.0,
          "NO2": 23.0,
          "PM10": 18.0,
          "NH3": 1.0,
          "CO": 15.0,
          "OZONE": 20.0
    }
  },
  {
    "id": "120",
    "location": "CDA Area, Cuttack - OSPCB",
    "city": "Cuttack, Odisha",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 20.48891,
    "lng": 85.84768,
    "aqi": 76,
    "pollutants": [
      "CO",
      "PM10",
      "OZONE",
      "PM2.5",
      "NO2",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "CO": 40.0,
          "PM10": 76.0,
          "NO2": 20.0,
          "NH3": 9.0,
          "SO2": 10.0,
          "PM2.5": 36.0,
          "OZONE": 37.0
    }
  },
  {
    "id": "121",
    "location": "Shrivastav Colony, Damoh - MPPCB",
    "city": "Damoh, Madhya Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 23.81748678,
    "lng": 79.446246,
    "aqi": 29,
    "pollutants": [
      "PM10",
      "SO2",
      "PM2.5",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 25.0,
          "CO": 22.0,
          "PM10": 29.0
    }
  },
  {
    "id": "122",
    "location": "Khatikan Mohalla, Dausa - RSPCB",
    "city": "Dausa, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 26.895552,
    "lng": 76.334753,
    "aqi": 91,
    "pollutants": [
      "SO2",
      "NH3",
      "PM2.5",
      "OZONE",
      "PM10",
      "NO2",
      "CO"
    ],
    "pollutant_values": {
          "NH3": 9.0,
          "PM2.5": 42.0,
          "NO2": 23.0,
          "CO": 59.0,
          "PM10": 91.0,
          "SO2": 3.0,
          "OZONE": 34.0
    }
  },
  {
    "id": "123",
    "location": "Doon University, Dehradun - UKPCB",
    "city": "Dehradun, Uttarakhand",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 30.269444,
    "lng": 78.044167,
    "aqi": 70,
    "pollutants": [
      "OZONE",
      "SO2",
      "CO",
      "PM10",
      "PM2.5",
      "NO2"
    ],
    "pollutant_values": {
          "OZONE": 9.0,
          "PM2.5": 70.0,
          "PM10": 60.0,
          "SO2": 1.0,
          "NO2": 1.0
    }
  },
  {
    "id": "124",
    "location": "Alipur, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.815329,
    "lng": 77.15301,
    "aqi": 187,
    "pollutants": [
      "PM2.5",
      "OZONE",
      "SO2",
      "NO2",
      "CO",
      "NH3",
      "PM10"
    ],
    "pollutant_values": {
          "CO": 27.0,
          "OZONE": 7.0,
          "NO2": 52.0,
          "NH3": 15.0,
          "SO2": 8.0,
          "PM2.5": 100.0,
          "PM10": 187.0
    }
  },
  {
    "id": "125",
    "location": "Anand Vihar, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.647622,
    "lng": 77.315809,
    "aqi": 327,
    "pollutants": [
      "PM10",
      "CO",
      "OZONE",
      "NO2",
      "NH3",
      "SO2",
      "PM2.5"
    ],
    "pollutant_values": {
          "NH3": 9.0,
          "SO2": 17.0,
          "CO": 49.0,
          "OZONE": 8.0,
          "PM2.5": 174.0,
          "PM10": 327.0,
          "NO2": 51.0
    }
  },
  {
    "id": "126",
    "location": "Ashok Vihar, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.695381,
    "lng": 77.181665,
    "aqi": 181,
    "pollutants": [
      "PM2.5",
      "PM10",
      "SO2",
      "CO",
      "NO2",
      "NH3",
      "OZONE"
    ],
    "pollutant_values": {
          "NO2": 36.0,
          "PM2.5": 84.0,
          "OZONE": 7.0,
          "CO": 37.0,
          "PM10": 181.0,
          "NH3": 8.0,
          "SO2": 9.0
    }
  },
  {
    "id": "127",
    "location": "JNU, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.540721,
    "lng": 77.168544,
    "aqi": 138,
    "pollutants": [
      "PM2.5",
      "PM10",
      "NO2",
      "OZONE",
      "CO",
      "NH3"
    ],
    "pollutant_values": {
          "PM2.5": 75.0,
          "NO2": 28.0,
          "SO2": 1.0,
          "OZONE": 30.0,
          "NH3": 3.0,
          "PM10": 138.0,
          "CO": 22.0
    }
  },
  {
    "id": "128",
    "location": "Jahangirpuri, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.73282,
    "lng": 77.170633,
    "aqi": 210,
    "pollutants": [
      "NO2",
      "OZONE",
      "SO2",
      "PM2.5",
      "PM10",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "PM10": 210.0,
          "SO2": 12.0,
          "PM2.5": 127.0,
          "NO2": 33.0,
          "CO": 43.0,
          "OZONE": 6.0,
          "NH3": 11.0
    }
  },
  {
    "id": "129",
    "location": "Jawaharlal Nehru Stadium, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.58028,
    "lng": 77.233829,
    "aqi": 158,
    "pollutants": [
      "PM2.5",
      "NH3",
      "SO2",
      "CO",
      "PM10",
      "OZONE",
      "NO2"
    ],
    "pollutant_values": {
          "NH3": 15.0,
          "SO2": 13.0,
          "PM10": 158.0,
          "PM2.5": 69.0,
          "NO2": 30.0,
          "CO": 43.0,
          "OZONE": 20.0
    }
  },
  {
    "id": "130",
    "location": "Lodhi Road, Delhi - IMD",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.5918245,
    "lng": 77.2273074,
    "aqi": 115,
    "pollutants": [
      "PM2.5",
      "PM10",
      "OZONE",
      "NO2",
      "CO"
    ],
    "pollutant_values": {
          "PM10": 115.0,
          "CO": 31.0,
          "OZONE": 54.0,
          "PM2.5": 85.0,
          "NO2": 11.0
    }
  },
  {
    "id": "131",
    "location": "Burari Crossing, Delhi - IMD",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.7256504,
    "lng": 77.2011573,
    "aqi": 108,
    "pollutants": [
      "PM2.5",
      "PM10",
      "CO",
      "OZONE",
      "NO2"
    ],
    "pollutant_values": {
          "PM10": 108.0,
          "NO2": 24.0,
          "CO": 35.0,
          "PM2.5": 75.0,
          "OZONE": 70.0
    }
  },
  {
    "id": "132",
    "location": "CRRI Mathura Road, Delhi - IMD",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.5512005,
    "lng": 77.2735737,
    "aqi": 106,
    "pollutants": [
      "OZONE",
      "PM2.5",
      "CO",
      "PM10",
      "NO2"
    ],
    "pollutant_values": {
          "NO2": 3.0,
          "OZONE": 41.0,
          "PM10": 106.0,
          "CO": 63.0,
          "PM2.5": 78.0
    }
  },
  {
    "id": "133",
    "location": "Cantonment Area, Delhi - DPCC ",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.594169,
    "lng": 77.1251,
    "aqi": 127,
    "pollutants": [
      "PM2.5",
      "NH3",
      "PM10",
      "NO2",
      "SO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 127.0,
          "SO2": 6.0,
          "PM2.5": 31.0,
          "NH3": 2.0,
          "CO": 58.0,
          "OZONE": 83.0,
          "NO2": 36.0
    }
  },
  {
    "id": "134",
    "location": "Commonwealth Sports Complex, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.615828,
    "lng": 77.271992,
    "aqi": 159,
    "pollutants": [
      "NO2",
      "CO",
      "NH3",
      "PM10",
      "OZONE",
      "PM2.5",
      "SO2"
    ],
    "pollutant_values": {
          "NO2": 6.0,
          "SO2": 5.0,
          "CO": 48.0,
          "PM2.5": 92.0,
          "PM10": 159.0,
          "OZONE": 25.0
    }
  },
  {
    "id": "135",
    "location": "IIT Delhi, Delhi - IITM",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.54246,
    "lng": 77.191651,
    "aqi": 243,
    "pollutants": [
      "PM10",
      "CO",
      "NO2",
      "OZONE"
    ],
    "pollutant_values": {
          "NO2": 49.0,
          "PM2.5": 81.0,
          "CO": 32.0,
          "PM10": 243.0,
          "OZONE": 29.0
    }
  },
  {
    "id": "136",
    "location": "ITO, Delhi - CPCB",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.628624,
    "lng": 77.24106,
    "aqi": 139,
    "pollutants": [
      "NO2",
      "PM10",
      "CO",
      "OZONE",
      "PM2.5",
      "SO2",
      "NH3"
    ],
    "pollutant_values": {
          "CO": 47.0,
          "NO2": 61.0,
          "OZONE": 35.0,
          "NH3": 5.0,
          "PM2.5": 75.0,
          "PM10": 139.0
    }
  },
  {
    "id": "137",
    "location": "IGI Airport (T3), Delhi - IMD",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.5627763,
    "lng": 77.1180053,
    "aqi": 123,
    "pollutants": [
      "CO",
      "OZONE",
      "NO2",
      "PM10",
      "PM2.5"
    ],
    "pollutant_values": {
          "PM10": 123.0,
          "CO": 43.0,
          "PM2.5": 77.0,
          "NO2": 50.0,
          "OZONE": 38.0
    }
  },
  {
    "id": "138",
    "location": "Sirifort, Delhi - CPCB",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.5504249,
    "lng": 77.2159377,
    "aqi": 161,
    "pollutants": [
      "NH3",
      "SO2",
      "OZONE",
      "NO2",
      "CO",
      "PM2.5",
      "PM10"
    ],
    "pollutant_values": {
          "PM10": 161.0,
          "NH3": 6.0,
          "PM2.5": 108.0,
          "SO2": 22.0,
          "CO": 17.0
    }
  },
  {
    "id": "139",
    "location": "Talkatora Garden, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.62181,
    "lng": 77.1944633,
    "aqi": 123,
    "pollutants": [
      "PM10",
      "NH3",
      "OZONE",
      "PM2.5",
      "CO",
      "NO2",
      "SO2"
    ],
    "pollutant_values": {
          "OZONE": 11.0,
          "PM10": 123.0,
          "CO": 48.0,
          "PM2.5": 73.0,
          "SO2": 2.0,
          "NO2": 30.0,
          "NH3": 4.0
    }
  },
  {
    "id": "140",
    "location": "Vivek Vihar, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.672342,
    "lng": 77.31526,
    "aqi": 199,
    "pollutants": [
      "NO2",
      "OZONE",
      "SO2",
      "PM2.5",
      "PM10",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "NO2": 43.0,
          "PM10": 199.0,
          "OZONE": 21.0,
          "PM2.5": 80.0,
          "NH3": 10.0,
          "SO2": 11.0,
          "CO": 23.0
    }
  },
  {
    "id": "141",
    "location": "Wazirpur, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.699793,
    "lng": 77.165453,
    "aqi": 259,
    "pollutants": [
      "NH3",
      "OZONE",
      "NO2",
      "SO2",
      "CO",
      "PM2.5",
      "PM10"
    ],
    "pollutant_values": {
          "PM10": 259.0,
          "NO2": 42.0,
          "NH3": 6.0,
          "SO2": 8.0,
          "OZONE": 17.0,
          "PM2.5": 125.0,
          "CO": 37.0
    }
  },
  {
    "id": "142",
    "location": "Major Dhyan Chand National Stadium, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.611281,
    "lng": 77.237738,
    "aqi": 153,
    "pollutants": [
      "NO2",
      "NH3",
      "SO2",
      "CO",
      "OZONE",
      "PM10",
      "PM2.5"
    ],
    "pollutant_values": {
          "NO2": 35.0,
          "NH3": 19.0,
          "CO": 14.0,
          "OZONE": 15.0,
          "PM2.5": 60.0,
          "PM10": 153.0,
          "SO2": 2.0
    }
  },
  {
    "id": "143",
    "location": "Mandir Marg, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.636429,
    "lng": 77.201067,
    "aqi": 166,
    "pollutants": [
      "PM2.5",
      "NO2",
      "PM10",
      "SO2",
      "CO",
      "OZONE",
      "NH3"
    ],
    "pollutant_values": {
          "CO": 166.0,
          "OZONE": 5.0,
          "PM2.5": 41.0,
          "PM10": 144.0,
          "NH3": 13.0,
          "NO2": 45.0,
          "SO2": 23.0
    }
  },
  {
    "id": "144",
    "location": "Mundka, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.684678,
    "lng": 77.076574,
    "aqi": 197,
    "pollutants": [
      "OZONE",
      "PM10",
      "SO2",
      "NO2",
      "CO",
      "PM2.5",
      "NH3"
    ],
    "pollutant_values": {
          "NH3": 8.0,
          "CO": 39.0,
          "SO2": 5.0,
          "NO2": 84.0,
          "OZONE": 5.0,
          "PM2.5": 76.0,
          "PM10": 197.0
    }
  },
  {
    "id": "145",
    "location": "NSIT Dwarka, Delhi - CPCB",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.60909,
    "lng": 77.0325413,
    "aqi": 93,
    "pollutants": [
      "PM2.5",
      "NO2",
      "SO2",
      "OZONE",
      "PM10",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "NH3": 11.0,
          "SO2": 13.0,
          "NO2": 56.0,
          "PM2.5": 93.0,
          "CO": 49.0,
          "OZONE": 74.0,
          "PM10": 71.0
    }
  },
  {
    "id": "146",
    "location": "NSUT Jaffarpur, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.594004,
    "lng": 76.909423,
    "aqi": 129,
    "pollutants": [
      "SO2",
      "CO",
      "NO2",
      "OZONE",
      "PM10",
      "NH3",
      "PM2.5"
    ],
    "pollutant_values": {
          "PM10": 129.0,
          "OZONE": 28.0,
          "NO2": 22.0,
          "PM2.5": 69.0,
          "CO": 50.0,
          "NH3": 6.0,
          "SO2": 5.0
    }
  },
  {
    "id": "147",
    "location": "Narela, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.822836,
    "lng": 77.101981,
    "aqi": 190,
    "pollutants": [
      "PM2.5",
      "NH3",
      "SO2",
      "PM10",
      "NO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 190.0,
          "NH3": 10.0,
          "SO2": 13.0,
          "OZONE": 17.0,
          "PM2.5": 93.0,
          "CO": 33.0,
          "NO2": 27.0
    }
  },
  {
    "id": "148",
    "location": "Nehru Nagar, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.56789,
    "lng": 77.250515,
    "aqi": 203,
    "pollutants": [
      "NH3",
      "PM10",
      "PM2.5",
      "OZONE",
      "NO2",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "NO2": 36.0,
          "CO": 7.0,
          "PM2.5": 133.0,
          "PM10": 203.0,
          "NH3": 8.0,
          "SO2": 12.0,
          "OZONE": 12.0
    }
  },
  {
    "id": "149",
    "location": "Okhla Phase-2, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.530785,
    "lng": 77.271255,
    "aqi": 188,
    "pollutants": [
      "PM2.5",
      "NO2",
      "SO2",
      "OZONE",
      "PM10",
      "CO",
      "NH3"
    ],
    "pollutant_values": {
          "OZONE": 6.0,
          "PM2.5": 97.0,
          "PM10": 188.0,
          "SO2": 9.0,
          "CO": 2.0,
          "NO2": 38.0,
          "NH3": 7.0
    }
  },
  {
    "id": "150",
    "location": "Patparganj, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.623763,
    "lng": 77.287209,
    "aqi": 176,
    "pollutants": [
      "NH3",
      "PM2.5",
      "PM10",
      "SO2",
      "CO",
      "OZONE",
      "NO2"
    ],
    "pollutant_values": {
          "PM2.5": 87.0,
          "NO2": 33.0,
          "NH3": 11.0,
          "CO": 33.0,
          "PM10": 176.0,
          "SO2": 5.0,
          "OZONE": 3.0
    }
  },
  {
    "id": "151",
    "location": "Punjabi Bagh, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.674045,
    "lng": 77.131023,
    "aqi": 162,
    "pollutants": [
      "PM10",
      "PM2.5",
      "NO2",
      "CO",
      "OZONE",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "NO2": 29.0,
          "PM2.5": 84.0,
          "NH3": 4.0,
          "OZONE": 22.0,
          "SO2": 42.0,
          "PM10": 162.0,
          "CO": 43.0
    }
  },
  {
    "id": "152",
    "location": "Pusa, Delhi - IMD",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.63611,
    "lng": 77.173332,
    "aqi": 101,
    "pollutants": [
      "PM10",
      "NO2",
      "PM2.5",
      "OZONE",
      "CO"
    ],
    "pollutant_values": {
          "CO": 86.0,
          "PM2.5": 67.0,
          "PM10": 101.0,
          "NO2": 8.0,
          "OZONE": 61.0
    }
  },
  {
    "id": "153",
    "location": "R K Puram, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.563262,
    "lng": 77.186937,
    "aqi": 184,
    "pollutants": [
      "NO2",
      "CO",
      "OZONE",
      "NH3",
      "PM10",
      "SO2",
      "PM2.5"
    ],
    "pollutant_values": {
          "PM10": 184.0,
          "SO2": 27.0,
          "PM2.5": 91.0,
          "CO": 37.0,
          "NO2": 51.0,
          "NH3": 6.0,
          "OZONE": 15.0
    }
  },
  {
    "id": "154",
    "location": "Aya Nagar, Delhi - IMD",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.4706914,
    "lng": 77.1099364,
    "aqi": 110,
    "pollutants": [
      "OZONE",
      "PM2.5",
      "NO2",
      "CO",
      "PM10"
    ],
    "pollutant_values": {
          "CO": 75.0,
          "NO2": 18.0,
          "OZONE": 57.0,
          "PM2.5": 85.0,
          "PM10": 110.0
    }
  },
  {
    "id": "155",
    "location": "Bawana, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.7762,
    "lng": 77.051074,
    "aqi": 227,
    "pollutants": [
      "PM2.5",
      "CO",
      "PM10",
      "NO2",
      "NH3",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "SO2": 8.0,
          "CO": 35.0,
          "PM10": 187.0,
          "NH3": 5.0,
          "OZONE": 7.0,
          "NO2": 8.0,
          "PM2.5": 227.0
    }
  },
  {
    "id": "156",
    "location": "Dr. Karni Singh Shooting Range, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.498571,
    "lng": 77.26484,
    "aqi": 170,
    "pollutants": [
      "NH3",
      "OZONE",
      "PM10",
      "NO2",
      "PM2.5",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "PM10": 170.0,
          "NO2": 28.0,
          "CO": 31.0,
          "PM2.5": 94.0,
          "NH3": 7.0,
          "SO2": 8.0,
          "OZONE": 20.0
    }
  },
  {
    "id": "157",
    "location": "IGNOU_Maidan Garhi, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.493624,
    "lng": 77.201159,
    "aqi": 147,
    "pollutants": [
      "PM2.5",
      "SO2",
      "PM10",
      "NO2",
      "CO",
      "OZONE",
      "NH3"
    ],
    "pollutant_values": {
          "PM10": 147.0,
          "NH3": 6.0,
          "PM2.5": 44.0,
          "SO2": 3.0,
          "CO": 34.0,
          "OZONE": 8.0,
          "NO2": 21.0
    }
  },
  {
    "id": "158",
    "location": "Chandni Chowk, Delhi - IITM",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.656756,
    "lng": 77.227234,
    "aqi": 153,
    "pollutants": [
      "NH3",
      "SO2",
      "PM2.5",
      "PM10",
      "NO2"
    ],
    "pollutant_values": {
          "PM2.5": 110.0,
          "OZONE": 59.0,
          "SO2": 11.0,
          "CO": 61.0,
          "PM10": 153.0,
          "NH3": 13.0,
          "NO2": 57.0
    }
  },
  {
    "id": "159",
    "location": "Pusa, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.639652,
    "lng": 77.146275,
    "aqi": 172,
    "pollutants": [
      "PM10",
      "NH3",
      "PM2.5",
      "NO2",
      "SO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "SO2": 10.0,
          "OZONE": 5.0,
          "PM10": 172.0,
          "PM2.5": 65.0,
          "NO2": 51.0,
          "NH3": 10.0,
          "CO": 71.0
    }
  },
  {
    "id": "160",
    "location": "Rohini, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.732528,
    "lng": 77.11992,
    "aqi": 194,
    "pollutants": [
      "NO2",
      "PM2.5",
      "NH3",
      "PM10",
      "SO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 75.0,
          "PM10": 194.0,
          "NO2": 37.0,
          "NH3": 9.0,
          "SO2": 8.0,
          "OZONE": 5.0,
          "CO": 32.0
    }
  },
  {
    "id": "161",
    "location": "Shadipur, Delhi - CPCB",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.6514781,
    "lng": 77.1473105,
    "aqi": 190,
    "pollutants": [
      "PM10",
      "NH3",
      "SO2",
      "CO",
      "OZONE",
      "PM2.5",
      "NO2"
    ],
    "pollutant_values": {
          "CO": 49.0,
          "OZONE": 56.0,
          "NO2": 52.0,
          "SO2": 13.0,
          "PM2.5": 190.0,
          "PM10": 171.0,
          "NH3": 9.0
    }
  },
  {
    "id": "162",
    "location": "North Campus, DU, Delhi - IMD",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.6573814,
    "lng": 77.1585447,
    "aqi": 99,
    "pollutants": [
      "PM2.5",
      "PM10",
      "NO2",
      "OZONE",
      "CO"
    ],
    "pollutant_values": {
          "NO2": 31.0,
          "OZONE": 49.0,
          "CO": 39.0,
          "PM2.5": 78.0,
          "PM10": 99.0
    }
  },
  {
    "id": "163",
    "location": "Sonia Vihar, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.710508,
    "lng": 77.249485,
    "aqi": 178,
    "pollutants": [
      "PM2.5",
      "PM10",
      "SO2",
      "OZONE",
      "NO2",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "NO2": 12.0,
          "PM2.5": 96.0,
          "NH3": 16.0,
          "CO": 37.0,
          "OZONE": 53.0,
          "PM10": 178.0,
          "SO2": 6.0
    }
  },
  {
    "id": "164",
    "location": "DTU, Delhi - CPCB",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.7500499,
    "lng": 77.1112615,
    "aqi": 141,
    "pollutants": [
      "PM2.5",
      "CO",
      "NH3",
      "OZONE",
      "PM10",
      "NO2",
      "SO2"
    ],
    "pollutant_values": {
          "PM2.5": 80.0,
          "CO": 12.0,
          "OZONE": 26.0,
          "NH3": 12.0,
          "PM10": 141.0,
          "SO2": 25.0,
          "NO2": 25.0
    }
  },
  {
    "id": "165",
    "location": "Dwarka-Sector 8, Delhi - DPCC ",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.5710274,
    "lng": 77.0719006,
    "aqi": 232,
    "pollutants": [
      "PM2.5",
      "OZONE",
      "CO",
      "PM10",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "PM10": 232.0,
          "PM2.5": 66.0,
          "NO2": 52.0,
          "CO": 39.0,
          "NH3": 8.0,
          "SO2": 11.0,
          "OZONE": 13.0
    }
  },
  {
    "id": "166",
    "location": "IHBAS, Dilshad Garden, Delhi - CPCB",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.6811736,
    "lng": 77.3025234,
    "aqi": 137,
    "pollutants": [
      "PM2.5",
      "NH3",
      "CO",
      "OZONE",
      "PM10",
      "NO2"
    ],
    "pollutant_values": {
          "PM2.5": 111.0,
          "PM10": 137.0,
          "NO2": 18.0,
          "CO": 103.0,
          "SO2": 20.0,
          "OZONE": 45.0
    }
  },
  {
    "id": "167",
    "location": "Najafgarh, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.570173,
    "lng": 76.933762,
    "aqi": 116,
    "pollutants": [
      "NO2",
      "SO2",
      "CO",
      "OZONE",
      "PM2.5",
      "PM10",
      "NH3"
    ],
    "pollutant_values": {
          "OZONE": 10.0,
          "CO": 13.0,
          "PM2.5": 54.0,
          "PM10": 116.0,
          "NH3": 8.0,
          "NO2": 30.0,
          "SO2": 24.0
    }
  },
  {
    "id": "168",
    "location": "Sri Aurobindo Marg, Delhi - DPCC",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.531346,
    "lng": 77.190156,
    "aqi": 144,
    "pollutants": [
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 144.0,
          "OZONE": 20.0,
          "NH3": 4.0,
          "NO2": 24.0,
          "CO": 34.0,
          "PM2.5": 58.0
    }
  },
  {
    "id": "169",
    "location": "New Moti Bagh, Delhi - MHUA",
    "city": "Delhi, Delhi",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.57834,
    "lng": 77.184,
    "aqi": 79,
    "pollutants": [
      "PM2.5",
      "NO2",
      "CO"
    ],
    "pollutant_values": {
          "NO2": 15.0,
          "PM2.5": 79.0,
          "CO": 68.0
    }
  },
  {
    "id": "170",
    "location": "Bhopal Chauraha, Dewas - MPPCB",
    "city": "Dewas, Madhya Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.9682591,
    "lng": 76.064118,
    "aqi": 85,
    "pollutants": [
      "PM10",
      "PM2.5",
      "OZONE",
      "NH3",
      "NO2",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 26.0,
          "PM10": 60.0,
          "NH3": 2.0,
          "SO2": 29.0,
          "CO": 14.0,
          "NO2": 85.0,
          "OZONE": 31.0
    }
  },
  {
    "id": "171",
    "location": "Sardar Patel Nagar, Dhanbad - JSPCB",
    "city": "Dhanbad, Jharkhand",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 23.80569,
    "lng": 86.44268,
    "aqi": 117,
    "pollutants": [
      "OZONE",
      "CO"
    ],
    "pollutant_values": {
          "PM10": 58.0,
          "OZONE": 26.0,
          "NO2": 117.0,
          "CO": 3.0
    }
  },
  {
    "id": "172",
    "location": "Municipal Corporation Office, Dharuhera -  HSPCB",
    "city": "Dharuhera, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.2068,
    "lng": 76.7997,
    "aqi": 103,
    "pollutants": [
      "PM2.5",
      "CO",
      "PM10",
      "NO2",
      "NH3",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "NO2": 23.0,
          "PM10": 103.0,
          "NH3": 7.0,
          "SO2": 7.0,
          "CO": 43.0
    }
  },
  {
    "id": "173",
    "location": "Kalabhavan, Dharwad - KSPCB",
    "city": "Dharwad, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 15.459706,
    "lng": 75.008381,
    "aqi": 77,
    "pollutants": [
      "SO2",
      "PM10",
      "CO",
      "NH3",
      "OZONE",
      "PM2.5",
      "NO2"
    ],
    "pollutant_values": {
          "PM10": 77.0,
          "NO2": 24.0,
          "SO2": 7.0,
          "OZONE": 27.0,
          "NH3": 6.0,
          "PM2.5": 57.0,
          "CO": 30.0
    }
  },
  {
    "id": "174",
    "location": "Raja Ganj, Dholpur - RSPCB",
    "city": "Dholpur, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 26.699557,
    "lng": 77.898881,
    "aqi": 45,
    "pollutants": [
      "PM10",
      "CO",
      "OZONE",
      "NO2",
      "SO2"
    ],
    "pollutant_values": {
          "PM10": 38.0,
          "NO2": 7.0,
          "NH3": 6.0,
          "PM2.5": 45.0,
          "OZONE": 23.0,
          "CO": 24.0
    }
  },
  {
    "id": "175",
    "location": "Deopur, Dhule - MPCB",
    "city": "Dhule, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 20.918946,
    "lng": 74.776388,
    "aqi": 63,
    "pollutants": [
      "PM10",
      "PM2.5",
      "OZONE",
      "NO2",
      "NH3",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "CO": 14.0,
          "PM10": 63.0,
          "SO2": 2.0,
          "OZONE": 10.0
    }
  },
  {
    "id": "176",
    "location": "Kalu Nagar, Dombivli - MPCB",
    "city": "Dombivli, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.2268427,
    "lng": 73.0788456,
    "aqi": 19,
    "pollutants": [
      "NO2",
      "CO",
      "PM2.5",
      "NH3",
      "PM10",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 18.0,
          "CO": 19.0,
          "NO2": 17.0,
          "PM2.5": 9.0,
          "NH3": 2.0,
          "OZONE": 10.0
    }
  },
  {
    "id": "177",
    "location": "Bhoiwada, Dungarpur - RSPCB",
    "city": "Dungarpur, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 23.837789,
    "lng": 73.714926,
    "aqi": 53,
    "pollutants": [
      "PM10",
      "SO2",
      "PM2.5",
      "CO",
      "NO2",
      "NH3",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 53.0,
          "CO": 16.0,
          "OZONE": 27.0,
          "SO2": 11.0,
          "NH3": 9.0,
          "PM2.5": 45.0,
          "NO2": 12.0
    }
  },
  {
    "id": "178",
    "location": "PCBL Residential Complex, Durgapur - WBPCB",
    "city": "Durgapur, West_Bengal",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 23.508764,
    "lng": 87.35444,
    "aqi": 71,
    "pollutants": [
      "SO2",
      "NH3",
      "CO",
      "OZONE",
      "PM2.5",
      "PM10",
      "NO2"
    ],
    "pollutant_values": {
          "SO2": 11.0,
          "CO": 27.0,
          "PM2.5": 39.0,
          "NO2": 71.0,
          "PM10": 50.0,
          "NH3": 5.0,
          "OZONE": 3.0
    }
  },
  {
    "id": "179",
    "location": "Womens College_City Center, Durgapur - WBPCB",
    "city": "Durgapur, West_Bengal",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 23.549395,
    "lng": 87.300496,
    "aqi": 64,
    "pollutants": [
      "NO2",
      "OZONE",
      "SO2",
      "CO",
      "PM2.5",
      "PM10",
      "NH3"
    ],
    "pollutant_values": {
          "NO2": 37.0,
          "SO2": 12.0,
          "PM2.5": 37.0,
          "NH3": 3.0,
          "CO": 28.0,
          "PM10": 64.0,
          "OZONE": 20.0
    }
  },
  {
    "id": "180",
    "location": "Mahishkapur Road_B-Zone, Durgapur - WBPCB",
    "city": "Durgapur, West_Bengal",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 23.567923,
    "lng": 87.306843,
    "aqi": 47,
    "pollutants": [
      "PM10",
      "PM2.5",
      "SO2",
      "NO2",
      "NH3",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "SO2": 12.0,
          "NH3": 1.0,
          "OZONE": 33.0,
          "PM2.5": 28.0,
          "PM10": 47.0,
          "NO2": 7.0
    }
  },
  {
    "id": "181",
    "location": "District Court, Eluru - APPCB",
    "city": "Eluru, Andhra_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 16.711754,
    "lng": 81.092095,
    "aqi": 59,
    "pollutants": [
      "SO2",
      "CO",
      "NO2",
      "NH3",
      "OZONE",
      "PM2.5",
      "PM10"
    ],
    "pollutant_values": {
          "SO2": 11.0,
          "PM10": 55.0,
          "NO2": 16.0,
          "PM2.5": 59.0,
          "OZONE": 10.0,
          "NH3": 3.0,
          "CO": 11.0
    }
  },
  {
    "id": "182",
    "location": "New Industrial Town, Faridabad - HSPCB",
    "city": "Faridabad, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.39072,
    "lng": 77.30059,
    "aqi": 116,
    "pollutants": [
      "CO",
      "OZONE",
      "SO2",
      "PM2.5",
      "PM10",
      "NO2",
      "NH3"
    ],
    "pollutant_values": {
          "PM10": 116.0,
          "SO2": 12.0,
          "PM2.5": 111.0,
          "NO2": 25.0,
          "NH3": 11.0,
          "OZONE": 14.0
    }
  },
  {
    "id": "183",
    "location": "Sector 11, Faridabad - HSPCB",
    "city": "Faridabad, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.376058,
    "lng": 77.315741,
    "aqi": 202,
    "pollutants": [
      "NO2",
      "NH3",
      "SO2",
      "PM2.5",
      "PM10",
      "OZONE",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 202.0,
          "NO2": 31.0,
          "PM10": 171.0,
          "NH3": 9.0,
          "SO2": 7.0,
          "CO": 68.0,
          "OZONE": 16.0
    }
  },
  {
    "id": "184",
    "location": "Sector 30, Faridabad - HSPCB",
    "city": "Faridabad, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.4417,
    "lng": 77.3217,
    "aqi": 84,
    "pollutants": [
      "SO2",
      "NH3",
      "CO",
      "OZONE",
      "PM2.5",
      "PM10",
      "NO2"
    ],
    "pollutant_values": {
          "SO2": 2.0,
          "NO2": 17.0,
          "NH3": 3.0,
          "OZONE": 26.0,
          "PM2.5": 45.0,
          "PM10": 84.0,
          "CO": 25.0
    }
  },
  {
    "id": "185",
    "location": "Vibhab Nagar, Firozabad - UPPCB",
    "city": "Firozabad, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 27.1594,
    "lng": 78.3953,
    "aqi": 36,
    "pollutants": [
      "PM10",
      "NO2",
      "PM2.5",
      "CO",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "PM10": 36.0,
          "CO": 36.0,
          "PM2.5": 25.0,
          "OZONE": 1.0,
          "SO2": 8.0,
          "NO2": 15.0,
          "NH3": 7.0
    }
  },
  {
    "id": "186",
    "location": "Nagla Bhau, Firozabad - UPPCB",
    "city": "Firozabad, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 27.168897,
    "lng": 78.37696,
    "aqi": 65,
    "pollutants": [
      "NH3",
      "CO",
      "PM2.5",
      "OZONE",
      "PM10",
      "NO2",
      "SO2"
    ],
    "pollutant_values": {
          "OZONE": 9.0,
          "SO2": 29.0,
          "NO2": 17.0,
          "CO": 22.0,
          "PM2.5": 46.0,
          "PM10": 65.0,
          "NH3": 2.0
    }
  },
  {
    "id": "187",
    "location": "IIPHG Lekawada, Gandhinagar - IITM",
    "city": "Gandhinagar, Gujarat",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 23.243639,
    "lng": 72.68994,
    "aqi": 66,
    "pollutants": [
      "OZONE",
      "CO",
      "NO2",
      "NH3",
      "SO2",
      "PM10",
      "PM2.5"
    ],
    "pollutant_values": {
          "PM2.5": 27.0,
          "NO2": 7.0,
          "NH3": 1.0,
          "SO2": 2.0,
          "CO": 31.0,
          "PM10": 66.0,
          "OZONE": 4.0
    }
  },
  {
    "id": "188",
    "location": "GIFT City, Gandhinagar - IITM",
    "city": "Gandhinagar, Gujarat",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 23.163798,
    "lng": 72.677768,
    "aqi": 76,
    "pollutants": [
      "CO",
      "SO2",
      "PM2.5",
      "PM10",
      "NO2",
      "OZONE",
      "NH3"
    ],
    "pollutant_values": {
          "OZONE": 17.0,
          "PM2.5": 39.0,
          "PM10": 76.0,
          "SO2": 6.0,
          "CO": 22.0,
          "NO2": 28.0,
          "NH3": 2.0
    }
  },
  {
    "id": "189",
    "location": "Sector-10, Gandhinagar - GPCB",
    "city": "Gandhinagar, Gujarat",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 23.221714,
    "lng": 72.654328,
    "aqi": 48,
    "pollutants": [
      "NH3",
      "PM10",
      "CO",
      "PM2.5",
      "NO2",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 38.0,
          "PM10": 48.0,
          "NO2": 6.0,
          "SO2": 5.0,
          "CO": 15.0,
          "OZONE": 4.0,
          "NH3": 1.0
    }
  },
  {
    "id": "190",
    "location": "Zero Point GICI, Gangtok - SSPCB",
    "city": "Gangtok, Sikkim",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 27.33853,
    "lng": 88.614099,
    "aqi": 14,
    "pollutants": [
      "NH3",
      "SO2",
      "OZONE",
      "NO2",
      "PM2.5",
      "PM10",
      "CO"
    ],
    "pollutant_values": {
          "PM10": 11.0,
          "NO2": 8.0,
          "NH3": 1.0,
          "SO2": 1.0,
          "CO": 3.0,
          "PM2.5": 14.0,
          "OZONE": 2.0
    }
  },
  {
    "id": "191",
    "location": "Kareemganj, Gaya - BSPCB",
    "city": "Gaya, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 24.792403,
    "lng": 84.992416,
    "aqi": 75,
    "pollutants": [
      "PM10",
      "NO2",
      "OZONE",
      "PM2.5",
      "NH3",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 75.0,
          "NH3": 1.0,
          "SO2": 38.0,
          "NO2": 12.0,
          "CO": 38.0,
          "OZONE": 35.0
    }
  },
  {
    "id": "192",
    "location": "SFTI Kusdihra, Gaya - BSPCB",
    "city": "Gaya, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 24.762518,
    "lng": 84.982348,
    "aqi": 35,
    "pollutants": [
      "OZONE",
      "PM10",
      "NH3",
      "NO2",
      "CO",
      "PM2.5",
      "SO2"
    ],
    "pollutant_values": {
          "CO": 13.0,
          "PM2.5": 28.0,
          "PM10": 35.0,
          "NO2": 25.0,
          "NH3": 7.0,
          "OZONE": 23.0,
          "SO2": 9.0
    }
  },
  {
    "id": "193",
    "location": "Collectorate, Gaya - BSPCB",
    "city": "Gaya, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 24.7955,
    "lng": 84.9994,
    "aqi": 29,
    "pollutants": [
      "NO2",
      "PM2.5",
      "OZONE"
    ],
    "pollutant_values": {
          "NO2": 9.0,
          "SO2": 7.0,
          "OZONE": 29.0,
          "CO": 12.0
    }
  },
  {
    "id": "194",
    "location": "Govindpuram, Ghaziabad - UPPCB",
    "city": "Ghaziabad, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.694528,
    "lng": 77.494705,
    "aqi": 98,
    "pollutants": [
      "NO2",
      "NH3",
      "CO",
      "PM2.5",
      "OZONE",
      "PM10",
      "SO2"
    ],
    "pollutant_values": {
          "SO2": 6.0,
          "PM2.5": 57.0,
          "NO2": 20.0,
          "NH3": 4.0,
          "PM10": 98.0,
          "OZONE": 18.0,
          "CO": 43.0
    }
  },
  {
    "id": "195",
    "location": "Indirapuram, Ghaziabad - UPPCB",
    "city": "Ghaziabad, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.646233,
    "lng": 77.358075,
    "aqi": 142,
    "pollutants": [
      "PM2.5",
      "SO2",
      "PM10",
      "OZONE",
      "CO",
      "NH3",
      "NO2"
    ],
    "pollutant_values": {
          "NH3": 1.0,
          "CO": 44.0,
          "NO2": 41.0,
          "SO2": 16.0,
          "PM10": 142.0,
          "PM2.5": 96.0,
          "OZONE": 19.0
    }
  },
  {
    "id": "196",
    "location": "Vasundhara, Ghaziabad - UPPCB",
    "city": "Ghaziabad, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.6603346,
    "lng": 77.3572563,
    "aqi": 198,
    "pollutants": [
      "NH3",
      "PM2.5",
      "PM10",
      "SO2",
      "OZONE",
      "NO2",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 120.0,
          "NH3": 7.0,
          "SO2": 6.0,
          "CO": 40.0,
          "NO2": 35.0,
          "PM10": 198.0,
          "OZONE": 23.0
    }
  },
  {
    "id": "197",
    "location": "Ved Vihar-Loni, Ghaziabad - UPPCB",
    "city": "Ghaziabad, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.739153,
    "lng": 77.273668,
    "aqi": 252,
    "pollutants": [
      "PM10",
      "PM2.5",
      "NH3",
      "SO2",
      "OZONE",
      "NO2",
      "CO"
    ],
    "pollutant_values": {
          "NO2": 33.0,
          "PM2.5": 252.0,
          "PM10": 183.0,
          "SO2": 6.0,
          "CO": 104.0,
          "NH3": 8.0,
          "OZONE": 98.0
    }
  },
  {
    "id": "198",
    "location": "Loni, Ghaziabad - UPPCB",
    "city": "Ghaziabad, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.757294,
    "lng": 77.278792,
    "aqi": 278,
    "pollutants": [
      "OZONE",
      "PM10",
      "NO2",
      "PM2.5",
      "NH3",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "NH3": 4.0,
          "CO": 8.0,
          "PM2.5": 118.0,
          "SO2": 8.0,
          "PM10": 278.0,
          "NO2": 35.0,
          "OZONE": 29.0
    }
  },
  {
    "id": "199",
    "location": "Sanjay Nagar, Ghaziabad - UPPCB",
    "city": "Ghaziabad, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.685382,
    "lng": 77.453839,
    "aqi": 195,
    "pollutants": [
      "PM10",
      "NO2",
      "OZONE",
      "NH3",
      "CO",
      "PM2.5",
      "SO2"
    ],
    "pollutant_values": {
          "OZONE": 14.0,
          "NH3": 15.0,
          "CO": 39.0,
          "PM2.5": 125.0,
          "NO2": 26.0,
          "SO2": 6.0,
          "PM10": 195.0
    }
  },
  {
    "id": "200",
    "location": "Madan Mohan Malaviya University of Technology, Gorakhpur - UPPCB",
    "city": "Gorakhpur, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 26.730136,
    "lng": 83.433859,
    "aqi": 48,
    "pollutants": [
      "PM10",
      "NH3",
      "PM2.5",
      "NO2",
      "SO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "NH3": 1.0,
          "CO": 6.0,
          "SO2": 45.0,
          "NO2": 11.0,
          "OZONE": 48.0
    }
  },
  {
    "id": "201",
    "location": "Knowledge Park - III, Greater Noida - UPPCB",
    "city": "Greater Noida, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.47272,
    "lng": 77.482,
    "aqi": 225,
    "pollutants": [
      "PM10",
      "NO2",
      "NH3",
      "OZONE",
      "PM2.5",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "NH3": 13.0,
          "PM10": 225.0,
          "NO2": 30.0,
          "SO2": 5.0,
          "OZONE": 5.0,
          "CO": 25.0
    }
  },
  {
    "id": "202",
    "location": "Knowledge Park - V, Greater Noida - UPPCB",
    "city": "Greater Noida, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.557054,
    "lng": 77.453663,
    "aqi": 246,
    "pollutants": [
      "SO2",
      "NO2",
      "NH3",
      "CO",
      "PM2.5",
      "PM10",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 131.0,
          "OZONE": 24.0,
          "PM10": 246.0,
          "NH3": 10.0,
          "CO": 14.0,
          "NO2": 34.0,
          "SO2": 9.0
    }
  },
  {
    "id": "203",
    "location": "Anthoni Pillai Nagar, Gummidipoondi - TNPCB",
    "city": "Gummidipoondi, TamilNadu",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 13.4127,
    "lng": 80.1081,
    "aqi": 104,
    "pollutants": [
      "PM10",
      "NO2",
      "SO2",
      "PM2.5",
      "NH3"
    ],
    "pollutant_values": {
          "PM2.5": 104.0,
          "PM10": 102.0,
          "NH3": 1.0,
          "SO2": 18.0,
          "NO2": 19.0
    }
  },
  {
    "id": "204",
    "location": "Rajendra Nagar North, Guntur - APPCB",
    "city": "Guntur, Andhra_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 16.316553,
    "lng": 80.413302,
    "aqi": 54,
    "pollutants": [
      "NO2",
      "SO2",
      "PM10",
      "CO",
      "PM2.5",
      "NH3",
      "OZONE"
    ],
    "pollutant_values": {
          "NO2": 40.0,
          "NH3": 8.0,
          "OZONE": 22.0,
          "PM2.5": 53.0,
          "SO2": 14.0,
          "CO": 20.0,
          "PM10": 54.0
    }
  },
  {
    "id": "205",
    "location": "Sector-51, Gurugram - HSPCB",
    "city": "Gurugram, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.4227,
    "lng": 77.0667,
    "aqi": 239,
    "pollutants": [
      "PM2.5",
      "NH3",
      "SO2",
      "NO2",
      "OZONE",
      "PM10",
      "CO"
    ],
    "pollutant_values": {
          "NO2": 44.0,
          "CO": 23.0,
          "OZONE": 50.0,
          "PM2.5": 239.0,
          "PM10": 185.0,
          "SO2": 12.0,
          "NH3": 15.0
    }
  },
  {
    "id": "206",
    "location": "Teri Gram, Gurugram - HSPCB",
    "city": "Gurugram, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.4275,
    "lng": 77.1465,
    "aqi": 87,
    "pollutants": [
      "PM2.5",
      "PM10",
      "NH3",
      "CO",
      "OZONE",
      "SO2"
    ],
    "pollutant_values": {
          "PM2.5": 87.0,
          "NO2": 53.0,
          "CO": 18.0,
          "OZONE": 33.0,
          "NH3": 14.0,
          "SO2": 12.0,
          "PM10": 80.0
    }
  },
  {
    "id": "207",
    "location": "Vikas Sadan, Gurugram - HSPCB",
    "city": "Gurugram, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.4501238,
    "lng": 77.0263051,
    "aqi": 30,
    "pollutants": [
      "CO",
      "SO2",
      "PM2.5",
      "PM10",
      "NO2",
      "OZONE"
    ],
    "pollutant_values": {
          "CO": 30.0,
          "NO2": 6.0,
          "OZONE": 15.0,
          "SO2": 1.0
    }
  },
  {
    "id": "208",
    "location": "NISE Gwal Pahari, Gurugram - IMD",
    "city": "Gurugram, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.422681,
    "lng": 77.148944,
    "aqi": 100,
    "pollutants": [
      "PM2.5",
      "PM10",
      "NO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 100.0,
          "CO": 31.0,
          "PM2.5": 97.0,
          "NO2": 6.0,
          "OZONE": 61.0
    }
  },
  {
    "id": "209",
    "location": "IITG, Guwahati - PCBA",
    "city": "Guwahati, Assam",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 26.2028636,
    "lng": 91.70046436,
    "aqi": 39,
    "pollutants": [
      "PM2.5",
      "PM10",
      "NO2",
      "NH3",
      "CO",
      "OZONE",
      "SO2"
    ],
    "pollutant_values": {
          "PM2.5": 19.0,
          "NH3": 5.0,
          "CO": 5.0,
          "SO2": 39.0,
          "OZONE": 11.0,
          "NO2": 1.0
    }
  },
  {
    "id": "210",
    "location": "Railway Colony, Guwahati - PCBA",
    "city": "Guwahati, Assam",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 26.181742,
    "lng": 91.78063,
    "aqi": 47,
    "pollutants": [
      "SO2",
      "OZONE",
      "PM2.5",
      "PM10",
      "NO2",
      "NH3"
    ],
    "pollutant_values": {
          "PM10": 34.0,
          "SO2": 47.0,
          "PM2.5": 42.0,
          "NH3": 1.0,
          "CO": 3.0,
          "OZONE": 17.0,
          "NO2": 3.0
    }
  },
  {
    "id": "211",
    "location": "LGBI Airport, Guwahati - PCBA",
    "city": "Guwahati, Assam",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 26.10887,
    "lng": 91.589544,
    "aqi": 50,
    "pollutants": [
      "OZONE",
      "PM10",
      "NO2",
      "SO2",
      "PM2.5",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "SO2": 11.0,
          "CO": 36.0,
          "OZONE": 39.0,
          "PM2.5": 50.0,
          "PM10": 39.0,
          "NO2": 15.0,
          "NH3": 4.0
    }
  },
  {
    "id": "212",
    "location": "Pan Bazaar, Guwahati - PCBA",
    "city": "Guwahati, Assam",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 26.1875,
    "lng": 91.744194,
    "aqi": 457,
    "pollutants": [
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "NH3": 1.0,
          "SO2": 35.0,
          "PM10": 452.0,
          "CO": 16.0,
          "OZONE": 16.0,
          "PM2.5": 457.0
    }
  },
  {
    "id": "213",
    "location": "Deen Dayal Nagar, Gwalior - MPPCB",
    "city": "Gwalior, Madhya Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 26.259242,
    "lng": 78.216432,
    "aqi": 69,
    "pollutants": [
      "SO2",
      "PM10",
      "CO",
      "PM2.5",
      "NH3",
      "NO2",
      "OZONE"
    ],
    "pollutant_values": {
          "NH3": 6.0,
          "PM10": 69.0,
          "OZONE": 25.0,
          "CO": 48.0,
          "NO2": 28.0
    }
  },
  {
    "id": "214",
    "location": "Maharaj Bada, Gwalior - MPPCB",
    "city": "Gwalior, Madhya Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 26.200388,
    "lng": 78.147714,
    "aqi": 71,
    "pollutants": [
      "PM2.5",
      "CO",
      "PM10",
      "NO2",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "NO2": 40.0,
          "NH3": 4.0,
          "OZONE": 45.0,
          "PM10": 68.0,
          "SO2": 7.0,
          "PM2.5": 71.0
    }
  },
  {
    "id": "215",
    "location": "Industrial Area, Hajipur - BSPCB",
    "city": "Hajipur, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 25.697189,
    "lng": 85.2459,
    "aqi": 43,
    "pollutants": [
      "NH3",
      "SO2",
      "NO2",
      "PM2.5",
      "OZONE",
      "PM10",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 38.0,
          "NO2": 10.0,
          "NH3": 11.0,
          "OZONE": 21.0,
          "PM10": 43.0,
          "SO2": 4.0,
          "CO": 31.0
    }
  },
  {
    "id": "216",
    "location": "Priyambada Housing Estate, Haldia - WBPCB",
    "city": "Haldia, West_Bengal",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.06047,
    "lng": 88.109737,
    "aqi": 47,
    "pollutants": [
      "PM10",
      "SO2",
      "PM2.5",
      "NH3",
      "NO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "NO2": 9.0,
          "OZONE": 24.0,
          "PM10": 47.0,
          "SO2": 8.0,
          "PM2.5": 27.0,
          "NH3": 4.0,
          "CO": 29.0
    }
  },
  {
    "id": "217",
    "location": "Housing Board, Hanumangarh - RSPCB",
    "city": "Hanumangarh, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 29.61075,
    "lng": 74.283608,
    "aqi": 87,
    "pollutants": [
      "PM2.5",
      "PM10",
      "OZONE",
      "NO2",
      "SO2",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "NH3": 4.0,
          "PM10": 87.0,
          "CO": 4.0,
          "OZONE": 71.0,
          "PM2.5": 27.0,
          "NO2": 5.0,
          "SO2": 11.0
    }
  },
  {
    "id": "218",
    "location": "Anand Vihar, Hapur - UPPCB",
    "city": "Hapur, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.725645,
    "lng": 77.749675,
    "aqi": 132,
    "pollutants": [
      "NO2",
      "PM10",
      "CO",
      "NH3",
      "OZONE",
      "SO2",
      "PM2.5"
    ],
    "pollutant_values": {
          "NO2": 10.0,
          "NH3": 1.0,
          "OZONE": 20.0,
          "PM10": 132.0,
          "CO": 24.0,
          "SO2": 14.0,
          "PM2.5": 74.0
    }
  },
  {
    "id": "219",
    "location": "Ashta Vinayak Nagar, Hingoli - MPCB",
    "city": "Hingoli, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.710842,
    "lng": 77.151824,
    "aqi": 26,
    "pollutants": [
      "PM2.5",
      "CO",
      "SO2",
      "PM10",
      "OZONE",
      "NO2",
      "NH3"
    ],
    "pollutant_values": {
          "PM10": 17.0,
          "NO2": 7.0,
          "CO": 13.0,
          "NH3": 2.0,
          "OZONE": 26.0,
          "PM2.5": 17.0,
          "SO2": 5.0
    }
  },
  {
    "id": "220",
    "location": "Urban Estate-II, Hisar - HSPCB",
    "city": "Hisar, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 29.14056,
    "lng": 75.744941,
    "aqi": 117,
    "pollutants": [
      "CO",
      "NH3",
      "PM2.5",
      "NO2",
      "PM10",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "OZONE": 17.0,
          "NO2": 32.0,
          "SO2": 15.0,
          "NH3": 13.0,
          "CO": 84.0,
          "PM2.5": 94.0,
          "PM10": 117.0
    }
  },
  {
    "id": "221",
    "location": "Belur Math, Howrah - WBPCB",
    "city": "Howrah, West_Bengal",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.629801,
    "lng": 88.352017,
    "aqi": 50,
    "pollutants": [
      "NH3",
      "CO",
      "SO2",
      "PM2.5",
      "PM10",
      "NO2",
      "OZONE"
    ],
    "pollutant_values": {
          "OZONE": 9.0,
          "PM10": 50.0,
          "SO2": 7.0,
          "PM2.5": 34.0,
          "CO": 18.0,
          "NO2": 31.0,
          "NH3": 4.0
    }
  },
  {
    "id": "222",
    "location": "Botanical Garden, Howrah - WBPCB",
    "city": "Howrah, West_Bengal",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.554954,
    "lng": 88.292568,
    "aqi": 45,
    "pollutants": [
      "NH3",
      "NO2",
      "OZONE",
      "PM2.5",
      "SO2",
      "PM10",
      "CO"
    ],
    "pollutant_values": {
          "NO2": 11.0,
          "NH3": 2.0,
          "SO2": 5.0,
          "PM2.5": 41.0,
          "CO": 15.0,
          "OZONE": 9.0,
          "PM10": 45.0
    }
  },
  {
    "id": "223",
    "location": "Dasnagar, Howrah - WBPCB",
    "city": "Howrah, West_Bengal",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.6025571,
    "lng": 88.3105664,
    "aqi": 5,
    "pollutants": [
      "PM2.5",
      "NO2",
      "OZONE",
      "PM10",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "SO2": 5.0
    }
  },
  {
    "id": "224",
    "location": "Ghusuri, Howrah - WBPCB",
    "city": "Howrah, West_Bengal",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.611968,
    "lng": 88.347422,
    "aqi": 55,
    "pollutants": [
      "SO2",
      "NO2",
      "CO",
      "PM10",
      "OZONE",
      "NH3",
      "PM2.5"
    ],
    "pollutant_values": {
          "CO": 25.0,
          "NO2": 49.0,
          "PM10": 48.0,
          "SO2": 7.0,
          "PM2.5": 55.0,
          "NH3": 3.0,
          "OZONE": 19.0
    }
  },
  {
    "id": "225",
    "location": "Padmapukur, Howrah - WBPCB",
    "city": "Howrah, West_Bengal",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.5687319,
    "lng": 88.2797276,
    "aqi": 60,
    "pollutants": [
      "NH3",
      "CO",
      "OZONE",
      "PM2.5",
      "NO2",
      "SO2",
      "PM10"
    ],
    "pollutant_values": {
          "PM2.5": 21.0,
          "OZONE": 26.0,
          "PM10": 44.0,
          "NO2": 29.0,
          "SO2": 7.0,
          "CO": 60.0,
          "NH3": 7.0
    }
  },
  {
    "id": "226",
    "location": "Lingaraj Nagar, Hubballi - KSPCB",
    "city": "Hubballi, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 15.3714823,
    "lng": 75.1160168,
    "aqi": 55,
    "pollutants": [
      "NO2",
      "PM10",
      "OZONE",
      "NH3",
      "CO",
      "PM2.5",
      "SO2"
    ],
    "pollutant_values": {
          "NH3": 2.0,
          "PM10": 55.0,
          "OZONE": 21.0,
          "PM2.5": 38.0,
          "NO2": 11.0,
          "SO2": 2.0,
          "CO": 14.0
    }
  },
  {
    "id": "227",
    "location": "Central University, Hyderabad - TSPCB",
    "city": "Hyderabad, Telangana",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 17.460103,
    "lng": 78.334361,
    "aqi": 17,
    "pollutants": [
      "PM2.5",
      "PM10",
      "OZONE",
      "NO2",
      "SO2",
      "CO",
      "NH3"
    ],
    "pollutant_values": {
          "NH3": 2.0,
          "OZONE": 10.0,
          "PM2.5": 15.0,
          "SO2": 4.0,
          "PM10": 17.0,
          "NO2": 11.0,
          "CO": 9.0
    }
  },
  {
    "id": "228",
    "location": "ECIL Kapra, Hyderabad - TSPCB",
    "city": "Hyderabad, Telangana",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 17.470431,
    "lng": 78.566959,
    "aqi": 71,
    "pollutants": [
      "PM2.5",
      "SO2",
      "CO",
      "PM10",
      "NH3",
      "NO2",
      "OZONE"
    ],
    "pollutant_values": {
          "SO2": 31.0,
          "PM10": 71.0,
          "PM2.5": 45.0,
          "NO2": 5.0,
          "NH3": 4.0,
          "CO": 14.0,
          "OZONE": 25.0
    }
  },
  {
    "id": "229",
    "location": "ICRISAT Patancheru, Hyderabad - TSPCB",
    "city": "Hyderabad, Telangana",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 17.5184,
    "lng": 78.278777,
    "aqi": 33,
    "pollutants": [
      "OZONE",
      "NO2",
      "SO2",
      "PM2.5",
      "PM10",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "SO2": 6.0,
          "CO": 15.0,
          "OZONE": 17.0,
          "PM2.5": 22.0,
          "NO2": 10.0,
          "PM10": 33.0,
          "NH3": 2.0
    }
  },
  {
    "id": "230",
    "location": "IDA Pashamylaram, Hyderabad - TSPCB",
    "city": "Hyderabad, Telangana",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 17.5316895,
    "lng": 78.218939,
    "aqi": 43,
    "pollutants": [
      "OZONE",
      "NH3",
      "PM10",
      "NO2",
      "PM2.5",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "NH3": 1.0,
          "SO2": 11.0,
          "PM2.5": 24.0,
          "PM10": 43.0,
          "OZONE": 21.0,
          "NO2": 24.0,
          "CO": 16.0
    }
  },
  {
    "id": "231",
    "location": "Zoo Park, Hyderabad - TSPCB",
    "city": "Hyderabad, Telangana",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 17.349694,
    "lng": 78.451437,
    "aqi": 21,
    "pollutants": [
      "NH3",
      "SO2",
      "NO2",
      "CO",
      "OZONE",
      "PM2.5",
      "PM10"
    ],
    "pollutant_values": {
          "PM2.5": 18.0,
          "PM10": 21.0,
          "NO2": 9.0,
          "SO2": 2.0,
          "NH3": 2.0
    }
  },
  {
    "id": "232",
    "location": "IITH Kandi, Hyderabad - TSPCB",
    "city": "Hyderabad, Telangana",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 17.585705,
    "lng": 78.126199,
    "aqi": 65,
    "pollutants": [
      "SO2",
      "PM2.5",
      "PM10",
      "NO2",
      "CO",
      "NH3",
      "OZONE"
    ],
    "pollutant_values": {
          "OZONE": 30.0,
          "PM10": 65.0,
          "NH3": 3.0,
          "PM2.5": 42.0,
          "NO2": 15.0,
          "SO2": 11.0,
          "CO": 23.0
    }
  },
  {
    "id": "233",
    "location": "New Malakpet, Hyderabad - TSPCB",
    "city": "Hyderabad, Telangana",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 17.37206,
    "lng": 78.50864,
    "aqi": 49,
    "pollutants": [
      "PM2.5",
      "NH3",
      "NO2",
      "PM10",
      "SO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 29.0,
          "SO2": 7.0,
          "OZONE": 18.0,
          "PM10": 49.0,
          "NO2": 12.0,
          "NH3": 2.0,
          "CO": 27.0
    }
  },
  {
    "id": "234",
    "location": "Ramachandrapuram, Hyderabad - TSPCB",
    "city": "Hyderabad, Telangana",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 17.528544,
    "lng": 78.286195,
    "aqi": 59,
    "pollutants": [
      "SO2",
      "PM2.5",
      "PM10",
      "NO2",
      "CO",
      "OZONE",
      "NH3"
    ],
    "pollutant_values": {
          "PM10": 59.0,
          "NH3": 3.0,
          "CO": 24.0,
          "OZONE": 25.0,
          "PM2.5": 35.0,
          "SO2": 7.0,
          "NO2": 14.0
    }
  },
  {
    "id": "235",
    "location": "Somajiguda, Hyderabad - TSPCB",
    "city": "Hyderabad, Telangana",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 17.417094,
    "lng": 78.457437,
    "aqi": 18,
    "pollutants": [
      "PM2.5",
      "CO",
      "PM10",
      "NO2",
      "NH3",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "OZONE": 14.0,
          "CO": 18.0
    }
  },
  {
    "id": "236",
    "location": "Kompally Municipal Office, Hyderabad - TSPCB",
    "city": "Hyderabad, Telangana",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 17.544899,
    "lng": 78.486949,
    "aqi": 66,
    "pollutants": [
      "PM10",
      "OZONE",
      "NO2",
      "SO2",
      "PM2.5",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "PM10": 66.0,
          "NO2": 12.0,
          "OZONE": 25.0,
          "NH3": 3.0,
          "SO2": 12.0,
          "PM2.5": 44.0,
          "CO": 12.0
    }
  },
  {
    "id": "237",
    "location": "Nacharam_TSIIC IALA, Hyderabad - TSPCB",
    "city": "Hyderabad, Telangana",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 17.429398,
    "lng": 78.569354,
    "aqi": 56,
    "pollutants": [
      "NO2",
      "CO",
      "OZONE",
      "PM2.5",
      "NH3",
      "SO2",
      "PM10"
    ],
    "pollutant_values": {
          "PM10": 56.0,
          "NO2": 12.0,
          "CO": 31.0,
          "PM2.5": 33.0,
          "NH3": 6.0,
          "OZONE": 19.0,
          "SO2": 11.0
    }
  },
  {
    "id": "238",
    "location": "Kokapet, Hyderabad - TSPCB",
    "city": "Hyderabad, Telangana",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 17.393559,
    "lng": 78.339194,
    "aqi": 46,
    "pollutants": [
      "PM2.5",
      "NO2",
      "CO",
      "PM10",
      "NH3",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 46.0,
          "NO2": 11.0,
          "CO": 21.0,
          "OZONE": 17.0,
          "NH3": 2.0,
          "PM2.5": 34.0,
          "SO2": 7.0
    }
  },
  {
    "id": "239",
    "location": "Sanathnagar, Hyderabad - TSPCB",
    "city": "Hyderabad, Telangana",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 17.4559458,
    "lng": 78.4332152,
    "aqi": 41,
    "pollutants": [
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 25.0,
          "NO2": 41.0,
          "OZONE": 30.0,
          "CO": 34.0,
          "SO2": 7.0
    }
  },
  {
    "id": "240",
    "location": "Chhoti Gwaltoli, Indore - MPPCB",
    "city": "Indore, Madhya Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.431,
    "lng": 75.5213,
    "aqi": 57,
    "pollutants": [
      "NH3",
      "SO2",
      "PM2.5",
      "PM10",
      "NO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "NH3": 6.0,
          "SO2": 15.0,
          "PM10": 57.0,
          "CO": 16.0,
          "OZONE": 23.0,
          "NO2": 53.0,
          "PM2.5": 33.0
    }
  },
  {
    "id": "241",
    "location": "Regional Park, Indore - IMC",
    "city": "Indore, Madhya Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.678,
    "lng": 75.8559,
    "aqi": 81,
    "pollutants": [
      "NO2",
      "SO2",
      "NH3",
      "OZONE",
      "PM2.5",
      "PM10",
      "CO"
    ],
    "pollutant_values": {
          "PM10": 20.0,
          "SO2": 35.0,
          "NH3": 5.0,
          "NO2": 46.0,
          "CO": 81.0,
          "OZONE": 5.0
    }
  },
  {
    "id": "242",
    "location": "Airport Area, Indore - IMC",
    "city": "Indore, Madhya Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.7289,
    "lng": 75.8076,
    "aqi": 72,
    "pollutants": [
      "SO2",
      "PM2.5",
      "NO2",
      "CO",
      "OZONE",
      "PM10"
    ],
    "pollutant_values": {
          "CO": 49.0,
          "OZONE": 8.0,
          "PM2.5": 72.0,
          "NO2": 41.0,
          "SO2": 8.0
    }
  },
  {
    "id": "243",
    "location": "Maguda Nagar, Indore - IMC",
    "city": "Indore, Madhya Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.7524,
    "lng": 75.8872,
    "aqi": 36,
    "pollutants": [
      "NO2",
      "PM2.5",
      "SO2",
      "OZONE",
      "PM10",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 20.0,
          "SO2": 13.0,
          "CO": 36.0,
          "OZONE": 11.0,
          "PM10": 27.0,
          "NO2": 4.0
    }
  },
  {
    "id": "244",
    "location": "Residency Area, Indore - IMC",
    "city": "Indore, Madhya Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.7084,
    "lng": 75.8815,
    "aqi": 37,
    "pollutants": [
      "PM2.5",
      "SO2",
      "PM10",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "CO": 3.0,
          "OZONE": 6.0,
          "PM2.5": 33.0,
          "PM10": 37.0,
          "NO2": 1.0,
          "SO2": 3.0
    }
  },
  {
    "id": "245",
    "location": "Marhatal, Jabalpur - MPPCB",
    "city": "Jabalpur, Madhya Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 23.168606,
    "lng": 79.932247,
    "aqi": 43,
    "pollutants": [
      "OZONE",
      "NH3",
      "NO2",
      "PM2.5",
      "SO2",
      "PM10",
      "CO"
    ],
    "pollutant_values": {}
  },
  {
    "id": "246",
    "location": "Suhagi, Jabalpur - JMC",
    "city": "Jabalpur, Madhya Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 23.218135,
    "lng": 79.95777,
    "aqi": 58,
    "pollutants": [
      "NH3",
      "CO",
      "NO2",
      "SO2",
      "PM10",
      "PM2.5",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 45.0,
          "CO": 58.0,
          "NO2": 13.0,
          "NH3": 3.0,
          "PM10": 32.0,
          "OZONE": 20.0
    }
  },
  {
    "id": "247",
    "location": "Gupteshwar, Jabalpur - JMC",
    "city": "Jabalpur, Madhya Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 23.142888,
    "lng": 79.916147,
    "aqi": 57,
    "pollutants": [
      "CO",
      "OZONE",
      "NO2",
      "PM2.5",
      "PM10",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "CO": 27.0,
          "PM10": 46.0,
          "NO2": 57.0,
          "NH3": 4.0,
          "PM2.5": 43.0,
          "SO2": 18.0,
          "OZONE": 11.0
    }
  },
  {
    "id": "248",
    "location": "Govindh Bhavan Colony, Jabalpur - JMC",
    "city": "Jabalpur, Madhya Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 23.163174,
    "lng": 79.973061,
    "aqi": 28,
    "pollutants": [
      "PM2.5",
      "CO",
      "NO2",
      "OZONE",
      "PM10",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "NH3": 3.0,
          "OZONE": 24.0,
          "NO2": 9.0,
          "CO": 12.0,
          "PM2.5": 22.0,
          "PM10": 28.0,
          "SO2": 3.0
    }
  },
  {
    "id": "249",
    "location": "Adarsh Nagar, Jaipur - RSPCB",
    "city": "Jaipur, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 26.902909,
    "lng": 75.836858,
    "aqi": 80,
    "pollutants": [
      "NO2",
      "SO2",
      "PM10",
      "OZONE",
      "PM2.5",
      "CO",
      "NH3"
    ],
    "pollutant_values": {
          "PM10": 80.0,
          "NO2": 19.0,
          "PM2.5": 75.0,
          "NH3": 6.0,
          "SO2": 24.0,
          "CO": 34.0,
          "OZONE": 59.0
    }
  },
  {
    "id": "250",
    "location": "Shastri Nagar, Jaipur - RSPCB",
    "city": "Jaipur, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 26.9502929,
    "lng": 75.730943,
    "aqi": 111,
    "pollutants": [
      "OZONE",
      "NO2",
      "NH3",
      "SO2",
      "CO",
      "PM2.5",
      "PM10"
    ],
    "pollutant_values": {
          "NO2": 24.0,
          "NH3": 8.0,
          "CO": 47.0,
          "OZONE": 40.0,
          "PM10": 111.0,
          "SO2": 30.0,
          "PM2.5": 98.0
    }
  },
  {
    "id": "251",
    "location": "Mansarovar Sector-12, Jaipur - RSPCB",
    "city": "Jaipur, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 26.843698,
    "lng": 75.766894,
    "aqi": 110,
    "pollutants": [
      "PM2.5",
      "CO",
      "PM10",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 43.0,
          "PM10": 110.0,
          "NH3": 8.0,
          "SO2": 3.0,
          "OZONE": 57.0,
          "CO": 27.0,
          "NO2": 15.0
    }
  },
  {
    "id": "252",
    "location": "Police Commissionerate, Jaipur - RSPCB",
    "city": "Jaipur, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 26.9164092,
    "lng": 75.7994901,
    "aqi": 114,
    "pollutants": [
      "PM10",
      "SO2",
      "CO",
      "OZONE",
      "NO2",
      "NH3",
      "PM2.5"
    ],
    "pollutant_values": {
          "PM2.5": 114.0,
          "NO2": 54.0,
          "SO2": 22.0,
          "CO": 50.0,
          "PM10": 97.0,
          "NH3": 8.0,
          "OZONE": 41.0
    }
  },
  {
    "id": "253",
    "location": "Sector-2 Murlipura, Jaipur - RSPCB",
    "city": "Jaipur, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 26.960669,
    "lng": 75.771817,
    "aqi": 118,
    "pollutants": [
      "CO",
      "PM10",
      "PM2.5",
      "NH3",
      "NO2",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 118.0,
          "SO2": 3.0,
          "NH3": 5.0,
          "NO2": 23.0,
          "PM2.5": 56.0,
          "CO": 66.0,
          "OZONE": 39.0
    }
  },
  {
    "id": "254",
    "location": "RIICO Sitapura, Jaipur - RSPCB",
    "city": "Jaipur, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 26.786682,
    "lng": 75.827928,
    "aqi": 44,
    "pollutants": [
      "NH3",
      "CO",
      "PM2.5",
      "PM10",
      "NO2",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "CO": 31.0,
          "OZONE": 44.0
    }
  },
  {
    "id": "255",
    "location": "Sadar Bazar, Jaisalmer - RSPCB",
    "city": "Jaisalmer, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 26.912329,
    "lng": 70.909168,
    "aqi": 99,
    "pollutants": [
      "OZONE",
      "NH3",
      "SO2",
      "CO",
      "PM10",
      "NO2"
    ],
    "pollutant_values": {
          "SO2": 3.0,
          "CO": 26.0,
          "NO2": 11.0,
          "OZONE": 22.0,
          "PM10": 99.0,
          "PM2.5": 44.0
    }
  },
  {
    "id": "256",
    "location": "Civil Line, Jalandhar - PPCB",
    "city": "Jalandhar, Punjab",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 31.321907,
    "lng": 75.578914,
    "aqi": 114,
    "pollutants": [
      "NH3",
      "SO2",
      "PM10",
      "CO",
      "PM2.5",
      "NO2",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 114.0,
          "NO2": 36.0,
          "NH3": 3.0,
          "CO": 46.0,
          "PM2.5": 71.0,
          "SO2": 15.0,
          "OZONE": 40.0
    }
  },
  {
    "id": "257",
    "location": "Prabhat Colony, Jalgaon - MPCB",
    "city": "Jalgaon, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 21.001264,
    "lng": 75.565602,
    "aqi": 26,
    "pollutants": [
      "NO2",
      "PM2.5",
      "NH3",
      "PM10",
      "SO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "NH3": 5.0,
          "SO2": 3.0,
          "OZONE": 23.0,
          "PM10": 26.0,
          "NO2": 10.0,
          "PM2.5": 21.0,
          "CO": 23.0
    }
  },
  {
    "id": "258",
    "location": "Old MIDC, Jalna - MPCB",
    "city": "Jalna, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.854616,
    "lng": 75.905894,
    "aqi": 28,
    "pollutants": [
      "PM10",
      "CO",
      "OZONE",
      "PM2.5",
      "NO2",
      "NH3"
    ],
    "pollutant_values": {
          "PM10": 28.0,
          "CO": 13.0,
          "PM2.5": 20.0,
          "SO2": 14.0,
          "OZONE": 28.0,
          "NO2": 18.0,
          "NH3": 3.0
    }
  },
  {
    "id": "259",
    "location": "Mudtra Sili, Jalore - RSPCB",
    "city": "Jalore, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 25.344694,
    "lng": 72.626208,
    "aqi": 77,
    "pollutants": [
      "PM2.5",
      "NO2",
      "PM10",
      "SO2",
      "NH3",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "CO": 15.0,
          "NO2": 8.0,
          "PM10": 77.0,
          "PM2.5": 35.0,
          "NH3": 3.0,
          "OZONE": 35.0,
          "SO2": 3.0
    }
  },
  {
    "id": "260",
    "location": "Rajlaxmi Nagar, Jhalawar - RSPCB",
    "city": "Jhalawar, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 24.588397,
    "lng": 76.172782,
    "aqi": 61,
    "pollutants": [
      "NO2",
      "SO2",
      "PM2.5",
      "PM10",
      "NH3",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "NH3": 5.0,
          "PM10": 61.0,
          "SO2": 5.0,
          "CO": 52.0,
          "NO2": 20.0,
          "OZONE": 31.0,
          "PM2.5": 41.0
    }
  },
  {
    "id": "261",
    "location": "Shivaji Nagar, Jhansi - UPPCB",
    "city": "Jhansi, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 25.4547,
    "lng": 78.6039,
    "aqi": 41,
    "pollutants": [
      "CO",
      "OZONE",
      "PM2.5",
      "PM10",
      "NO2",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "OZONE": 5.0,
          "PM10": 41.0,
          "SO2": 23.0,
          "NH3": 4.0,
          "CO": 8.0,
          "NO2": 6.0
    }
  },
  {
    "id": "262",
    "location": "Indra Nagar, Jhunjhunu - RSPCB",
    "city": "Jhunjhunu, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.108988,
    "lng": 75.386577,
    "aqi": 124,
    "pollutants": [
      "NH3",
      "CO",
      "OZONE",
      "PM2.5",
      "PM10",
      "NO2",
      "SO2"
    ],
    "pollutant_values": {
          "PM2.5": 55.0,
          "SO2": 4.0,
          "PM10": 124.0,
          "NO2": 12.0,
          "CO": 10.0,
          "OZONE": 31.0,
          "NH3": 9.0
    }
  },
  {
    "id": "263",
    "location": "Police Lines, Jind - HSPCB",
    "city": "Jind, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 29.307814,
    "lng": 76.337619,
    "aqi": 144,
    "pollutants": [
      "PM10",
      "NH3",
      "NO2",
      "SO2",
      "OZONE",
      "PM2.5",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 144.0,
          "NH3": 5.0,
          "OZONE": 9.0,
          "SO2": 28.0,
          "NO2": 13.0,
          "CO": 6.0,
          "PM10": 98.0
    }
  },
  {
    "id": "264",
    "location": "Jhalamand, Jodhpur - RSPCB",
    "city": "Jodhpur, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 26.215415,
    "lng": 73.070156,
    "aqi": 83,
    "pollutants": [
      "CO",
      "NH3",
      "SO2",
      "PM10",
      "PM2.5",
      "OZONE",
      "NO2"
    ],
    "pollutant_values": {
          "PM10": 83.0,
          "SO2": 4.0,
          "OZONE": 19.0,
          "NO2": 6.0,
          "CO": 9.0,
          "PM2.5": 29.0
    }
  },
  {
    "id": "265",
    "location": "Samrat Ashok Udhyan, Jodhpur - RSPCB",
    "city": "Jodhpur, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 26.253384,
    "lng": 72.976571,
    "aqi": 74,
    "pollutants": [
      "NO2",
      "SO2",
      "OZONE",
      "PM10",
      "PM2.5",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "CO": 11.0,
          "SO2": 2.0,
          "PM2.5": 27.0,
          "NO2": 7.0,
          "PM10": 74.0,
          "NH3": 2.0,
          "OZONE": 24.0
    }
  },
  {
    "id": "266",
    "location": "Collectorate, Jodhpur - RSPCB",
    "city": "Jodhpur, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 26.268249,
    "lng": 73.0193853,
    "aqi": 60,
    "pollutants": [
      "PM10",
      "NH3",
      "CO",
      "PM2.5",
      "NO2",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "SO2": 7.0,
          "PM10": 60.0,
          "OZONE": 53.0,
          "PM2.5": 35.0,
          "CO": 51.0,
          "NO2": 17.0,
          "NH3": 4.0
    }
  },
  {
    "id": "267",
    "location": "Mandor, Jodhpur - RSPCB",
    "city": "Jodhpur, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 26.358805,
    "lng": 73.047444,
    "aqi": 71,
    "pollutants": [
      "NO2",
      "PM10",
      "SO2",
      "CO",
      "OZONE",
      "PM2.5",
      "NH3"
    ],
    "pollutant_values": {
          "PM10": 71.0,
          "CO": 13.0,
          "OZONE": 48.0,
          "NH3": 2.0,
          "NO2": 5.0,
          "SO2": 3.0,
          "PM2.5": 31.0
    }
  },
  {
    "id": "268",
    "location": "Digari Kalan, Jodhpur - RSPCB",
    "city": "Jodhpur, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 26.29581,
    "lng": 73.082283,
    "aqi": 61,
    "pollutants": [
      "PM2.5",
      "NO2",
      "CO",
      "NH3",
      "PM10",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 25.0,
          "NO2": 17.0,
          "SO2": 3.0,
          "OZONE": 40.0,
          "PM10": 61.0,
          "NH3": 4.0,
          "CO": 30.0
    }
  },
  {
    "id": "269",
    "location": "Tata Stadium, Jorapokhar - JSPCB",
    "city": "Jorapokhar, Jharkhand",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 23.707909,
    "lng": 86.41467,
    "aqi": 104,
    "pollutants": [
      "CO",
      "NH3",
      "PM2.5",
      "NO2",
      "OZONE",
      "PM10"
    ],
    "pollutant_values": {
          "PM2.5": 39.0,
          "NH3": 3.0,
          "OZONE": 5.0,
          "PM10": 104.0,
          "SO2": 4.0,
          "NO2": 8.0,
          "CO": 39.0
    }
  },
  {
    "id": "270",
    "location": "Yerramukkapalli, Kadapa - APPCB",
    "city": "Kadapa, Andhra_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 14.465052,
    "lng": 78.824187,
    "aqi": 45,
    "pollutants": [
      "CO",
      "NH3",
      "PM2.5",
      "NO2",
      "OZONE",
      "PM10",
      "SO2"
    ],
    "pollutant_values": {
          "NO2": 27.0,
          "OZONE": 37.0,
          "PM10": 45.0,
          "SO2": 13.0,
          "PM2.5": 41.0,
          "NH3": 16.0,
          "CO": 25.0
    }
  },
  {
    "id": "271",
    "location": "Rishi Nagar, Kaithal - HSPCB",
    "city": "Kaithal, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 29.8006,
    "lng": 76.4155,
    "aqi": 148,
    "pollutants": [
      "PM10",
      "NO2",
      "SO2",
      "PM2.5",
      "NH3",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "NO2": 22.0,
          "NH3": 5.0,
          "PM2.5": 148.0,
          "CO": 20.0,
          "PM10": 129.0,
          "SO2": 19.0,
          "OZONE": 24.0
    }
  },
  {
    "id": "272",
    "location": "Mahatma Basaveswar Colony, Kalaburgi - KSPCB",
    "city": "Kalaburagi, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 17.336318,
    "lng": 76.847397,
    "aqi": 46,
    "pollutants": [
      "PM10",
      "NH3",
      "NO2",
      "SO2",
      "PM2.5",
      "CO"
    ],
    "pollutant_values": {
          "CO": 46.0,
          "NO2": 15.0,
          "OZONE": 13.0,
          "PM10": 25.0,
          "PM2.5": 18.0,
          "NH3": 3.0,
          "SO2": 3.0
    }
  },
  {
    "id": "273",
    "location": "Khadakpada, Kalyan - MPCB",
    "city": "Kalyan, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.25292,
    "lng": 73.142019,
    "aqi": 8,
    "pollutants": [
      "PM10",
      "NH3",
      "PM2.5",
      "NO2",
      "OZONE"
    ],
    "pollutant_values": {
          "OZONE": 8.0
    }
  },
  {
    "id": "274",
    "location": "Thavakkara, Kannur - Kerala PCB",
    "city": "Kannur, Kerala",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 11.875,
    "lng": 75.3732,
    "aqi": 45,
    "pollutants": [
      "CO",
      "PM10",
      "PM2.5",
      "NO2",
      "SO2",
      "NH3",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 40.0,
          "OZONE": 28.0,
          "PM10": 45.0,
          "NH3": 1.0,
          "NO2": 11.0,
          "CO": 15.0
    }
  },
  {
    "id": "275",
    "location": "Nehru Nagar, Kanpur - UPPCB",
    "city": "Kanpur, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 26.4703136,
    "lng": 80.3229863,
    "aqi": 52,
    "pollutants": [
      "NO2",
      "SO2",
      "PM2.5",
      "OZONE",
      "PM10",
      "CO"
    ],
    "pollutant_values": {
          "SO2": 12.0,
          "PM2.5": 37.0,
          "CO": 52.0,
          "OZONE": 5.0,
          "NO2": 47.0,
          "PM10": 34.0
    }
  },
  {
    "id": "276",
    "location": "FTI Kidwai Nagar, Kanpur - UPPCB",
    "city": "Kanpur, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 26.428282,
    "lng": 80.327067,
    "aqi": 37,
    "pollutants": [
      "PM2.5",
      "OZONE",
      "NO2",
      "NH3",
      "SO2",
      "CO",
      "PM10"
    ],
    "pollutant_values": {
          "NO2": 27.0,
          "NH3": 3.0,
          "PM10": 37.0,
          "CO": 33.0,
          "OZONE": 11.0,
          "PM2.5": 29.0,
          "SO2": 23.0
    }
  },
  {
    "id": "277",
    "location": "NSI Kalyanpur, Kanpur - UPPCB",
    "city": "Kanpur, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 26.509954,
    "lng": 80.249612,
    "aqi": 59,
    "pollutants": [
      "NO2",
      "SO2",
      "OZONE",
      "PM2.5",
      "PM10",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 37.0,
          "NH3": 2.0,
          "CO": 27.0,
          "SO2": 25.0,
          "OZONE": 21.0,
          "PM10": 59.0,
          "NO2": 31.0
    }
  },
  {
    "id": "278",
    "location": "Satyawati Vihar, Karauli - RSPCB",
    "city": "Karauli, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 26.506177,
    "lng": 77.025989,
    "aqi": 40,
    "pollutants": [
      "NO2",
      "PM10",
      "SO2",
      "OZONE",
      "PM2.5",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "OZONE": 29.0,
          "NO2": 40.0,
          "CO": 19.0,
          "NH3": 8.0,
          "SO2": 8.0
    }
  },
  {
    "id": "279",
    "location": "Sector-12, Karnal - HSPCB",
    "city": "Karnal, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 29.6953,
    "lng": 77.0027,
    "aqi": 171,
    "pollutants": [
      "NH3",
      "PM2.5",
      "SO2",
      "CO",
      "PM10",
      "NO2",
      "OZONE"
    ],
    "pollutant_values": {
          "SO2": 12.0,
          "CO": 51.0,
          "PM2.5": 171.0,
          "PM10": 156.0,
          "NO2": 14.0,
          "NH3": 8.0,
          "OZONE": 7.0
    }
  },
  {
    "id": "280",
    "location": "Govt. Girls Inter College, Kashipur - UKPCB",
    "city": "Kashipur, Uttarakhand",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 29.2124114,
    "lng": 78.9611753,
    "aqi": 9,
    "pollutants": [
      "NH3",
      "CO",
      "NO2"
    ],
    "pollutant_values": {
          "CO": 9.0,
          "OZONE": 7.0
    }
  },
  {
    "id": "281",
    "location": "Mirchaibari, Katihar - BSPCB",
    "city": "Katihar, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 25.560083,
    "lng": 87.553265,
    "aqi": 94,
    "pollutants": [
      "OZONE",
      "CO"
    ],
    "pollutant_values": {
          "SO2": 22.0,
          "CO": 94.0,
          "OZONE": 23.0,
          "PM2.5": 12.0,
          "PM10": 11.0,
          "NO2": 2.0,
          "NH3": 1.0
    }
  },
  {
    "id": "282",
    "location": "Gole Bazar, Katni - MPPCB",
    "city": "Katni, Madhya Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 23.50016,
    "lng": 80.23284,
    "aqi": 44,
    "pollutants": [
      "PM10",
      "NO2",
      "NH3",
      "SO2",
      "PM2.5",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 30.0,
          "PM10": 44.0,
          "NO2": 10.0,
          "NH3": 2.0,
          "SO2": 35.0,
          "CO": 40.0
    }
  },
  {
    "id": "283",
    "location": "Jagamohanpur, Keonjhar - OSPCB",
    "city": "Keonjhar, Odisha",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 21.6439,
    "lng": 85.599355,
    "aqi": 44,
    "pollutants": [
      "PM2.5",
      "NO2",
      "NH3",
      "SO2",
      "PM10",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 26.0,
          "NH3": 3.0,
          "OZONE": 16.0,
          "NO2": 12.0,
          "PM10": 44.0,
          "SO2": 12.0,
          "CO": 35.0
    }
  },
  {
    "id": "284",
    "location": "Kalal Majra, Khanna - PPCB",
    "city": "Khanna, Punjab",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 30.736056,
    "lng": 76.209694,
    "aqi": 70,
    "pollutants": [
      "PM10",
      "NH3",
      "OZONE",
      "NO2",
      "SO2",
      "CO",
      "PM2.5"
    ],
    "pollutant_values": {
          "NO2": 28.0,
          "SO2": 15.0,
          "PM2.5": 38.0,
          "PM10": 70.0,
          "NH3": 7.0,
          "CO": 46.0,
          "OZONE": 33.0
    }
  },
  {
    "id": "285",
    "location": "Prashant Garden, Khora - UPPCB",
    "city": "Khora, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.61119,
    "lng": 77.34206,
    "aqi": 244,
    "pollutants": [
      "NH3",
      "CO",
      "PM2.5",
      "SO2",
      "PM10",
      "NO2",
      "OZONE"
    ],
    "pollutant_values": {
          "CO": 95.0,
          "NH3": 11.0,
          "NO2": 32.0,
          "SO2": 11.0,
          "PM2.5": 244.0,
          "PM10": 147.0,
          "OZONE": 6.0
    }
  },
  {
    "id": "286",
    "location": "Kalindi Kunj, Khurja - UPPCB",
    "city": "Khurja, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.2348927,
    "lng": 77.8683002,
    "aqi": 86,
    "pollutants": [
      "OZONE",
      "PM2.5",
      "PM10",
      "NH3",
      "SO2",
      "NO2",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 58.0,
          "PM10": 86.0,
          "NO2": 13.0,
          "CO": 28.0,
          "NH3": 1.0,
          "SO2": 10.0,
          "OZONE": 23.0
    }
  },
  {
    "id": "287",
    "location": "SDM Office_Khagra, Kishanganj - BSPCB",
    "city": "Kishanganj, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 26.0881305,
    "lng": 87.93840336,
    "aqi": 36,
    "pollutants": [
      "CO",
      "NH3",
      "PM2.5",
      "OZONE",
      "PM10",
      "NO2",
      "SO2"
    ],
    "pollutant_values": {
          "NO2": 7.0,
          "PM10": 35.0,
          "SO2": 11.0,
          "OZONE": 33.0,
          "PM2.5": 36.0,
          "CO": 13.0,
          "NH3": 3.0
    }
  },
  {
    "id": "288",
    "location": "PWD Junction, Kohima - NPCB",
    "city": "Kohima, Nagaland",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 25.6635413,
    "lng": 94.0989878,
    "aqi": 46,
    "pollutants": [
      "NH3",
      "CO",
      "NO2",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 20.0,
          "NO2": 4.0,
          "NH3": 1.0,
          "PM2.5": 24.0,
          "CO": 4.0,
          "SO2": 46.0
    }
  },
  {
    "id": "289",
    "location": "Shivaji University, Kolhapur - MPCB",
    "city": "Kolhapur, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 16.6870449,
    "lng": 74.2505872,
    "aqi": 34,
    "pollutants": [
      "CO",
      "NO2",
      "SO2",
      "PM2.5",
      "NH3",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 20.0,
          "NH3": 3.0,
          "PM10": 34.0,
          "CO": 14.0,
          "OZONE": 12.0,
          "NO2": 12.0
    }
  },
  {
    "id": "290",
    "location": "Sinchan Bhavan, Kolhapur - MPCB",
    "city": "Kolhapur, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 16.7143745,
    "lng": 74.2426398,
    "aqi": 22,
    "pollutants": [
      "PM10",
      "OZONE",
      "CO"
    ],
    "pollutant_values": {
          "SO2": 1.0,
          "CO": 10.0,
          "NO2": 16.0,
          "NH3": 2.0,
          "OZONE": 22.0
    }
  },
  {
    "id": "291",
    "location": "Ballygunge, Kolkata - WBPCB",
    "city": "Kolkata, West_Bengal",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.5367507,
    "lng": 88.3638022,
    "aqi": 30,
    "pollutants": [
      "NH3",
      "PM2.5",
      "CO",
      "OZONE",
      "NO2",
      "PM10",
      "SO2"
    ],
    "pollutant_values": {
          "NH3": 7.0,
          "OZONE": 16.0,
          "PM10": 24.0,
          "NO2": 17.0,
          "PM2.5": 30.0,
          "SO2": 8.0,
          "CO": 18.0
    }
  },
  {
    "id": "292",
    "location": "Bidhannagar, Kolkata - WBPCB",
    "city": "Kolkata, West_Bengal",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.58157048,
    "lng": 88.41002457,
    "aqi": 38,
    "pollutants": [
      "PM2.5",
      "SO2",
      "PM10",
      "OZONE",
      "NO2",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "NO2": 13.0,
          "OZONE": 37.0,
          "CO": 28.0,
          "NH3": 5.0,
          "SO2": 9.0,
          "PM2.5": 32.0,
          "PM10": 38.0
    }
  },
  {
    "id": "293",
    "location": "Fort William, Kolkata - WBPCB",
    "city": "Kolkata, West_Bengal",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.55664,
    "lng": 88.342674,
    "aqi": 31,
    "pollutants": [
      "CO",
      "PM2.5",
      "SO2",
      "NO2",
      "PM10",
      "NH3",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 29.0,
          "SO2": 5.0,
          "NO2": 19.0,
          "NH3": 9.0,
          "OZONE": 17.0,
          "PM10": 31.0,
          "CO": 18.0
    }
  },
  {
    "id": "294",
    "location": "Jadavpur, Kolkata - WBPCB",
    "city": "Kolkata, West_Bengal",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.49929,
    "lng": 88.36917,
    "aqi": 44,
    "pollutants": [
      "OZONE",
      "PM2.5",
      "NO2",
      "NH3",
      "PM10",
      "CO",
      "SO2"
    ],
    "pollutant_values": {
          "OZONE": 12.0,
          "PM10": 44.0,
          "NH3": 14.0,
          "NO2": 21.0,
          "SO2": 5.0,
          "PM2.5": 42.0,
          "CO": 29.0
    }
  },
  {
    "id": "295",
    "location": "Rabindra Sarobar, Kolkata - WBPCB",
    "city": "Kolkata, West_Bengal",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.51106,
    "lng": 88.35142,
    "aqi": 25,
    "pollutants": [
      "PM10",
      "NH3",
      "CO",
      "OZONE",
      "PM2.5",
      "NO2",
      "SO2"
    ],
    "pollutant_values": {
          "CO": 19.0,
          "PM2.5": 24.0,
          "NH3": 7.0,
          "PM10": 25.0,
          "NO2": 19.0,
          "SO2": 8.0,
          "OZONE": 22.0
    }
  },
  {
    "id": "296",
    "location": "Victoria, Kolkata - WBPCB",
    "city": "Kolkata, West_Bengal",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.5448082,
    "lng": 88.3403691,
    "aqi": 92,
    "pollutants": [
      "SO2",
      "OZONE",
      "NO2",
      "CO",
      "PM2.5",
      "PM10",
      "NH3"
    ],
    "pollutant_values": {
          "NO2": 22.0,
          "CO": 41.0,
          "PM2.5": 77.0,
          "NH3": 8.0,
          "SO2": 15.0,
          "PM10": 92.0,
          "OZONE": 57.0
    }
  },
  {
    "id": "297",
    "location": "Rabindra Bharati University, Kolkata - WBPCB",
    "city": "Kolkata, West_Bengal",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.627847,
    "lng": 88.380669,
    "aqi": 46,
    "pollutants": [
      "NO2",
      "CO",
      "PM10",
      "PM2.5",
      "NH3",
      "OZONE",
      "SO2"
    ],
    "pollutant_values": {
          "PM10": 32.0,
          "OZONE": 23.0,
          "CO": 46.0,
          "NO2": 36.0,
          "SO2": 9.0,
          "PM2.5": 19.0,
          "NH3": 6.0
    }
  },
  {
    "id": "298",
    "location": "Polayathode, Kollam - Kerala PCB",
    "city": "Kollam, Kerala",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 8.8787,
    "lng": 76.6073,
    "aqi": 53,
    "pollutants": [
      "OZONE",
      "CO"
    ],
    "pollutant_values": {}
  },
  {
    "id": "299",
    "location": "Diwator Nagar, Koppal - KSPCB",
    "city": "Koppal, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 15.34763,
    "lng": 76.181767,
    "aqi": 29,
    "pollutants": [
      "NO2",
      "PM10",
      "NH3"
    ],
    "pollutant_values": {
          "NO2": 29.0,
          "SO2": 14.0,
          "CO": 17.0,
          "OZONE": 7.0,
          "PM10": 21.0,
          "NH3": 8.0
    }
  },
  {
    "id": "300",
    "location": "Rampur, Korba - CECB",
    "city": "Korba, Chhattisgarh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.368195,
    "lng": 82.746431,
    "aqi": 25,
    "pollutants": [
      "OZONE",
      "PM2.5",
      "PM10",
      "NO2",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "SO2": 25.0,
          "NO2": 17.0,
          "NH3": 2.0
    }
  },
  {
    "id": "301",
    "location": "Urja Nagar, Korba - CECB",
    "city": "Korba, Chhattisgarh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.348441,
    "lng": 82.549611,
    "aqi": 39,
    "pollutants": [
      "OZONE",
      "PM2.5",
      "NH3",
      "CO",
      "NO2",
      "SO2",
      "PM10"
    ],
    "pollutant_values": {
          "PM10": 24.0,
          "NO2": 7.0,
          "SO2": 8.0,
          "NH3": 1.0,
          "OZONE": 2.0,
          "PM2.5": 19.0,
          "CO": 39.0
    }
  },
  {
    "id": "302",
    "location": "Dhanmandi, Kota - RSPCB",
    "city": "Kota, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 25.16409,
    "lng": 75.858137,
    "aqi": 86,
    "pollutants": [
      "PM10",
      "PM2.5",
      "SO2",
      "CO",
      "NO2",
      "NH3",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 86.0,
          "NO2": 28.0,
          "PM2.5": 27.0,
          "OZONE": 31.0,
          "NH3": 4.0,
          "SO2": 12.0,
          "CO": 14.0
    }
  },
  {
    "id": "303",
    "location": "Nayapura, Kota - RSPCB",
    "city": "Kota, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 25.196024,
    "lng": 75.855668,
    "aqi": 84,
    "pollutants": [
      "NO2",
      "SO2",
      "PM2.5",
      "NH3",
      "OZONE",
      "PM10",
      "CO"
    ],
    "pollutant_values": {
          "PM10": 84.0,
          "NH3": 7.0,
          "CO": 20.0,
          "OZONE": 36.0,
          "PM2.5": 32.0,
          "SO2": 6.0,
          "NO2": 29.0
    }
  },
  {
    "id": "304",
    "location": "Shrinath Puram, Kota - RSPCB",
    "city": "Kota, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 25.14389,
    "lng": 75.821256,
    "aqi": 68,
    "pollutants": [
      "CO",
      "SO2",
      "OZONE",
      "PM2.5",
      "NO2",
      "PM10",
      "NH3"
    ],
    "pollutant_values": {
          "OZONE": 11.0,
          "NH3": 5.0,
          "PM2.5": 68.0,
          "PM10": 63.0,
          "SO2": 9.0,
          "NO2": 18.0,
          "CO": 29.0
    }
  },
  {
    "id": "305",
    "location": "OP Jindal School, Kunjemura - CECB",
    "city": "Kunjemura, Chhattisgarh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.12665,
    "lng": 83.483212,
    "aqi": 41,
    "pollutants": [
      "CO",
      "PM2.5",
      "NO2",
      "NH3",
      "PM10",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "NO2": 20.0,
          "OZONE": 6.0,
          "PM2.5": 11.0,
          "PM10": 41.0,
          "CO": 29.0
    }
  },
  {
    "id": "306",
    "location": "Sector-7, Kurukshetra - HSPCB",
    "city": "Kurukshetra, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 29.966942,
    "lng": 76.875879,
    "aqi": 134,
    "pollutants": [
      "PM2.5",
      "OZONE",
      "PM10",
      "SO2",
      "NO2",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "OZONE": 105.0,
          "PM2.5": 95.0,
          "SO2": 7.0,
          "NO2": 70.0,
          "NH3": 14.0,
          "PM10": 134.0,
          "CO": 22.0
    }
  },
  {
    "id": "307",
    "location": "Sawe Wadi, Latur - MPCB",
    "city": "Latur, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 18.39963,
    "lng": 76.57452,
    "aqi": 32,
    "pollutants": [
      "PM2.5",
      "CO",
      "OZONE",
      "NO2",
      "NH3",
      "PM10",
      "SO2"
    ],
    "pollutant_values": {
          "PM10": 32.0,
          "CO": 6.0,
          "NO2": 10.0,
          "OZONE": 18.0,
          "PM2.5": 24.0,
          "NH3": 3.0,
          "SO2": 4.0
    }
  },
  {
    "id": "308",
    "location": "Kendriya Vidyalaya, Lucknow - CPCB",
    "city": "Lucknow, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 26.906111,
    "lng": 80.948222,
    "aqi": 64,
    "pollutants": [
      "NO2",
      "PM10",
      "PM2.5",
      "OZONE",
      "NH3",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 62.0,
          "PM10": 64.0,
          "NO2": 26.0,
          "CO": 53.0,
          "OZONE": 26.0,
          "NH3": 13.0,
          "SO2": 10.0
    }
  },
  {
    "id": "309",
    "location": "Kukrail Picnic Spot-1, Lucknow - UPPCB",
    "city": "Lucknow, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 26.90723,
    "lng": 80.98579,
    "aqi": 46,
    "pollutants": [
      "OZONE",
      "PM2.5",
      "NH3",
      "CO",
      "PM10",
      "NO2",
      "SO2"
    ],
    "pollutant_values": {
          "SO2": 12.0,
          "PM10": 46.0,
          "OZONE": 18.0,
          "PM2.5": 25.0,
          "CO": 9.0,
          "NO2": 31.0,
          "NH3": 6.0
    }
  },
  {
    "id": "310",
    "location": "Lalbagh, Lucknow - CPCB",
    "city": "Lucknow, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 26.8458805,
    "lng": 80.9365541,
    "aqi": 64,
    "pollutants": [
      "CO",
      "NH3",
      "OZONE",
      "PM2.5",
      "PM10",
      "SO2",
      "NO2"
    ],
    "pollutant_values": {
          "PM10": 64.0,
          "NO2": 24.0,
          "CO": 63.0,
          "NH3": 14.0,
          "SO2": 6.0,
          "PM2.5": 63.0,
          "OZONE": 24.0
    }
  },
  {
    "id": "311",
    "location": "B R Ambedkar University, Lucknow - UPPCB",
    "city": "Lucknow, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 26.766433,
    "lng": 80.927299,
    "aqi": 95,
    "pollutants": [
      "OZONE",
      "NO2",
      "CO",
      "PM2.5",
      "PM10",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "CO": 25.0,
          "NO2": 12.0,
          "SO2": 34.0,
          "PM10": 95.0,
          "NH3": 3.0,
          "OZONE": 48.0
    }
  },
  {
    "id": "312",
    "location": "Gomti Nagar, Lucknow - UPPCB",
    "city": "Lucknow, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 26.86812,
    "lng": 81.005119,
    "aqi": 47,
    "pollutants": [
      "NO2",
      "OZONE",
      "PM2.5",
      "CO",
      "PM10",
      "SO2"
    ],
    "pollutant_values": {
          "PM2.5": 47.0,
          "SO2": 14.0,
          "NO2": 9.0,
          "OZONE": 39.0,
          "PM10": 41.0,
          "CO": 38.0
    }
  },
  {
    "id": "313",
    "location": "Talkatora District Industries Center, Lucknow - CPCB",
    "city": "Lucknow, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 26.83399722,
    "lng": 80.8917361,
    "aqi": 58,
    "pollutants": [
      "NH3",
      "CO",
      "PM2.5",
      "NO2",
      "PM10",
      "SO2"
    ],
    "pollutant_values": {
          "PM10": 48.0,
          "NO2": 18.0,
          "SO2": 7.0,
          "PM2.5": 58.0,
          "NH3": 8.0,
          "CO": 17.0,
          "OZONE": 32.0
    }
  },
  {
    "id": "314",
    "location": "Punjab Agricultural University, Ludhiana - PPCB",
    "city": "Ludhiana, Punjab",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 30.9028,
    "lng": 75.8086,
    "aqi": 96,
    "pollutants": [
      "OZONE",
      "CO",
      "PM10",
      "NO2",
      "SO2",
      "PM2.5",
      "NH3"
    ],
    "pollutant_values": {
          "PM10": 96.0,
          "CO": 24.0,
          "PM2.5": 81.0,
          "NH3": 8.0,
          "SO2": 10.0,
          "OZONE": 55.0,
          "NO2": 41.0
    }
  },
  {
    "id": "315",
    "location": "Srinivas Nagar Colony, Machilipatnam - APPCB",
    "city": "Machilipatnam, Andhra_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 16.186555,
    "lng": 81.13219,
    "aqi": 34,
    "pollutants": [
      "NO2",
      "PM2.5",
      "PM10",
      "SO2",
      "CO",
      "NH3",
      "OZONE"
    ],
    "pollutant_values": {
          "OZONE": 34.0,
          "CO": 10.0
    }
  },
  {
    "id": "316",
    "location": "Stuart Hill, Madikeri - KSPCB",
    "city": "Madikeri, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 12.415911,
    "lng": 75.73505,
    "aqi": 13,
    "pollutants": [
      "PM10",
      "OZONE",
      "PM2.5",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "NO2": 2.0,
          "NH3": 1.0,
          "CO": 13.0,
          "OZONE": 3.0,
          "PM10": 13.0,
          "SO2": 7.0,
          "PM2.5": 11.0
    }
  },
  {
    "id": "317",
    "location": "Uchapatti, Madurai - TNPCB",
    "city": "Madurai, TamilNadu",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 9.865935,
    "lng": 78.022669,
    "aqi": 56,
    "pollutants": [
      "CO"
    ],
    "pollutant_values": {
          "NH3": 9.0,
          "SO2": 56.0,
          "CO": 47.0,
          "OZONE": 1.0
    }
  },
  {
    "id": "318",
    "location": "Kamble Tarf Birwadi, Mahad - MPCB",
    "city": "Mahad, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 18.1023399,
    "lng": 73.4783687,
    "aqi": 45,
    "pollutants": [
      "NH3",
      "PM2.5",
      "CO",
      "SO2",
      "OZONE",
      "PM10",
      "NO2"
    ],
    "pollutant_values": {
          "PM10": 45.0,
          "NO2": 16.0,
          "NH3": 5.0,
          "SO2": 15.0,
          "OZONE": 33.0,
          "PM2.5": 37.0,
          "CO": 25.0
    }
  },
  {
    "id": "319",
    "location": "Sahilara, Maihar - KJS Cements",
    "city": "Maihar, Madhya Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 24.2613009,
    "lng": 80.7231783,
    "aqi": 39,
    "pollutants": [
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 22.0,
          "SO2": 15.0,
          "CO": 39.0,
          "NO2": 2.0
    }
  },
  {
    "id": "320",
    "location": "Mahesh Nagar, Malegaon - MPCB",
    "city": "Malegaon, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 20.555712,
    "lng": 74.529236,
    "aqi": 51,
    "pollutants": [
      "OZONE",
      "CO",
      "PM2.5",
      "PM10",
      "NO2"
    ],
    "pollutant_values": {
          "PM10": 51.0,
          "SO2": 3.0,
          "OZONE": 10.0,
          "PM2.5": 34.0,
          "CO": 21.0,
          "NO2": 18.0
    }
  },
  {
    "id": "321",
    "location": "RIMT University, Mandi Gobindgarh - PPCB",
    "city": "Mandi Gobindgarh, Punjab",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 30.649961,
    "lng": 76.331442,
    "aqi": 128,
    "pollutants": [
      "PM2.5",
      "NO2",
      "PM10",
      "OZONE",
      "NH3",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 81.0,
          "NO2": 25.0,
          "PM10": 128.0,
          "NH3": 5.0,
          "CO": 48.0,
          "SO2": 16.0,
          "OZONE": 37.0
    }
  },
  {
    "id": "322",
    "location": "Sector-D Industrial Area, Mandideep - MPPCB",
    "city": "Mandideep, Madhya Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 23.10844,
    "lng": 77.511428,
    "aqi": 30,
    "pollutants": [
      "NO2",
      "PM10",
      "NH3",
      "PM2.5",
      "SO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "NH3": 7.0,
          "OZONE": 27.0,
          "PM2.5": 30.0,
          "CO": 19.0,
          "NO2": 25.0
    }
  },
  {
    "id": "323",
    "location": "General Hospital, Mandikhera(Nuh) - HSPCB",
    "city": "Mandikhera, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 27.9002,
    "lng": 76.9938,
    "aqi": 79,
    "pollutants": [
      "CO",
      "PM2.5",
      "OZONE",
      "SO2",
      "PM10",
      "NO2",
      "NH3"
    ],
    "pollutant_values": {
          "NH3": 8.0,
          "PM2.5": 51.0,
          "NO2": 16.0,
          "SO2": 21.0,
          "CO": 33.0,
          "OZONE": 48.0,
          "PM10": 79.0
    }
  },
  {
    "id": "324",
    "location": "Sector-2 IMT, Manesar - HSPCB",
    "city": "Manesar, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.360699,
    "lng": 76.93609,
    "aqi": 193,
    "pollutants": [
      "NH3",
      "PM2.5",
      "SO2",
      "NO2",
      "CO",
      "PM10",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 123.0,
          "SO2": 14.0,
          "NO2": 29.0,
          "NH3": 9.0,
          "PM2.5": 193.0,
          "CO": 18.0,
          "OZONE": 31.0
    }
  },
  {
    "id": "325",
    "location": "Kadri, Mangalore - KSPCB",
    "city": "Mangalore, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 12.88925,
    "lng": 74.853,
    "aqi": 46,
    "pollutants": [
      "NO2",
      "NH3",
      "PM2.5",
      "PM10",
      "OZONE"
    ],
    "pollutant_values": {}
  },
  {
    "id": "326",
    "location": "Forest Rest House, Manguraha - BSPCB",
    "city": "Manguraha, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 27.308328,
    "lng": 84.531742,
    "aqi": 28,
    "pollutants": [
      "NH3",
      "OZONE",
      "CO",
      "NO2",
      "SO2"
    ],
    "pollutant_values": {
          "CO": 23.0,
          "OZONE": 28.0
    }
  },
  {
    "id": "327",
    "location": "Jai Bhim Nagar, Meerut - UPPCB",
    "city": "Meerut, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.9535882,
    "lng": 77.7622941,
    "aqi": 132,
    "pollutants": [
      "PM10",
      "NO2",
      "SO2",
      "OZONE",
      "NH3",
      "CO",
      "PM2.5"
    ],
    "pollutant_values": {
          "PM2.5": 61.0,
          "PM10": 132.0,
          "NO2": 17.0,
          "SO2": 5.0,
          "OZONE": 15.0,
          "NH3": 9.0,
          "CO": 36.0
    }
  },
  {
    "id": "328",
    "location": "Pallavpuram Phase 2, Meerut - UPPCB",
    "city": "Meerut, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 29.06351,
    "lng": 77.709723,
    "aqi": 143,
    "pollutants": [
      "OZONE",
      "PM10",
      "NO2",
      "NH3",
      "PM2.5",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "CO": 13.0,
          "PM2.5": 123.0,
          "PM10": 143.0,
          "SO2": 11.0,
          "NH3": 16.0,
          "NO2": 30.0,
          "OZONE": 17.0
    }
  },
  {
    "id": "329",
    "location": "Ganga Nagar, Meerut - UPPCB",
    "city": "Meerut, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.999264,
    "lng": 77.7590354,
    "aqi": 142,
    "pollutants": [
      "PM10",
      "NO2",
      "OZONE",
      "PM2.5",
      "NH3",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "PM10": 142.0,
          "NO2": 31.0,
          "SO2": 27.0,
          "PM2.5": 90.0,
          "NH3": 11.0,
          "CO": 35.0,
          "OZONE": 34.0
    }
  },
  {
    "id": "330",
    "location": "MIET College, Meerut - UPPCB",
    "city": "Meerut, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.972677,
    "lng": 77.641018,
    "aqi": 167,
    "pollutants": [
      "PM2.5",
      "PM10",
      "SO2",
      "NO2",
      "NH3",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 122.0,
          "PM10": 167.0,
          "NH3": 9.0,
          "CO": 61.0,
          "SO2": 7.0,
          "OZONE": 22.0,
          "NO2": 31.0
    }
  },
  {
    "id": "331",
    "location": "Sadanand Nagar, Mehsana - Nexteng Enviro",
    "city": "Mehsana, Gujarat",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 23.59315,
    "lng": 72.372792,
    "aqi": 73,
    "pollutants": [
      "CO",
      "PM2.5",
      "PM10",
      "NO2",
      "NH3",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 37.0,
          "PM10": 73.0,
          "NO2": 10.0,
          "NH3": 1.0,
          "CO": 69.0,
          "OZONE": 13.0,
          "SO2": 14.0
    }
  },
  {
    "id": "332",
    "location": "Bhayandar West, Mira-Bhayandar - MPCB",
    "city": "Mira-Bhayandar, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.296481,
    "lng": 72.840923,
    "aqi": 24,
    "pollutants": [
      "CO",
      "PM2.5",
      "NO2",
      "SO2",
      "PM10",
      "NH3",
      "OZONE"
    ],
    "pollutant_values": {
          "NH3": 4.0,
          "PM2.5": 23.0,
          "CO": 17.0,
          "SO2": 3.0,
          "OZONE": 7.0,
          "PM10": 24.0,
          "NO2": 10.0
    }
  },
  {
    "id": "333",
    "location": "SRM University, Modinagar - UPPCB",
    "city": "Modinagar, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.798171,
    "lng": 77.540243,
    "aqi": 155,
    "pollutants": [
      "PM10",
      "SO2",
      "PM2.5",
      "CO",
      "NO2",
      "NH3",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 155.0,
          "NH3": 3.0,
          "OZONE": 41.0,
          "PM10": 104.0,
          "NO2": 21.0,
          "SO2": 12.0,
          "CO": 27.0
    }
  },
  {
    "id": "334",
    "location": "Eco Herbal Park, Moradabad - UPPCB",
    "city": "Moradabad, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.840739,
    "lng": 78.697531,
    "aqi": 50,
    "pollutants": [
      "NO2",
      "CO",
      "PM10",
      "NH3",
      "PM2.5",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 47.0,
          "CO": 27.0,
          "OZONE": 23.0,
          "NH3": 9.0,
          "PM10": 50.0,
          "NO2": 21.0,
          "SO2": 15.0
    }
  },
  {
    "id": "335",
    "location": "Employment Office, Moradabad - UPPCB",
    "city": "Moradabad, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.88528,
    "lng": 78.7388,
    "aqi": 64,
    "pollutants": [
      "PM2.5",
      "OZONE",
      "CO",
      "NO2",
      "NH3",
      "PM10",
      "SO2"
    ],
    "pollutant_values": {
          "SO2": 28.0,
          "OZONE": 18.0,
          "PM10": 64.0,
          "PM2.5": 58.0,
          "NO2": 23.0,
          "NH3": 3.0,
          "CO": 16.0
    }
  },
  {
    "id": "336",
    "location": "Kashiram Nagar, Moradabad - UPPCB",
    "city": "Moradabad, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.849399,
    "lng": 78.742362,
    "aqi": 69,
    "pollutants": [
      "NH3",
      "PM2.5",
      "NO2",
      "PM10",
      "OZONE",
      "CO"
    ],
    "pollutant_values": {
          "CO": 33.0,
          "PM2.5": 36.0,
          "NO2": 24.0,
          "SO2": 69.0,
          "PM10": 67.0,
          "NH3": 4.0
    }
  },
  {
    "id": "337",
    "location": "Transport Nagar, Moradabad - UPPCB",
    "city": "Moradabad, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.802625,
    "lng": 78.753728,
    "aqi": 61,
    "pollutants": [
      "PM10",
      "PM2.5",
      "CO",
      "OZONE",
      "NO2",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "PM10": 58.0,
          "SO2": 19.0,
          "OZONE": 34.0,
          "NO2": 24.0,
          "PM2.5": 46.0,
          "NH3": 5.0,
          "CO": 61.0
    }
  },
  {
    "id": "338",
    "location": "Buddhi Vihar, Moradabad - UPPCB",
    "city": "Moradabad, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.83526,
    "lng": 78.7446,
    "aqi": 60,
    "pollutants": [
      "PM2.5",
      "CO",
      "NO2",
      "PM10",
      "NH3",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 43.0,
          "PM10": 60.0,
          "OZONE": 27.0,
          "NO2": 29.0,
          "NH3": 5.0,
          "SO2": 25.0,
          "CO": 32.0
    }
  },
  {
    "id": "339",
    "location": "Jigar Colony, Moradabad - UPPCB",
    "city": "Moradabad, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.856664,
    "lng": 78.772638,
    "aqi": 64,
    "pollutants": [
      "PM2.5",
      "NH3",
      "CO",
      "OZONE",
      "PM10",
      "NO2"
    ],
    "pollutant_values": {
          "SO2": 44.0,
          "PM2.5": 38.0,
          "NO2": 25.0,
          "CO": 40.0,
          "NH3": 6.0,
          "PM10": 64.0,
          "OZONE": 20.0
    }
  },
  {
    "id": "340",
    "location": "Gandak Colony, Motihari - BSPCB",
    "city": "Motihari, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 26.63086,
    "lng": 84.90051,
    "aqi": 59,
    "pollutants": [
      "CO",
      "OZONE",
      "PM2.5",
      "PM10",
      "NO2",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "CO": 12.0,
          "OZONE": 59.0,
          "NO2": 3.0,
          "NH3": 3.0,
          "SO2": 3.0,
          "PM2.5": 17.0,
          "PM10": 17.0
    }
  },
  {
    "id": "341",
    "location": "Chakala-Andheri East, Mumbai - IITM",
    "city": "Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.11074,
    "lng": 72.86084,
    "aqi": 29,
    "pollutants": [
      "OZONE",
      "NO2",
      "PM2.5",
      "PM10",
      "NH3",
      "CO",
      "SO2"
    ],
    "pollutant_values": {
          "NO2": 5.0,
          "OZONE": 11.0,
          "NH3": 4.0,
          "CO": 15.0,
          "PM2.5": 20.0,
          "PM10": 29.0,
          "SO2": 2.0
    }
  },
  {
    "id": "342",
    "location": "Chembur, Mumbai - MPCB",
    "city": "Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.0364585,
    "lng": 72.8954371,
    "aqi": 29,
    "pollutants": [
      "PM2.5",
      "NO2",
      "NH3",
      "SO2",
      "OZONE",
      "PM10",
      "CO"
    ],
    "pollutant_values": {
          "NO2": 13.0,
          "PM2.5": 19.0,
          "PM10": 29.0,
          "NH3": 13.0,
          "SO2": 1.0,
          "CO": 22.0
    }
  },
  {
    "id": "343",
    "location": "Colaba, Mumbai - MPCB",
    "city": "Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 18.91,
    "lng": 72.82,
    "aqi": 27,
    "pollutants": [
      "PM10",
      "CO",
      "NO2",
      "PM2.5",
      "NH3"
    ],
    "pollutant_values": {
          "NO2": 27.0,
          "NH3": 4.0,
          "OZONE": 12.0
    }
  },
  {
    "id": "344",
    "location": "Deonar, Mumbai - IITM",
    "city": "Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.04946,
    "lng": 72.923,
    "aqi": 65,
    "pollutants": [
      "PM10",
      "CO",
      "PM2.5",
      "NO2",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 20.0,
          "NH3": 10.0,
          "CO": 46.0,
          "SO2": 6.0,
          "OZONE": 11.0,
          "PM10": 65.0,
          "NO2": 9.0
    }
  },
  {
    "id": "345",
    "location": "Ghatkopar, Mumbai - BMC",
    "city": "Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.083694,
    "lng": 72.920967,
    "aqi": 43,
    "pollutants": [
      "PM10",
      "PM2.5",
      "NO2",
      "NH3",
      "CO",
      "OZONE",
      "SO2"
    ],
    "pollutant_values": {
          "OZONE": 30.0,
          "PM2.5": 14.0,
          "NO2": 12.0,
          "NH3": 6.0,
          "PM10": 43.0,
          "CO": 21.0
    }
  },
  {
    "id": "346",
    "location": "Bandra Kurla Complex, Mumbai - MPCB",
    "city": "Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.065931,
    "lng": 72.862131,
    "aqi": 38,
    "pollutants": [
      "PM2.5",
      "CO",
      "NO2",
      "PM10",
      "NH3",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "SO2": 2.0,
          "PM10": 38.0,
          "CO": 26.0,
          "OZONE": 14.0,
          "PM2.5": 22.0,
          "NO2": 10.0,
          "NH3": 3.0
    }
  },
  {
    "id": "347",
    "location": "Borivali East, Mumbai - IITM",
    "city": "Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.23241,
    "lng": 72.86895,
    "aqi": 46,
    "pollutants": [
      "NH3",
      "OZONE",
      "PM10",
      "CO",
      "PM2.5",
      "NO2"
    ],
    "pollutant_values": {
          "NH3": 2.0,
          "OZONE": 18.0,
          "PM2.5": 35.0,
          "NO2": 22.0,
          "CO": 46.0,
          "PM10": 42.0
    }
  },
  {
    "id": "348",
    "location": "Borivali East, Mumbai - MPCB",
    "city": "Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.2243333,
    "lng": 72.8658113,
    "aqi": 33,
    "pollutants": [
      "NH3",
      "PM2.5",
      "PM10",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 15.0,
          "NO2": 10.0,
          "SO2": 33.0,
          "NH3": 2.0,
          "PM10": 27.0,
          "CO": 13.0
    }
  },
  {
    "id": "349",
    "location": "Mazgaon, Mumbai - IITM",
    "city": "Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 18.96702,
    "lng": 72.84214,
    "aqi": 46,
    "pollutants": [
      "PM2.5",
      "OZONE",
      "NO2",
      "NH3",
      "SO2",
      "CO",
      "PM10"
    ],
    "pollutant_values": {
          "NO2": 9.0,
          "PM2.5": 28.0,
          "NH3": 2.0,
          "CO": 43.0,
          "PM10": 46.0,
          "SO2": 10.0,
          "OZONE": 23.0
    }
  },
  {
    "id": "350",
    "location": "Mindspace-Malad West, Mumbai - MPCB",
    "city": "Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.1878657,
    "lng": 72.8304069,
    "aqi": 41,
    "pollutants": [
      "NH3",
      "CO",
      "OZONE",
      "NO2",
      "PM2.5",
      "PM10",
      "SO2"
    ],
    "pollutant_values": {
          "PM2.5": 12.0,
          "NO2": 13.0,
          "NH3": 9.0,
          "PM10": 25.0,
          "CO": 41.0,
          "SO2": 7.0,
          "OZONE": 20.0
    }
  },
  {
    "id": "351",
    "location": "Powai, Mumbai - MPCB",
    "city": "Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.1375,
    "lng": 72.915056,
    "aqi": 18,
    "pollutants": [
      "PM10",
      "OZONE",
      "NO2",
      "SO2",
      "PM2.5",
      "NH3"
    ],
    "pollutant_values": {
          "PM10": 18.0,
          "NO2": 7.0,
          "SO2": 16.0
    }
  },
  {
    "id": "352",
    "location": "Sewri, Mumbai - BMC",
    "city": "Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.000084,
    "lng": 72.85673,
    "aqi": 47,
    "pollutants": [
      "PM10",
      "NH3",
      "PM2.5",
      "SO2",
      "OZONE",
      "NO2",
      "CO"
    ],
    "pollutant_values": {
          "NO2": 17.0,
          "OZONE": 16.0,
          "PM10": 47.0,
          "NH3": 4.0,
          "PM2.5": 33.0,
          "SO2": 4.0,
          "CO": 22.0
    }
  },
  {
    "id": "353",
    "location": "Shivaji Nagar, Mumbai - BMC",
    "city": "Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.060498,
    "lng": 72.923356,
    "aqi": 26,
    "pollutants": [
      "PM10",
      "PM2.5",
      "NO2",
      "SO2",
      "CO",
      "NH3",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 26.0,
          "OZONE": 8.0,
          "PM2.5": 18.0,
          "NH3": 5.0,
          "SO2": 4.0,
          "CO": 19.0,
          "NO2": 13.0
    }
  },
  {
    "id": "354",
    "location": "Vile Parle West, Mumbai - MPCB",
    "city": "Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.10861,
    "lng": 72.83622,
    "aqi": 51,
    "pollutants": [
      "PM10",
      "NH3",
      "PM2.5",
      "NO2",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "NH3": 6.0,
          "CO": 37.0,
          "NO2": 11.0,
          "SO2": 51.0
    }
  },
  {
    "id": "355",
    "location": "Worli, Mumbai -MPCB",
    "city": "Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 18.994218,
    "lng": 72.8158167,
    "aqi": 31,
    "pollutants": [
      "PM2.5",
      "NO2",
      "PM10",
      "CO",
      "SO2",
      "NH3",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 13.0,
          "NH3": 3.0,
          "OZONE": 13.0,
          "NO2": 29.0,
          "CO": 20.0,
          "PM10": 29.0,
          "SO2": 31.0
    }
  },
  {
    "id": "356",
    "location": "Kherwadi_Bandra East, Mumbai - MPCB",
    "city": "Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.0632143,
    "lng": 72.8456324,
    "aqi": 31,
    "pollutants": [
      "PM2.5",
      "PM10",
      "CO",
      "SO2",
      "OZONE",
      "NO2",
      "NH3"
    ],
    "pollutant_values": {
          "PM10": 31.0,
          "CO": 16.0,
          "OZONE": 16.0,
          "NO2": 5.0,
          "NH3": 4.0,
          "SO2": 5.0,
          "PM2.5": 27.0
    }
  },
  {
    "id": "357",
    "location": "Khindipada-Bhandup West, Mumbai - IITM",
    "city": "Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.1653323,
    "lng": 72.922099,
    "aqi": 29,
    "pollutants": [
      "SO2",
      "NO2",
      "PM2.5",
      "NH3",
      "OZONE",
      "PM10",
      "CO"
    ],
    "pollutant_values": {
          "CO": 10.0,
          "OZONE": 16.0,
          "SO2": 13.0,
          "PM2.5": 17.0,
          "PM10": 29.0,
          "NO2": 12.0
    }
  },
  {
    "id": "358",
    "location": "Kurla, Mumbai - MPCB",
    "city": "Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.0863,
    "lng": 72.8888,
    "aqi": 49,
    "pollutants": [
      "OZONE",
      "CO"
    ],
    "pollutant_values": {
          "NH3": 2.0,
          "SO2": 29.0,
          "OZONE": 29.0,
          "PM10": 49.0,
          "NO2": 9.0,
          "PM2.5": 43.0,
          "CO": 25.0
    }
  },
  {
    "id": "359",
    "location": "Malad West, Mumbai - IITM",
    "city": "Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.19709,
    "lng": 72.82204,
    "aqi": 33,
    "pollutants": [
      "PM10",
      "NH3",
      "PM2.5",
      "SO2",
      "OZONE",
      "NO2",
      "CO"
    ],
    "pollutant_values": {
          "SO2": 13.0,
          "CO": 33.0,
          "NH3": 5.0,
          "PM2.5": 13.0,
          "NO2": 27.0,
          "OZONE": 7.0
    }
  },
  {
    "id": "360",
    "location": "Mulund West, Mumbai - MPCB",
    "city": "Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.175,
    "lng": 72.9419,
    "aqi": 26,
    "pollutants": [
      "NO2",
      "PM2.5"
    ],
    "pollutant_values": {
          "PM2.5": 26.0,
          "NO2": 18.0,
          "NH3": 3.0,
          "CO": 11.0
    }
  },
  {
    "id": "361",
    "location": "Navy Nagar-Colaba, Mumbai - IITM",
    "city": "Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 18.897756,
    "lng": 72.81332,
    "aqi": 87,
    "pollutants": [
      "OZONE",
      "PM2.5",
      "PM10",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "NH3": 6.0,
          "SO2": 6.0,
          "PM10": 50.0,
          "OZONE": 28.0,
          "PM2.5": 24.0,
          "NO2": 87.0,
          "CO": 19.0
    }
  },
  {
    "id": "362",
    "location": "Siddharth Nagar-Worli, Mumbai - IITM",
    "city": "Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.000083,
    "lng": 72.813993,
    "aqi": 47,
    "pollutants": [
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "CO": 27.0,
          "NH3": 1.0,
          "PM2.5": 30.0,
          "PM10": 47.0,
          "NO2": 17.0,
          "OZONE": 15.0
    }
  },
  {
    "id": "363",
    "location": "Sion, Mumbai - MPCB",
    "city": "Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.047,
    "lng": 72.8746,
    "aqi": 39,
    "pollutants": [
      "PM2.5",
      "PM10",
      "NH3",
      "SO2",
      "CO",
      "NO2"
    ],
    "pollutant_values": {
          "NH3": 6.0,
          "NO2": 39.0,
          "CO": 19.0
    }
  },
  {
    "id": "364",
    "location": "Bandra Kurla Complex, Mumbai - IITM",
    "city": "Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.053536,
    "lng": 72.84643,
    "aqi": 52,
    "pollutants": [
      "CO",
      "OZONE",
      "PM10",
      "NO2",
      "SO2",
      "PM2.5",
      "NH3"
    ],
    "pollutant_values": {
          "CO": 10.0,
          "PM2.5": 22.0,
          "PM10": 52.0,
          "OZONE": 19.0,
          "NO2": 7.0,
          "NH3": 4.0,
          "SO2": 4.0
    }
  },
  {
    "id": "365",
    "location": "Byculla, Mumbai - BMC",
    "city": "Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 18.9767,
    "lng": 72.838,
    "aqi": 44,
    "pollutants": [
      "PM2.5",
      "CO",
      "NH3",
      "SO2",
      "NO2",
      "PM10",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 21.0,
          "PM10": 44.0,
          "NO2": 15.0,
          "CO": 25.0,
          "OZONE": 7.0,
          "SO2": 6.0,
          "NH3": 2.0
    }
  },
  {
    "id": "366",
    "location": "Town Hall, Munger - BSPCB",
    "city": "Munger, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 25.376776,
    "lng": 86.471523,
    "aqi": 71,
    "pollutants": [
      "PM2.5",
      "NO2",
      "SO2",
      "PM10",
      "NH3",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "NO2": 2.0,
          "NH3": 3.0,
          "CO": 5.0,
          "PM2.5": 34.0,
          "SO2": 10.0,
          "PM10": 71.0,
          "OZONE": 6.0
    }
  },
  {
    "id": "367",
    "location": "New Mandi, Muzaffarnagar - UPPCB",
    "city": "Muzaffarnagar, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 29.4723508,
    "lng": 77.7194031,
    "aqi": 136,
    "pollutants": [
      "PM10",
      "PM2.5",
      "NO2",
      "SO2",
      "OZONE",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "PM10": 136.0,
          "OZONE": 21.0,
          "NO2": 29.0,
          "NH3": 3.0,
          "PM2.5": 130.0,
          "SO2": 13.0,
          "CO": 33.0
    }
  },
  {
    "id": "368",
    "location": "Muzaffarpur Collectorate, Muzaffarpur - BSPCB",
    "city": "Muzaffarpur, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 26.1209,
    "lng": 85.3647,
    "aqi": 50,
    "pollutants": [
      "PM2.5",
      "NO2",
      "OZONE",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "SO2": 8.0,
          "CO": 34.0,
          "PM2.5": 50.0,
          "NO2": 18.0,
          "OZONE": 19.0
    }
  },
  {
    "id": "369",
    "location": "Buddha Colony, Muzaffarpur - BSPCB",
    "city": "Muzaffarpur, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 26.11442,
    "lng": 85.39813,
    "aqi": 51,
    "pollutants": [
      "NO2",
      "NH3",
      "CO",
      "PM2.5",
      "PM10",
      "OZONE",
      "SO2"
    ],
    "pollutant_values": {
          "PM10": 51.0,
          "NH3": 7.0,
          "OZONE": 25.0,
          "PM2.5": 40.0,
          "CO": 20.0,
          "SO2": 11.0,
          "NO2": 20.0
    }
  },
  {
    "id": "370",
    "location": "MIT-Daudpur Kothi, Muzaffarpur - BSPCB",
    "city": "Muzaffarpur, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 26.1403345,
    "lng": 85.3650192,
    "aqi": 39,
    "pollutants": [
      "OZONE",
      "NO2",
      "SO2",
      "PM2.5",
      "NH3",
      "CO",
      "PM10"
    ],
    "pollutant_values": {
          "NH3": 2.0,
          "PM2.5": 34.0,
          "PM10": 32.0,
          "SO2": 14.0,
          "NO2": 3.0,
          "CO": 12.0,
          "OZONE": 39.0
    }
  },
  {
    "id": "371",
    "location": "Hebbal 1st Stage, Mysuru - KSPCB",
    "city": "Mysuru, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 12.21041,
    "lng": 76.37376,
    "aqi": 55,
    "pollutants": [
      "CO",
      "NH3",
      "NO2",
      "PM2.5",
      "OZONE",
      "PM10",
      "SO2"
    ],
    "pollutant_values": {
          "PM10": 52.0,
          "NH3": 4.0,
          "SO2": 4.0,
          "NO2": 18.0,
          "CO": 11.0,
          "PM2.5": 18.0,
          "OZONE": 55.0
    }
  },
  {
    "id": "372",
    "location": "Christianpatty, Nagaon - PCBA",
    "city": "Nagaon, Assam",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 26.349082,
    "lng": 92.68449,
    "aqi": 62,
    "pollutants": [
      "NO2",
      "SO2",
      "NH3",
      "CO",
      "OZONE",
      "PM2.5",
      "PM10"
    ],
    "pollutant_values": {
          "NH3": 4.0,
          "SO2": 12.0,
          "PM10": 56.0,
          "NO2": 1.0,
          "OZONE": 10.0,
          "PM2.5": 62.0,
          "CO": 18.0
    }
  },
  {
    "id": "373",
    "location": "Karni Colony, Nagaur - RSPCB",
    "city": "Nagaur, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 27.213494,
    "lng": 73.734444,
    "aqi": 85,
    "pollutants": [
      "PM10",
      "NH3",
      "SO2",
      "NO2",
      "CO",
      "PM2.5",
      "OZONE"
    ],
    "pollutant_values": {
          "CO": 11.0,
          "PM2.5": 28.0,
          "SO2": 7.0,
          "OZONE": 25.0,
          "NO2": 6.0,
          "PM10": 85.0,
          "NH3": 3.0
    }
  },
  {
    "id": "374",
    "location": "Ambazari, Nagpur - MPCB",
    "city": "Nagpur, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 21.121801,
    "lng": 79.04952,
    "aqi": 38,
    "pollutants": [
      "NO2",
      "OZONE",
      "PM10",
      "CO",
      "PM2.5",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "PM2.5": 34.0,
          "OZONE": 11.0,
          "CO": 14.0,
          "PM10": 38.0,
          "NH3": 3.0,
          "SO2": 5.0,
          "NO2": 9.0
    }
  },
  {
    "id": "375",
    "location": "Mahal, Nagpur - MPCB",
    "city": "Nagpur, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 21.14472,
    "lng": 79.107595,
    "aqi": 37,
    "pollutants": [
      "SO2",
      "PM10",
      "CO",
      "NO2",
      "NH3",
      "OZONE",
      "PM2.5"
    ],
    "pollutant_values": {
          "PM2.5": 37.0,
          "NO2": 13.0,
          "NH3": 4.0,
          "CO": 16.0,
          "OZONE": 13.0,
          "PM10": 35.0,
          "SO2": 10.0
    }
  },
  {
    "id": "376",
    "location": "Ram Nagar, Nagpur - MPCB",
    "city": "Nagpur, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 21.143383,
    "lng": 79.048912,
    "aqi": 41,
    "pollutants": [
      "OZONE",
      "PM2.5",
      "NO2",
      "SO2",
      "PM10",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "OZONE": 5.0,
          "PM2.5": 39.0,
          "NH3": 5.0,
          "PM10": 41.0,
          "SO2": 2.0,
          "NO2": 7.0,
          "CO": 11.0
    }
  },
  {
    "id": "377",
    "location": "Opp GPO Civil Lines, Nagpur - MPCB",
    "city": "Nagpur, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 21.152875,
    "lng": 79.0517531,
    "aqi": 28,
    "pollutants": [
      "NH3",
      "SO2",
      "NO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "SO2": 3.0,
          "OZONE": 6.0,
          "PM2.5": 26.0,
          "NO2": 16.0,
          "NH3": 5.0,
          "PM10": 27.0,
          "CO": 28.0
    }
  },
  {
    "id": "378",
    "location": "Naharlagun, Naharlagun - APSPCB",
    "city": "Naharlagun, Arunachal_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 27.103358,
    "lng": 93.679645,
    "aqi": 17,
    "pollutants": [
      "PM2.5",
      "PM10",
      "OZONE",
      "NH3",
      "SO2",
      "NO2",
      "CO"
    ],
    "pollutant_values": {
          "SO2": 10.0,
          "OZONE": 6.0,
          "PM10": 17.0,
          "NO2": 7.0,
          "PM2.5": 12.0,
          "NH3": 1.0,
          "CO": 8.0
    }
  },
  {
    "id": "379",
    "location": "Bata Chowk, Nalbari - PCBA",
    "city": "Nalbari, Assam",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 26.446912,
    "lng": 91.439057,
    "aqi": 35,
    "pollutants": [
      "NO2",
      "OZONE",
      "PM2.5",
      "PM10",
      "NH3",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "NH3": 6.0,
          "SO2": 8.0,
          "PM2.5": 35.0,
          "PM10": 26.0,
          "NO2": 15.0,
          "CO": 22.0,
          "OZONE": 19.0
    }
  },
  {
    "id": "380",
    "location": "Sneh Nagar, Nanded - MPCB",
    "city": "Nanded, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.173852,
    "lng": 77.296291,
    "aqi": 30,
    "pollutants": [
      "PM2.5",
      "CO",
      "PM10",
      "OZONE",
      "NO2",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "NH3": 4.0,
          "SO2": 9.0,
          "PM10": 30.0,
          "OZONE": 20.0,
          "NO2": 10.0,
          "CO": 22.0,
          "PM2.5": 10.0
    }
  },
  {
    "id": "381",
    "location": "GIDC, Nandesari - Nandesari Ind. Association",
    "city": "Nandesari, Gujarat",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 22.410802,
    "lng": 73.097923,
    "aqi": 51,
    "pollutants": [
      "PM10",
      "NO2",
      "PM2.5",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "SO2": 3.0,
          "CO": 51.0,
          "PM10": 51.0,
          "PM2.5": 44.0
    }
  },
  {
    "id": "382",
    "location": "Shastri Nagar, Narnaul - HSPCB",
    "city": "Narnaul, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.060249,
    "lng": 76.113115,
    "aqi": 92,
    "pollutants": [
      "OZONE",
      "PM10",
      "NO2",
      "NH3",
      "SO2",
      "CO",
      "PM2.5"
    ],
    "pollutant_values": {
          "PM2.5": 92.0,
          "OZONE": 49.0,
          "NO2": 28.0,
          "NH3": 5.0,
          "SO2": 10.0,
          "CO": 12.0,
          "PM10": 90.0
    }
  },
  {
    "id": "383",
    "location": "Pandav Nagari, Nashik - MPCB",
    "city": "Nashik, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.9591346,
    "lng": 73.7788008,
    "aqi": 21,
    "pollutants": [
      "OZONE",
      "SO2",
      "PM2.5",
      "PM10",
      "NO2",
      "CO",
      "NH3"
    ],
    "pollutant_values": {
          "NO2": 4.0,
          "NH3": 2.0,
          "PM10": 21.0,
          "OZONE": 16.0,
          "PM2.5": 19.0,
          "SO2": 4.0,
          "CO": 14.0
    }
  },
  {
    "id": "384",
    "location": "Hirawadi, Nashik - MPCB",
    "city": "Nashik, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 20.021503,
    "lng": 73.813844,
    "aqi": 39,
    "pollutants": [
      "SO2",
      "PM10",
      "CO",
      "OZONE",
      "PM2.5",
      "NO2",
      "NH3"
    ],
    "pollutant_values": {
          "SO2": 6.0,
          "NO2": 3.0,
          "NH3": 4.0,
          "PM2.5": 23.0,
          "PM10": 24.0,
          "OZONE": 16.0,
          "CO": 39.0
    }
  },
  {
    "id": "385",
    "location": "Gangapur Road, Nashik - MPCB",
    "city": "Nashik, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 20.0073285,
    "lng": 73.7762427,
    "aqi": 27,
    "pollutants": [
      "NO2",
      "SO2",
      "OZONE",
      "PM2.5",
      "NH3",
      "PM10",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 25.0,
          "SO2": 5.0,
          "PM10": 27.0,
          "NH3": 3.0,
          "CO": 22.0,
          "NO2": 5.0,
          "OZONE": 26.0
    }
  },
  {
    "id": "386",
    "location": "MIDC Ambad, Nashik - MPCB",
    "city": "Nashik, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.95022,
    "lng": 73.73148,
    "aqi": 39,
    "pollutants": [
      "PM2.5",
      "NH3",
      "NO2",
      "SO2",
      "CO",
      "PM10",
      "OZONE"
    ],
    "pollutant_values": {
          "NO2": 4.0,
          "SO2": 2.0,
          "OZONE": 14.0,
          "CO": 10.0,
          "PM2.5": 30.0,
          "PM10": 39.0,
          "NH3": 4.0
    }
  },
  {
    "id": "387",
    "location": "Mahape, Navi Mumbai - MPCB",
    "city": "Navi Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.1135051,
    "lng": 73.008978,
    "aqi": 53,
    "pollutants": [
      "PM10",
      "NH3",
      "SO2",
      "OZONE",
      "PM2.5",
      "NO2"
    ],
    "pollutant_values": {
          "CO": 53.0,
          "NO2": 43.0,
          "NH3": 1.0,
          "OZONE": 11.0,
          "PM2.5": 12.0,
          "PM10": 37.0,
          "SO2": 17.0
    }
  },
  {
    "id": "388",
    "location": "Sector-2E Kalamboli, Navi Mumbai - MPCB",
    "city": "Navi Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.02579,
    "lng": 73.10297,
    "aqi": 33,
    "pollutants": [
      "PM2.5",
      "NH3",
      "PM10",
      "CO",
      "NO2",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "NH3": 8.0,
          "PM2.5": 20.0,
          "CO": 15.0,
          "SO2": 5.0,
          "PM10": 33.0,
          "NO2": 11.0,
          "OZONE": 6.0
    }
  },
  {
    "id": "389",
    "location": "Nerul, Navi Mumbai - MPCB",
    "city": "Navi Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.008751,
    "lng": 73.01662,
    "aqi": 13,
    "pollutants": [
      "NH3",
      "NO2",
      "PM2.5"
    ],
    "pollutant_values": {
          "NO2": 8.0,
          "NH3": 1.0,
          "PM2.5": 13.0
    }
  },
  {
    "id": "390",
    "location": "Tondare-Taloja, Navi Mumbai - MPCB",
    "city": "Navi Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.063,
    "lng": 73.1209,
    "aqi": 36,
    "pollutants": [
      "PM10",
      "NO2",
      "CO",
      "NH3",
      "SO2",
      "PM2.5",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 33.0,
          "NO2": 5.0,
          "CO": 23.0,
          "SO2": 3.0,
          "PM2.5": 36.0,
          "OZONE": 24.0,
          "NH3": 8.0
    }
  },
  {
    "id": "391",
    "location": "Kopripada-Vashi, Navi Mumbai - MPCB",
    "city": "Navi Mumbai, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.090337,
    "lng": 73.014232,
    "aqi": 43,
    "pollutants": [
      "OZONE",
      "PM2.5",
      "CO",
      "PM10",
      "NO2",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "PM2.5": 43.0,
          "NO2": 13.0,
          "NH3": 9.0,
          "PM10": 34.0,
          "OZONE": 26.0,
          "CO": 23.0
    }
  },
  {
    "id": "392",
    "location": "Dabuna, Nayagarh - OSPCB",
    "city": "Nayagarh, Odisha",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 21.847279,
    "lng": 85.416905,
    "aqi": 17,
    "pollutants": [
      "SO2",
      "NO2",
      "PM2.5",
      "OZONE",
      "PM10",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "OZONE": 15.0,
          "CO": 17.0
    }
  },
  {
    "id": "393",
    "location": "Ambedkar Nagar, Nellore - APPCB ",
    "city": "Nellore, Andhra_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 14.438164,
    "lng": 79.966814,
    "aqi": 52,
    "pollutants": [
      "NH3",
      "NO2",
      "PM10",
      "SO2",
      "PM2.5",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "OZONE": 25.0,
          "NO2": 30.0,
          "CO": 38.0,
          "NH3": 5.0,
          "SO2": 17.0,
          "PM2.5": 46.0,
          "PM10": 52.0
    }
  },
  {
    "id": "394",
    "location": "Sector - 62, Noida - IMD",
    "city": "Noida, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.6245479,
    "lng": 77.3577104,
    "aqi": 127,
    "pollutants": [
      "PM2.5",
      "PM10",
      "NO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "OZONE": 127.0,
          "PM2.5": 85.0,
          "NO2": 4.0,
          "PM10": 100.0,
          "CO": 16.0
    }
  },
  {
    "id": "395",
    "location": "Sector-1, Noida - UPPCB",
    "city": "Noida, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.5898,
    "lng": 77.3101,
    "aqi": 162,
    "pollutants": [
      "NH3",
      "PM2.5",
      "PM10",
      "NO2",
      "CO",
      "OZONE",
      "SO2"
    ],
    "pollutant_values": {
          "PM2.5": 63.0,
          "PM10": 162.0,
          "OZONE": 29.0,
          "CO": 25.0
    }
  },
  {
    "id": "396",
    "location": "Sector - 125, Noida - UPPCB",
    "city": "Noida, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.5447608,
    "lng": 77.3231257,
    "aqi": 218,
    "pollutants": [
      "PM10",
      "PM2.5",
      "NO2",
      "CO",
      "OZONE",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "PM2.5": 113.0,
          "SO2": 6.0,
          "CO": 31.0,
          "PM10": 218.0,
          "NO2": 28.0,
          "NH3": 23.0,
          "OZONE": 12.0
    }
  },
  {
    "id": "397",
    "location": "Sector-116, Noida - UPPCB",
    "city": "Noida, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 28.56923,
    "lng": 77.393848,
    "aqi": 228,
    "pollutants": [
      "CO",
      "SO2",
      "PM10",
      "NO2",
      "NH3",
      "PM2.5",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 228.0,
          "NO2": 45.0,
          "CO": 21.0,
          "NH3": 22.0,
          "PM2.5": 133.0,
          "SO2": 14.0,
          "OZONE": 36.0
    }
  },
  {
    "id": "398",
    "location": "Bombay Castel, Ooty - TNPCB",
    "city": "Ooty, TamilNadu",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 11.4068288,
    "lng": 76.7138973,
    "aqi": 60,
    "pollutants": [
      "PM2.5",
      "NO2",
      "SO2",
      "PM10",
      "OZONE"
    ],
    "pollutant_values": {
      "PM2.5": 52.0,
      "NO2": 3.0,
      "SO2": 3.0,
      "PM10": 60.0,
      "OZONE": 5.0
    }
  },
  {
    "id": "399",
    "location": "Indira Colony Vistar, Pali - RSPCB",
    "city": "Pali, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 25.771061,
    "lng": 73.340227,
    "aqi": 102,
    "pollutants": [
      "OZONE",
      "SO2",
      "CO",
      "NO2",
      "NH3",
      "PM2.5",
      "PM10"
    ],
    "pollutant_values": {
          "NO2": 23.0,
          "SO2": 11.0,
          "PM2.5": 96.0,
          "PM10": 102.0,
          "NH3": 7.0,
          "CO": 35.0,
          "OZONE": 10.0
    }
  },
  {
    "id": "400",
    "location": "Shyam Nagar, Palwal - HSPCB",
    "city": "Palwal, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.1485564,
    "lng": 77.3320667,
    "aqi": 90,
    "pollutants": [
      "PM10",
      "OZONE",
      "PM2.5",
      "NO2",
      "NH3",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "PM10": 90.0,
          "NH3": 9.0,
          "CO": 67.0,
          "NO2": 24.0,
          "OZONE": 7.0,
          "PM2.5": 58.0,
          "SO2": 7.0
    }
  },
  {
    "id": "401",
    "location": "Khrew, Pampore - JKPCC",
    "city": "Pampore, Jammu_and_Kashmir",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 34.031606,
    "lng": 75.009712,
    "aqi": 53,
    "pollutants": [
      "NO2",
      "SO2",
      "PM2.5",
      "PM10"
    ],
    "pollutant_values": {
          "SO2": 4.0,
          "PM2.5": 37.0,
          "PM10": 53.0
    }
  },
  {
    "id": "402",
    "location": "Amity University, Panchgaon - IITM",
    "city": "Panchgaon, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.3153,
    "lng": 76.9143,
    "aqi": 251,
    "pollutants": [
      "OZONE",
      "PM10",
      "NH3",
      "CO",
      "PM2.5",
      "NO2",
      "SO2"
    ],
    "pollutant_values": {
          "PM2.5": 251.0,
          "NO2": 20.0,
          "SO2": 13.0,
          "PM10": 133.0,
          "CO": 43.0,
          "NH3": 4.0,
          "OZONE": 29.0
    }
  },
  {
    "id": "403",
    "location": "Sector-6, Panchkula - HSPCB ",
    "city": "Panchkula, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 30.7057778,
    "lng": 76.8531805555555,
    "aqi": 110,
    "pollutants": [
      "CO",
      "SO2",
      "PM2.5",
      "NO2",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 110.0,
          "CO": 19.0,
          "SO2": 11.0,
          "OZONE": 33.0
    }
  },
  {
    "id": "404",
    "location": "Sector-18, Panipat - HSPCB",
    "city": "Panipat, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 29.432304,
    "lng": 76.972765,
    "aqi": 42,
    "pollutants": [
      "NO2",
      "PM2.5",
      "CO",
      "PM10",
      "NH3",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "CO": 39.0,
          "SO2": 42.0,
          "NO2": 8.0,
          "NH3": 9.0
    }
  },
  {
    "id": "405",
    "location": "Masoom Colony, Parbhani - MPCB",
    "city": "Parbhani, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.265594,
    "lng": 76.761463,
    "aqi": 49,
    "pollutants": [
      "NH3",
      "PM2.5",
      "OZONE",
      "PM10",
      "CO",
      "NO2",
      "SO2"
    ],
    "pollutant_values": {
          "NH3": 4.0,
          "SO2": 2.0,
          "PM2.5": 34.0,
          "PM10": 49.0,
          "NO2": 33.0,
          "CO": 12.0,
          "OZONE": 7.0
    }
  },
  {
    "id": "406",
    "location": "Model Town, Patiala - PPCB",
    "city": "Patiala, Punjab",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 30.349388,
    "lng": 76.366642,
    "aqi": 112,
    "pollutants": [
      "PM2.5",
      "OZONE",
      "NH3",
      "SO2",
      "PM10",
      "NO2",
      "CO"
    ],
    "pollutant_values": {
          "CO": 22.0,
          "SO2": 9.0,
          "PM10": 112.0,
          "PM2.5": 60.0,
          "NO2": 17.0,
          "NH3": 6.0,
          "OZONE": 27.0
    }
  },
  {
    "id": "407",
    "location": "DRM Office Danapur, Patna - BSPCB",
    "city": "Patna, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 25.586562,
    "lng": 85.043586,
    "aqi": 39,
    "pollutants": [
      "OZONE",
      "PM10",
      "NO2",
      "CO",
      "SO2",
      "PM2.5",
      "NH3"
    ],
    "pollutant_values": {
          "OZONE": 11.0,
          "NH3": 9.0,
          "SO2": 6.0,
          "PM2.5": 30.0,
          "CO": 39.0,
          "PM10": 33.0,
          "NO2": 23.0
    }
  },
  {
    "id": "408",
    "location": "Muradpur, Patna - BSPCB",
    "city": "Patna, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 25.619651,
    "lng": 85.147382,
    "aqi": 61,
    "pollutants": [
      "SO2",
      "NO2",
      "PM10",
      "OZONE",
      "PM2.5",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "PM10": 53.0,
          "SO2": 12.0,
          "PM2.5": 61.0,
          "CO": 50.0,
          "NH3": 5.0,
          "NO2": 4.0,
          "OZONE": 40.0
    }
  },
  {
    "id": "409",
    "location": "Samanpura, Patna - BSPCB",
    "city": "Patna, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 25.596727,
    "lng": 85.085624,
    "aqi": 79,
    "pollutants": [
      "NH3",
      "PM10",
      "NO2",
      "SO2",
      "PM2.5",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "CO": 22.0,
          "OZONE": 46.0,
          "PM2.5": 57.0,
          "PM10": 79.0,
          "NO2": 24.0,
          "NH3": 4.0,
          "SO2": 2.0
    }
  },
  {
    "id": "410",
    "location": "Govt. High School Shikarpur, Patna - BSPCB",
    "city": "Patna, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 25.592539,
    "lng": 85.227158,
    "aqi": 60,
    "pollutants": [
      "PM10",
      "NH3",
      "CO",
      "PM2.5",
      "NO2",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "NH3": 6.0,
          "SO2": 13.0,
          "OZONE": 60.0,
          "NO2": 6.0,
          "PM2.5": 42.0,
          "CO": 59.0,
          "PM10": 47.0
    }
  },
  {
    "id": "411",
    "location": "Rajbansi Nagar, Patna - BSPCB",
    "city": "Patna, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 25.599486,
    "lng": 85.113666,
    "aqi": 48,
    "pollutants": [
      "NH3",
      "SO2",
      "NO2",
      "CO",
      "PM2.5",
      "PM10",
      "OZONE"
    ],
    "pollutant_values": {
          "SO2": 8.0,
          "PM2.5": 23.0,
          "NO2": 31.0,
          "NH3": 3.0,
          "CO": 48.0,
          "PM10": 36.0,
          "OZONE": 31.0
    }
  },
  {
    "id": "412",
    "location": "IGSC Planetarium Complex, Patna - BSPCB",
    "city": "Patna, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 25.610369,
    "lng": 85.132568,
    "aqi": 59,
    "pollutants": [
      "NO2",
      "SO2",
      "CO",
      "PM2.5",
      "OZONE"
    ],
    "pollutant_values": {
          "CO": 33.0,
          "OZONE": 59.0
    }
  },
  {
    "id": "413",
    "location": "SIPCOT Industrial Park, Perundurai - TNPCB",
    "city": "Perundurai, TamilNadu",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 11.258242,
    "lng": 77.552761,
    "aqi": 52,
    "pollutants": [
      "PM10",
      "OZONE",
      "CO",
      "NO2",
      "PM2.5",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "CO": 52.0,
          "OZONE": 27.0
    }
  },
  {
    "id": "414",
    "location": "Bhosari,Pimpri-Chinchwad - IITM",
    "city": "Pimpri-Chinchwad, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 18.640051,
    "lng": 73.848956,
    "aqi": 38,
    "pollutants": [
      "PM10",
      "CO",
      "NO2",
      "PM2.5",
      "OZONE"
    ],
    "pollutant_values": {}
  },
  {
    "id": "415",
    "location": "Bhumkar Nagar, Pimpri-Chinchwad - IITM",
    "city": "Pimpri-Chinchwad, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 18.60577,
    "lng": 73.749976,
    "aqi": 33,
    "pollutants": [
      "NO2",
      "CO",
      "PM10",
      "PM2.5",
      "OZONE"
    ],
    "pollutant_values": {
          "OZONE": 13.0,
          "PM2.5": 18.0,
          "CO": 33.0,
          "NO2": 20.0,
          "PM10": 33.0
    }
  },
  {
    "id": "416",
    "location": "Savta Mali Nagar, Pimpri-Chinchwad - IITM",
    "city": "Pimpri-Chinchwad, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 18.614767,
    "lng": 73.799516,
    "aqi": 42,
    "pollutants": [
      "PM2.5",
      "NO2",
      "PM10",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 27.0,
          "PM10": 42.0,
          "OZONE": 11.0,
          "NO2": 20.0,
          "CO": 30.0
    }
  },
  {
    "id": "417",
    "location": "Thergaon, Pimpri Chinchwad - MPCB",
    "city": "Pimpri-Chinchwad, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 18.616318,
    "lng": 73.765797,
    "aqi": 72,
    "pollutants": [
      "NH3",
      "CO",
      "OZONE",
      "PM2.5",
      "PM10",
      "NO2",
      "SO2"
    ],
    "pollutant_values": {
          "PM10": 72.0,
          "NH3": 5.0,
          "OZONE": 10.0,
          "SO2": 2.0,
          "CO": 30.0,
          "PM2.5": 32.0,
          "NO2": 9.0
    }
  },
  {
    "id": "418",
    "location": "Gavalinagar, Pimpri Chinchwad - MPCB",
    "city": "Pimpri-Chinchwad, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 18.63673,
    "lng": 73.82487,
    "aqi": 29,
    "pollutants": [
      "NO2",
      "NH3",
      "SO2",
      "CO",
      "OZONE",
      "PM2.5",
      "PM10"
    ],
    "pollutant_values": {
          "PM10": 29.0,
          "NH3": 1.0,
          "CO": 12.0,
          "OZONE": 9.0,
          "PM2.5": 15.0,
          "SO2": 1.0,
          "NO2": 10.0
    }
  },
  {
    "id": "419",
    "location": "Transport Nagar-Nigdi, Pimpri-Chinchwad- IITM",
    "city": "Pimpri-Chinchwad, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 18.664282,
    "lng": 73.763966,
    "aqi": 22,
    "pollutants": [
      "PM2.5",
      "OZONE",
      "PM10",
      "CO",
      "NO2"
    ],
    "pollutant_values": {
          "PM10": 22.0,
          "OZONE": 20.0,
          "PM2.5": 8.0,
          "NO2": 18.0,
          "CO": 20.0
    }
  },
  {
    "id": "420",
    "location": "Park Street Wakad, Pimpri Chinchwad - MPCB",
    "city": "Pimpri-Chinchwad, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 18.59051,
    "lng": 73.77946,
    "aqi": 20,
    "pollutants": [
      "CO",
      "NH3",
      "OZONE",
      "PM10",
      "PM2.5",
      "NO2",
      "SO2"
    ],
    "pollutant_values": {
          "OZONE": 11.0,
          "SO2": 2.0,
          "NH3": 4.0,
          "PM10": 20.0,
          "NO2": 16.0,
          "CO": 14.0,
          "PM2.5": 12.0
    }
  },
  {
    "id": "421",
    "location": "Sector-2 Industrial Area, Pithampur - MPPCB",
    "city": "Pithampur, Madhya Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.624758,
    "lng": 75.675238,
    "aqi": 62,
    "pollutants": [
      "PM10",
      "CO",
      "PM2.5",
      "NO2",
      "NH3",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 56.0,
          "NH3": 4.0,
          "PM2.5": 62.0,
          "NO2": 9.0,
          "OZONE": 37.0
    }
  },
  {
    "id": "422",
    "location": "Pragati Nagar, Pratapgarh - RSPCB",
    "city": "Pratapgarh, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 24.041198,
    "lng": 74.780702,
    "aqi": 70,
    "pollutants": [
      "OZONE",
      "PM10",
      "PM2.5",
      "SO2",
      "NO2",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "NH3": 5.0,
          "NO2": 9.0,
          "PM2.5": 35.0,
          "SO2": 3.0,
          "PM10": 70.0,
          "CO": 13.0,
          "OZONE": 36.0
    }
  },
  {
    "id": "423",
    "location": "Jhunsi, Prayagraj - UPPCB",
    "city": "Prayagraj, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 25.425602,
    "lng": 81.917152,
    "aqi": 33,
    "pollutants": [
      "SO2",
      "NH3",
      "OZONE",
      "PM2.5",
      "PM10",
      "NO2",
      "CO"
    ],
    "pollutant_values": {
          "SO2": 21.0,
          "NO2": 6.0,
          "NH3": 6.0,
          "PM10": 33.0,
          "CO": 9.0,
          "OZONE": 28.0
    }
  },
  {
    "id": "424",
    "location": "Nagar Nigam, Prayagraj - UPPCB",
    "city": "Prayagraj, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 25.44919916,
    "lng": 81.82735986,
    "aqi": 29,
    "pollutants": [
      "NO2",
      "PM2.5",
      "SO2",
      "NH3",
      "PM10",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "SO2": 29.0,
          "CO": 13.0,
          "NH3": 8.0,
          "PM10": 13.0,
          "NO2": 5.0,
          "OZONE": 7.0
    }
  },
  {
    "id": "425",
    "location": "Motilal Nehru NIT, Prayagraj - UPPCB",
    "city": "Prayagraj, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 25.494,
    "lng": 81.863,
    "aqi": 52,
    "pollutants": [
      "PM2.5",
      "PM10",
      "OZONE",
      "NO2",
      "NH3",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "PM10": 52.0,
          "CO": 5.0,
          "OZONE": 16.0,
          "NO2": 12.0,
          "NH3": 8.0,
          "SO2": 16.0,
          "PM2.5": 20.0
    }
  },
  {
    "id": "426",
    "location": "Jawahar Nagar, Puducherry - PPCC",
    "city": "Puducherry, Puducherry",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 11.9309,
    "lng": 79.8027,
    "aqi": 40,
    "pollutants": [
      "PM2.5",
      "PM10",
      "CO",
      "OZONE",
      "NO2",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "NO2": 13.0,
          "SO2": 8.0,
          "OZONE": 31.0,
          "CO": 20.0,
          "PM10": 40.0,
          "NH3": 3.0,
          "PM2.5": 25.0
    }
  },
  {
    "id": "427",
    "location": "Dhankawadi, Pune - IITM",
    "city": "Pune, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 18.459883,
    "lng": 73.852193,
    "aqi": 87,
    "pollutants": [
      "PM2.5",
      "PM10",
      "NO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "NO2": 21.0,
          "PM2.5": 21.0,
          "PM10": 34.0,
          "OZONE": 2.0,
          "CO": 87.0
    }
  },
  {
    "id": "428",
    "location": "Revenue Colony-Shivajinagar, Pune - IITM",
    "city": "Pune, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 18.530085,
    "lng": 73.849598,
    "aqi": 22,
    "pollutants": [
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 22.0,
          "NO2": 20.0,
          "SO2": 16.0,
          "PM2.5": 20.0,
          "CO": 8.0,
          "OZONE": 21.0
    }
  },
  {
    "id": "429",
    "location": "Mhada Colony, Pune - IITM",
    "city": "Pune, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 18.57304,
    "lng": 73.927715,
    "aqi": 46,
    "pollutants": [
      "PM10",
      "CO",
      "PM2.5",
      "NO2",
      "OZONE"
    ],
    "pollutant_values": {
          "NO2": 38.0,
          "OZONE": 12.0,
          "CO": 40.0,
          "PM2.5": 29.0,
          "PM10": 46.0
    }
  },
  {
    "id": "430",
    "location": "Panchawati_Pashan, Pune - IITM",
    "city": "Pune, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 18.536457,
    "lng": 73.805454,
    "aqi": 42,
    "pollutants": [
      "PM2.5",
      "PM10",
      "NO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 29.0,
          "NO2": 8.0,
          "OZONE": 4.0,
          "PM10": 42.0,
          "CO": 22.0
    }
  },
  {
    "id": "431",
    "location": "Savitribai Phule Pune University, Pune - MPCB",
    "city": "Pune, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 18.547056,
    "lng": 73.826908,
    "aqi": 30,
    "pollutants": [
      "CO",
      "NH3",
      "PM2.5",
      "PM10",
      "NO2",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "NO2": 7.0,
          "CO": 30.0,
          "PM10": 25.0,
          "SO2": 4.0,
          "PM2.5": 16.0,
          "NH3": 1.0,
          "OZONE": 11.0
    }
  },
  {
    "id": "432",
    "location": "Hadapsar, Pune - IITM",
    "city": "Pune, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 18.501793,
    "lng": 73.927532,
    "aqi": 12,
    "pollutants": [
      "PM10",
      "NO2",
      "OZONE",
      "PM2.5",
      "CO"
    ],
    "pollutant_values": {
          "CO": 12.0,
          "OZONE": 10.0
    }
  },
  {
    "id": "433",
    "location": "Mariam Nagar, Purnia - BSPCB",
    "city": "Purnia, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 25.366336,
    "lng": 87.117468,
    "aqi": 56,
    "pollutants": [
      "CO",
      "NH3",
      "PM2.5",
      "OZONE",
      "PM10",
      "NO2",
      "SO2"
    ],
    "pollutant_values": {
          "PM2.5": 31.0,
          "CO": 56.0,
          "NO2": 6.0,
          "OZONE": 30.0,
          "PM10": 24.0,
          "SO2": 17.0
    }
  },
  {
    "id": "434",
    "location": "Bhatagaon New ISBT, Raipur - CECB",
    "city": "Raipur, Chhattisgarh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 21.219665,
    "lng": 81.630094,
    "aqi": 22,
    "pollutants": [
      "PM2.5",
      "PM10",
      "NH3",
      "SO2",
      "NO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "CO": 22.0,
          "PM10": 19.0,
          "NH3": 2.0,
          "PM2.5": 9.0,
          "SO2": 2.0,
          "OZONE": 3.0
    }
  },
  {
    "id": "435",
    "location": "Krishak Nagar, Raipur - CECB",
    "city": "Raipur, Chhattisgarh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 21.237755,
    "lng": 81.705301,
    "aqi": 19,
    "pollutants": [
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "SO2": 7.0,
          "PM10": 19.0,
          "OZONE": 2.0,
          "PM2.5": 18.0,
          "NO2": 4.0,
          "NH3": 2.0,
          "CO": 15.0
    }
  },
  {
    "id": "436",
    "location": "Siltara Phase-II, Raipur - CECB",
    "city": "Raipur, Chhattisgarh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 21.371751,
    "lng": 81.664929,
    "aqi": 58,
    "pollutants": [
      "PM10",
      "NH3",
      "CO",
      "OZONE",
      "NO2",
      "SO2",
      "PM2.5"
    ],
    "pollutant_values": {
          "NO2": 5.0,
          "NH3": 2.0,
          "CO": 21.0,
          "OZONE": 6.0,
          "PM2.5": 40.0,
          "PM10": 58.0,
          "SO2": 13.0
    }
  },
  {
    "id": "437",
    "location": "AIIMS, Raipur - CECB",
    "city": "Raipur, Chhattisgarh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 21.258815,
    "lng": 81.578979,
    "aqi": 29,
    "pollutants": [
      "NO2",
      "OZONE",
      "PM10",
      "NH3",
      "SO2",
      "PM2.5",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 27.0,
          "NH3": 4.0,
          "CO": 20.0,
          "SO2": 4.0,
          "PM10": 29.0,
          "NO2": 3.0,
          "OZONE": 10.0
    }
  },
  {
    "id": "438",
    "location": "Divisional Forest Office, Rairangpur - OSPCB",
    "city": "Rairangpur, Odisha",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 22.265816,
    "lng": 86.174829,
    "aqi": 45,
    "pollutants": [
      "NH3",
      "PM10",
      "OZONE",
      "PM2.5",
      "NO2",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "SO2": 7.0,
          "NH3": 3.0,
          "PM2.5": 35.0,
          "NO2": 6.0,
          "CO": 31.0,
          "OZONE": 11.0,
          "PM10": 45.0
    }
  },
  {
    "id": "439",
    "location": "Anand Kala Kshetram, Rajamahendravaram - APPCB",
    "city": "Rajamahendravaram, Andhra_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 16.9872867,
    "lng": 81.7363176,
    "aqi": 103,
    "pollutants": [
      "NO2",
      "CO",
      "SO2",
      "PM2.5",
      "PM10",
      "NH3",
      "OZONE"
    ],
    "pollutant_values": {
          "OZONE": 31.0,
          "SO2": 5.0,
          "CO": 20.0,
          "PM10": 103.0,
          "NO2": 8.0,
          "NH3": 1.0,
          "PM2.5": 57.0
    }
  },
  {
    "id": "440",
    "location": "Dangi Tola, Rajgir - BSPCB",
    "city": "Rajgir, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 25.0328,
    "lng": 85.41948,
    "aqi": 103,
    "pollutants": [
      "SO2",
      "NO2",
      "PM2.5",
      "OZONE",
      "PM10",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "PM10": 72.0,
          "OZONE": 37.0,
          "PM2.5": 103.0,
          "CO": 43.0,
          "SO2": 3.0,
          "NO2": 14.0,
          "NH3": 3.0
    }
  },
  {
    "id": "441",
    "location": "Mavdi, Rajkot - Nexteng Enviro ",
    "city": "Rajkot, Gujarat",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 22.248853,
    "lng": 70.776774,
    "aqi": 90,
    "pollutants": [
      "NH3",
      "PM10",
      "SO2",
      "NO2",
      "OZONE",
      "PM2.5",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 37.0,
          "NO2": 50.0,
          "OZONE": 21.0,
          "PM10": 47.0,
          "NH3": 1.0,
          "CO": 90.0,
          "SO2": 11.0
    }
  },
  {
    "id": "442",
    "location": "Dhoinda, Rajsamand - RSPCB",
    "city": "Rajsamand, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 25.03636,
    "lng": 73.883502,
    "aqi": 79,
    "pollutants": [
      "CO",
      "PM2.5",
      "NO2",
      "NH3",
      "OZONE",
      "PM10",
      "SO2"
    ],
    "pollutant_values": {
          "CO": 39.0,
          "SO2": 3.0,
          "NH3": 9.0,
          "PM10": 79.0,
          "OZONE": 54.0,
          "PM2.5": 36.0,
          "NO2": 5.0
    }
  },
  {
    "id": "443",
    "location": "Vijay Nagar, Ramanagara - KSPCB",
    "city": "Ramanagara, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 12.733409,
    "lng": 77.298051,
    "aqi": 39,
    "pollutants": [
      "CO",
      "PM10",
      "NH3",
      "NO2",
      "OZONE",
      "PM2.5",
      "SO2"
    ],
    "pollutant_values": {
          "PM10": 39.0,
          "SO2": 19.0,
          "OZONE": 21.0,
          "PM2.5": 30.0,
          "CO": 24.0
    }
  },
  {
    "id": "444",
    "location": "Chalai Bazaar, Ramanathapuram - TNPCB",
    "city": "Ramanathapuram, TamilNadu",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 9.36399,
    "lng": 78.831977,
    "aqi": 6,
    "pollutants": [
      "OZONE",
      "PM10",
      "SO2"
    ],
    "pollutant_values": {
          "OZONE": 6.0
    }
  },
  {
    "id": "445",
    "location": "Shasthri Nagar, Ratlam - IPCA Lab",
    "city": "Ratlam, Madhya Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 23.331731,
    "lng": 75.045981,
    "aqi": 39,
    "pollutants": [
      "PM10",
      "PM2.5",
      "NO2",
      "SO2"
    ],
    "pollutant_values": {
          "NO2": 37.0,
          "PM2.5": 39.0
    }
  },
  {
    "id": "446",
    "location": "Shivaji Nagar, Rishikesh - UKPCB",
    "city": "Rishikesh, Uttarakhand",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 30.075911,
    "lng": 78.2859547,
    "aqi": 37,
    "pollutants": [
      "NH3",
      "CO",
      "NO2",
      "SO2",
      "PM2.5",
      "PM10",
      "OZONE"
    ],
    "pollutant_values": {
          "NH3": 4.0,
          "PM2.5": 2.0,
          "NO2": 7.0,
          "CO": 37.0,
          "PM10": 15.0,
          "SO2": 1.0,
          "OZONE": 25.0
    }
  },
  {
    "id": "447",
    "location": "MD University, Rohtak - HSPCB",
    "city": "Rohtak, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 28.52123,
    "lng": 76.37138,
    "aqi": 99,
    "pollutants": [
      "PM2.5",
      "NO2",
      "OZONE",
      "CO",
      "PM10",
      "SO2"
    ],
    "pollutant_values": {
          "PM2.5": 88.0,
          "OZONE": 33.0,
          "NO2": 10.0,
          "SO2": 10.0,
          "CO": 34.0,
          "PM10": 99.0
    }
  },
  {
    "id": "448",
    "location": "Fertilizer Township, Rourkela - OSPCB",
    "city": "Rourkela, Odisha",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 22.18972222,
    "lng": 84.86277778,
    "aqi": 61,
    "pollutants": [
      "PM2.5"
    ],
    "pollutant_values": {
          "PM10": 61.0,
          "NO2": 11.0,
          "PM2.5": 61.0,
          "SO2": 11.0,
          "CO": 11.0
    }
  },
  {
    "id": "449",
    "location": "Raghunathpali, Rourkela - OSPCB",
    "city": "Rourkela, Odisha",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 22.220833,
    "lng": 84.809444,
    "aqi": 75,
    "pollutants": [
      "CO",
      "PM10",
      "OZONE",
      "PM2.5",
      "NO2",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "PM2.5": 55.0,
          "NO2": 15.0,
          "SO2": 5.0,
          "PM10": 75.0,
          "OZONE": 7.0,
          "NH3": 2.0,
          "CO": 38.0
    }
  },
  {
    "id": "450",
    "location": "Sector-2, Rourkela - OSPCB",
    "city": "Rourkela, Odisha",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 22.245,
    "lng": 84.88111111,
    "aqi": 57,
    "pollutants": [
      "PM10",
      "CO",
      "PM2.5",
      "NO2"
    ],
    "pollutant_values": {
          "PM10": 57.0,
          "CO": 18.0,
          "NO2": 11.0,
          "PM2.5": 53.0
    }
  },
  {
    "id": "451",
    "location": "Ratanpura, Rupnagar - Ambuja Cements",
    "city": "Rupnagar, Punjab",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 31.0325454,
    "lng": 76.5623046,
    "aqi": 83,
    "pollutants": [
      "NO2",
      "PM2.5",
      "CO",
      "PM10",
      "SO2"
    ],
    "pollutant_values": {
          "PM10": 57.0,
          "CO": 39.0,
          "NO2": 28.0,
          "SO2": 14.0,
          "PM2.5": 83.0
    }
  },
  {
    "id": "452",
    "location": "Civil Lines, Sagar - MPPCB",
    "city": "Sagar, Madhya Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 23.838586,
    "lng": 78.759431,
    "aqi": 71,
    "pollutants": [
      "PM10",
      "PM2.5",
      "SO2",
      "NO2",
      "OZONE",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "PM10": 71.0,
          "NH3": 2.0,
          "CO": 43.0,
          "SO2": 5.0,
          "OZONE": 24.0,
          "PM2.5": 57.0,
          "NO2": 7.0
    }
  },
  {
    "id": "453",
    "location": "Police Line, Saharsa - BSPCB",
    "city": "Saharsa, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 25.892357,
    "lng": 86.590325,
    "aqi": 38,
    "pollutants": [
      "NH3",
      "NO2",
      "CO",
      "PM2.5",
      "PM10",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "CO": 38.0,
          "OZONE": 16.0
    }
  },
  {
    "id": "454",
    "location": "DM Office_Kasipur, Samastipur - BSPCB",
    "city": "Samastipur, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 25.859655,
    "lng": 85.77944,
    "aqi": 28,
    "pollutants": [
      "OZONE",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 28.0,
          "PM10": 26.0,
          "OZONE": 6.0,
          "CO": 5.0,
          "NO2": 8.0,
          "NH3": 1.0,
          "SO2": 13.0
    }
  },
  {
    "id": "455",
    "location": "Vijay Nagar, Sangli - MPCB",
    "city": "Sangli, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 16.5038,
    "lng": 74.3623,
    "aqi": 32,
    "pollutants": [
      "CO",
      "SO2",
      "PM10",
      "NO2",
      "NH3",
      "OZONE",
      "PM2.5"
    ],
    "pollutant_values": {
          "PM2.5": 18.0,
          "OZONE": 18.0,
          "CO": 18.0,
          "NO2": 2.0,
          "NH3": 1.0,
          "PM10": 32.0
    }
  },
  {
    "id": "456",
    "location": "Dada Peer, Sasaram - BSPCB",
    "city": "Sasaram, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 24.952822,
    "lng": 84.002396,
    "aqi": 52,
    "pollutants": [
      "NH3",
      "CO",
      "PM2.5",
      "PM10",
      "NO2",
      "OZONE"
    ],
    "pollutant_values": {
          "NO2": 2.0,
          "NH3": 3.0,
          "OZONE": 15.0,
          "CO": 52.0
    }
  },
  {
    "id": "457",
    "location": "Koyana Nagar, Satara - MPCB",
    "city": "Satara, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 17.696651,
    "lng": 74.003387,
    "aqi": 39,
    "pollutants": [
      "NH3",
      "PM2.5",
      "NO2",
      "CO",
      "PM10",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "NH3": 1.0,
          "PM2.5": 14.0,
          "CO": 14.0,
          "OZONE": 39.0,
          "PM10": 25.0,
          "NO2": 4.0,
          "SO2": 2.0
    }
  },
  {
    "id": "458",
    "location": "Bandhavgar Colony, Satna - Birla Cement",
    "city": "Satna, Madhya Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 24.58434363,
    "lng": 80.8549414,
    "aqi": 70,
    "pollutants": [
      "PM2.5",
      "NO2",
      "CO",
      "PM10",
      "SO2"
    ],
    "pollutant_values": {
          "PM10": 70.0,
          "CO": 23.0,
          "OZONE": 25.0,
          "PM2.5": 50.0,
          "SO2": 18.0
    }
  },
  {
    "id": "459",
    "location": "Sahu Nagar, Sawai Madhopur - RSPCB",
    "city": "Sawai Madhopur, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 26.031443,
    "lng": 76.359327,
    "aqi": 108,
    "pollutants": [
      "OZONE",
      "NH3",
      "SO2",
      "NO2",
      "PM2.5",
      "PM10",
      "CO"
    ],
    "pollutant_values": {
          "NH3": 2.0,
          "CO": 25.0,
          "SO2": 11.0,
          "PM2.5": 50.0,
          "OZONE": 64.0,
          "PM10": 108.0,
          "NO2": 14.0
    }
  },
  {
    "id": "460",
    "location": "Lumpyngngad, Shillong - Meghalaya PCB",
    "city": "Shillong, Meghalaya",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 25.5586,
    "lng": 91.8985,
    "aqi": 30,
    "pollutants": [
      "SO2",
      "PM2.5",
      "OZONE",
      "CO"
    ],
    "pollutant_values": {
          "SO2": 10.0,
          "OZONE": 30.0,
          "CO": 6.0
    }
  },
  {
    "id": "461",
    "location": "JN Stadium, Shillong - Meghalaya PCB",
    "city": "Shillong, Meghalaya",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 25.5803419,
    "lng": 91.8942571,
    "aqi": 24,
    "pollutants": [
      "NO2",
      "CO",
      "OZONE",
      "SO2"
    ],
    "pollutant_values": {
          "NO2": 3.0,
          "PM10": 19.0,
          "SO2": 24.0
    }
  },
  {
    "id": "462",
    "location": "Vinoba Nagara, Shivamogga - KSPCB",
    "city": "Shivamogga, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 13.94,
    "lng": 75.555917,
    "aqi": 50,
    "pollutants": [
      "PM10",
      "OZONE",
      "NO2",
      "SO2",
      "PM2.5",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "SO2": 3.0,
          "OZONE": 50.0,
          "PM10": 49.0,
          "PM2.5": 32.0,
          "NH3": 2.0,
          "NO2": 21.0,
          "CO": 22.0
    }
  },
  {
    "id": "463",
    "location": "Radhakishan Pura, Sikar - RSPCB",
    "city": "Sikar, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 27.608912,
    "lng": 75.153302,
    "aqi": 69,
    "pollutants": [
      "NO2",
      "PM2.5",
      "OZONE",
      "SO2",
      "CO",
      "PM10",
      "NH3"
    ],
    "pollutant_values": {
          "OZONE": 43.0,
          "PM2.5": 31.0,
          "SO2": 3.0,
          "CO": 14.0,
          "NO2": 10.0,
          "NH3": 9.0,
          "PM10": 69.0
    }
  },
  {
    "id": "464",
    "location": "Tarapur, Silchar - PCBA",
    "city": "Silchar, Assam",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 24.82827,
    "lng": 92.79525,
    "aqi": 54,
    "pollutants": [
      "PM10",
      "OZONE",
      "NH3",
      "SO2",
      "PM2.5",
      "NO2",
      "CO"
    ],
    "pollutant_values": {
          "NO2": 16.0,
          "CO": 34.0,
          "PM2.5": 39.0,
          "OZONE": 2.0,
          "NH3": 1.0,
          "PM10": 54.0,
          "SO2": 6.0
    }
  },
  {
    "id": "465",
    "location": "Ward-32 Bapupara, Siliguri - WBPCB",
    "city": "Siliguri, West_Bengal",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 26.6879226,
    "lng": 88.4152495,
    "aqi": 111,
    "pollutants": [
      "OZONE",
      "SO2",
      "PM2.5",
      "PM10",
      "NO2",
      "NH3",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 19.0,
          "OZONE": 26.0,
          "PM10": 24.0,
          "NH3": 15.0,
          "NO2": 111.0,
          "CO": 22.0,
          "SO2": 14.0
    }
  },
  {
    "id": "466",
    "location": "Suryakiran Bhawan NCL, Singrauli - MPPCB",
    "city": "Singrauli, Madhya Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 24.10897,
    "lng": 82.64558,
    "aqi": 63,
    "pollutants": [
      "NH3",
      "PM10",
      "PM2.5",
      "NO2",
      "SO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "OZONE": 24.0,
          "SO2": 35.0,
          "CO": 20.0,
          "PM2.5": 44.0,
          "PM10": 63.0
    }
  },
  {
    "id": "467",
    "location": "Vedhaynath Colony, Sirohi - RSPCB",
    "city": "Sirohi, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 24.885261,
    "lng": 72.857549,
    "aqi": 76,
    "pollutants": [
      "NO2",
      "NH3",
      "PM2.5",
      "PM10",
      "SO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "NH3": 4.0,
          "PM2.5": 30.0,
          "CO": 17.0,
          "NO2": 7.0,
          "PM10": 76.0,
          "SO2": 2.0,
          "OZONE": 34.0
    }
  },
  {
    "id": "468",
    "location": "F-Block, Sirsa - HSPCB",
    "city": "Sirsa, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 29.5364,
    "lng": 75.0158,
    "aqi": 127,
    "pollutants": [
      "PM2.5",
      "PM10",
      "CO",
      "NO2",
      "OZONE",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "PM10": 127.0,
          "SO2": 22.0,
          "NO2": 20.0,
          "CO": 81.0,
          "PM2.5": 54.0,
          "NH3": 14.0,
          "OZONE": 29.0
    }
  },
  {
    "id": "469",
    "location": "Girls College, Sivasagar - PCBA",
    "city": "Sivasagar, Assam",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 26.987634,
    "lng": 94.636574,
    "aqi": 33,
    "pollutants": [
      "OZONE",
      "SO2",
      "PM2.5",
      "NO2",
      "CO",
      "PM10",
      "NH3"
    ],
    "pollutant_values": {
          "PM10": 22.0,
          "OZONE": 33.0,
          "SO2": 7.0,
          "CO": 9.0,
          "PM2.5": 22.0,
          "NO2": 13.0,
          "NH3": 7.0
    }
  },
  {
    "id": "470",
    "location": "Chitragupta Nagar, Siwan - BSPCB",
    "city": "Siwan, Bihar",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 26.2271665,
    "lng": 84.3570427,
    "aqi": 99,
    "pollutants": [
      "OZONE",
      "NH3",
      "CO",
      "PM10",
      "NO2",
      "PM2.5",
      "SO2"
    ],
    "pollutant_values": {
          "NO2": 2.0,
          "NH3": 1.0,
          "OZONE": 11.0,
          "CO": 99.0
    }
  },
  {
    "id": "471",
    "location": "Dnyaneshwar Nagar, Solapur - MPCB",
    "city": "Solapur, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 17.6336264,
    "lng": 75.9132495,
    "aqi": 17,
    "pollutants": [
      "PM10",
      "NH3",
      "NO2",
      "SO2",
      "PM2.5",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "CO": 17.0,
          "OZONE": 13.0
    }
  },
  {
    "id": "472",
    "location": "Ratandeep Housing Society, Solapur - MPCB",
    "city": "Solapur, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 17.65439,
    "lng": 75.90649,
    "aqi": 37,
    "pollutants": [
      "PM10",
      "CO",
      "OZONE",
      "SO2",
      "PM2.5",
      "NO2",
      "NH3"
    ],
    "pollutant_values": {
          "PM2.5": 24.0,
          "OZONE": 37.0,
          "NH3": 5.0,
          "PM10": 36.0,
          "CO": 18.0
    }
  },
  {
    "id": "473",
    "location": "Murthal, Sonipat - HSPCB",
    "city": "Sonipat, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 29.0272,
    "lng": 77.0621,
    "aqi": 225,
    "pollutants": [
      "PM2.5",
      "CO",
      "SO2",
      "PM10",
      "NO2",
      "NH3",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 169.0,
          "NO2": 7.0,
          "PM2.5": 225.0,
          "NH3": 9.0,
          "CO": 41.0,
          "OZONE": 17.0,
          "SO2": 54.0
    }
  },
  {
    "id": "474",
    "location": "Old City, Sri Ganganagar - RSPCB",
    "city": "Sri Ganganagar, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 29.931624,
    "lng": 73.864511,
    "aqi": 93,
    "pollutants": [
      "NH3",
      "PM2.5",
      "CO",
      "OZONE",
      "PM10",
      "NO2",
      "SO2"
    ],
    "pollutant_values": {
          "PM2.5": 41.0,
          "PM10": 93.0,
          "NO2": 48.0,
          "NH3": 8.0,
          "CO": 7.0,
          "OZONE": 65.0
    }
  },
  {
    "id": "475",
    "location": "Rajbagh, Srinagar - JKPCC",
    "city": "Srinagar, Jammu_and_Kashmir",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 34.066206,
    "lng": 74.81982,
    "aqi": 43,
    "pollutants": [
      "OZONE",
      "PM10",
      "SO2",
      "PM2.5",
      "CO"
    ],
    "pollutant_values": {
          "NH3": 9.0,
          "PM2.5": 27.0,
          "PM10": 43.0,
          "NO2": 19.0,
          "SO2": 3.0,
          "OZONE": 1.0,
          "CO": 15.0
    }
  },
  {
    "id": "476",
    "location": "Khunmoh, Srinagar - JKPCC",
    "city": "Srinagar, Jammu_and_Kashmir",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 34.06313,
    "lng": 74.96017,
    "aqi": 57,
    "pollutants": [
      "NO2",
      "SO2",
      "PM2.5",
      "PM10"
    ],
    "pollutant_values": {
          "SO2": 5.0,
          "PM2.5": 57.0,
          "PM10": 54.0,
          "NO2": 13.0
    }
  },
  {
    "id": "477",
    "location": "OMC Colony, Suakati - OSPCB",
    "city": "Suakati, Odisha",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 21.606865,
    "lng": 85.510538,
    "aqi": 58,
    "pollutants": [
      "CO",
      "PM2.5",
      "PM10",
      "NO2",
      "SO2",
      "NH3",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 58.0,
          "OZONE": 15.0,
          "SO2": 1.0,
          "PM2.5": 31.0,
          "NH3": 3.0,
          "CO": 6.0,
          "NO2": 18.0
    }
  },
  {
    "id": "478",
    "location": "Katargam, Surat - Nexteng Enviro",
    "city": "Surat, Gujarat",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 21.217779,
    "lng": 72.834787,
    "aqi": 70,
    "pollutants": [
      "NO2",
      "NH3",
      "PM10",
      "PM2.5",
      "CO",
      "OZONE",
      "SO2"
    ],
    "pollutant_values": {
          "CO": 48.0,
          "OZONE": 5.0,
          "PM2.5": 41.0,
          "PM10": 70.0,
          "NO2": 35.0,
          "NH3": 1.0,
          "SO2": 7.0
    }
  },
  {
    "id": "479",
    "location": "Science Center, Surat - SMC",
    "city": "Surat, Gujarat",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 21.170046,
    "lng": 72.795405,
    "aqi": 46,
    "pollutants": [
      "PM10",
      "SO2",
      "PM2.5",
      "NO2",
      "CO"
    ],
    "pollutant_values": {
          "PM10": 46.0,
          "SO2": 15.0,
          "PM2.5": 25.0,
          "NO2": 3.0
    }
  },
  {
    "id": "480",
    "location": "Talcher Coalfields,Talcher - OSPCB",
    "city": "Talcher, Odisha",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 20.9360711,
    "lng": 85.1707021,
    "aqi": 73,
    "pollutants": [
      "NO2",
      "NH3",
      "CO",
      "PM2.5",
      "PM10",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 73.0,
          "NH3": 7.0,
          "CO": 29.0,
          "NO2": 55.0,
          "PM10": 63.0,
          "SO2": 62.0,
          "OZONE": 17.0
    }
  },
  {
    "id": "481",
    "location": "Barsua Iron Ore Mines, Tensa - OSPCB",
    "city": "Tensa, Odisha",
    "status": "ACTIVE",
    "region": "East India",
    "lat": 21.869985,
    "lng": 85.167016,
    "aqi": 42,
    "pollutants": [
      "PM2.5",
      "OZONE",
      "CO"
    ],
    "pollutant_values": {
          "PM10": 33.0,
          "CO": 42.0,
          "SO2": 34.0,
          "PM2.5": 15.0,
          "OZONE": 14.0
    }
  },
  {
    "id": "482",
    "location": "Upvan Fort, Thane - MPCB",
    "city": "Thane, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.222279,
    "lng": 72.957979,
    "aqi": 26,
    "pollutants": [
      "PM10",
      "CO",
      "SO2",
      "PM2.5",
      "NO2",
      "NH3",
      "OZONE"
    ],
    "pollutant_values": {
          "SO2": 8.0,
          "OZONE": 26.0,
          "CO": 20.0,
          "NH3": 5.0
    }
  },
  {
    "id": "483",
    "location": "Kasarvadavali, Thane - MPCB",
    "city": "Thane, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.26777,
    "lng": 72.97182,
    "aqi": 37,
    "pollutants": [
      "OZONE",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 30.0,
          "PM10": 37.0,
          "NH3": 1.0,
          "CO": 19.0,
          "OZONE": 25.0,
          "SO2": 4.0
    }
  },
  {
    "id": "484",
    "location": "Plammoodu, Thiruvananthapuram - Kerala PCB",
    "city": "Thiruvananthapuram, Kerala",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 8.5149093,
    "lng": 76.9435879,
    "aqi": 24,
    "pollutants": [
      "PM10",
      "CO",
      "OZONE",
      "PM2.5",
      "SO2"
    ],
    "pollutant_values": {
          "OZONE": 13.0,
          "PM2.5": 16.0,
          "PM10": 24.0,
          "SO2": 14.0,
          "CO": 6.0
    }
  },
  {
    "id": "485",
    "location": "Kariavattom, Thiruvananthapuram - Kerala PCB",
    "city": "Thiruvananthapuram, Kerala",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 8.5637,
    "lng": 76.8865,
    "aqi": 57,
    "pollutants": [
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "SO2": 5.0,
          "OZONE": 31.0,
          "NO2": 6.0,
          "PM10": 57.0,
          "PM2.5": 41.0,
          "CO": 22.0
    }
  },
  {
    "id": "486",
    "location": "Meelavittan, Thoothukudi - TNPCB",
    "city": "Thoothukudi, TamilNadu",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 8.816428,
    "lng": 78.099039,
    "aqi": 65,
    "pollutants": [
      "PM10",
      "CO",
      "NO2",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "CO": 37.0,
          "PM10": 65.0,
          "NO2": 17.0,
          "OZONE": 30.0,
          "SO2": 11.0
    }
  },
  {
    "id": "487",
    "location": "Toll Gate, Tirumala - APPCB",
    "city": "Tirumala, Andhra_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 13.67,
    "lng": 79.35,
    "aqi": 49,
    "pollutants": [
      "NO2",
      "NH3",
      "PM2.5",
      "SO2",
      "PM10",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "NO2": 49.0,
          "PM2.5": 22.0,
          "NH3": 3.0,
          "PM10": 34.0,
          "SO2": 5.0,
          "OZONE": 13.0,
          "CO": 21.0
    }
  },
  {
    "id": "488",
    "location": "Vaikuntapuram, Tirupati - APPCB",
    "city": "Tirupati, Andhra_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 13.615387,
    "lng": 79.40923,
    "aqi": 47,
    "pollutants": [
      "OZONE",
      "CO",
      "PM2.5",
      "NO2",
      "PM10",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "CO": 28.0,
          "OZONE": 47.0
    }
  },
  {
    "id": "489",
    "location": "Shastri Nagar, Tonk - RSPCB",
    "city": "Tonk, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 26.159933,
    "lng": 75.780517,
    "aqi": 118,
    "pollutants": [
      "PM2.5",
      "CO",
      "PM10",
      "OZONE",
      "NO2",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "PM10": 118.0,
          "PM2.5": 64.0,
          "CO": 33.0,
          "OZONE": 67.0,
          "NO2": 2.0,
          "NH3": 4.0,
          "SO2": 2.0
    }
  },
  {
    "id": "490",
    "location": "OP Jindal Industrial Park, Tumidih - CECB",
    "city": "Tumidih, Chhattisgarh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 22.06631475,
    "lng": 83.33820077,
    "aqi": 39,
    "pollutants": [
      "PM10",
      "SO2",
      "OZONE",
      "PM2.5",
      "CO",
      "NO2",
      "NH3"
    ],
    "pollutant_values": {
          "NO2": 4.0,
          "PM2.5": 37.0,
          "OZONE": 27.0,
          "NH3": 2.0,
          "PM10": 39.0,
          "SO2": 5.0,
          "CO": 25.0
    }
  },
  {
    "id": "491",
    "location": "Ashok Nagar, Udaipur - RSPCB",
    "city": "Udaipur, Rajasthan",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 24.5886166,
    "lng": 73.6321397,
    "aqi": 90,
    "pollutants": [
      "PM2.5",
      "OZONE",
      "PM10",
      "NH3",
      "NO2",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "NO2": 16.0,
          "PM2.5": 57.0,
          "NH3": 4.0,
          "SO2": 6.0,
          "CO": 20.0,
          "PM10": 90.0,
          "OZONE": 11.0
    }
  },
  {
    "id": "492",
    "location": "Mahashweta Nagar, Ujjain - MPPCB",
    "city": "Ujjain, Madhya Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 23.1633321,
    "lng": 75.800225,
    "aqi": 53,
    "pollutants": [
      "NH3",
      "PM2.5",
      "SO2",
      "NO2",
      "OZONE",
      "PM10",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 39.0,
          "NO2": 12.0,
          "PM10": 53.0,
          "SO2": 4.0,
          "CO": 24.0,
          "OZONE": 41.0,
          "NH3": 6.0
    }
  },
  {
    "id": "493",
    "location": "Sidhi Vinayak Nagar, Ulhasnagar - MPCB",
    "city": "Ulhasnagar, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.235581,
    "lng": 73.159121,
    "aqi": 56,
    "pollutants": [
      "NO2",
      "PM10",
      "OZONE",
      "NH3",
      "SO2",
      "CO",
      "PM2.5"
    ],
    "pollutant_values": {
          "NO2": 20.0,
          "SO2": 6.0,
          "OZONE": 13.0,
          "PM2.5": 50.0,
          "PM10": 56.0,
          "CO": 20.0,
          "NH3": 3.0
    }
  },
  {
    "id": "494",
    "location": "Vithalwadi, Ulhasnagar - MPCB",
    "city": "Ulhasnagar, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.2307571,
    "lng": 73.155192,
    "aqi": 25,
    "pollutants": [
      "CO",
      "NO2",
      "SO2",
      "PM10",
      "NH3",
      "OZONE",
      "PM2.5"
    ],
    "pollutant_values": {
          "SO2": 6.0,
          "CO": 19.0,
          "PM2.5": 18.0,
          "PM10": 25.0,
          "OZONE": 13.0
    }
  },
  {
    "id": "495",
    "location": "Bapunagar, Vadodara - Nexteng Enviro",
    "city": "Vadodara, Gujarat",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 22.320153,
    "lng": 73.216285,
    "aqi": 98,
    "pollutants": [
      "PM2.5",
      "CO",
      "NH3",
      "SO2",
      "PM10",
      "NO2",
      "OZONE"
    ],
    "pollutant_values": {
          "PM10": 56.0,
          "SO2": 6.0,
          "OZONE": 3.0,
          "PM2.5": 45.0,
          "CO": 98.0,
          "NO2": 12.0,
          "NH3": 2.0
    }
  },
  {
    "id": "496",
    "location": "Phase-1 GIDC, Vapi - GPCB",
    "city": "Vapi, Gujarat",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 20.362421,
    "lng": 72.918013,
    "aqi": 36,
    "pollutants": [
      "PM2.5",
      "NH3",
      "NO2",
      "OZONE",
      "PM10",
      "SO2"
    ],
    "pollutant_values": {
          "SO2": 9.0,
          "OZONE": 6.0,
          "PM10": 36.0,
          "NH3": 4.0,
          "NO2": 10.0,
          "PM2.5": 14.0
    }
  },
  {
    "id": "497",
    "location": "Ardhali Bazar, Varanasi - UPPCB",
    "city": "Varanasi, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 25.3505986,
    "lng": 82.9083074,
    "aqi": 46,
    "pollutants": [
      "CO",
      "PM10",
      "OZONE",
      "PM2.5",
      "NO2",
      "SO2"
    ],
    "pollutant_values": {
          "OZONE": 28.0,
          "NO2": 40.0,
          "SO2": 14.0,
          "PM2.5": 34.0,
          "PM10": 46.0,
          "CO": 17.0
    }
  },
  {
    "id": "498",
    "location": "Bhelupur, Varanasi - UPPCB",
    "city": "Varanasi, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 25.301778,
    "lng": 82.996789,
    "aqi": 52,
    "pollutants": [
      "OZONE",
      "PM2.5",
      "CO",
      "PM10",
      "NO2",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "PM2.5": 23.0,
          "CO": 11.0,
          "PM10": 52.0,
          "NO2": 8.0,
          "SO2": 29.0,
          "NH3": 1.0,
          "OZONE": 6.0
    }
  },
  {
    "id": "499",
    "location": "Maldahiya, Varanasi - UPPCB",
    "city": "Varanasi, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 25.32393,
    "lng": 82.99687,
    "aqi": 44,
    "pollutants": [
      "NO2",
      "CO",
      "SO2",
      "PM2.5",
      "PM10",
      "OZONE"
    ],
    "pollutant_values": {
          "SO2": 31.0,
          "OZONE": 4.0,
          "PM2.5": 36.0,
          "PM10": 44.0,
          "NO2": 2.0,
          "CO": 16.0
    }
  },
  {
    "id": "500",
    "location": "IESD Banaras Hindu University, Varanasi - UPPCB",
    "city": "Varanasi, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 25.262326,
    "lng": 82.995408,
    "aqi": 28,
    "pollutants": [
      "SO2",
      "OZONE",
      "NO2",
      "NH3",
      "CO",
      "PM10"
    ],
    "pollutant_values": {
          "PM2.5": 15.0,
          "NO2": 2.0,
          "NH3": 8.0,
          "SO2": 17.0,
          "CO": 3.0,
          "OZONE": 6.0,
          "PM10": 28.0
    }
  },
  {
    "id": "501",
    "location": "Phase-4 GIDC, Vatva - GPCB",
    "city": "Vatva, Gujarat",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 22.969611,
    "lng": 72.6435,
    "aqi": 108,
    "pollutants": [
      "CO",
      "NH3",
      "SO2",
      "PM10",
      "OZONE",
      "PM2.5",
      "NO2"
    ],
    "pollutant_values": {
          "PM10": 108.0,
          "OZONE": 11.0,
          "NH3": 2.0,
          "SO2": 6.0,
          "PM2.5": 73.0,
          "NO2": 38.0,
          "CO": 27.0
    }
  },
  {
    "id": "502",
    "location": "Ibrahimpur, Vijayapura - KSPCB",
    "city": "Vijayapura, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 16.802639,
    "lng": 75.722694,
    "aqi": 43,
    "pollutants": [
      "PM10",
      "NO2",
      "OZONE",
      "CO",
      "PM2.5",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "CO": 23.0,
          "NH3": 4.0,
          "NO2": 11.0,
          "SO2": 3.0,
          "PM2.5": 27.0,
          "PM10": 43.0,
          "OZONE": 16.0
    }
  },
  {
    "id": "503",
    "location": "HB Colony, Vijayawada - APPCB",
    "city": "Vijayawada, Andhra_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 16.536107,
    "lng": 80.594233,
    "aqi": 61,
    "pollutants": [
      "PM2.5",
      "OZONE",
      "CO",
      "PM10",
      "NO2",
      "NH3",
      "SO2"
    ],
    "pollutant_values": {
          "CO": 27.0,
          "OZONE": 20.0,
          "NO2": 20.0,
          "SO2": 8.0,
          "PM2.5": 60.0,
          "PM10": 61.0,
          "NH3": 4.0
    }
  },
  {
    "id": "504",
    "location": "Kanuru, Vijayawada - APPCB",
    "city": "Vijayawada, Andhra_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 16.486692,
    "lng": 80.699436,
    "aqi": 68,
    "pollutants": [
      "OZONE",
      "SO2",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 68.0,
          "CO": 29.0,
          "PM10": 60.0,
          "NO2": 32.0,
          "SO2": 15.0,
          "NH3": 7.0,
          "OZONE": 35.0
    }
  },
  {
    "id": "505",
    "location": "Rajiv Gandhi Park, Vijayawada - APPCB",
    "city": "Vijayawada, Andhra_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 16.509717,
    "lng": 80.612222,
    "aqi": 43,
    "pollutants": [
      "PM10",
      "NO2",
      "NH3",
      "PM2.5",
      "SO2",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "NH3": 6.0,
          "OZONE": 26.0,
          "PM2.5": 39.0,
          "SO2": 14.0,
          "CO": 24.0,
          "PM10": 43.0,
          "NO2": 28.0
    }
  },
  {
    "id": "506",
    "location": "Rajiv Nagar, Vijayawada - APPCB",
    "city": "Vijayawada, Andhra_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 16.554731,
    "lng": 80.64911,
    "aqi": 51,
    "pollutants": [
      "OZONE",
      "CO"
    ],
    "pollutant_values": {
          "PM2.5": 51.0,
          "NH3": 5.0,
          "SO2": 21.0,
          "PM10": 49.0,
          "NO2": 15.0,
          "OZONE": 38.0,
          "CO": 27.0
    }
  },
  {
    "id": "507",
    "location": "Bolinj, Virar - MPCB",
    "city": "Virar, Maharashtra",
    "status": "ACTIVE",
    "region": "West India",
    "lat": 19.445821,
    "lng": 72.7988231,
    "aqi": 44,
    "pollutants": [
      "SO2",
      "NH3",
      "PM2.5",
      "PM10",
      "CO",
      "OZONE",
      "NO2"
    ],
    "pollutant_values": {
          "PM2.5": 22.0,
          "PM10": 43.0,
          "NO2": 15.0,
          "NH3": 9.0,
          "CO": 44.0,
          "OZONE": 23.0
    }
  },
  {
    "id": "508",
    "location": "GVM Corporation, Visakhapatnam - APPCB",
    "city": "Visakhapatnam, Andhra_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 17.72,
    "lng": 83.3,
    "aqi": 124,
    "pollutants": [
      "PM10",
      "PM2.5",
      "NH3",
      "CO",
      "NO2",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "OZONE": 36.0,
          "NO2": 79.0,
          "PM2.5": 69.0,
          "NH3": 3.0,
          "PM10": 124.0,
          "CO": 17.0,
          "SO2": 24.0
    }
  },
  {
    "id": "509",
    "location": "Omex Eternity, Vrindavan - UPPCB",
    "city": "Vrindavan, Uttar_Pradesh",
    "status": "ACTIVE",
    "region": "Central India",
    "lat": 27.571409,
    "lng": 77.655757,
    "aqi": 89,
    "pollutants": [
      "CO",
      "NH3",
      "NO2",
      "PM2.5",
      "PM10",
      "SO2",
      "OZONE"
    ],
    "pollutant_values": {
          "NH3": 8.0,
          "OZONE": 16.0,
          "NO2": 27.0,
          "SO2": 30.0,
          "PM2.5": 89.0,
          "PM10": 75.0,
          "CO": 11.0
    }
  },
  {
    "id": "510",
    "location": "Collector Office, Yadgir - KSPCB",
    "city": "Yadgir, Karnataka",
    "status": "ACTIVE",
    "region": "South India",
    "lat": 16.7602,
    "lng": 77.1428,
    "aqi": 26,
    "pollutants": [
      "PM2.5",
      "PM10",
      "NO2",
      "SO2",
      "NH3",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "PM2.5": 11.0,
          "SO2": 14.0,
          "PM10": 26.0,
          "CO": 12.0,
          "NH3": 1.0,
          "NO2": 19.0,
          "OZONE": 24.0
    }
  },
  {
    "id": "511",
    "location": "Gobind Pura, Yamuna Nagar - HSPCB",
    "city": "Yamuna Nagar, Haryana",
    "status": "ACTIVE",
    "region": "North India",
    "lat": 30.1480566,
    "lng": 77.2893471,
    "aqi": 56,
    "pollutants": [
      "PM2.5",
      "SO2",
      "NO2",
      "NH3",
      "PM10",
      "CO",
      "OZONE"
    ],
    "pollutant_values": {
          "SO2": 11.0,
          "CO": 15.0,
          "PM10": 47.0,
          "NO2": 32.0,
          "PM2.5": 39.0,
          "NH3": 9.0,
          "OZONE": 56.0
    }
  }
];

export const HISTOGRAM_DATA = [
  {
    "range": "0-50",
    "count": 24,
    "color": "#22C55E"
  },
  {
    "range": "51-100",
    "count": 97,
    "color": "#EAB308"
  },
  {
    "range": "101-200",
    "count": 70,
    "color": "#F97316"
  },
  {
    "range": "201-300",
    "count": 28,
    "color": "#EF4444"
  },
  {
    "range": "301+",
    "count": 27,
    "color": "#A855F7"
  }
];

export const POLLUTANT_STATS = [
  { name: 'PM2.5', value: 174, color: '#EF4444' },
  { name: 'PM10', value: 45, color: '#F97316' },
  { name: 'Ozone', value: 35, color: '#3B82F6' },
];

export const AQI_DISTRIBUTION = [
  {
    "name": "Good",
    "count": 24,
    "color": "#22C55E"
  },
  {
    "name": "Moderate",
    "count": 97,
    "color": "#EAB308"
  },
  {
    "name": "Poor",
    "count": 70,
    "color": "#F97316"
  },
  {
    "name": "Very Poor",
    "count": 28,
    "color": "#EF4444"
  },
  {
    "name": "Severe",
    "count": 25,
    "color": "#A855F7"
  },
  {
    "name": "Hazardous",
    "count": 2,
    "color": "#7C3AED"
  }
];



export const CITY_DIVE_PIE_DATA = [
  {
    "name": "Good/Moderate",
    "value": 121,
    "color": "#1275e2"
  },
  {
    "name": "Unhealthy",
    "value": 98,
    "color": "#c55b00"
  },
  {
    "name": "Hazardous",
    "value": 27,
    "color": "#ba1a1a"
  }
];
export const COMPOSITE_SCATTER_DATA = [
  {
    "city": "Khora",
    "x": 470,
    "y": 470,
    "region": "North"
  },
  {
    "city": "Charkhi Dadri",
    "x": 401,
    "y": 401,
    "region": "North"
  },
  {
    "city": "Hajipur",
    "x": 400,
    "y": 400,
    "region": "East"
  },
  {
    "city": "Rohtak",
    "x": 393,
    "y": 393,
    "region": "North"
  },
  {
    "city": "Modinagar",
    "x": 382,
    "y": 382,
    "region": "North"
  },
  {
    "city": "Tirupati",
    "x": 364,
    "y": 364,
    "region": "South"
  },
  {
    "city": "Baddi",
    "x": 350,
    "y": 350,
    "region": "North"
  },
  {
    "city": "Jind",
    "x": 350,
    "y": 350,
    "region": "North"
  },
  {
    "city": "Mandi Gobindgarh",
    "x": 349,
    "y": 349,
    "region": "North"
  },
  {
    "city": "Suakati",
    "x": 342,
    "y": 342,
    "region": "East"
  },
  {
    "city": "Manesar",
    "x": 340,
    "y": 340,
    "region": "North"
  },
  {
    "city": "Yamuna Nagar",
    "x": 340,
    "y": 340,
    "region": "North"
  },
  {
    "city": "Bahadurgarh",
    "x": 338,
    "y": 338,
    "region": "North"
  },
  {
    "city": "Ghaziabad",
    "x": 328.5,
    "y": 328.5,
    "region": "North"
  },
  {
    "city": "Patna",
    "x": 325.6666666666667,
    "y": 325.7,
    "region": "East"
  },
  {
    "city": "Kalyan",
    "x": 325,
    "y": 325,
    "region": "West"
  },
  {
    "city": "Gurugram",
    "x": 323.25,
    "y": 323.2,
    "region": "North"
  },
  {
    "city": "Angul",
    "x": 133,
    "y": 317,
    "region": "East"
  },
  {
    "city": "Nandesari",
    "x": 315,
    "y": 315,
    "region": "West"
  },
  {
    "city": "Begusarai",
    "x": 311,
    "y": 311,
    "region": "East"
  },
  {
    "city": "Motihari",
    "x": 309,
    "y": 309,
    "region": "East"
  },
  {
    "city": "Palwal",
    "x": 306,
    "y": 306,
    "region": "North"
  },
  {
    "city": "Panchgaon",
    "x": 306,
    "y": 306,
    "region": "North"
  },
  {
    "city": "Baghpat",
    "x": 306,
    "y": 306,
    "region": "North"
  },
  {
    "city": "Narnaul",
    "x": 306,
    "y": 306,
    "region": "North"
  },
  {
    "city": "Hingoli",
    "x": 38,
    "y": 304,
    "region": "West"
  },
  {
    "city": "Vadodara",
    "x": 304,
    "y": 304,
    "region": "West"
  },
  {
    "city": "Hapur",
    "x": 304,
    "y": 304,
    "region": "North"
  },
  {
    "city": "Hanumangarh",
    "x": 304,
    "y": 304,
    "region": "North"
  },
  {
    "city": "Dharuhera",
    "x": 297,
    "y": 297,
    "region": "North"
  },
  {
    "city": "Saharsa",
    "x": 293,
    "y": 293,
    "region": "East"
  },
  {
    "city": "Arrah",
    "x": 273,
    "y": 273,
    "region": "East"
  },
  {
    "city": "Delhi",
    "x": 265.8636363636364,
    "y": 265.9,
    "region": "North"
  },
  {
    "city": "Byasanagar",
    "x": 78,
    "y": 265,
    "region": "East"
  },
  {
    "city": "Gorakhpur",
    "x": 263,
    "y": 263,
    "region": "North"
  },
  {
    "city": "Vatva",
    "x": 260,
    "y": 260,
    "region": "West"
  },
  {
    "city": "Kurukshetra",
    "x": 253,
    "y": 253,
    "region": "North"
  },
  {
    "city": "Ballabgarh",
    "x": 250,
    "y": 250,
    "region": "North"
  },
  {
    "city": "Satara",
    "x": 80,
    "y": 248,
    "region": "West"
  },
  {
    "city": "Baran",
    "x": 247,
    "y": 247,
    "region": "North"
  },
  {
    "city": "Karnal",
    "x": 247,
    "y": 247,
    "region": "North"
  },
  {
    "city": "Byrnihat",
    "x": 247,
    "y": 247,
    "region": "East"
  },
  {
    "city": "Chandrapur",
    "x": 247,
    "y": 247,
    "region": "West"
  },
  {
    "city": "Meerut",
    "x": 245,
    "y": 245,
    "region": "North"
  },
  {
    "city": "Faridabad",
    "x": 242.66666666666666,
    "y": 242.7,
    "region": "North"
  },
  {
    "city": "Bhagalpur",
    "x": 241.5,
    "y": 241.5,
    "region": "East"
  },
  {
    "city": "Lucknow",
    "x": 240.16666666666666,
    "y": 240.2,
    "region": "North"
  },
  {
    "city": "Muzaffarpur",
    "x": 239.66666666666666,
    "y": 239.7,
    "region": "East"
  },
  {
    "city": "Gaya",
    "x": 234.66666666666666,
    "y": 234.7,
    "region": "East"
  },
  {
    "city": "Noida",
    "x": 228.25,
    "y": 228.2,
    "region": "North"
  },
  {
    "city": "Jaipur",
    "x": 225.16666666666666,
    "y": 225.2,
    "region": "North"
  },
  {
    "city": "Panchkula",
    "x": 223,
    "y": 223,
    "region": "North"
  },
  {
    "city": "Barbil",
    "x": 220,
    "y": 220,
    "region": "East"
  },
  {
    "city": "Udaipur",
    "x": 220,
    "y": 220,
    "region": "North"
  },
  {
    "city": "Muzaffarnagar",
    "x": 217,
    "y": 217,
    "region": "North"
  },
  {
    "city": "Bhiwadi",
    "x": 214.5,
    "y": 214.5,
    "region": "North"
  },
  {
    "city": "Kaithal",
    "x": 210,
    "y": 210,
    "region": "North"
  },
  {
    "city": "Vapi",
    "x": 207,
    "y": 207,
    "region": "West"
  },
  {
    "city": "Parbhani",
    "x": 203,
    "y": 203,
    "region": "West"
  },
  {
    "city": "Hisar",
    "x": 120,
    "y": 197,
    "region": "North"
  },
  {
    "city": "Sri Ganganagar",
    "x": 123,
    "y": 194,
    "region": "North"
  },
  {
    "city": "Greater Noida",
    "x": 192,
    "y": 192,
    "region": "North"
  },
  {
    "city": "Gummidipoondi",
    "x": 190,
    "y": 190,
    "region": "South"
  },
  {
    "city": "Dharwad",
    "x": 190,
    "y": 190,
    "region": "South"
  },
  {
    "city": "Ludhiana",
    "x": 187,
    "y": 187,
    "region": "North"
  },
  {
    "city": "Khurja",
    "x": 183,
    "y": 183,
    "region": "North"
  },
  {
    "city": "Nagpur",
    "x": 180,
    "y": 180,
    "region": "West"
  },
  {
    "city": "Bharatpur",
    "x": 50,
    "y": 179,
    "region": "North"
  },
  {
    "city": "Bilaspur",
    "x": 177,
    "y": 177,
    "region": "Central"
  },
  {
    "city": "Pali",
    "x": 177,
    "y": 177,
    "region": "North"
  },
  {
    "city": "Kannur",
    "x": 177,
    "y": 177,
    "region": "South"
  },
  {
    "city": "Sawai Madhopur",
    "x": 62,
    "y": 171,
    "region": "North"
  },
  {
    "city": "Malegaon",
    "x": 170,
    "y": 170,
    "region": "West"
  },
  {
    "city": "Bhavnagar",
    "x": 167,
    "y": 167,
    "region": "West"
  },
  {
    "city": "Akola",
    "x": 167,
    "y": 167,
    "region": "West"
  },
  {
    "city": "Bulandshahr",
    "x": 157,
    "y": 167,
    "region": "North"
  },
  {
    "city": "Panipat",
    "x": 163,
    "y": 163,
    "region": "North"
  },
  {
    "city": "Dhule",
    "x": 163,
    "y": 163,
    "region": "West"
  },
  {
    "city": "Churu",
    "x": 120,
    "y": 160,
    "region": "North"
  },
  {
    "city": "Purnia",
    "x": 160,
    "y": 160,
    "region": "East"
  },
  {
    "city": "Pampore",
    "x": 157,
    "y": 157,
    "region": "North"
  },
  {
    "city": "Sonipat",
    "x": 157,
    "y": 157,
    "region": "North"
  },
  {
    "city": "Mandideep",
    "x": 153,
    "y": 153,
    "region": "Central"
  },
  {
    "city": "Talcher",
    "x": 153,
    "y": 153,
    "region": "East"
  },
  {
    "city": "Nanded",
    "x": 153,
    "y": 153,
    "region": "West"
  },
  {
    "city": "Firozabad",
    "x": 152.5,
    "y": 152.5,
    "region": "North"
  },
  {
    "city": "Varanasi",
    "x": 152,
    "y": 152,
    "region": "North"
  },
  {
    "city": "Amritsar",
    "x": 98,
    "y": 148,
    "region": "North"
  },
  {
    "city": "Navi Mumbai",
    "x": 147.6,
    "y": 147.6,
    "region": "West"
  },
  {
    "city": "Munger",
    "x": 147,
    "y": 147,
    "region": "East"
  },
  {
    "city": "Kota",
    "x": 146,
    "y": 146,
    "region": "North"
  },
  {
    "city": "Rourkela",
    "x": 145.33333333333334,
    "y": 145.3,
    "region": "East"
  },
  {
    "city": "Nayagarh",
    "x": 143,
    "y": 143,
    "region": "East"
  },
  {
    "city": "Aurangabad",
    "x": 143,
    "y": 143,
    "region": "West"
  },
  {
    "city": "Solapur",
    "x": 142.5,
    "y": 142.5,
    "region": "West"
  },
  {
    "city": "Singrauli",
    "x": 140,
    "y": 140,
    "region": "Central"
  },
  {
    "city": "Balasore",
    "x": 73,
    "y": 140,
    "region": "East"
  },
  {
    "city": "Gwalior",
    "x": 109.5,
    "y": 139.5,
    "region": "Central"
  },
  {
    "city": "Bathinda",
    "x": 95,
    "y": 135,
    "region": "North"
  },
  {
    "city": "Pimpri-Chinchwad",
    "x": 134.57142857142858,
    "y": 134.6,
    "region": "West"
  },
  {
    "city": "Ujjain",
    "x": 133,
    "y": 133,
    "region": "Central"
  },
  {
    "city": "Mehsana",
    "x": 90,
    "y": 132,
    "region": "West"
  },
  {
    "city": "Sikar",
    "x": 78,
    "y": 132,
    "region": "North"
  },
  {
    "city": "Agra",
    "x": 131.4,
    "y": 131.4,
    "region": "North"
  },
  {
    "city": "Guntur",
    "x": 130,
    "y": 130,
    "region": "South"
  },
  {
    "city": "Tumidih",
    "x": 127,
    "y": 127,
    "region": "Central"
  },
  {
    "city": "Katni",
    "x": 127,
    "y": 127,
    "region": "Central"
  },
  {
    "city": "Bhiwandi",
    "x": 127,
    "y": 127,
    "region": "West"
  },
  {
    "city": "Rajkot",
    "x": 123,
    "y": 123,
    "region": "West"
  },
  {
    "city": "Sagar",
    "x": 90,
    "y": 122,
    "region": "Central"
  },
  {
    "city": "Ahmedabad",
    "x": 120,
    "y": 120,
    "region": "West"
  },
  {
    "city": "Tonk",
    "x": 103,
    "y": 120,
    "region": "North"
  },
  {
    "city": "Kanpur",
    "x": 119.33333333333333,
    "y": 119.3,
    "region": "North"
  },
  {
    "city": "Durgapur",
    "x": 117.66666666666667,
    "y": 117.7,
    "region": "East"
  },
  {
    "city": "Jalgaon",
    "x": 117,
    "y": 117,
    "region": "West"
  },
  {
    "city": "Baripada",
    "x": 117,
    "y": 117,
    "region": "East"
  },
  {
    "city": "Dewas",
    "x": 98,
    "y": 116,
    "region": "Central"
  },
  {
    "city": "Asansol",
    "x": 114.75,
    "y": 114.8,
    "region": "East"
  },
  {
    "city": "Anantapur",
    "x": 113,
    "y": 113,
    "region": "South"
  },
  {
    "city": "Siwan",
    "x": 113,
    "y": 113,
    "region": "East"
  },
  {
    "city": "Visakhapatnam",
    "x": 67,
    "y": 113,
    "region": "South"
  },
  {
    "city": "Nagaon",
    "x": 113,
    "y": 113,
    "region": "East"
  },
  {
    "city": "Latur",
    "x": 113,
    "y": 113,
    "region": "West"
  },
  {
    "city": "Agartala",
    "x": 113,
    "y": 113,
    "region": "East"
  },
  {
    "city": "Vijayawada",
    "x": 112.5,
    "y": 112.5,
    "region": "South"
  },
  {
    "city": "Thane",
    "x": 92,
    "y": 112,
    "region": "West"
  },
  {
    "city": "Sirsa",
    "x": 65,
    "y": 112,
    "region": "North"
  },
  {
    "city": "Jhunjhunu",
    "x": 97,
    "y": 111,
    "region": "North"
  },
  {
    "city": "Gandhinagar",
    "x": 103,
    "y": 110.7,
    "region": "West"
  },
  {
    "city": "Nashik",
    "x": 110.5,
    "y": 110.5,
    "region": "West"
  },
  {
    "city": "Mysuru",
    "x": 48,
    "y": 110,
    "region": "South"
  },
  {
    "city": "Karauli",
    "x": 110,
    "y": 110,
    "region": "North"
  },
  {
    "city": "Ajmer",
    "x": 110,
    "y": 110,
    "region": "North"
  },
  {
    "city": "Nagaur",
    "x": 70,
    "y": 109,
    "region": "North"
  },
  {
    "city": "Pithampur",
    "x": 95,
    "y": 107,
    "region": "Central"
  },
  {
    "city": "Dausa",
    "x": 93,
    "y": 107,
    "region": "North"
  },
  {
    "city": "Ramanagara",
    "x": 107,
    "y": 107,
    "region": "South"
  },
  {
    "city": "Mumbai",
    "x": 106.3913043478261,
    "y": 106.4,
    "region": "West"
  },
  {
    "city": "Bhilwara",
    "x": 55,
    "y": 106,
    "region": "North"
  },
  {
    "city": "Bundi",
    "x": 62,
    "y": 106,
    "region": "North"
  },
  {
    "city": "Patiala",
    "x": 90,
    "y": 105,
    "region": "North"
  },
  {
    "city": "Pune",
    "x": 104,
    "y": 104,
    "region": "West"
  },
  {
    "city": "Pratapgarh",
    "x": 73,
    "y": 104,
    "region": "North"
  },
  {
    "city": "Alwar",
    "x": 103,
    "y": 103,
    "region": "North"
  },
  {
    "city": "Damoh",
    "x": 103,
    "y": 103,
    "region": "Central"
  },
  {
    "city": "Chikkaballapur",
    "x": 103,
    "y": 103,
    "region": "South"
  },
  {
    "city": "Rajgir",
    "x": 103,
    "y": 103,
    "region": "East"
  },
  {
    "city": "Jorapokhar",
    "x": 95,
    "y": 103,
    "region": "East"
  },
  {
    "city": "Mahad",
    "x": 103,
    "y": 103,
    "region": "West"
  },
  {
    "city": "Surat",
    "x": 102.5,
    "y": 102.5,
    "region": "West"
  },
  {
    "city": "Kunjemura",
    "x": 80,
    "y": 102,
    "region": "Central"
  },
  {
    "city": "Buxar",
    "x": 100,
    "y": 100,
    "region": "East"
  },
  {
    "city": "Vrindavan",
    "x": 75,
    "y": 100,
    "region": "North"
  },
  {
    "city": "Indore",
    "x": 99.4,
    "y": 99.4,
    "region": "Central"
  },
  {
    "city": "Sasaram",
    "x": 60,
    "y": 99,
    "region": "East"
  },
  {
    "city": "Jhalawar",
    "x": 75,
    "y": 99,
    "region": "North"
  },
  {
    "city": "Chittorgarh",
    "x": 67,
    "y": 99,
    "region": "North"
  },
  {
    "city": "Moradabad",
    "x": 97.33333333333333,
    "y": 98.5,
    "region": "North"
  },
  {
    "city": "Bengaluru",
    "x": 97.8,
    "y": 97.8,
    "region": "South"
  },
  {
    "city": "Jalna",
    "x": 97,
    "y": 97,
    "region": "West"
  },
  {
    "city": "Siliguri",
    "x": 97,
    "y": 97,
    "region": "East"
  },
  {
    "city": "Eluru",
    "x": 97,
    "y": 97,
    "region": "South"
  },
  {
    "city": "Yadgir",
    "x": 97,
    "y": 97,
    "region": "South"
  },
  {
    "city": "Jalandhar",
    "x": 97,
    "y": 97,
    "region": "North"
  },
  {
    "city": "Bihar Sharif",
    "x": 95,
    "y": 95,
    "region": "East"
  },
  {
    "city": "Araria",
    "x": 82,
    "y": 95,
    "region": "East"
  },
  {
    "city": "Hyderabad",
    "x": 94.5,
    "y": 94.5,
    "region": "South"
  },
  {
    "city": "Bhopal",
    "x": 93,
    "y": 94,
    "region": "Central"
  },
  {
    "city": "Banswara",
    "x": 82,
    "y": 94,
    "region": "North"
  },
  {
    "city": "Mira-Bhayandar",
    "x": 93,
    "y": 93,
    "region": "West"
  },
  {
    "city": "Chittoor",
    "x": 93,
    "y": 93,
    "region": "South"
  },
  {
    "city": "Jodhpur",
    "x": 65.4,
    "y": 91.8,
    "region": "North"
  },
  {
    "city": "Badlapur",
    "x": 88,
    "y": 90,
    "region": "West"
  },
  {
    "city": "Cuttack",
    "x": 55,
    "y": 90,
    "region": "East"
  },
  {
    "city": "Kadapa",
    "x": 90,
    "y": 90,
    "region": "South"
  },
  {
    "city": "Kishanganj",
    "x": 88,
    "y": 88,
    "region": "East"
  },
  {
    "city": "Haldia",
    "x": 88,
    "y": 88,
    "region": "East"
  },
  {
    "city": "Keonjhar",
    "x": 88,
    "y": 88,
    "region": "East"
  },
  {
    "city": "Barrackpore",
    "x": 88,
    "y": 88,
    "region": "East"
  },
  {
    "city": "Belgaum",
    "x": 88,
    "y": 88,
    "region": "South"
  },
  {
    "city": "Ambernath",
    "x": 87,
    "y": 87,
    "region": "West"
  },
  {
    "city": "Ooty",
    "x": 87,
    "y": 87,
    "region": "South"
  },
  {
    "city": "Ratlam",
    "x": 77,
    "y": 87,
    "region": "Central"
  },
  {
    "city": "Barmer",
    "x": 43,
    "y": 85,
    "region": "North"
  },
  {
    "city": "Kolhapur",
    "x": 85,
    "y": 85,
    "region": "West"
  },
  {
    "city": "Coimbatore",
    "x": 85,
    "y": 85,
    "region": "South"
  },
  {
    "city": "Ulhasnagar",
    "x": 84,
    "y": 84,
    "region": "West"
  },
  {
    "city": "Khanna",
    "x": 83,
    "y": 83,
    "region": "North"
  },
  {
    "city": "Gangtok",
    "x": 83,
    "y": 83,
    "region": "East"
  },
  {
    "city": "Jabalpur",
    "x": 83,
    "y": 83,
    "region": "Central"
  },
  {
    "city": "Satna",
    "x": 83,
    "y": 83,
    "region": "Central"
  },
  {
    "city": "Brajrajnagar",
    "x": 82,
    "y": 82,
    "region": "East"
  },
  {
    "city": "Boisar",
    "x": 82,
    "y": 82,
    "region": "West"
  },
  {
    "city": "Tirumala",
    "x": 82,
    "y": 82,
    "region": "South"
  },
  {
    "city": "Amravati",
    "x": 79.5,
    "y": 79.5,
    "region": "West"
  },
  {
    "city": "Prayagraj",
    "x": 65,
    "y": 78.7,
    "region": "North"
  },
  {
    "city": "Mandikhera",
    "x": 78,
    "y": 78,
    "region": "North"
  },
  {
    "city": "Sangli",
    "x": 78,
    "y": 78,
    "region": "West"
  },
  {
    "city": "Howrah",
    "x": 77.2,
    "y": 77.2,
    "region": "East"
  },
  {
    "city": "Tensa",
    "x": 77,
    "y": 77,
    "region": "East"
  },
  {
    "city": "Kolkata",
    "x": 76.42857142857143,
    "y": 76.4,
    "region": "East"
  },
  {
    "city": "Raipur",
    "x": 66.33333333333333,
    "y": 76.3,
    "region": "Central"
  },
  {
    "city": "Mangalore",
    "x": 75,
    "y": 75,
    "region": "South"
  },
  {
    "city": "Dungarpur",
    "x": 57,
    "y": 75,
    "region": "North"
  },
  {
    "city": "Chandigarh",
    "x": 73.5,
    "y": 75,
    "region": "Central"
  },
  {
    "city": "Bareilly",
    "x": 67.5,
    "y": 74.5,
    "region": "North"
  },
  {
    "city": "Dehradun",
    "x": 73,
    "y": 73,
    "region": "North"
  },
  {
    "city": "Virar",
    "x": 73,
    "y": 73,
    "region": "West"
  },
  {
    "city": "Rajsamand",
    "x": 28,
    "y": 72,
    "region": "North"
  },
  {
    "city": "Jalore",
    "x": 48,
    "y": 71,
    "region": "North"
  },
  {
    "city": "Korba",
    "x": 36.5,
    "y": 70.5,
    "region": "Central"
  },
  {
    "city": "Machilipatnam",
    "x": 70,
    "y": 70,
    "region": "South"
  },
  {
    "city": "Rairangpur",
    "x": 70,
    "y": 70,
    "region": "East"
  },
  {
    "city": "Sirohi",
    "x": 47,
    "y": 69,
    "region": "North"
  },
  {
    "city": "Bhubaneswar",
    "x": 67.5,
    "y": 67.5,
    "region": "East"
  },
  {
    "city": "Perundurai",
    "x": 67,
    "y": 67,
    "region": "South"
  },
  {
    "city": "Aizawl",
    "x": 30,
    "y": 67,
    "region": "East"
  },
  {
    "city": "Guwahati",
    "x": 66,
    "y": 66,
    "region": "East"
  },
  {
    "city": "Srinagar",
    "x": 57,
    "y": 65.5,
    "region": "North"
  },
  {
    "city": "Hubballi",
    "x": 65,
    "y": 65,
    "region": "South"
  },
  {
    "city": "Rishikesh",
    "x": 3,
    "y": 64,
    "region": "North"
  },
  {
    "city": "Chamarajanagar",
    "x": 63,
    "y": 63,
    "region": "South"
  },
  {
    "city": "Jhansi",
    "x": 47,
    "y": 63,
    "region": "North"
  },
  {
    "city": "Nellore",
    "x": 62,
    "y": 62,
    "region": "South"
  },
  {
    "city": "Aurangabad",
    "x": 62,
    "y": 62,
    "region": "East"
  },
  {
    "city": "Amaravati",
    "x": 47,
    "y": 62,
    "region": "South"
  },
  {
    "city": "Kalaburagi",
    "x": 62,
    "y": 62,
    "region": "South"
  },
  {
    "city": "Dombivli",
    "x": 58,
    "y": 59,
    "region": "West"
  },
  {
    "city": "Bagalkot",
    "x": 57,
    "y": 57,
    "region": "South"
  },
  {
    "city": "Shivamogga",
    "x": 43,
    "y": 56,
    "region": "South"
  },
  {
    "city": "Bettiah",
    "x": 55,
    "y": 55,
    "region": "East"
  },
  {
    "city": "Bhiwani",
    "x": 55,
    "y": 55,
    "region": "North"
  },
  {
    "city": "Naharlagun",
    "x": 53,
    "y": 53,
    "region": "East"
  },
  {
    "city": "Nalbari",
    "x": 53,
    "y": 53,
    "region": "East"
  },
  {
    "city": "Thiruvananthapuram",
    "x": 52,
    "y": 52,
    "region": "South"
  },
  {
    "city": "Sivasagar",
    "x": 35,
    "y": 52,
    "region": "East"
  },
  {
    "city": "Vijayapura",
    "x": 50,
    "y": 50,
    "region": "South"
  },
  {
    "city": "Chennai",
    "x": 47.42857142857143,
    "y": 49,
    "region": "South"
  },
  {
    "city": "Bhilai",
    "x": 48.666666666666664,
    "y": 48.7,
    "region": "Central"
  },
  {
    "city": "Silchar",
    "x": 40,
    "y": 47,
    "region": "East"
  },
  {
    "city": "Puducherry",
    "x": 23,
    "y": 46,
    "region": "South"
  },
  {
    "city": "Madikeri",
    "x": 42,
    "y": 42,
    "region": "South"
  },
  {
    "city": "Shillong",
    "x": 38,
    "y": 41,
    "region": "East"
  },
  {
    "city": "Rajamahendravaram",
    "x": 27,
    "y": 36,
    "region": "South"
  },
  {
    "city": "Rupnagar",
    "x": 28,
    "y": 32,
    "region": "North"
  },
  {
    "city": "Ambala",
    "x": 15,
    "y": 28,
    "region": "North"
  }
];
export const POLLUTANTS_SUMMARY = [
  {
    "id": "pm25",
    "name": "PM2.5 (Fine Particles)",
    "value": 138,
    "unit": "µg/m³",
    "status": "Poor",
    "color": "#ba1a1a",
    "change": "+12% vs Yesterday",
    "bg": "border-l-[#ba1a1a]"
  },
  {
    "id": "no2",
    "name": "Nitrogen Dioxide",
    "value": 30,
    "unit": "ppb",
    "status": "Moderate",
    "color": "#465f88",
    "change": "-4% vs Yesterday",
    "bg": "border-l-[#465f88]"
  },
  {
    "id": "o3",
    "name": "Ground-Level Ozone",
    "value": 56,
    "unit": "ppb",
    "status": "Good",
    "color": "#22C55E",
    "change": "Stable",
    "bg": "border-l-[#22C55E]"
  }
];

const hazardousCount = 27;
const totalAdmissions = 523966;
const insightText = `Current analysis highlights Khora as the most critical region with an AQI of 470 (Hazardous). With ${hazardousCount} monitoring zones currently reporting Severe or Hazardous conditions, and an estimated ${totalAdmissions.toLocaleString()} respiratory admissions nationwide, we recommend activating localized emergency protocols for immediate mitigation.`;
const insightTags = hazardousCount > 10 ? ['Critical Health Alert', 'High PM2.5', 'Emergency Protocols'] : ['Seasonal Alert', 'Monitoring Active'];

export const EXECUTIVE_INSIGHT = {
  text: insightText,
  tags: insightTags
};

const CITIES_WITH_IMAGES = [
  'Agartala', 'Agra', 'Ahmedabad', 'Ahmednagar', 'Aizawl', 'Ajmer', 'Akola', 'Alwar', 'Amaravati', 'Ambala',
  'Ambernath', 'Amravati', 'Amritsar', 'Anantapur', 'Angul', 'Ankleshwar', 'Araria', 'Arrah', 'Asansol', 'Aurangabad',
  'Baddi', 'Badlapur', 'Bagalkot', 'Baghpat', 'Bahadurgarh', 'Balasore', 'Ballabgarh', 'Banswara', 'Baran', 'Barbil',
  'Bareilly', 'Baripada', 'Barmer', 'Barrackpore', 'Bathinda', 'Beed', 'Begusarai', 'Belapur', 'Belgaum', 'Bengaluru',
  'Bettiah', 'Bhagalpur', 'Bharatpur', 'Bhavnagar', 'Bhilai', 'Bhilwara', 'Bhiwadi', 'Bhiwandi', 'Bhiwani', 'Bhopal',
  'Bhubaneswar', 'Bihar Sharif', 'Bikaner', 'Bilaspur', 'Bileipada', 'Boisar', 'Bulandshahr', 'Bundi', 'Buxar', 'Byasanagar',
  'Byrnihat', 'Chamarajanagar', 'Chandigarh', 'Chandrapur', 'Charkhi Dadri', 'Chennai', 'Chhal', 'Chhapra', 'Chikkaballapur',
  'Chikkamagaluru', 'Chittorgarh', 'Churu', 'Coimbatore', 'Cuddalore', 'Cuttack', 'Damoh', 'Dausa', 'Delhi', 'Dewas',
  'Dhanbad', 'Dharuhera', 'Dharwad', 'Dholpur', 'Dhule', 'Dombivli', 'Dungarpur', 'Durgapur', 'Eluru', 'Faridabad',
  'Fatehabad', 'Firozabad', 'Gandhinagar', 'Gangtok', 'Gaya', 'Ghaziabad', 'Gorakhpur', 'Greater Noida', 'Gummidipoondi',
  'Guntur', 'Gurugram', 'Guwahati', 'Gwalior', 'Hajipur', 'Haldia', 'Hanumangarh', 'Hapur', 'Hingoli', 'Howrah',
  'Hubballi', 'Hyderabad', 'Indore', 'Jabalpur', 'Jaipur', 'Jaisalmer', 'Jalandhar', 'Jalgaon', 'Jalna', 'Jalore',
  'Jhalawar', 'Jhansi', 'Jhunjhunu', 'Jind', 'Jodhpur', 'Jorapokhar', 'Kadapa', 'Kaithal', 'Kalaburagi', 'Kalyan',
  'Kannur', 'Kanpur', 'Karauli', 'Karnal', 'Kashipur', 'Katihar', 'Katni', 'Keonjhar', 'Khanna', 'Khora',
  'Khurja', 'Kishanganj', 'Kohima', 'Kolhapur', 'Kolkata', 'Korba', 'Kota', 'Kunjemura', 'Kurukshetra', 'Latur',
  'Lucknow', 'Ludhiana', 'Machilipatnam', 'Madikeri', 'Mahad', 'Maihar', 'Malegaon', 'Mandi Gobindgarh', 'Mandideep',
  'Mandikhera', 'Manesar', 'Manguraha', 'Meerut', 'Mehsana', 'Milupara', 'Mira-Bhayandar', 'Modinagar', 'Moradabad',
  'Motihari', 'Mumbai', 'Munger', 'Muzaffarnagar', 'Muzaffarpur', 'Mysuru', 'Nagaon', 'Nagaur', 'Nagpur', 'Naharlagun',
  'Nalbari', 'Nanded', 'Nandesari', 'Narnaul', 'Nashik', 'Navi Mumbai', 'Nayagarh', 'Noida', 'Pali', 'Palwal',
  'Pampore', 'Panchgaon', 'Panchkula', 'Panipat', 'Parbhani', 'Patiala', 'Patna', 'Perundurai', 'Pimpri-Chinchwad',
  'Pithampur', 'Pratapgarh', 'Prayagraj', 'Puducherry', 'Pune', 'Purnia', 'Raipur', 'Rairangpur', 'Rajamahendravaram',
  'Rajgir', 'Rajkot', 'Rajsamand', 'Ramanagara', 'Ramanathapuram', 'Ratlam', 'Rohtak', 'Rourkela', 'Rupnagar', 'Sagar',
  'Saharsa', 'Sangli', 'Sasaram', 'Satara', 'Satna', 'Sawai Madhopur', 'Shillong', 'Shivamogga', 'Sikar', 'Silchar',
  'Siliguri', 'Singrauli', 'Sirohi', 'Sirsa', 'Sivasagar', 'Siwan', 'Solapur', 'Sonipat', 'Sri Ganganagar', 'Srinagar',
  'Suakati', 'Surat', 'Talcher', 'Tensa', 'Thane', 'Thiruvananthapuram', 'Thoothukudi', 'Thrissur', 'Tirumala',
  'Tirupati', 'Tonk', 'Tumidih', 'Udaipur', 'Ujjain', 'Ulhasnagar', 'Vadodara', 'Vapi', 'Varanasi', 'Vatva',
  'Vijayapura', 'Vijayawada', 'Virar', 'Virudhunagar', 'Visakhapatnam', 'Vrindavan', 'Yadgir', 'Yamuna Nagar'
];


export const getAllCities = (): CityData[] => {
  const baseCities = [...MAJOR_CITIES_COMPARISON, ...TOP_POLLUTED_CITIES];
  const stationCities = STATIONS_DATA.map(stn => {
    const [name, state] = stn.city.split(', ');
    const cityName = name || stn.location;
    return {
      name: cityName,
      state: state || stn.region,
      aqi: stn.aqi,
      status: stn.aqi > 400 ? 'Hazardous' : stn.aqi > 300 ? 'Severe' : stn.aqi > 200 ? 'Very Poor' : stn.aqi > 100 ? 'Poor' : stn.aqi > 50 ? 'Moderate' : 'Good',
      pm25: Math.round(stn.aqi * 0.6),
      trend: 'stable' as const,
      description: `Monitoring data from ${stn.location} station in ${stn.region}.`,
      lat: stn.lat,
      lng: stn.lng,
      imageUrl: CITIES_WITH_IMAGES.includes(cityName) ? `./db/cities/${cityName}/${cityName}.jpg` : undefined
    };
  });
  
  const unique = new Map<string, CityData>();
  [...baseCities, ...stationCities].forEach(c => {
    if (!unique.has(c.name)) {
      unique.set(c.name, c);
    } else {
      // If it exists, try to merge properties like lat/lng if missing
      const existing = unique.get(c.name)!;
      if (!existing.lat && c.lat) existing.lat = c.lat;
      if (!existing.lng && c.lng) existing.lng = c.lng;
      if (!existing.imageUrl && c.imageUrl) existing.imageUrl = c.imageUrl;
    }
  });
  return Array.from(unique.values());
};


