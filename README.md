<div align="center">

<img src="./public/alex-toon-chatgpt.png" alt="Alejandro Medina - Developer" width="300" />

# 👨‍💻 Alejandro Medina | Full Stack Developer

### Building at the intersection of medicine and technology

[![Portfolio](https://img.shields.io/badge/Portfolio-FF6B35?style=for-the-badge&logo=vercel&logoColor=white)](https://frontend-developer-next.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alex-fullstack-developer/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mevadev97@gmail.com)

---

### 📑 Quick Navigation

[👤 About Me](#-about-me) • [🛠️ Tech Stack](#️-tech-stack) • [💼 Featured Projects](#-featured-projects) • [📫 Let's Connect](#-lets-connect)

</div>

---

## 🚀 About Me

**Full Stack Developer** with a background as a **licensed physician**. I build software at the intersection of medicine and technology — bringing clinical domain expertise and real-world medical knowledge to healthtech products. U.S. Citizen 🇺🇸

🎯 **What I Bring:**

- ✅ Full-stack development from architecture to deployment
- ✅ Deep understanding of clinical workflows, medical data, and healthcare domain requirements
- ✅ Strong foundation in backend systems: auth, role-based access, data validation, and API design
- ✅ Fast learner who shipped production-ready projects across multiple stacks in under a year
- ✅ Clear communicator — bridging the gap between engineering teams and medical context

💡 I transitioned into software development because I believe the most impactful healthtech products are built by people who understand both sides — the clinical and the technical.

---

## 🛠️ Tech Stack

<div align="center">

### Frontend

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Backend & Database

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![SQLModel](https://img.shields.io/badge/SQLModel-E10098?style=for-the-badge)
![Pydantic](https://img.shields.io/badge/Pydantic-E92063?style=for-the-badge&logo=pydantic&logoColor=white)

### Cloud & DevOps

![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

### Tools & Libraries

![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-443E38?style=for-the-badge)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

</div>

<div align="right">

[⬆️ Back to top](#-quick-navigation)

</div>

---

## 💼 Featured Projects

### 🏥 [MediDash - Clinical Dashboard](https://github.com/Meva1997/medidash-frontend)

> **Full-stack medical dashboard** for clinical teams — manage patients, record consultations, check drug interactions, and track surgical checklists in one place. Designed from real clinical workflow experience.

**Key Features:**

- 🔐 JWT authentication with role-based access control — Doctors have full management access; Nurses are restricted to specific actions (toggling checklist items, updating vitals)
- 🧑‍⚕️ Patient management with auto-calculated BMI (color-coded by category) and Glasgow Coma Scale scoring with clinical interpretation
- 📋 Full consultation history per patient — chief complaint, clinical notes, expandable cards with diagnoses and prescriptions per visit
- 💊 Drug interaction checker — pairwise detection across any drug combination, severity-level alerts with clinical descriptions
- ✅ Surgical checklist system (WHO safety steps) with per-item timestamp tracking
- 🛡️ Pydantic field validation with password strength enforcement and name sanitization
- 🗄️ PostgreSQL with SQLAlchemy CheckConstraints for data integrity at the DB level
- 📋 Auto-generated interactive API docs via Swagger UI

**Frontend:** Next.js 16 (App Router) · React 19 · TypeScript · TailwindCSS v4 · TanStack Query v5 · React Hook Form + Zod · Axios

**Backend:** Python · FastAPI · PostgreSQL · SQLAlchemy · Alembic · Pydantic · JWT · Uvicorn


🔗 [Frontend Code](https://github.com/Meva1997/medidash-frontend) | [Backend Code](https://github.com/Meva1997/medidash-backend)

---

### 🐾 [PawScout - Pet Management Platform](https://pawscout-frontend.vercel.app/)

> **Modern full-stack application** with Next.js frontend and FastAPI backend for comprehensive pet care management

**Key Features:**

- 🎨 Modern, responsive UI with Next.js 16 App Router and React 19
- 🔐 Advanced JWT authentication with Argon2 password hashing
- 🐕 Complete pet profile management system
- 📸 Image upload and storage with Cloudinary CDN
- 🗄️ PostgreSQL database with SQLModel ORM
- ⚡ High-performance async API with FastAPI
- 🔄 Optimistic updates and server state with TanStack Query
- ✅ Comprehensive data validation (Zod + Pydantic)
- 🎬 Smooth animations with Framer Motion
- 📱 Fully responsive, mobile-first design

**Frontend:** Next.js · React 19 · TypeScript · Tailwind CSS · TanStack Query · React Hook Form · Zod · Framer Motion · Headless UI

**Backend:** Python · FastAPI · PostgreSQL · SQLModel · Pydantic · Cloudinary · JWT · Uvicorn

🔗 [Live Demo](https://pawscout-frontend.vercel.app/) | [Frontend Code](https://github.com/Meva1997/PawScout) | [Backend Code](https://github.com/Meva1997/PawScout-Backend)

---

### 🍳 [CookMate - Recipe Sharing Platform](https://cookmate-app.vercel.app/)

> **Full-stack recipe-sharing application** with React/TypeScript frontend and Node.js/Express backend for culinary enthusiasts

**Key Features:**

- ⚛️ Modern SPA with React, TypeScript, and Vite for fast development
- 🎨 Utility-first styling with Tailwind CSS and dark mode support
- 🔐 JWT authentication with protected routes and secure endpoints
- 🧾 Full CRUD operations for recipes with author ownership validation
- ❤️ Favorites and likes system with real-time sync
- 💬 Interactive comments system with optimistic UI updates
- 📸 Seamless image upload workflow with Cloudinary integration
- 📄 Paginated API with infinite scrolling using TanStack Query
- 🔔 Toast notifications with Sonner and form handling with React Hook Form
- 🧪 Comprehensive backend testing with Jest and SuperTest
- 📚 API documentation with Swagger UI

**Frontend:** React · TypeScript · Vite · Tailwind CSS · TanStack Query · Axios · React Hook Form · React Router · Sonner

**Backend:** Node.js · Express · MongoDB · Mongoose · JWT · Jest · SuperTest · Swagger · Cloudinary

🔗 [Live Demo](https://cookmate-mevadev.netlify.app/) | [Frontend Code](https://github.com/Meva1997/cookMate_frontend) | [Backend Code](https://github.com/Meva1997/cookMate_backend)

---

## 📫 Let's Connect

I'm actively looking for full stack or healthtech roles where my medical background and engineering skills create real value.

<div align="center">

📧 **Email:** [mevadev97@gmail.com](mailto:mevadev97@gmail.com)  
🌐 **Portfolio:** [frontend-developer-next.vercel.app](https://frontend-developer-next.vercel.app/)  
💼 **LinkedIn:** [https://www.linkedin.com/in/alex-fullstack-developer/](https://www.linkedin.com/in/alex-fullstack-developer/)

</div>

---

<div align="center">

**Copyright © 2026 Alejandro Medina. All rights reserved.**

</div>