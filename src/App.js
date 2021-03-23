import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./App.css";
import AddUser from "./adduser";
import EditUser from "./edituser";
import UserNew from "./userNew";
import Calendar from "./Calender";
import Tasks from "./Tasks";
import Querie from "./Quarie";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Router>
          <div className="row">
            <div className="col-1 bg-dark" style={{height:"100vh"}}>
              <Link to="/" className="navbar mt-3"><span>Dashboard</span></Link>
              <Link to="/calendar" className="navbar">Calendar</Link>
              <Link to="/Tasks" className="navbar">Tasks</Link>
              <Link to="/Querie" className="navbar">Queries</Link>
            </div>
            <div className="col-11">
          <Switch>
            <Route exact path="/" component={AddUser} />
            <Route path="/EditUser/:id" component={EditUser} />
            <Route path="/newUser" component={UserNew}/>
            <Route path="/calendar" component={Calendar}/>
            <Route path="/Tasks" component={Tasks}/>
            <Route path="/Querie" component={Querie}/>
          </Switch>
          </div>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
