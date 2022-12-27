import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from './dashboard';
import Nav from './components/nav';
import Footer from './components/footer';
import { Jobs } from './components/jobs';

function App() {
      const [searchText,setSearchText]=useState('');
  return (
    <BrowserRouter>
      <div className="App">

        <Nav  searchText={searchText} setSearchText={setSearchText}/>
        <Routes>
          <Route path="/" element={<Dashboard  searchText={searchText}/>} />
          <Route path='jobs' element={<Jobs />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
