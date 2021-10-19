import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Header/Header";
import NotFound from "./Pages/PageNotFound/NotFound";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Departments from "./Pages/Departments/Departments";
import MedicalServices from "./Pages/MedicalServices/MedicalServices";
import Booking from "./Pages/ServiceBooking/Booking/Booking";
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./contexts/AuthProvider";
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/booking/:serviceId">
              <Booking></Booking>
            </Route>
            <Route path="/departments">
              <Departments></Departments>
            </Route>
            <Route path="/medicalServices">
              <MedicalServices></MedicalServices>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
