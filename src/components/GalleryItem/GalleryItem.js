import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

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
          className="img"
          src={this.props.item.path}
        />
      );
    } else {
      return <p onClick={this.clickToggle}>{this.props.item.description}</p>;
    }
  };

  render() {
    return (
      <div>
        <div>{this.togglePhoto()}</div>
        <button
          onClick={() => this.props.updateGalleryData(this.props.item.id)}
        >
          Like
        </button>
        <p>{this.props.item.likes} people love this!</p>
      </div>
    );
  }
}

export default GalleryItem;
