import React from 'react';

function Shared(props) {
  return (
    <div className='shared'>
      <div className='shared__container'>
        <button onClick={ props.onClickShared } className='button-shared'>Compartir</button>
        <button onClick={ props.onClick } className='button-shared button-shared--black'>Me Apunto</button>
      </div>
    </div>
  );
}

Shared.defaultProps = {
  onClickShared: null,
  onClick: null,
}

export default Shared
