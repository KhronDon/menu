import React, { Component } from 'react'
import { Link } from 'react-router'

import flameImage from '../Images/flame.png'

class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  render () {
    return <div className='layout'>
      <header>
        <h1>Slaughter</h1>
        <h3>of the</h3>
        <h1>Slice</h1>
      </header>
      <nav>
        <ul className='links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/menu'>Menu</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/locations'>Locations</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className='fire'>
          <li>
            <img src={flameImage} />
          </li>
          <li>
            <img src={flameImage} />
          </li>
          <li>
            <img src={flameImage} />
          </li>
          <li>
            <img src={flameImage} />
          </li>
        </ul>
      </nav>
      <main>
        {this.props.children}
      </main>
      <footer>
        <p>&copy; 2017 Slaughter of the Slice.  Built with &hearts; at The Iron Yard, in St. Petersburg, Florida.</p>
        <img src={flameImage} />
      </footer>
    </div>
  }
}

export default Layout
