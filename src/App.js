import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Event from './pages/Event';
import AddEvent from './modals/AddEvent';

function App() {
  return (
    <div >
      <Home/>
      {/* <Registration/> */}
      {/* <Login/> */}
      <Event/>

      {/* <AddEvent/> */}
    </div>
  );
}

export default App;
