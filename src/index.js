import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './comment-box';

ReactDOM.render(
    <CommentBox source="https://x1026y9qgg.execute-api.eu-central-1.amazonaws.com/test/comments" />,
    document.getElementById('content')
);
