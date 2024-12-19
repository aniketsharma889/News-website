const express = require('express');
const News = require('./models/newsModel');
const connectDB = require('./db');
const dotenv = require('dotenv');
const app = express();

app.use(express.json());
dotenv.config();

app.get('/api/news', async (req, res) => {
    try {
        const news = await News.find();
        res.status(200).json(news);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/news/:id', async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (!news) {
            return res.status(404).json({ message: 'News not found' });
        }
        res.status(200).json(news);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/addNews', async (req, res) => {
    const { headline, desc, link, image, category, author } = req.body;

    if (!headline || !desc || !link || !image || !category) {
        return res.status(400).json(
            {
                message: 'Please Provide All Required Informations'
            });
    }
    const news = new News({
        headline,
        desc,
        link,
        image,
        category,
        author
    });

    try {
        const newNews = await news.save();
        res.status(201).json({
            message : 'News Added Sucessfully'
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.put('/api/updateNews/:id', async (req, res) => {
    try {
        const news = await News.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!news) {
            return res.status(404).json({ message: 'News not found' });
        }

        res.status(200).json({
            message : 'News Updated Sucessfully'
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.delete('/api/deleteNews/:id', async (req, res) => {
    try {
        const news = await News.findByIdAndDelete(req.params.id);
        if (!news) {
            return res.status(404).json({ message: 'News not found' });
        }
        res.status(200).json({ message: 'News deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


connectDB().then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch((err) => {
    console.error('MongoDB connection failed. Server not started.', err);
});