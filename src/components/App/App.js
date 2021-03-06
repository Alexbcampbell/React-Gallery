import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

// import GalleryList from '../GalleryList/GalleryList';
import AboutPage from '../../pages/AboutPage/AboutPage';
import GalleryPage from '../../pages/GalleryPage/GalleryPage';

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
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Gallery of My Life</h1>
          </header>
          <nav>
            <ul>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
            </ul>
          </nav>
          <main>
            <Route exact path="/" component={AboutPage} />
            <Route path="/gallery" component={GalleryPage} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
