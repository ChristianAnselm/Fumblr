
const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost/fumblr');

module.exports = db;