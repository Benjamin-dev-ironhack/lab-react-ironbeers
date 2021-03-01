import React, { Component } from 'react'
import Beers from './components/Beers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import Home from './components/Home'
import BeerDetails from './components/BeerDetails'
import {Route, Switch} from 'react-router-dom';


class App extends Component {


  render() {
    return (
      <div>
       <Switch>
          <Route exact path="/" render={() => {
            return <Home />
          }}/>
          <Route path="/beers" render={() => {
            return <Beers />
          }}/>
          <Route path="/random-beer" render={() => {
            return <RandomBeer />
          }}/>
          <Route path="/new-beer" render={() => {
            return <NewBeer />
          }}/>
          <Route path="/beers/:singleBeerId" render={() => {
            return <BeerDetails />
          }}/>
        </Switch>
      </div>
    )
  }
}

export default App
