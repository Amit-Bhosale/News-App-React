// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const toogleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      showAlert("Dark Mode is Enabled", "success");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      showAlert("Light Mode is Enabled", "warning");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  return (
    <>
    <Router>
      <Navbar
        title="TeXT EDiToR"
        aboutText="About ME"
        mode={Mode}
        toogleMode={toogleMode}
      />
      <Alert alert={alert} />
      <Switch>
        <Route exact path="/about">
          <About mode={Mode} />
        </Route>
        <Route exact path="/">
          <Textform heading="Enter Your Text to Anaylze" />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
