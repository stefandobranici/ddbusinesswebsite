import React, { Component } from 'react';
import '../styles/App.css';
import * as Components from '../components';
import * as Containers from '../bootstrap-containers';


const style = {
  'color' : '#FFFFFF',

}

function App() {
  return (
    <div className="App">
      <Components.NavigationBar />
      <Containers.HeroContainer />
      

     
    </div>
  );
}

export default App;
