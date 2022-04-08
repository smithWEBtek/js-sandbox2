import React from 'react';
import styles from './NewPost.module.css';

export default class NewPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'enter title',
      content: 'enter content'
    }
  }

  onFieldChange(event) {
    event.preventDefault();
    const newFieldValue = event.target.value;
    const key = this.state[event.target.name]
    this.setState({
      [key]: newFieldValue
    })
  }


  render() {
    return (
      <div>
        <input
          type="text"
          name="title"
          value={this.state.title}
          className={styles.formElement}
          onChange={this.onFieldChange} />
        <input
          type="text"
          name="content"
          value={this.state.content}
          className={styles.formElement}
          onChange={this.onFieldChange} />
        <button onSubmit={this.props.handlePostSubmit}>
          Submit
        </button>
      </div>
    );
  }
}
