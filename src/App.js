import React from 'react';
import {Route, Routes} from 'react-router-dom';


import {Auth, Home} from './pages';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route exact path={'/*'} element={<Auth />}></Route>
        <Route path='/im' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
