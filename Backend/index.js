// /server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require("body-parser");
const connectDB = require('./config/db');
const newsRoutes = require('./routes/newsRoutes');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use(authRoutes);
app.use(newsRoutes);

connectDB().then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
  });
}).catch((err) => {
  console.error('MongoDB connection failed. Server not started.', err);
});
