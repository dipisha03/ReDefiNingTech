import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Nav from './components/Nav';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Events from './components/Events';
import ContactUs from './components/ContactUs';
import './App.css'; 

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="wrapper">
           <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/AboutUs" component={AboutUs} />
            <Route exact path="/Events" component={Events} />
            <Route exact path="/ContactUs" component={ContactUs} />
           </Switch>
      </div>
      </Router>
    );
  }
}

export default App;