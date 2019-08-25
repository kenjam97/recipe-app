import React, { Component } from 'react';
import like from '../assets/images/like.svg';

class Likes extends Component {
  render() {
    return (
      <div className="likes">
        <div className="likes__field">
          <img className="likes__icon" src={like} alt="likes" />
        </div>
      </div>
    );
  }
}

export default Likes;
