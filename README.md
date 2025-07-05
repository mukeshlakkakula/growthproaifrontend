# React + Vite

# 🌐 GrowthProAI – Local Business Dashboard (Frontend)

This is the **frontend** of the Local Business Dashboard built for GrowthProAI's Full Stack Intern Assignment. The dashboard lets users simulate local SEO analytics by entering business name and location.

## 🔗 Live Frontend

**URL:** [https://growthproaifrontend.vercel.app](https://growthproaifrontend.vercel.app)

---

## 🚀 Tech Stack

- React.js
- Tailwind CSS
- React Toastify
- Fetch API

---

## 📸 Features

- ✅ Fully responsive layout (mobile-first)
- ✅ Input form for Business Name and Location
- ✅ Displays simulated:
  - Google Rating
  - Total Reviews
  - AI-generated SEO Headline
- ✅ "Regenerate Headline" button
- ✅ Copy to Clipboard with Toast notification
- ✅ Form validation with error messages
- ✅ Loading spinner while fetching

---

## 📦 Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/growthproai-frontend.git
   cd growthproai-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the app:

   ```bash
   npm run dev
   ```

4. (Optional) Create a `.env` file for backend URL:

   ```
   VITE_BACKEND_URL=https://growthprobackend.onrender.com
   ```

---

## 🔁 Backend Endpoints

- `POST /business-data` – Submit business name and location
- `GET /regenerate-headline?name=...&location=...` – Get a new SEO headline

CORS is enabled on the backend to allow cross-origin requests.

---
