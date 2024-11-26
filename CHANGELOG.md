# Changelog

All notable changes to this project will be documented in this file.

### Added
- **Initial Release**: Complete implementation of FlowPay with the following features:
  - **Wallet Management**: Add funds via HDFC and Axis Bank pages, track transactions (success, failure, pending).
  - **Transfer Page**: View unlocked, locked, and total balances; access recent transactions.
  - **Home Page (Dashboard)**: Quick overview of balance and access to key features (send money, add funds).
  - **Authentication**: Secure login/signup with NextAuth (JWT) and data validation using Zod.
  - **Frontend**: Built with Next.js and TailwindCSS; dynamic hero animations using Framer Motion.
  - **Backend**: API for wallet operations using Next.js API; database managed by Prisma ORM and PostgreSQL (NeonDB).
  - **Deployment**: Deployed using Docker on AWS EC2 and production-ready deployment on Vercel.

### Changed
- Enhanced user interface with responsive design for mobile and desktop using TailwindCSS.
- Updated API for secure and efficient handling of funds and wallet operations.

## [1.0.2] - 2024-11-10

### Added
- Basic project setup with **Next.js**, **TailwindCSS**, and **Prisma ORM** for database management.
- **Authentication System** using NextAuth for secure user management.

---

## Future Updates

- **Webhooks** integration (Planned).
- **Merchant App** (Planned).
