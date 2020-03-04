import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className='Header'>
          <Link to="/"><img className='Header--Icon' src={require('../assets/images/teApuntas.png')} /></Link>

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
