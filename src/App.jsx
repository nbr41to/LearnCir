import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Header from "./components/Header"
import Home from './components/pages/Home'
import About from './components/pages/About'

const App = () => {
  // JavaScript Zone

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        {/* <Route path='/contents' component={Contents} /> */}
        {/* <Route path='/contact' component={Contact} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
