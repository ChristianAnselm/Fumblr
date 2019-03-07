import React from "react";
import "./Post.css"


const Post = props => {
    const { id, user_id, title, body, url } = props;
    return (
        <>
            <section className="post" id={id}>
                <small>{user_id}</small>
                <h3>{title}</h3>
                <p>{body}</p>
                <URL>{url}</URL>
                <hr></hr>
            </section>
        </>
    );
};

export default Post;