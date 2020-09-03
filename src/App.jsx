import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Header from "./components/Header"
import Home from './Home'

const App = () => {
  // JavaScript Zone

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route path='/about' component={About} /> */}
        {/* <Route path='/contents' component={Contents} /> */}
        {/* <Route path='/contact' component={Contact} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
