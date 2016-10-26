import React from 'react';
import Comment from './comment';
import 'whatwg-fetch';

export default class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }
    
    componentDidMount() {
        fetch(this.props.source).then((response) => {
            this.setState({
                comments: response.json()
            });
        });
    }

    render() {
        let commentNodes = this.state.comments.map((comment) => {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
}
