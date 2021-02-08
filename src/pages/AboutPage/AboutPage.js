import React, { Component } from 'react';

class AboutPage extends Component {
  clickForGallery = () => {
    console.log('toggled');
    this.props.history.push('/gallery');
  };
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>Welcome to my gallery</p>
        <p>Feel free to browse my pictures and click the like button!</p>
        <button onClick={this.clickForGallery}>
          Click here to see the Gallery!
        </button>
      </div>
    );
  }
}

export default AboutPage;
