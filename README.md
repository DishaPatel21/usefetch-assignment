# React Custom Hook – useFetch Assignment

## 🚀 Deployed Project
Live Demo:  
👉 https://usefetchassignment5.netlify.app

---

## 📌 Project Overview

This project demonstrates the implementation of a reusable custom React hook named **useFetch** that simplifies API data fetching by managing loading, error, and response states internally.

The hook is designed to be flexible and reusable for any API endpoint.

---

## 🔗 API Used

https://api.escuelajs.co/api/v1/products

---

## ⚙️ Features

- Reusable custom hook `useFetch`
- Handles loading, error, and data states
- Filters and displays only valid products
- Clean responsive UI

---

## 🧠 Design Decisions

- useCallback is used to prevent unnecessary re-renders  
  https://react.dev/reference/react/useCallback
- useEffect triggers API calls  
  https://react.dev/reference/react/useEffect
- Invalid API data is filtered for UI quality

---

## 🛠️ How to Run Locally

```bash
npm install
npm run dev
