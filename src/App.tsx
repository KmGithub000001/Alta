import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Router/Home';
import Page from './Component/Router/Page';
import UseParam from './Component/Router/UseParam';
import Redux from './Component/Redux/Redux';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/page' element={<Page />} />
        <Route path='/param/:id' element={<UseParam />} />
        <Route path='/redux' element={<Redux />} />
      </Routes>
    </Router>
  );
}
export default App;
