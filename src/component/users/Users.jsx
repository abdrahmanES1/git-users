import React from "react";
import axios from "axios";

class Users extends React.Component {
   constructor(props) {
      super(props);

      this.state = { users: [] };
   }

   componentDidMount() {
      axios
         .get("https://api.github.com/users")
         .then((res) => {
            this.setState({ users: res.data });
         })
         .catch((err) => console.log(err));
   }

   render() {
      return (
         <div className="container">
            {this.state.users.map((user) => {
               <div className="card">
                  <img className="card-img-top" src={user.avatar_url} alt="" />
                  <div className="card-body">
                     <h4 className="card-title">{user.login}</h4>
                     <p className="card-text">Text</p>
                  </div>
               </div>;
            })}
         </div>
      );
   }
}
export default Users;
