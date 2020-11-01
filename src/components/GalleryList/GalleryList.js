import React, { Component } from 'react';
import './GalleryList.css';

class GalleryList extends Component {
  render() {
    return (
      <div>
        {this.props.gallery.map((item, index) => (
          <div key={index}>
            <p>{item.id}</p>
            <img src={item.path} alt="photos of my life" className="img" />
            <p>{item.description}</p>
            <p>{item.likes} people love this!</p>
          </div>
        ))}
      </div>
    );
  }
}

export default GalleryList;
