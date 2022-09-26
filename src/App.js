import React from "react";
import Nav from "./component/nav";
import Footer from "./component/footer";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import { Switch, Route } from "react-router-dom";
import "./style/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
