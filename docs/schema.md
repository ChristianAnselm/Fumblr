# Schema Information

## blogs
column name     | data type | details
----------------|-----------|-----------------------
blog_id         | integer   | not null, primary key
owner_id        | integer   | not null, foreign key (references users)
blogname        | string    | not null, unique

## posts
column name | data type | details
------------|-----------|-----------------------
posts_id    | integer   | not null, primary key
title       | text      | title text
body        | text      | comments/captions
url         | string    | if post is link

## users
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
username    | string    | not null

## blogs_users
column name | data type | details
------------|-----------|-----------------------
blog_id     | integer   | not null, foreign key (references blogs)
user_id     | integer   | not null, foreign key (references artists)

