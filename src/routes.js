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
import PatientDetail from "./Dashboard/PatientDashboard/AddDetail";
import DoctorDetail from "./Dashboard/DoctorDashboard/AddDetail";
import DUserProfile from "./Dashboard/DoctorDashboard/DoctorContents/DUserProfile";
import DConsultation from "./Dashboard/DoctorDashboard/DoctorContents/DConsultation";
import Notepad from "./Dashboard/DoctorDashboard/DoctorContents/Notepad";
import DrChat from "./Dashboard/DoctorDashboard/DoctorContents/chat";
import DRemote from "./Dashboard/DoctorDashboard/DoctorContents/DRemote";
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
      <Route path="/consultation" component={Consultation} />
      <Route path="/prenatal" component={Prenatal} />
      <Route path="/postnatal" component={Postnatal} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/news" component={News} />
      {/* //patient routes */}
      <Route exact path="/dashboard" component={PUserProfile} />
      <Route path="/pconsultations" component={PConsultation} />
      <Route path="/medications" component={PMedications} />
      <Route path="/reports" component={PReports} />
      <Route path="/allergies" component={PAllergies} />
      <Route path="/immunizations" component={PImmunizations} />
      <Route path="/available-doctors" component={PADoctors} />
      <Route path="/doctor-message" component={PDrMessage} />
      <Route path="/rhm" component={PHealth} />

      <Route path="/clandely" component={Clandely} />
      <Route path="/add-detail" component={PatientDetail} />
      {/* Doctor routes */}
      <Route exact path="/dr-dashboard" component={DUserProfile} />
      <Route path="/add-Drdetail" component={DoctorDetail} />
      <Route path="/dr-consultations" component={DConsultation} />
      <Route path="/dr-notepad" component={Notepad} />
      <Route path="/dr-chat" component={DrChat} />
      <Route path="/dr-remote" component={DRemote} />
    </Switch>
  );
}
