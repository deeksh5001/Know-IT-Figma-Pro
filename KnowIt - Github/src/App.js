import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login.js';
import Home from './Home.js'
import Competition from './Competition.js'
import Hackathon from './Hackathon.js';
import Festival from './Festival.js';
import Workshop from './Workshop.js';
import Register from './Register.js';
import Register2 from './Register2.js';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Login/>}/>
        <Route path={'/home'} element={<Home/>}/>
        <Route path={'/competition'} element={<Competition/>}/>
        <Route path={'/hackathon'} element={<Hackathon/>}/>
        <Route path={'/workshop'} element={<Workshop/>}/>
        <Route path={'/festival'} element={<Festival/>}/>
        <Route path={'/register'} element={<Register/>}/>
        <Route path={'/register2'} element={<Register2/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
  