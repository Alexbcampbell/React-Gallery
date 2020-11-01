import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
// import GalleryItem from '../GalleryItem/GalleryItem';
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
        console.log('getGalleryData', response.data, this.state.galleryList);
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

  updateGalleryData(likes) {
    axios({
      method: 'PUT',
      url: 'gallery/like/likes',
    })
      .then((response) => {
        this.getGalleryData();
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
        <GalleryList
          photo={this.state.galleryList}
          updateGalleryData={this.updateGalleryData}
        />
      </div>
    );
  }
}

export default App;
