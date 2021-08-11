import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import RealEstate from "./Pages/RealEstate/RealEstate";
import SingleProperty from "./Pages/Property/SingleProperty";
import Vehicles from "./Pages/Vehicles/Vehicles";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import OilGas from "./Pages/Oil&Gas/OilGas";
import Solar from "./Pages/Solar/Solar";
import Agric from "./Pages/Agric/Agric";
import Ict from "./Pages/Ict/Ict";
import Automobile from "./Pages/Automobile/Automobile";

// import Menubar from "./Components/Menubar/Menubar";
import NewMenuBar from "./Components/NewMenuBar/NewMenuBar";

function App() {
  return (
    <Router>
      <div>
        <NewMenuBar />
        <Route path="/" exact component={Home} />
        <Route path="/realestate" exact component={RealEstate} />
        <Route path="/properties/:id" exact component={SingleProperty} />
        <Route path="/vehicles" exact component={Vehicles} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
        <Route path="/oil-gas" exact component={OilGas} />
        <Route path="/solar" exact component={Solar} />
        <Route path="/agriculture" exact component={Agric} />
        <Route path="/ict" exact component={Ict} />
        <Route path="/vehicles/:type" exact component={Automobile} />
      </div>
    </Router>
  );
}

export default App;
