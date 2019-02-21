const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/fumblr");

const getAllPosts = (req, res, next) => {
    db.any("SELECT * FROM posts").then(data => {
        res.status(200)
        .json({
            status: 'success',
            message: 'got all posts!',
            data: data
        })
    }).catch(err => {
        console.log(err);
        next()
    })
}