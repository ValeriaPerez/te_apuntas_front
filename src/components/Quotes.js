import React from 'react';

class Quotes extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className='Quotes'>
        <p className='Quotes__text'>
          {`"${data.comentario}"`}
        </p>
        <div className='Quotes__links'>
          <p className='Quotes__links--username'>{`${data.autor}, ${data.pais_autor}`}</p>
          <img className='Quotes__links--icon' src={ require('../assets/images/homeWhiteIcon.png')} alt='icon' />
          <p className='Quotes__links--destiny'><span></span>{`${data.ciudad}, ${data.pais_destino} ${data.anio}`}</p>
        </div>
      </div>
    )
  }
}

export default Quotes
