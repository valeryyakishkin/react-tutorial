import React, { Component } from "react";

export default class NewPost extends Component {
    render() {
        const { author, created_at, num_comments, title, points, url } = this.props;
        return (
            <li>
                <h2>{author}</h2>
                <h3>{created_at}</h3>
                <span>{num_comments}</span>
                <h2>{title}</h2>
                <span>{points}</span>
                <p>{url}</p>
            </li>
        )
    }
}