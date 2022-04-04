import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Counter from "./pages/Counter";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />

          <Route path="/counter" exact component={Counter} />
          
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
