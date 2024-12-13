# 🛠️ **Next.js Full-Stack Application**

This repository contains a feature-rich full-stack application built with Next.js, MongoDB, and several modern tools. The project integrates multiple modules, each serving a specific purpose, making it an excellent starting point for building scalable applications. Below are the detailed descriptions and instructions for setting up and using this project.

## 📚 **Features Overview**

### 1. **PromptSharing**
- **Description**: A basic CRUD application allowing users to share, edit, and delete prompts. 
- **Tech Stack**: 
  - Next.js
  - MongoDB with Mongoose ODM
  - NextAuth for authentication
  - TailwindCSS for styling
- **Setup**: Since this uses MongoDB, no migrations are needed. Just add your MongoDB connection string in the `.env` file, and Mongoose will handle the rest.

### 2. **Drizzel-Lucia-Auth**
- **Description**: An authentication system built using Lucia with the Drizzle ORM. This provides flexible and secure authentication options for your application.
- **Tech Stack**: 
  - Drizzle ORM
  - Lucia for authentication

### 3. **Lemonsqueezy-Payments-No-DB**
- **Description**: Integrates Lemonsqueezy payment gateway without the need for a database. 
- **Tech Stack**:
  - Lemonsqueezy API
  - Next.js API routes for handling payments
  - No external database required

### 4. **Next-Auth-No-DB-No-ORM**
- **Description**: A minimalist authentication solution using NextAuth without relying on any database or ORM.
- **Tech Stack**:
  - NextAuth
  - No-DB setup

## 🚀 **Getting Started**

### Prerequisites
Ensure you have the following installed on your machine:
- Node.js (>= 14.x)
- npm or yarn
- MongoDB Atlas or a local MongoDB instance
- Git

### **1. Clone the Repository**
```bash
git clone https://github.com/your-repo-name/nextjs-fullstack-app.git
cd nextjs-fullstack-app
```

### **2. Install Dependencies**
```bash
npm install
# or
yarn install
```
### **3. Set Up Environment Variables**
```bash
# MongoDB
MONGO_URI=<your-mongodb-connection-string>

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<your-nextauth-secret>

# Lemonsqueezy
LEMONSQUEEZY_API_KEY=<your-lemonsqueezy-api-key>

```
### **4. Running the Application**
```bash
npm run dev
# or
yarn dev
```
### **5. MongoDB Setup**
For **PromptSharing**, ensure that your `MongoDB` connection is correctly configured in the `.env` file. Mongoose will automatically handle the creation of collections.

## 📘 Modules Documentation

### **PromptSharing**
- **Endpoints**:
  - `GET /api/prompts` - Fetch all prompts
  - `POST /api/prompts` - Create a new prompt
  - `PUT /api/prompts/:id` - Update an existing prompt
  - `DELETE /api/prompts/:id` - Delete a prompt
- **Authentication**: Secured via NextAuth. Users must be logged in to create, update, or delete prompts.

### **Drizzel-Lucia-Auth**
- **Authentication**: Uses Lucia with Drizzle ORM to provide a flexible authentication mechanism.
- **How to Use**: After setting up your environment variables, Lucia will handle user sessions, sign-ups, and logins automatically.

### **Lemonsqueezy-Payments-No-DB**
- **Payment Flow**: Utilizes Lemonsqueezy for handling payments without needing a database. Payments are processed through the Lemonsqueezy API, and success/failure redirects are handled through Next.js API routes.
- **How to Use**: Ensure your API key is set in the `.env` file. You can create and test payment flows by interacting with the frontend.

### **Next-Auth-No-DB-No-ORM**
- **Authentication**: Minimal setup with NextAuth. No external databases or ORMs are required.
- **How to Use**: This setup is designed for applications that require basic session-based authentication without complex database management.

## 🛠️ Contributing

1. **Fork the repository** on GitHub.
2. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. **Make your changes** and commit them:
   ```bash
   git commit -m "Add some feature"
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature-name
   ```
5. **Create a pull request** on GitHub.

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details.
