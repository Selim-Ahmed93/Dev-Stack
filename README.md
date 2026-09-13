# 🚀 DevStack - Interactive Technology Stack Builder

**DevStack** is a modern, responsive web application built for developers to explore, select, and organize their personal tech stack for projects. Built with **React**, **TypeScript**, and **Tailwind CSS**, it features real-time stack updates, interactive toast notifications, dynamic category filtering, and clean UI components.

---

## ✨ Features

- 🛠️ **Interactive Stack Builder**: Seamlessly add technologies to your personal stack sidebar.
- 🔔 **Custom Toast Notifications**: Instant visual feedback when adding, attempting duplicates, or removing technologies.
- 🚫 **Duplicate Prevention**: Alert and warning toast system to prevent duplicate tech entries.
- 🗑️ **Single & Bulk Removal**: Remove items individually or clear your entire stack with one click.
- 🏷️ **Rich Metadata**: Cards display category chips, difficulty ratings, star ratings, and popular badges.
- 📱 **Fully Responsive Layout**: Mobile-first design that scales beautifully from mobile to desktop.
- ⚡ **Type-Safe Architecture**: Built using TypeScript with strictly typed data interfaces.

---

## 🛠️ Tech Stack

- **Frontend Library:** React.js
- **Language:** TypeScript
- **Styling Framework:** Tailwind CSS
- **Icons & Graphics:** Devicons CDN
- **Build Tool:** Vite

---

## 📂 Project Structure

```text
Dev-Stack/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── Components/
│   │   ├── Footer.tsx        # Footer component with links & copyright
│   │   ├── Hero.tsx          # Hero section component
│   │   ├── Navbar.tsx        # Responsive navigation bar
│   │   └── TechStack.tsx     # Main stack builder & toast system component
│   ├── App.css
│   ├── App.tsx               # Main application component
│   ├── data.ts               # Technology data store
│   ├── index.css             # Tailwind & base CSS styles
│   ├── main.tsx              # Application entry point
│   └── types.ts              # TypeScript interfaces and types
├── index.html
├── package.json
├── tsconfig.json             # TypeScript configuration
└── README.md
