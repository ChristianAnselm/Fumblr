var express = require("express");
var router = express.Router();
const db = require("../queries/blogQueries");


router.get("/", db.getAllPosts);
router.get("/post/:id", db.getPost);

module.exports = router;