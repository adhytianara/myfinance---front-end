import "./App.css";
import { Fragment } from "react";
import Navbarku from "./components/Navbar/Navbarku";
import Home from "../components/Home/Home";
import FunctionDua from "../components/FunctionDua/FunctionDua";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NetPresentValue from "../components/NetPresentValue/NetPresentValue";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbarku/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/netpresentvalue" component={NetPresentValue} />
          <Route path="/functiondua" component={FunctionDua} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
