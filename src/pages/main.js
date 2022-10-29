import React from "react";
import OffRoad from "./OffRoad";
import Sedan from "./Sedan";
import Sports from "./Sports";
import Suv from "./suv";
import Home from "./home";
import { Switch, Route } from 'react-router-dom'

function Main() {
  return (
    <>
    <Switch>
    <Route path="/" exact>
      <Home/>
    </Route>

    <Route path="/offroad">
      <OffRoad/>
    </Route>

    <Route path="/sedan">
      <Sedan/>
    </Route>

    <Route path="/sports">
      <Sports/>
    </Route>

    <Route path="/suv">
      <Suv/>
    </Route>
    </Switch>
    </>
  );
}

export default Main;