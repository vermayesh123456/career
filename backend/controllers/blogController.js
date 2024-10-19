const Blog = require('../models/Blog');

exports.writeBlog = async (req, res) => {
  try {
    const blog = await Blog.create({
      title: req.body.title,
      content: req.body.content,
      author: req.userId,
    });
    res.json(blog);
  } catch (err) {
    res.status(400).json({ message: 'Error creating blog', error: err });
  }
};
