import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/PageNotFound/NotFound";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Departments from "./Pages/Departments/Departments";
import MedicalServices from "./Pages/MedicalServices/MedicalServices";
import Booking from "./Pages/ServiceBooking/Booking/Booking";

function App() {
  return (
    <div className="">
    
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
            <Route path="/aboutUs">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/departments">
              <Departments></Departments>
            </Route>
            <Route path="/medicalServices">
              <MedicalServices></MedicalServices>
            </Route>

            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      
    </div>
  );
}

export default App;
