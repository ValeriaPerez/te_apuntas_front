import React from 'react';
import { Link } from 'react-router-dom';

class Quotes extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='Quotes'>
        <p>
          Bienvenido a Te Apuntas, si has llegado sin invitación
          escríbenos y cuéntanos por qué quieres ser parte de esto
          para que podamos enviarte una invitación personalizada.
        </p>
      </div>
    )
  }
}

export default Quotes
