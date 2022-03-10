import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './components/mainpage/MainPage'
import MyNavBar from './components/mynavbar/MyNavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SongDetailPage from './components/songDetailPage/SongDetailPage';
function App() {
  return (
    <Router>
    <div className="App">
      <MyNavBar/>
      <Routes>
        <Route path="/"  element={<MainPage/>} />
        <Route path="/songs/:song" element={<SongDetailPage />}  />          
      </Routes>    
    </div>  
    </Router>
  );
}

export default App;
