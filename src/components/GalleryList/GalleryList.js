import React, { Component } from 'react';
import '../GalleryItem/GalleryItem';
import './GalleryList.css';
import 'bootstrap/dist/css/bootstrap.css';
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
      <div className="d-flex flex-row bd-highlight mb-3">
        <div className="p-2 bd-highlight">{dataList}</div>
      </div>
    );
  }
}

export default GalleryList;
