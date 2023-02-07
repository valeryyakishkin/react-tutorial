import React, { Component } from "react";

export default class NewPost extends Component {
    render() {
        const { author, created_at, num_comments, title, points, url } = this.props;
        return (
            <li>
                <a href={url}>{title}</a>
                <br />
                <span>{points}</span>
                |
                <span>{num_comments}</span>
                |
                <span>{created_at}</span>
                |
                <span>{author}</span>
            </li>
        )
    }
}