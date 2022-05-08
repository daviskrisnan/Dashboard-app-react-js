import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Navbar, MainContent, Banner } from './components';

function App() {
  return (
    <div className='main-page container-fluid'>
      <Banner />
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
