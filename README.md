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

## 🔐 Authentication

The app features full user authentication:

- **Sign Up & Log In Modals**: Modal-based registration and login with form validation
- **JWT Token Storage**: User sessions are persisted using localStorage
- **Protected Routes**: User profile (`/profile`) is only accessible when authenticated
- **User Profile**: Authenticated users can update their profile picture and name

---

## 🛠 Tech Stack

- React 18
- Vite
- CSS (BEM)
- OpenWeather API
- JWT Authentication

---

## 🎯 Global State with Context API

The app uses **React Context API** to manage global state:

- `CurrentUserContext` – Stores logged-in user info (name, avatar, email, _id)
- `CurrentTemperatureUnitContext` – Toggles between Fahrenheit and Celsius

---

## 🧪 Testing

Manual testing via:

- Form validation scenarios (empty input, invalid URL/email)
- Modal open/close logic
- Item creation, liking, deleting
- Login/logout + protected routes

✅ Escape key closes modals  
✅ Fully responsive on all screen sizes

---

## 🚀 Setup Instructions

1️⃣ Clone this repository:

```bash
git clone https://github.com/Bianca2593/se_project_react.git
cd se_project_react
```

2️⃣ Install dependencies:

```bash
npm install
```

3️⃣ Start local development server:

```bash
npm run dev
```

App will run at [http://localhost:3000](http://localhost:3000)

---

## 🌍 Configuration

The app uses hardcoded coordinates for Alpine, Wyoming:

```
Latitude: 43.1567  
Longitude: -111.0173
```

These are set in:

```
/src/utils/constants.js
```

You must also set your personal OpenWeather API key in that file:

```js
export const APIkey = "YOUR_API_KEY_HERE";
```

---

## 📸 Demo Preview

<img src="weather-preview.png" alt="Weather preview" width="600" />

---

## 🌐 Live link

👉 https://Bianca2593.github.io/se_project_react/

---

## 📂 Project Structure

```
src/
│
├── components/           # All reusable React components
│   ├── Header/
│   ├── Main/
│   ├── Profile/
│   └── ...
│
├── contexts/             # Context providers
├── hooks/                # Custom React hooks
├── images/               # Static image assets
├── utils/                # API utilities and constants
├── App.jsx               # Main component
└── index.js              # Entry point
```

---

## 🤝 Contributing

Contributions are welcome! To get started:

```bash
git checkout -b your-feature-branch
```

Then open a pull request with a description of your changes.

---

## 📋 License

MIT License © 2025 Bianca Nechita