# Next.js-NestJS-E-commerce-Starter BoilerPlate 🚀
An **opinionated, typesafe monorepo boilerplate** featuring **Next.js**, **NestJS**, **PostgreSQL**, **Tailwind CSS**, and pre-configured **GitHub Actions** for CI/CD.

---
## Features

- **Full-Stack & Typesafe:** End-to-end type safety from the database to your UI.  
- **Modern Stack:** Built with Next.js App Router, NestJS, and PostgreSQL.  
- **Monorepo:** Organized with pnpm workspaces for clean, manageable code.  
- **CI/CD Ready:** Includes a starter workflow for GitHub Actions.  
- **Database Included:** Comes with a Docker Compose setup for a local PostgreSQL instance.  
- **Styled with Tailwind CSS:** A utility-first CSS framework for rapid UI development.

---
## 🛠️ Tech Stack

Frontend: Next.js (App Router)

Backend: NestJS

Database: PostgreSQL

Styling: Tailwind CSS

ORM: TypeORM

Monorepo: pnpm Workspaces

CI/CD: GitHub Actions

Container: Docker

## 🚀 Getting Started

Follow these steps to get the project running locally.

### 🧩 Prerequisites

- **Node.js** (v18 or later)  
- **pnpm**  
- **Docker**

---

## ⚙️ Installation & Setup

### 🧩 Clone the repository:

```bash
git clone https://github.com/ikramkharbouch/Next.js-NestJS-E-commerce-Starter.git
cd Next.js-NestJS-E-commerce-Starter
```

### 📦 Install dependencies:

This command will install dependencies for all applications and packages in the monorepo.

```bash
pnpm install
```

### 🐘 Start the Database

This will start a PostgreSQL container in the background:

```bash
docker-compose up -d
```

### ▶️ Running the Project

To start both the frontend (web) and backend (api) applications in development mode, run the following command from the project root.

```bash
pnpm dev
```

Next.js frontend - <http://localhost:3000>  
NestJS backend - <http://localhost:3001>


### 📂 Project Structure

This project uses a pnpm workspace monorepo structure:

```bash
apps/ # Contains the main applications
web/ # The Next.js frontend
api/ # The NestJS backend
```

### 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.
