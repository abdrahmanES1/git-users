import React from "react";
import User from "./User";
import axios from "axios";
import SearchUsers from "./SearchUsers";

class Users extends React.Component {
   constructor(props) {
      super(props);
      this.state = { users: [] };
   }

   componentDidMount() {
      this.getUsers();
   }

   getUsers = () => {
      axios
         .get("https://api.github.com/users")
         .then((res) => {
            this.setState({ users: res.data });
         })
         .catch((err) => console.log(err));
   };

   serchUsersFromGit = (data) => {
      data !== "" &&
         axios
            .get(`https://api.github.com/search/users?q=${data}`)
            .then((res) =>
               this.setState({
                  users: res.data.items,
               })
            );
   };

   render() {
      return (
         <div>
            <div className="row my-2">
               <div className="col-md-12">
                  <SearchUsers getUsersSearch={this.serchUsersFromGit} />
               </div>
            </div>
            <div className="row">
               {this.state.users.map((user) => (
                  <div className="col-md-4" key={user.id}>
                     <User user={user} />
                  </div>
               ))}
            </div>
         </div>
      );
   }
}
export default Users;
