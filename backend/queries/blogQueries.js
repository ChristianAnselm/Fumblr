var db = require('../db/index')

function getAllPosts(req, res, next) {
    db.any("SELECT * FROM posts").then(data => {
        res.status(200)
            .json({
                status: 'success',
                message: 'got all posts!',
                data: data
            })
    }).catch(err => {
        console.log(err);
    })
}

const getPost = (req, res, next) => {
    const post_id = parseInt(req.params.id);

    db.one('SELECT * FROM posts WHERE id=$1', [post_id])
        .then(post => {
            res.status(200).json({
                status: 'success',
                post: post,
                message: 'got single post',
            });
        })
        .catch(err => {
            console.log('error', err);
        });
};

module.exports = {
    getAllPosts: getAllPosts,
    getPost: getPost,
}