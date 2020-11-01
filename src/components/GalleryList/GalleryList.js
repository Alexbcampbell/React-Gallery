import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  render() {
    const dataList = this.props.photo.map((item) => {
      return (
        <GalleryItem
          key={item.id}
          item={item}
          updateGalleryData={this.props.updateGalleryData}
        />
      );
    });
    return (
      <div>
        <div>{dataList}</div>
      </div>
    );
  }
}

export default GalleryList;
