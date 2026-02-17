# 🧠 ThinkBoard

🔗 **Live Demo:** https://thinkboard-2g3c.onrender.com/

ThinkBoard is a simple and clean note-taking web application that allows users to create and save notes instantly without any login or credentials. It focuses on speed, simplicity, and ease of use.

---

## ✨ Features
- Create, edit, and delete notes
- Instant saving without login
- Clean and responsive UI
- Fast and lightweight performance

---

## 🛠️ Tech Stack

### Frontend
- React
- React Router
- Axios
- Tailwind CSS
- DaisyUI
- Lucide React Icons
- Vite

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Upstash Redis (Rate limiting)
- CORS
- Dotenv

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/thinkboard.git
cd thinkboard
```
### 2.Install Dependencies 
```bash
cd backend
npm install
```
Backend packages include:
express
mongoose
cors
dotenv
@upstash/redis
@upstash/ratelimit
nodemon

Start the backend:
```bash
npm run dev
```
### 3.🔐 Environment Variables (Backend)
Create a .env file inside the backend folder and add the following:
```bash
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token
PORT=5000
```
### 4.Run the Project
Frontend: http://localhost:5173
Backend: http://localhost:5000
