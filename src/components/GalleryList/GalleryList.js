import React, { Component } from 'react';
import './GalleryList.css';
import 'bootstrap/dist/css/bootstrap.css';

class GalleryList extends Component {
  render() {
    return (
      <div className="d-flex flex-row bd-highlight mb-3">
        {this.props.gallery.map((item, index) => (
          <div key={index} className="p-2 bd-highlight">
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
