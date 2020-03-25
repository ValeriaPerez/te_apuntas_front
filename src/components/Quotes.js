import React from 'react';

class Quotes extends React.Component {
  render() {
    return (
      <div className='Quotes'>
        <p className='Quotes__text'>
          “Esquiar entre bosques vírgenes rodeado de personas que viven la experiencia al límite ha sido épico.”
        </p>
        <div className='Quotes__links'>
          <p className='Quotes__links--username'>Lolita Davis, México</p>
          <img className='Quotes__links--icon' src={ require('../assets/images/homeWhiteIcon.png')} />
          <p className='Quotes__links--destiny'><span></span>Heliski, Canadá 2018</p>
        </div>
      </div>
    )
  }
}

export default Quotes
