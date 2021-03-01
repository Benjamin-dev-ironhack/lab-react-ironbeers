import React, { Component } from 'react'
import Header from './Header'

class RandomBeer extends Component {
    render() {
        const {beer} = this.props
        return (
            <div>
              <Header />
                <h1>random beer</h1>
            </div>
        )
    }
}

export default RandomBeer