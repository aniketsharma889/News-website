
// /controllers/newsController.js
const News = require('../models/newsModel');

// Fetch all news or filter by category or search term
const getAllNews = async (req, res) => {
  const { category, search } = req.query;

  try {
    let news;
    if (search) {
      news = await News.find({
        $or: [
          { headline: { $regex: search, $options: "i" } },
          { desc: { $regex: search, $options: "i" } },
          { category: { $regex: search, $options: "i" } },
          { author: { $regex: search, $options: "i" } },
        ],
      });
    } else if (category) {
      news = await News.find({ category: category.toLowerCase() });
    } else {
      news = await News.find();
    }

    res.status(200).json(news);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Fetch a specific news item by its ID
const getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }
    res.status(200).json(news);
  } catch (error) {
    console.error("Error fetching news by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Create a new news article
const createNews = async (req, res) => {
  const { headline, desc, link, image, category, author } = req.body;

  if (!headline || !desc || !link || !image || !category) {
    return res.status(400).json({ message: 'Please provide all required fields' });
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
    res.status(201).json({ message: 'News added successfully' });
  } catch (error) {
    console.error("Error adding news:", error);
    res.status(400).json({ message: error.message });
  }
};

// Update an existing news article
const updateNews = async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }

    res.status(200).json({ message: 'News updated successfully' });
  } catch (error) {
    console.error("Error updating news:", error);
    res.status(400).json({ message: error.message });
  }
};

// Delete a specific news article
const deleteNews = async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }
    res.status(200).json({ message: 'News deleted successfully' });
  } catch (error) {
    console.error("Error deleting news:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllNews, getNewsById, createNews, updateNews, deleteNews };
