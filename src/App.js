import logo from './logo.svg';
import './App.css';
import Login from './components/login'
import Home from './components/home';
import View from './components/view';
import Success from './components/success';
import register from './components/register';
import Register from './components/register';
import { BrowserRouter } from 'react-router-dom';
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom'; 
;
function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>  
    <Route exact path='/' element={< Register />}></Route>  
    <Route exact path='/login' element={< Login />}></Route>  
    <Route exact path='/home' element={< Home />}></Route>  
    <Route exact path='/view' element={< View />}></Route>  
    <Route exact path='/success' element={< Success />}></Route> 
</Routes>  

</BrowserRouter>




      {/* <Login/>
      <Home/> */}
    

      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
