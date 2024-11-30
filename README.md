# FlowPay


![flowpay](https://github.com/user-attachments/assets/afa4d917-9912-4c6b-b995-785d8260abef)

![FlowPay](https://img.shields.io/github/stars/PankajKumardev/Flowpay?style=social) ![Forks](https://img.shields.io/github/forks/PankajKumardev/Flowpay?style=social) ![Issues](https://img.shields.io/github/issues/PankajKumardev/Flowpay) ![License](https://img.shields.io/github/license/PankajKumardev/Flowpay)

## 🌟 Overview
FlowPay is a cutting-edge peer-to-peer (P2P) payment and wallet management system, designed for effortless fund transfers and wallet functionalities. With a user-friendly interface and robust backend, FlowPay aims to simplify digital transactions for everyone.

---

## 🚀 Features
### 🏦 Wallet Management
- **Seamless Fund Transfers:** Add funds via simulated HDFC and Axis bank pages.
- **Transaction Tracking:** Monitor all wallet and P2P transactions, including success, failure, and pending statuses.
- **Secure Transactions:** Supports transfers up to ₹10,000 per transaction.

### 💰 Transfer Page
- View **unlocked, locked, and total balance** at a glance.
- Quick access to **recent transactions** for easy tracking.

### 🏠 Home Page (Dashboard)
- Overview of available balance.
- One-click options for **sending money**, **adding funds**, and **viewing insights**.

### 🔐 Authentication & Security
- **Secure Login/Signup:** Powered by NextAuth and JWT.
- **Data Validation:** Ensured with Zod.

### 🎨 Frontend
- Built with **Next.js** and **TailwindCSS** for responsive design.
- Dynamic hero animations using **Framer Motion**.

### 🛠 Backend
- **Robust API Features:** Add funds and handle wallet operations using Next.js API.
- Database managed via **Prisma ORM** and **PostgreSQL** (NeonDB).
- Future integration for **webhooks** using Express.

### 🌐 Deployment
- Initial deployment with **Docker** on AWS EC2.
- **Production-ready deployment** on Vercel.

---

## 💻 Tech Stack
| **Category**        | **Technology**               |
|---------------------|------------------------------|
| Frontend            | Next.js, TailwindCSS, Framer Motion |
| Backend             | Next.js API, Express (future) |
| Database            | PostgreSQL, Prisma ORM        |
| State Management    | Recoil                       |
| Tools               | Turborepo, TypeScript, Docker |
| Authentication      | NextAuth (JWT sessions)      |
| Deployment          | AWS EC2, Vercel             |

---

## 📥 Installation Process
1. **Clone the repository:**
   ```bash
   git clone https://github.com/PankajKumardev/Flowpay.git
   cd Flowpay
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   - Copy `.env.example` to `.env`.
   - Fill in required fields (`JWT_SECRET`, `NEXTAUTH_URL`, `DATABASE_URL`).
4. **Initialize the database:**
   ```bash
   npm run db:migrate
   npm run db:generate
   ```
5. **Start the development server:**
   ```bash
   npm run dev
   ```
6. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🤝 Contribution Guidelines
### 🌱 How to Get Involved
We warmly welcome contributions to FlowPay! Here's how you can get started:

1. **Fork the repository** by clicking the "Fork" button.
2. **Clone your fork:**
   ```bash
   git clone https://github.com/<your-username>/Flowpay.git
   ```
3. **Create a new branch:**
   ```bash
   git checkout -b feature/<feature-name>
   ```
4. **Set up the environment** (refer to installation steps).
5. **Make changes** following coding standards.
6. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Your descriptive commit message"
   ```
7. **Push changes:**
   ```bash
   git push origin <your-branch-name>
   ```
8. **Open a pull request** with a clear description of changes.

### 📌 Suggested Contributions
- **Enhancements:** Improve state management, Docker configuration, and UI/UX.
- **Features:** Develop merchant app, add webhooks, and enhance FAQs.
- **Bug Fixes:** Address open issues.

### 🏅 Contributor Badges
Showcase your contribution with pride! 🏆
[![Contributors](https://img.shields.io/github/contributors/PankajKumardev/Flowpay)](https://github.com/PankajKumardev/Flowpay/graphs/contributors)

---

## 🌟 Motivation & Entrepreneurship
FlowPay was created to make digital finance seamless and accessible to everyone. Our vision is to empower individuals and businesses with innovative tools to simplify financial interactions. We believe in building an inclusive community where contributors and users thrive together. 🚀

---

## 🗂 Repository Structure
```
├── README.md
├── apps
│   ├── Bank-WebHook
│   ├── merchant-app
│   └── user-app
├── docker
│   └── Dockerfile.user
├── packages
│   ├── db
│   ├── eslint-config
│   ├── store
│   ├── typescript-config
│   └── ui
├── tsconfig.json
└── turbo.json
```

---

## 🛡 License
FlowPay is available under the MIT License. Feel free to use and modify the code responsibly.

---

## 📖 Changelog
Refer to [`CHANGELOG.md`](https://github.com/PankajKumardev/Flowpay/blob/main/CHANGELOG.md) for version history and updates.

---

## 📬 Contact
For queries or collaborations:
- Email: [pankajams1234@gmail.com](mailto:pankajams1234@gmail.com)
- LinkedIn: [Pankaj Kumar](https://www.linkedin.com/in/pankajkumardev0/)
- Twitter: [@pankajkumar_dev](https://x.com/pankajkumar_dev)

---

## 🌟 Stargazers & Forkers
We appreciate your support! 🌟🍴

[![Stargazers](https://img.shields.io/github/stars/PankajKumardev/Flowpay)](https://github.com/PankajKumardev/Flowpay/stargazers) [![Forks](https://img.shields.io/github/forks/PankajKumardev/Flowpay)](https://github.com/PankajKumardev/Flowpay/network/members)


