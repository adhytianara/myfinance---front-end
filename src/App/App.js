import "./App.css";
import { Fragment } from "react";
import Navbarku from "./components/Navbar/Navbarku";
import Home from "../components/Home/Home";
import SystemofLinearEquations from "../components/SystemofLinearEquations/SystemofLinearEquations";
import Wacc from "../components/WACC/Wacc";
import Roi from "../components/ROI/Roi"
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
          <Route path="/system-of-linear-equations" component={SystemofLinearEquations} />
          <Route path="/roi" component={Roi} />
          <Route path="/wacc" component={Wacc} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
