import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Views/Home/Home";
import Login from "./Views/Auth/Login";
import ForgotPassword from "./Views/Auth/ForgotPassword";
import NewPassword from "./Views/Auth/NewPassword";
import Prenatal from "./Views/Prenatal/Prenatal";
import Postnatal from "./Views/Postnatal/Postnatal";
import ContactUs from "./Views/ContactUs/ContactUs";
import News from "./Views/News/News";
import Consultation from "./Views/Consultation/Consultation";
import Signup from "./Views/Auth/Signup";
import PUserProfile from "./Dashboard/PatientDashboard/PatientContents/PUserProfile";
import PConsultation from "./Dashboard/PatientDashboard/PatientContents/PConsultation";
import PMedications from "./Dashboard/PatientDashboard/PatientContents/PMedications";
import PReports from "./Dashboard/PatientDashboard/PatientContents/PReports";
import PAllergies from "./Dashboard/PatientDashboard/PatientContents/PAllergies";
import PImmunizations from "./Dashboard/PatientDashboard/PatientContents/PImmunization";
import PADoctors from "./Dashboard/PatientDashboard/PatientContents/PADoctors";
import PDrMessage from "./Dashboard/PatientDashboard/PatientContents/PDrMessage";
import PHealth from "./Dashboard/PatientDashboard/PatientContents/PHealth";
import Clandely from "./Components/Clandely";
export default function Routes() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/forgot" component={ForgotPassword} />
      <Route path="/new-pass" component={NewPassword} />
      {/* <Route path="/dashboard" component={Dashboard} /> */}
      {/* <Header /> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/consultation" component={Consultation} />
      <Route exact path="/prenatal" component={Prenatal} />
      <Route exact path="/postnatal" component={Postnatal} />
      <Route exact path="/contact" component={ContactUs} />
      <Route exact path="/news" component={News} />
      {/* //patient routes */}
      <Route path="/dashboard" component={PUserProfile} />
      <Route exact path="/pconsultations" component={PConsultation} />
      <Route exact path="/medications" component={PMedications} />
      <Route exact path="/reports" component={PReports} />
      <Route exact path="/allergies" component={PAllergies} />
      <Route exact path="/immunizations" component={PImmunizations} />
      <Route exact path="/available-doctors" component={PADoctors} />
      <Route exact path="/doctor-message" component={PDrMessage} />
      <Route exact path="/rhm" component={PHealth} />

      {/* <Footer /> */}
      <Route exact path="/clandely" component={Clandely} />
    </Switch>
  );
}
