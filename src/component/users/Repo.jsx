// https://api.github.com/users/mojombo/repos

import React from "react";

function Repo(props) {
   const { name, html_url, id } = props.repo;
   return (
      <a
         href={html_url}
         className="list-group-item list-group-item-action bg-success"
         key={id}
      >
         {name}
      </a>
   );
}
export default Repo;
