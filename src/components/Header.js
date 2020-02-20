import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className='Header'>
          {
            //<Link to="/"><img src={require('../images/logo_w.png')} /></Link>
          }
          <p>Te apuntas</p>
          {
          //<div className="HeaderGroup-Links">
            //<Link to="/"></Link>
          //</div>
          }
      </section>
    )
  }
}

export default Header
