

import React from 'react'
import { getPosts } from '../actions'

class Posts extends React.Component {

    static async getInitialProps() {
        const posts = await getPosts()

        return { posts }
    }

    render() {
        const {posts } = this.props
        console.log(posts)
        return (
            <div className="container">
                <h1>I am posts page</h1>
                {/* { JSON.stringify(posts) } */}               
                <ul>
                    {
                        posts.map(p => (
                                <li>
                                    <span>{p.id}:  </span><span>{p.title}</span>
                                </li>
                        ))
                    }
                </ul>
            </div>
        )
    }

}

export default Posts
