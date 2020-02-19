import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='Header'>
        <div className='HeaderGroup'>
          {
            //<Link to="/"><img src={require('../images/logo_w.png')} /></Link>
          }
          <p>Te apuntas</p>
          {
          //<div className="HeaderGroup-Links">
            //<Link to="/"></Link>
          //</div>
          }
        </div>
      </div>
    )
  }
}

export default Header
