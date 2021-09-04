import React, { Component } from "react";
import { Link } from "react-router-dom";
class User extends Component {
   //    constructor(props) {
   //       super(props);
   //    }

   render() {
      const { login, avatar_url, repos_url } = this.props.user;
      return (
         <div className="card mt-4">
            <img className="card-img-top" src={avatar_url} alt="img" />
            <div className="card-body">
               <h4 className="card-title">{login}</h4>
               <div className="card-text">
                  <Link to={"/users/" + login} className="btn btn-success me-3">
                     Show more
                  </Link>
                  <Link to={repos_url} className="btn btn-primary">
                     Repositories
                  </Link>
               </div>
            </div>
         </div>
      );
   }
}

export default User;
