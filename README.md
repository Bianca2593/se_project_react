# React + Vite

# WTWR - What To Wear React App

This is the front-end project for the **WTWR (What To Wear)** app, built using React and Vite.  
The app shows the current weather for a specific location and recommends suitable clothing items.  

![WTWR Screenshot](./src/images/wtwr.svg)

---

## 🌟 Features

- Displays current temperature and city (based on OpenWeather API)
- Filters clothing cards based on weather type (`hot`, `warm`, `cold`)
- Modal for adding new garments
- Image modal to preview item details
- Responsive design for mobile and desktop

---

## 🛠 Tech Stack

- React 18
- Vite
- CSS (BEM)
- OpenWeather API

---

## 🚀 Setup Instructions

1️⃣ Clone this repository:
```bash
git clone https://github.com/Bianca2593/se_project_react.git
cd se_project_react
2️⃣ Install dependencies:

bash
Copy
Edit
npm install
3️⃣ Start local development server:

bash
Copy
Edit
npm run dev
App will run at http://localhost:3000.

🌍 Configuration
The app uses hardcoded coordinates for Alpine, Wyoming:

makefile
Copy
Edit
Latitude: 43.1567
Longitude: -111.0173
These are set in:

bash
Copy
Edit
/src/utils/constants.js
You must also set your personal OpenWeather API key in that file:

js
Copy
Edit
export const APIkey 

Here is how the application looks in action:

<img src="weather-preview.png" alt="Weather preview" width="600" />

🌐 Live link:
👉 https://Bianca2593.github.io/se_project_react/

