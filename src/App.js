import React from "react";
import Navbar from "./component/partials/NavBar";
import Users from "./component/users/Users";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import UserItem from "./component/users/UserItem";
import ReposList from "./component/users/ReposList";

function App() {
   return (
      <Router>
         <div className="App">
            <Navbar />

            <div className="container mt-2">
               <Switch>
                  <Route exact path="/users" component={Users} />
                  <Route exact path="/users/:login" component={UserItem} />
                  <Route
                     exact
                     path="/users/:login/repos"
                     component={ReposList}
                  />
                  <Route exact component={Users} />
               </Switch>
            </div>
         </div>
      </Router>
   );
}

export default App;
