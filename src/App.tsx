import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import SignUp from './components/pages/SignUp';





const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/signup' element ={<SignUp/>}/>
        
      </Routes>
    </Router>
  )
}

export default App;
