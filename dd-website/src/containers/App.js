import React, { Component } from 'react';
import '../styles/App.css';
import * as Components from '../components';
import * as Containers from '../bootstrap-containers';

function App() {
  return (
    <div className="App">
      <Components.NavigationBar />
      <Containers.HeroContainer />
      <Components.NavigationBar />
    </div>
  );
}

export default App;
