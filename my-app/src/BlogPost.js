import React from 'react';

function BlogPost(props){
    return(
        <div>
            <h2>{props.title}</h2>
            <p>작성자: {props.author}</p>
            <p>작성일: {props.date}</p>
            <p>{props.content}</p>
        </div>
    )
}

export default BlogPost;