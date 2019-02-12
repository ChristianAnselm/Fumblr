# Schema Information

## blogs
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
owner_id        | integer   | not null, foreign key (references users)
blogname        | string    | not null, unique not null

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | text      | title text
body        | text      | comments/captions
url         | string    | if post is link
reblog_id   | integer   | references posts(id)
poster_id   | integer   | references users(id)

## users
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
username    | string    | VARCHAR  Unique not null
icon_url    | string    | VARCHAR  Unique not null

## followings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users id) on delete cascade
following_id| integer   | not null, foreign key (references users id) on delete cascade

