import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Views/Home/Home";
import Login from "./Views/Auth/Login";
import ForgotPassword from "./Views/Auth/ForgotPassword";
import NewPassword from "./Views/Auth/NewPassword";
import Prenatal from "./Views/Prenatal/Prenatal";
import Postnatal from "./Views/Postnatal/Postnatal";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/forgot" component={ForgotPassword} />
      <Route path="/new-pass" component={NewPassword} />
      <div>
        <Header />
        <Route path="/home" exact component={Home} />
        <Route path="/prenatal" component={Prenatal} />
        <Route path="/postnatal" component={Postnatal} />
        <Footer />
      </div>
    </Switch>
  );
}
