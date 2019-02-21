# Schema Information

## users
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
username    | string    | VARCHAR  Unique not null
icon_url    | string    | VARCHAR  Unique 
bio         | text      | VARCHAR  Unique 

## blogs
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users)
blogname        | string    | not null, unique not null

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
poster_id   | integer   | references users(id)
reblog_id   | integer   | references posts(id)
title       | text      | title text
body        | text      | comments/captions
url         | string    | if post is link

## followings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users id) on delete cascade
followed_id| integer   | not null, foreign key (references users id) on delete cascade

