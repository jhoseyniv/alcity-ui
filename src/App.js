import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClientTypeList from './ClientTypeList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/clientTypes' exact={true} element={<ClientTypeList/>}/>
      </Routes>
    </Router>
  )
}

export default App;