import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './landingPage/landingpage';
import Login from './login/login';
import Postview from './postview/postview';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route  path='/postview' element={<Postview/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
