DROP DATABASE IF EXISTS fumblr;
CREATE DATABASE fumblr; 

\c fumblr;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR NOT NULL,
  icon VARCHAR,
  bio VARCHAR,
  password_digest VARCHAR
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR,
  body VARCHAR,
  url VARCHAR
);

CREATE TABLE followings (
  id SERIAL PRIMARY KEY NOT NULL,
  followed_id INT REFERENCES users(id) ON DELETE CASCADE,
  follower_id INT REFERENCES users(id) ON DELETE CASCADE
);