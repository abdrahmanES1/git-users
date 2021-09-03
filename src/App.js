import Navbar from "./component/partials/NavBar";

import "./App.css";
import Users from "./component/users/Users";

function App() {
   return (
      <div className="App">
         <Navbar />

         <div className="container">
            <Users />
         </div>
      </div>
   );
}

export default App;
