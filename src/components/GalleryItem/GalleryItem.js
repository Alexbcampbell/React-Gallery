import React, { Component } from 'react';

class GalleryItem extends Component {
  updateLike() {
    console.log('update like');
  }

  render() {
    return <button onClick={this.updateLike}>Like!</button>;
  }
}

export default GalleryItem;
