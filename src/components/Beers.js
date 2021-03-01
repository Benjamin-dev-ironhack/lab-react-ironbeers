import React, { Component } from 'react'
import Header from './Header'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Beers extends Component {

    state = {
        beers: []
    }
    
    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
          .then((response) => {
            console.log(response.data)
            this.setState({beers: response.data})
          })
          .catch(() => {
            console.log('data failed')
          })
    }
    
    render() {
        const {beers} = this.state
        return (
            <div>
              <Header />
              <div>
                  {
                      beers.map((singleBeer) => {
                          return <Link key={singleBeer._id} to={`/beers/${singleBeer._id}`}>
                              <img src={singleBeer.image_url} alt=""></img>
                              <h2>{singleBeer.name}</h2>
                              <p>{singleBeer.tagline}</p>
                              <p>{singleBeer.contributed_by}</p>
                          </Link>
                      })
                  }
              </div>
            </div>
        )
    }
}

export default Beers
