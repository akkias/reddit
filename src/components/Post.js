import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Post extends Component {
    render() {
        const coverStyle = {
            backgroundImage: `url(https://source.unsplash.com/random/240x160)`
        }
        return(
            <div className="app-post">
                <div className="app-post-voteblock">
                    <button><FontAwesomeIcon icon="chevron-up" /></button>
                    <span className="app-post-votes">200</span>
                    <button><FontAwesomeIcon icon="chevron-down" /></button>
                </div>
                <div className="app-post-cover" style={coverStyle} />
                <div className="app-post-content m-l-4">
                    <h4 className="app-post-title">Donald Trump threatens to 'take away media's credentials' over negative news stories about him</h4>
                    <span className="app-post-meta">submitted an hour ago by theindependentonline to r/politics</span>
                    <span className="app-post-meta">submitted an hour ago by theindependentonline to r/politics</span>
                </div>
            </div>
        )
    }
}
export default Post;