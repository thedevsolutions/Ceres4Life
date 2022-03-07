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
import ContactUs from "./Views/ContactUs/ContactUs";
import News from "./Views/News/News";
import Consultation from "./Views/Consultation/Consultation";
import Dashboard from "./Dashboard/Dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/forgot" component={ForgotPassword} />
      <Route path="/new-pass" component={NewPassword} />
      <Route path="/dashboard" component={Dashboard} />
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/prenatal" component={Prenatal} />
        <Route path="/postnatal" component={Postnatal} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/news" component={News} />
        <Route path="/consultation" component={Consultation} />
        <Footer />
      </div>
    </Switch>
  );
}
