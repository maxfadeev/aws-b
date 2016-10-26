import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './comment-box';

ReactDOM.render(
    <CommentBox source="https://6k0g49a2v2.execute-api.eu-central-1.amazonaws.com/blog/comments" />,
    document.getElementById('content')
);
