# 🧪 Node.js Testing Projects

This repository contains three TypeScript-based Node.js testing projects demonstrating various testing strategies and tools, including unit testing, integration testing, and database mocking. Each subfolder represents a different setup and scope.

---

## 📁 Project Structure

- **`simple-app-testing/`**
  - Basic TypeScript app.
  - Unit tests written with **Jest**.

- **`express-app-testing/`**
  - Express application with route handlers.
  - Tests written using **Vitest** and **Supertest** for HTTP request testing.

- **`express-app-prisma-vitest-testing/`**
  - Express app with **Prisma** ORM.
  - Unit and integration testing using **Vitest**.
  - Uses **vitest-mock-extended** for mocking Prisma client and dependencies.

---

## 📦 Tech Stack

- **Node.js**
- **TypeScript**
- **Jest** / **Vitest** / **Supertest**
- **Prisma** (for DB access)
- **vitest-mock-extended** (for mocking Prisma client)
- **GitHub Actions** for CI/CD

---

## ⚙️ CI/CD Integration

This repo uses GitHub Actions for CI/CD. When a Pull Request is opened against the `main` branch, it will:

- Checkout the project code
- Set up Node.js
- Install dependencies and generate Prisma client
- Run tests in `express-app-prisma-vitest-testing`

To test it:

1. Create a new branch
2. Make changes and push
3. Open a Pull Request targeting `main`

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/node-testing-lab.git
cd node-testing-lab
```

### 2. Install Dependencies

```bash
# For each project folder
cd simple-app-testing
npm install

cd ../express-app-testing
npm install

cd ../express-app-prisma-vitest-testing
npm install
```

### 3. Generate Prisma Client (for Prisma project only)

```bash
cd express-app-prisma-vitest-testing
npx prisma generate
```

---

## 🧪 Running Tests

Run the tests in each folder individually:

```bash
# Inside each folder:
npm run test
```

---

## 📜 License

MIT License

---

## 👨‍💻 Author

**Shyaminda Senevirathna**  
[LinkedIn](https://linkedin.com/in/shyaminda) • [GitHub](https://github.com/shyaminda)

