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
import PuzzleGroup from './compnenet2/PuzzleGroup';
import { useLocation } from "react-router-dom";




const App = () => {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/puzzleGroup1' exact={true} element={<PuzzleGroup title = {'myTitle'} url = {"/pg/all"}/>}/>
        <Route path='/puzzleGroup2' exact={true} element={<PuzzleGroup/>}/>
        <Route path='/clientTypes' exact={true} element={<ClientTypeList/>}/>
        <Route path='/clientTypes' exact={true} element={<ClientTypeList/>}/>
        <Route path='/userGenders' exact={true} element={<UserGenderList/>}/>
        <Route path='/memberTypes' exact={true} element={<MemberTypeList/>}/>
        <Route path='/plDifficulties' exact={true} element={<PLDifficultyList/>}/>
        <Route path='/plPrivacies' exact={true} element={<PLPrivacyList/>}/>
        <Route path='/plStatuses' exact={true} element={<PLStatusList/>}/>
        <Route path='/puzzleCategories' exact={true} element={<PuzzleCategoryList/>}/>
        <Route path="/pc/id/:id/pg/all" element={<PuzzleGroup title = {'myTitle'} url1 = {"/pc/id/"} url2={"/pg/all"} /> } />

      </Routes>
    </Router>
  )
}

export default App;