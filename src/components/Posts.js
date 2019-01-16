import React, {Component} from 'react';
import Post from './Post'
class Posts extends Component {
    render() {
        return(
            <div className="app-posts">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        )
    }
}
export default Posts;