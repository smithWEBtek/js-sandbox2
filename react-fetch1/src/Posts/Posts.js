import React, { Component } from 'react';
import NewPostForm from './NewPost';

import styles from './Posts.module.css';

class Posts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [{
        id: 0,
        title: 'default title',
        content: 'default content'
      }]
    }
  }

  componentDidMount() {
    const newPost = { title: 'new post title', content: 'here is new content' }
    const newState = [...this.state.posts, newPost]
    console.log('newState: ', newState)

    this.setState({
      posts: newState
    })
  }

  onPostSubmit = (data) =>{
    console.log('data: ', data)
    debugger;
  }

  render() {

    const renderedPosts = this.state.posts.map((post, index) => {
      return (
        <div key={index} className={styles.container}>
          <div className={styles.post}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        </div>
      )
    })

    return (
      <>
        <NewPostForm handlePostSubmit={this.onPostSubmit} />
        {renderedPosts}
      </>
    )
  }
}

export default Posts;