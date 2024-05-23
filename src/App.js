import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClientTypeList from './compnents/lists/ClientTypeList';
import UserGenderList from './compnents/lists/UserGenderList';
import MemberTypeList from './compnents/lists/MemberTypeList';
import PLDifficultyList from './compnents/lists/PLDifficultyList';
import PLPrivacyList from './compnents/lists/PLPrivacyList';
import PLStatusList from './compnents/lists/PLStatusList';
import PuzzleCategoryList from './compnents/lists/PuzzleCategoryList';
import PuzzleGroupList from './compnents/lists/PuzzleGroupList';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/clientTypes' exact={true} element={<ClientTypeList/>}/>
        <Route path='/userGenders' exact={true} element={<UserGenderList/>}/>
        <Route path='/memberTypes' exact={true} element={<MemberTypeList/>}/>
        <Route path='/plDifficulties' exact={true} element={<PLDifficultyList/>}/>
        <Route path='/plPrivacies' exact={true} element={<PLPrivacyList/>}/>
        <Route path='/plStatuses' exact={true} element={<PLStatusList/>}/>
        <Route path='/puzzleCategories' exact={true} element={<PuzzleCategoryList/>}/>
        <Route path='/puzzleGroups' exact={true} element={<PuzzleGroupList/>}/>
      </Routes>
    </Router>
  )
}

export default App;