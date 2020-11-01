import React, { Component } from 'react';
import './GalleryList.css';

class GalleryList extends Component {
  state = {
    galleryItem: {
      id: '',
      path: '',
      description: '',
      likes: '',
    },
    galleryList: [
      {
        id: 1,
        path: 'images/goat_small.jpg',
        description: 'Photo of a goat taken at Glacier National Park.',
        likes: 0,
      },
      {
        id: 2,
        path: 'images/utah.jpg',
        description: 'A photo of me hiking in Utah',
        likes: 3,
      },
    ],
    errorMsg: null,
  };

  render() {
    return (
      <div>
        {this.props.gallery.map((item, index) => (
          <div key={index}>
            <p>{item.id}</p>
            <img src={item.path} alt="Goat Utah" className="img" />
            <p>{item.description}</p>
            <p>{item.likes} people love this!</p>
          </div>
        ))}
      </div>
    );
  }
}

export default GalleryList;
