import React, { Component } from 'react';

class GalleryItem extends Component {
  // updateLike() {
  //   console.log('update like');
  // }

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.props.updateGalleryData(this.props.item)}>
            Like
          </button>
          <p>{this.props.item.likes} people love this!</p>
        </div>
      </div>
    );
  }
}

export default GalleryItem;
