import React, { Component } from "react";

export class SearchUsers extends Component {
   state = {
      search: "",
   };

   handlForm = (e) => {
      this.setState({
         search: e.target.value,
      });
   };

   searchUsers = (e) => {
      e.preventDefault();
      this.props.getUsersSearch(this.state.search);
   };
   render() {
      return (
         <form onSubmit={this.searchUsers}>
            <div className="form-group ">
               <input
                  onChange={this.handlForm}
                  id="search"
                  type="text"
                  className="form-control"
                  placeholder="Search Users"
               />
            </div>

            <button type="button" className="btn btn-outline-info">
               Search
            </button>
         </form>
      );
   }
}

export default SearchUsers;
