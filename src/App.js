import React from 'react';
import Api from './Api.js'
import Summery from './Summery';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  
  return (
    <div>
  
        <BrowserRouter>
        
    <Routes>
       <Route  path='/'element={<Api/>}/>
       <Route   path='/summary'element={<Summery/>}/>
    </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App;