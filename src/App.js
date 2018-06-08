import React, { Component } from 'react';

import Cars from './pages/Cars/Cars';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/hoc/Layout/Layout';

import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Cars></Cars>
        </Layout>
      </BrowserRouter>
    )
  }

}

export default App;
