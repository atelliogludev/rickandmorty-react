import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./pages/common/Footer";
import Header from "./pages/common/Header";
import Home from "./pages/home";
import Detail from "./pages/detail";
import CharacterDetails from "./pages/characterdetails/CharacterDetails";


function App() {
  return (
    <React.Fragment>
        
        <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/page/:id" component={Home} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/character/:id" component={CharacterDetails} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </React.Fragment>
  );
}

export default App;
