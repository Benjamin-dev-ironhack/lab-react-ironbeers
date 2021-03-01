import React, { Component } from 'react'
import Header from './Header'

class NewBeer extends Component {
    render() {
        const {beers} = this.props
        return (
            <div>
              <Header />

            </div>
        )
    }
}

export default NewBeer