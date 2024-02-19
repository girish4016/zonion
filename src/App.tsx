import React from 'react';
import './App.scss';
import {HeaderSection} from './components/HeaderSection'
import {ServicesSection} from './components/ServicesSection'

function App() {
  return (
    <div className="App">
      <HeaderSection/>
      <ServicesSection/>
    </div>
  );
}

export default App;
