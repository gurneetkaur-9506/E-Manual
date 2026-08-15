# 📡 Antenna & Coaxial Cable Installation - Interactive E-Manual

An interactive, modern, full-featured web application and digital engineering manual for Antenna and Coaxial Cable Installation. Built with React, TypeScript, Vite, Tailwind CSS, Three.js, and Framer Motion.

---

## 🌟 Key Features

- **Interactive Manual Reader**: Comprehensive digital chapters covering Antenna Systems, Coaxial Cable Selection, Connectors & Terminations, Grounding & Lightning Protection, RF Testing & Troubleshooting, and Maintenance & Safety.
- **Side-by-Side PDF Split View**: Dual-pane manual view with original document synchronization and zoom capabilities.
- **RF Tools & Calculators**:
  - Cable Attenuation & Loss Calculator
  - VSWR & Return Loss / Reflection Coefficient Converter
  - Antenna Coverage & Radiation Pattern Explorer
  - Antenna Downtilt & Coverage Range Estimator
  - Link Budget Calculator
- **3D Interactive Antenna Model**: Real-time Three.js 3D antenna visualization.
- **Interactive Quiz & Knowledge Check**: Self-assessment module with scoring and chapter-by-chapter reviews.
- **Search & Glossary**: Fast search across all sections, tables, figures, and RF technical terminology.
- **Dark, Marine, & Light Themes**: Sleek glassmorphism UI with responsive design for desktop, tablet, and mobile.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

### Installation & Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gurneetkaur-9506/E-Manual.git
   cd E-Manual
   ```

2. **Navigate to the application folder:**
   ```bash
   cd manual-app
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 📁 Repository Structure

```
├── manual-app/               # React + Vite Interactive Web App
│   ├── src/
│   │   ├── components/       # UI Components (Manual, Tools, 3D, PDF Viewer)
│   │   ├── data/             # Extracted manual content & glossary data
│   │   ├── types/            # TypeScript interfaces and definitions
│   │   ├── App.tsx           # Main Application Entry
│   │   └── index.css         # Styling & Tailwind design system
│   ├── public/               # Static assets, figures, and rendered PDF pages
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.ts
├── extracted_manual/         # Extracted manual content and assets
├── manual_assets/            # Extracted figures and raw manual data
└── README.md
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
