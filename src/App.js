import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/home";
import View from "./components/view";
import Success from "./components/success";
import Register from "./components/register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/view" element={<View />} />
            <Route exact path="/success" element={<Success />} />
            <Route exact path="/register" element={<Register />} />
          </Route>
        </Routes>
      </Router>

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
