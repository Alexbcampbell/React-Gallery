import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

import GalleryList from '../GalleryList/GalleryList';
import AboutPage from '../../pages/AboutPage/AboutPage';

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

    this.getGalleryData();
  }
  //Axios GETS data from server through gallery.data.js
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
  //Axios PUT updates like count on client page
  updateGalleryData = (itemID) => {
    console.log('in update gallery');
    axios({
      method: 'PUT',
      url: `gallery/like/${itemID}`,
    })
      .then((response) => {
        this.getGalleryData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <br />
        <AboutPage />
        <p className="galleryP">My Gallery</p>
        {/* GalleryList component is linked to GalleryItem component and receives Image, description and likes */}
        <GalleryList
          photo={this.state.galleryList}
          updateGalleryData={this.updateGalleryData}
        />
      </div>
    );
  }
}

export default App;
