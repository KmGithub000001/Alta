import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Router/Home';
import Page from './Component/Router/Page';
import UseParam from './Component/Router/UseParam';
import Redux from './Component/Redux/Redux';
import LayoutMain from './Component/Layouts/LayoutMain';

function App() {

  return (
    <Router>
      <LayoutMain>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/page' element={<Page />} />
          <Route path='/param/:id' element={<UseParam />} />
          <Route path='/redux' element={<Redux />} />
        </Routes>
      </LayoutMain>
    </Router>
  );
}
export default App;
