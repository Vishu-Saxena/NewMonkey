import './App.css';
import Navbar from './component/Navbar';
import {Routes , Route} from 'react-router-dom';
import Home from './component/Home';
import Enter from './component/Enter';
import Business from './component/Businus';
import Science from './component/Science';
import Sports from './component/Sports';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Enter' element={<Enter/>} />
        <Route path='/Businus' element={<Business/>} />
        <Route path='/Science' element={<Science/>} />
        <Route path='/Sports' element={<Sports/>} />
        <Route path='*' element={<Home/>} />
      </Routes>
    </>
  );
}
export default App;
