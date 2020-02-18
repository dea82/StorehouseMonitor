import React from "react";
import { Route, Switch } from "react-router-dom";
import SensorList from "./SensorList";
import PageNotFound from "./PageNotFound";
import Plots from "./Plots";

export default function MainPage() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sensors" component={SensorList} />
      <Route path="/plots" component={Plots} />
      <Route component={PageNotFound} />
    </Switch>
  );
}

const Home = () => <h1>Home</h1>;
