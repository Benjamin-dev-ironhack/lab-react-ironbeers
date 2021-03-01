import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'

class BeerDetails extends Component {

    state = {
        singleBeer: {}
    }

    componentDidMount() {
        let singleBeerId = this.props.match.params.singleBeerId
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${singleBeerId}`)
          .then((response) => {
            console.log(response.data)
            this.setState({singleBeer: response.data})
          })
          .catch(() => {
            console.log('data failed')
          })
    }


    render() {
        const {singleBeer} = this.state
        return (
            <div>
              <Header />
              <img src={singleBeer.image_url} alt="beer" />
              <h3>{singleBeer.name}</h3>
              <p>{singleBeer.tagline}</p>
              <p>{singleBeer.first_brewed}</p>
              <p>{singleBeer.attenuation_level}</p>
              <p>{singleBeer.description}</p>
              <p>{singleBeer.contributed_by}</p>  
            </div>
        )
    }
}

export default BeerDetails
