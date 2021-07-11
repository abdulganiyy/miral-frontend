import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import RealEstate from "./Pages/RealEstate/RealEstate";
import SingleProperty from "./Pages/Property/SingleProperty";
import Vehicles from "./Pages/Vehicles/Vehicles";

import Menubar from "./Components/Menubar/Menubar";

function App() {
  return (
    <Router>
      <div>
        <Menubar />
        <Route path="/" exact component={Home} />
        <Route path="/realestate" exact component={RealEstate} />
        <Route path="/properties/:id" exact component={SingleProperty} />
        <Route path="/vehicles" exact component={Vehicles} />
      </div>
    </Router>
  );
}

export default App;
