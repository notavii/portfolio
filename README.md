<div align="center">

# Avinash Raj — Personal Portfolio

**Product Strategist & Data Analyst · IIT Guwahati**

[![Live Portfolio](https://img.shields.io/badge/🌐%20Live%20Portfolio-Visit%20Now-6366f1?style=for-the-badge)](https://portfolio-notavii.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-avinashiitg-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/avinashiitg/)
[![GitHub](https://img.shields.io/badge/GitHub-notavii-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/notavii)

</div>

---

## 👤 About

This is my personal portfolio website, showcasing my work in **Product Strategy**, **Data Analytics**, and **AI Product Management**. Built with a modern, minimal design that prioritises performance, dark mode, and recruiter-focused presentation.

> *Product-minded analyst from IIT Guwahati with hands-on experience building analytics frameworks for 30K+ daily orders, shipping SaaS MVPs, and designing AI product strategies. Obsessed with data-driven decision making, customer whitespace, and crisp execution.*

---

## 🚀 Live Demo

**[https://portfolio-notavii.vercel.app](https://portfolio-notavii.vercel.app)**

---

## 📂 Sections

| Section | Description |
|---|---|
| **Hero** | Profile card, bio, contact pills, and impact metrics |
| **Experience** | Pikndel, Student Web Committee, E-Cell, CAC roles |
| **Projects & PRDs** | 4 deep-dive case studies with interactive modals |
| **Leadership** | Campus societies, hackathons, bootcamps |
| **Skills** | Interactive filter tabs across 4 skill domains + Education |
| **Contact** | Live form wired to Neon Postgres (Vercel serverless) |

---

## 🗂️ Projects Featured

| Project | Type | Stack |
|---|---|---|
| [Zomato Business Intelligence PRD](https://zomato-business.lovable.app/) | SaaS MVP + PRD | SQL · Power BI · DAX · Lovable |
| [FinGuide AI — Product Strategy](https://drive.google.com/file/d/1iCpBZhgXpPYxk3NUhzyLGa1GzYL3OHar/view) | Pitch Deck | Figma · User Research · AI Product |
| [Graph-Enhanced ETA Optimization](https://github.com/notavii/Delivery-ETA-optimization) | ML + Graph AI | Python · XGBoost · NetworkX |
| [ValueForge — CPG Differentiation](https://drive.google.com/file/d/1USE61D67qwy5tYjZv1wh2Gw18LYfrVYG/view) | AI Strategy Deck | SHAP · MDP · CSI Framework |

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | React 19 + Vite 8 |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion · canvas-confetti |
| **Icons** | Lucide React |
| **Database** | Neon Serverless Postgres (via Vercel Storage) |
| **Backend** | Vercel Serverless Functions (`/api/contact.js`) |
| **Deployment** | Vercel (auto-deploy on push to `master`) |
| **Linting** | Oxlint |

---

## 📁 Project Structure

```
portfolio/
├── api/
│   └── contact.js           # Vercel serverless function → Neon Postgres
├── public/
│   └── profile.jpg          # Profile photo
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Hero section with profile card
│   │   ├── Experience.jsx    # Work & internship timeline
│   │   ├── Projects.jsx      # Project cards + detail modals
│   │   ├── Leadership.jsx    # Campus roles & achievements
│   │   ├── Skills.jsx        # Skill matrix + Education
│   │   ├── Contact.jsx       # Contact form (wired to DB)
│   │   ├── Navbar.jsx        # Sticky navigation bar
│   │   ├── Footer.jsx        # Footer
│   │   └── ResumeModal.jsx   # In-browser resume viewer
│   ├── data/
│   │   └── portfolioData.js  # Single source of truth for all content
│   └── main.jsx
├── package.json
└── vite.config.js
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js >= 18
- npm >= 9

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/notavii/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables
echo "DATABASE_URL=your_neon_postgres_connection_string" > .env.local

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

---

## 🗄️ Database Setup (Contact Form)

The contact form stores messages in a **Neon Serverless Postgres** database hosted on Vercel.

The `messages` table is created automatically on the first form submission. You can also create it manually via the Neon SQL Editor:

```sql
CREATE TABLE IF NOT EXISTS messages (
  id           SERIAL PRIMARY KEY,
  name         VARCHAR(255) NOT NULL,
  email        VARCHAR(255) NOT NULL,
  subject      VARCHAR(255),
  message      TEXT NOT NULL,
  created_at   TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

To view submitted messages:

```sql
SELECT * FROM messages ORDER BY created_at DESC;
```

---

## 🚢 Deployment

Deployed on **Vercel** with continuous deployment from the `master` branch.

```bash
git add .
git commit -m "your message"
git push
```

**Required environment variable on Vercel:**

```
DATABASE_URL = <your_neon_postgres_connection_string>
```

Set this in: Vercel Dashboard → Project → Settings → Environment Variables

---

## 📝 Customisation

All portfolio content (bio, experience, projects, skills, education) lives in a **single file**:

```
src/data/portfolioData.js
```

Edit this file to update any section without touching component code.

---

## 📬 Contact

| Channel | Link |
|---|---|
| 📧 Academic Email | r.avinash@iitg.ac.in |
| 📧 Personal Email | kumaravinash2204@gmail.com |
| 💼 LinkedIn | [linkedin.com/in/avinashiitg](https://www.linkedin.com/in/avinashiitg/) |
| 🐙 GitHub | [github.com/notavii](https://github.com/notavii) |

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/notavii">Avinash Raj</a> · IIT Guwahati · 2026</sub>
</div>
