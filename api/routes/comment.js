const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

let postId;

// CREATE COMMENT
router.post("/", async (req, res) => {
  const newComment = new Comment(req.body);
  postId = newComment.postId;
  await Post.findByIdAndUpdate(postId, {
    $push: {
      comments: newComment.comment,
    },
  });
  try {
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
