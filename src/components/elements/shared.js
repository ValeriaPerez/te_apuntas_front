import React from 'react';
import cx from 'classnames';

function Shared(props) {

  const { onClickShared, onClick, isMobile } = props;
  const sharedClasses = cx({
    'shared': true,
    'show-mobile': isMobile,
  });

  return (
    <div className={ sharedClasses }>
      <div className='shared__container'>
        <button onClick={ onClickShared } className='button-shared'>Compartir</button>
        <button onClick={ onClick } className='button-shared button-shared--black'>Me Apunto</button>
      </div>
    </div>
  );
}

Shared.defaultProps = {
  onClickShared: null,
  onClick: null,
  isMobile: false,
}

export default Shared
