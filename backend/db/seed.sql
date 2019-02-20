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

INSERT INTO users (username, icon, bio, password_digest) VALUES ('MariaMaria', 'http://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png', 'you remind me of a westside story', 'password'), ('Delilah', 'http://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png', 'Hey there Delilah...', '123456'), ('george_michaels', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Flwlies.com%2Fwp-content%2Fuploads%2F2018%2F06%2Fgeorge-michael-freedom-film-1108x0-c-default.jpg&imgrefurl=https%3A%2F%2Flwlies.com%2Ffestivals%2Fgeorge-michael-freedom-directors-cut-review%2F&docid=Gh6srDTptdg2gM&tbnid=ZQH-GHbv-_QXAM%3A&vet=10ahUKEwiIkMido8jgAhVMU98KHdPDCAsQMwhwKAcwBw..i&w=1108&h=831&bih=772&biw=1440&q=george%20michael&ved=0ahUKEwiIkMido8jgAhVMU98KHdPDCAsQMwhwKAcwBw&iact=mrc&uact=8', 'guilty feet have got NO rhythm', 'carelesswhisper');

INSERT INTO posts (user_id, title, body, url) VALUES (3, 'just a thought', 'Im never gunna dance again', 'https://www.youtube.com/watch?v=izGwDsrQ1eQ'), (2, '1000 miles away', 'NYC is way too cold, the subways are filthy, everyone is mean', 'https://www.youtube.com/watch?v=hQlPzrX8u0A'), (1, '', 'Carlos Santana kinda weirds me out', 'https://bento.cdn.pbs.org/hostedbento-prod/filer_public/latinmusicusa/Artists/santana_16x9.jpg');

INSERT INTO followings (followed_id, follower_id) VALUES (1, 3), (2, 1), (1, 2), (2, 3), (3, 1), (3, 2);