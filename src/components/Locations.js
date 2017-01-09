import React, { Component } from 'react'
import { Link } from 'react-router'
import data from '../data.json'

class Locations extends Component {

  render () {
    return <div>
      <h2>Our Locations</h2>
      <p className='info'>(click a location for map and hours)</p>
      {data.locations.map((location, i) => {
        return <section key={i}>
          <h3 className='shops'><Link to={`/locations/${location.slug}`}>{location.name}</Link></h3>
          <p>{location.address}</p>
        </section>
      })}
    </div>
  }
}

export default Locations
