# My Project

## Overview

This project consists of two parts:

- **Frontend**: A Next.js project with TypeScript, Tailwind CSS, and Shadcn UI.
- **Backend**: An Express.js project with Node.js, MySQL and Prisma ORM.

## Installation

### Backend

1. **Navigate to the backend directory:**

   ```bash
   cd backend
   ```
2. **Install Dependacies:**

    ```bash
    npm install
    ```
3. **Update .env file**
copy contents of the `.env.example` file to a `.env` file and add the `DATABASE_URL` and `PORT NUMBER`

4. **Run migrations**
    ```bash
    npx prisma db push
    ```
5. **Run the project**
    ```bash
    npm run dev
    ```

### Frontend

1. **Navigate to the frontend directory::**

   ```bash
   cd ../frontend
   ```
2. **Install Dependacies:**
    ```bash
    npm install
    ```
3. **Start the frontend development server:**
    ```bash
    npm run dev
    ```
