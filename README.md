# 📰 News Website

A fully responsive web application built with the MERN stack, it provides a seamless user experience.
---

## 🌟 Features

- User authentication with JWT-based login and signup
- Add news articles
- Browse news by categories or search
- Responsive design using Bootstrap
- Environment variable support for sensitive data

---

## 🔧 Tech Stack

### Frontend
- React.js (Vite-based setup)
- Redux Toolkit (State management)
- Bootstrap

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Other Tools and Libraries
- **dotenv**: Manage environment variables
- **JWT**: Secure token-based authentication
- **bcrypt**: Password hashing
- **Mongoose**: MongoDB object modeling

---

## 🗂 Project Structure

```plaintext
News-website
│
├── Backend
│   ├── config/
│   │   └── db.js           # Database   connection setup
│   ├── controllers/
│   │   ├── authController.js  # Authentication logic
│   │   └── newsController.js  # News CRUD logic
│   ├── models/
│   │   ├── newsModel.js      # News schema
│   │   └── userModel.js      # User schema
│   ├── routes/
│   │   ├── authRoutes.js    # Routes for user authentication
│   │   └── newsRoutes.js    # Routes for news management
│   ├── .env              # Environment variables (not included in the repository)
│   ├── .gitignore        # Ignore sensitive or unnecessary files
│   ├── index.js          # Backend server entry point
│   ├── package-lock.json
│   └── package.json      # Backend dependencies
│
├── Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   |   ├── AddNewsPage.jsx 
│   │   |   ├── Category.jsx
│   │   |   ├── Footer.jsx
│   │   |   ├── Home.jsx
│   │   |   ├── Login.jsx
│   │   |   ├── Navbar.jsx
│   │   |   ├── NewsCard.css
│   │   |   ├── NewsCard.jsx
│   │   |   ├── NotFound.jsx
│   │   |   ├── ProtectedRoute.jsx
│   │   |   ├── Search.jsx   
|   |   |   └── Signup.jsx       
│   │   ├── features/       # Redux slices
|   |   |   └── userSlice.js
│   │   ├── store/          # Redux store setup
|   |   |   └── store.js
│   │   ├── App.jsx         # Main application component
│   │   └── main.jsx        # React app entry point
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json      # Frontend dependencies
│   └── vite.config.js    # Vite configuration
│
└── README.md           # Project documentation
```

---

## ⚙️ Environment Variables

Create a `.env` file in the **backend** directory with the following keys:

```env
MONGO_URI=your_mongodb_connection_string
PORT=your_preferred_port
JWT_SECRET=your_secret_key
```

Replace the placeholder values (`your_mongodb_connection_string`, `your_preferred_port`, and `your_secret_key`) with actual values.

Make sure to never commit your .env file to version control.It should be included to .gitignore
---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

---

### Installation

1. **Clone the repository**:

```bash
git clone https://github.com/aniketsharma889/News-website
```

2. **Navigate to the project directory**:

```bash
cd News-website
```

3. **Install backend dependencies**:

```bash
cd Backend
npm install
```

4. **Install frontend dependencies**:

```bash
cd ../Frontend
npm install
```

5. **Set up environment variables**:
   - Create a `.env` file in the `Backend` folder with the required keys (see above).

---

### Running the Application

1. **Start the backend server**:

```bash
cd Backend
node index.js
```

2. **Start the frontend development server**:
Open second terminal and run
```bash
cd News-website/Frontend
npm run dev
```

3. **Open the application in your browser**:

```plaintext
http://localhost:3000
```

---
## 📚 Additional Resources

- [MERN Stack Documentation](https://www.mongodb.com/mern-stack)
- [React.js Documentation](https://reactjs.org/docs/getting-started.html)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Express.js Documentation](https://expressjs.com/en/starter/installing.html)
