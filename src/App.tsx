
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import context from './Component/Hook/ContextProvider';

import Home from './Component/Router/Home';
import Page from './Component/Router/Page';
import UseParam from './Component/Router/UseParam';
import Redux from './Component/Redux/Redux';
import LayoutMain from './Component/Layouts/LayoutMain';
import UseState from './Component/Hook/UseState';
import UseEffect from './Component/Hook/UseEffect';
import UseEffectNone from './Component/Hook/UseEffectNone';
import UseEffectEmpty from './Component/Hook/UseEffectEmpty';
import UseMemo from './Component/Hook/UseMemo';
import UseContext from './Component/Hook/UseContext';
import UseReducer from './Component/Hook/UesReducer';
import Login from './Component/Firebase/Login';
import Info from './Component/Firebase/Info';
import Register from './Component/Firebase/Register';

function App() {

  return (
    <Router>
      <context.Provider>
        <LayoutMain>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/page' element={<Page />} />
            <Route path='/param/:id' element={<UseParam />} />
            <Route path='/redux' element={<Redux />} />
            <Route path='/usestate' element={<UseState />} />
            <Route path='/usememo' element={<UseMemo />} />
            <Route path='/usecontext' element={<UseContext />} />
            <Route path='/usereducer' element={<UseReducer />} />

            <Route path='/useeffect' element={<UseEffect />} />
            <Route path='/useeffect-none' element={<UseEffectNone />} />
            <Route path='/useeffect-empty' element={<UseEffectEmpty />} />

            <Route path='/login' element={<Login />} />
            <Route path='/info' element={<Info />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </LayoutMain>
      </context.Provider>
    </Router>
  );
}
export default App;
