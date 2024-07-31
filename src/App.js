import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Event from './pages/Event';
import AddEvent from './modals/AddEvent';
import { Route, Routes } from 'react-router-dom';

import Routing from './Routing';

function App() {
  return (
    
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='Login' element={<Login/>} />
        <Route path='Registration' element={<Registration/>} />
      </Routes>
    </div>

  );
}

export default App;
