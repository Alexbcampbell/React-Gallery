import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    galleryItem: {
      id: '',
      path: '',
      description: '',
      likes: '',
    },
    galleryList: [],
    errorMsg: null,
  };

  componentDidMount() {
    // component loaded and is ready
    // get any data that I need

    this.getGalleryData();
  }

  getGalleryData() {
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        console.log('getGalleryData', this.state.galleryList);
        this.setState({
          galleryList: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errorMsg: 'Error in GET',
        });
      });
  }

  updateGalleryData() {
    axios({
      method: 'PUT',
      url: 'gallery/like/:id',
    })
      .then((response) => {
        // getGalleryData();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>My Gallery</p>
        {/* <img src="images/goat_small.jpg" /> */}
        <GalleryList gallery={this.state.galleryList} />
      </div>
    );
  }
}

export default App;
