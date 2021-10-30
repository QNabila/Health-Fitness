import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import NotFound from "./Components/NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import Service from "./Components/Service/Service";
import Services from "./Components/Services/Services";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Workouts from "./Components/Workouts/Workouts";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header> </Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/workouts">
              <Workouts></Workouts>
            </Route>
            <PrivateRoute exact path="/services/:serviceId">
              <Service></Service>
            </PrivateRoute>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
