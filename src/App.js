import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Nav from './component/navbar.jsx';
import Reg from './component/register.jsx';
import Logi from './component/login.jsx';
import Hom from './component/home.jsx';
function App() {
  return (
    
    <>
<BrowserRouter>
<Routes>
  <Route path="/home" element={<Hom/>}></Route>
  <Route path="/register" element={<Reg/>}></Route>
  <Route path="/login" element={<Logi/>}></Route>
  <Route path="/*" element  ={<h1>404 not found</h1>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
