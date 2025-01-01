// /routes/newsRoutes.js
const express = require('express');
const router = express.Router();
const { getAllNews,getNewsById, createNews, updateNews, deleteNews } = require('../controllers/newsController');

router.get('/api/news', getAllNews);
router.get('/api/news/:id', getNewsById);
router.post('/api/addNews', createNews);
router.put('/api/updateNews/:id', updateNews);
router.delete('/api/deleteNews/:id', deleteNews);

module.exports = router;
