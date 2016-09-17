import React from 'react';
import Comment from './comment';
import $ from 'jquery';

export default class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }
    
    componentDidMount() {
        $.getJSON(this.props.source, (result) => {
            this.setState({
                comments: result
            });    
        });
    }

    componentWillUnmount() {
        this.serverRequest.abort();
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
