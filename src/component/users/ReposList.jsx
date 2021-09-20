import React from "react";
import Repo from "./Repo";
import axios from "axios";

export default class ReposList extends React.Component {
   state = {
      repos: [],
   };
   componentDidMount() {
      const login = this.props.match.params.login;
      axios.get(`https://api.github.com/users/${login}/repos`).then((res) => {
         this.setState({ repos: res.data });
      });
      console.log(login);
   }
   render() {
      const { repos } = this.state;

      return (
         <div className="list-group mt-5">
            {repos.map((repo) => {
               return <Repo repo={repo} />;
            })}
         </div>
      );
   }
}
