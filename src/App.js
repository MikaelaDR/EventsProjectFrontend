import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Event from './pages/Event';
import Dashboard from './pages/Dashboard';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='login' element={<Login/>} />
        <Route path='registration' element={<Registration/>} />
        <Route path='/events' element={<Event/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </div>

  );
}

export default App;
