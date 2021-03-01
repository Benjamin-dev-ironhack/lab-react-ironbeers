import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import beersImage from '../assets/beers.png'
import randomBeer from '../assets/beers.png'
import newBeer from '../assets/beers.png'
import Header from './Header'

class Home extends Component {

    render() {

        return (
          <div>
            <div>
              <img src={beersImage} alt=""></img>
              <h1><Link to="/beers">All Beers</Link></h1>
              <p>Huic Arabia est conserta, ex alio latere Nabataeis contigua; opima varietate conmerciorum castrisque oppleta validis et castellis, quae ad repellendos gentium vicinarum excursus sollicitudo pervigil veterum 
              per oportunos saltus erexit et cautos. haec quoque civitates habet inter oppida quaedam ingentes Bostram et Gerasam atque Philadelphiam murorum firmitate cautissimas</p>
            </div>
            <div>
              <img src={randomBeer} alt=""></img>
              <h1><Link to="/random-beer">Random Beer</Link></h1>
              <p>Huic Arabia est conserta, ex alio latere Nabataeis contigua; opima varietate conmerciorum castrisque oppleta validis et castellis, quae ad repellendos gentium vicinarum excursus sollicitudo pervigil veterum 
              per oportunos saltus erexit et cautos. haec quoque civitates habet inter oppida quaedam ingentes Bostram et Gerasam atque Philadelphiam murorum firmitate cautissimas</p>
            </div>
            <div>
              <img src={newBeer} alt=""></img>
              <h1><Link to="/new-beer">New Beer</Link></h1>
              <p>Huic Arabia est conserta, ex alio latere Nabataeis contigua; opima varietate conmerciorum castrisque oppleta validis et castellis, quae ad repellendos gentium vicinarum excursus sollicitudo pervigil veterum 
              per oportunos saltus erexit et cautos. haec quoque civitates habet inter oppida quaedam ingentes Bostram et Gerasam atque Philadelphiam murorum firmitate cautissimas</p>
            </div>
          </div>
        )
      }
    }

export default Home
