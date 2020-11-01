import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
  state = {
    displayImage: true,
  };

  clickToggle = () => {
    console.log('toggled');
    this.setState({
      displayImage: this.state.displayImage === false,
    });
  };

  togglePhoto = () => {
    if (this.state.displayImage === true) {
      return (
        <img
          onClick={this.clickToggle}
          alt="Gallery Pictures"
          className="photo"
          src={this.props.item.path}
        />
      );
    } else {
      return <p onClick={this.clickToggle}>{this.props.item.description}</p>;
    }
  };

  render() {
    return (
      <div className="container">
        <div className="image">{this.togglePhoto()}</div>
        <button
          className="btn"
          onClick={() => this.props.updateGalleryData(this.props.item.id)}
        >
          Like
        </button>
        <p className="likes">{this.props.item.likes} people love this!</p>
      </div>
    );
  }
}

export default GalleryItem;
