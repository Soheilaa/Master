import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/layout/Dashboard';
import MainNavigation from './components/layout/MainNavigation';  

class App extends Component {
  render() {
    return ( 
        <div className='App'>
          <MainNavigation />
          <Dashboard />
        </div>
    );
  }
}
export default App;