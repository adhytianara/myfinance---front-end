import "./App.css";
import { Fragment, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "../components/Home/Home";
import FunctionDua from "../components/FunctionDua/FunctionDua";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import InternalRateReturn from "../components/InternalRateReturn/InternalRateReturn";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/internal" component={InternalRateReturn} />
          <Route path="/functiondua" component={FunctionDua} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
