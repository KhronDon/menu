import React, { Component } from 'react'

class Contact extends Component {

  render () {
    return <div className='contact'>
      <h2>Contact Us</h2>

      <form>
        <p>
          <label htmlFor='fullName'>Name</label>
          <input name='fullName' type='text' />
        </p>
        <p>
          <label htmlFor='email'>Email</label>
          <input name='email' type='email' />
        </p>
        <p>
          <label htmlFor='message'>Message</label>
          <textarea cols='30' rows='10' />
        </p>
        <p>
          <button type='submit'>Subtmit</button>
        </p>
      </form>

      <p>
        You can also email us at <a href='mailto:battlemaster@slaughter.slice'>battlemaster@slaughter.slice</a>
      </p>
    </div>
  }
}

export default Contact
