import React, { Component } from 'react'

class MenuItem extends Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired
  }

  render () {
    return <tr className='food'>
      <th className='food-item'>{this.props.name}</th>
      <td className='food-description'>{this.props.description}</td>
      <td className='price'>${this.props.price / 100}</td>
    </tr>
  }
}

export default MenuItem
