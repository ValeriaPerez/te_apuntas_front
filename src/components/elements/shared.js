import React from 'react';

function Shared(props) {
  return (
    <div className='shared'>
      <div className='shared__container'>
        <button className='button-shared'>Compartir</button>
        <button className='button-shared button-shared--black'>Me Apunto</button>
      </div>
    </div>
  );
}

export default Shared
