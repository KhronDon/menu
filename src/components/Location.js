import React, { Component } from 'react'
import data from '../data.json'

const MAPS_API_KEY = 'AIzaSyA40z-hfH-rODdzu1_uZ9WBHZkmdoHTIaw'

class Location extends Component {

  static propTypes = {
    params: React.PropTypes.object.isRequired
  }

  render () {
    // Find the location that matches the slug from the url
    const location = data.locations.find(l => l.slug === this.props.params.slug)
    console.log(location)
    return <div>
      <h2>{location.name}</h2>
      <div className='google-maps'>
        <iframe width='600' height='450' frameBorder='0' style={{border: 0}}
          src={`https://www.google.com/maps/embed/v1/place?q=place_id:${location.mapPlaceId}&key=${MAPS_API_KEY}`} allowFullScreen />
      </div>
      <p className='address'>{location.address}</p>
      <table>
        <tbody>
          {location.hours.map((period, i) => {
            return <tr key={i}>
              <th className='days'>{period.days}</th>
              <td className='hours'>{period.hours}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  }
}

export default Location
