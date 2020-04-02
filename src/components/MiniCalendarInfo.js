import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from './elements/avatar';
import { AvatarGroup } from '@material-ui/lab';
import { getImagesApuntados } from '../utilities/utils';

class MiniCalendarInfo extends React.Component {
  render() {
    const { data, destinyInfo } = this.props;
    const apuntados = getImagesApuntados(destinyInfo);
    const isMax = apuntados.length > 5 ? true : false;
    return (
      <div className='CalendarInfo'>
        <div className='CalendarInfo__icons'>
          <div className='CalendarInfo__section'>
            <img className='Icon Icon--pais' alt='icon' src={ require('../assets/images/signed.png')} />
            <p>{data.pais}</p>
          </div>
          <div className='CalendarInfo__section'>
            <img className='Icon Icon--calendar' alt='icon' src={ require('../assets/images/calendar.png')} />
            <p>{data.duracion}</p>
          </div>
          <div className='CalendarInfo__section'>
            <img className='Icon Icon--people' alt='icon' src={ require('../assets/images/people.png')} />
            <p>{data.max_pasajeros}</p>
          </div>
        </div>
        <div>
          <AvatarGroup className='DestinationPeople__container show-mobile'>
            { apuntados.map(apuntado => {
              return <Avatar 
                        className='DestinationPeople__container--avatar'
                        image='https://picsum.photos/200/300'
                        alt={ `${apuntado.nombres} ${apuntado.paterno}` } />
                
            })}
            { isMax ? 
              <Tooltip className='DestinationPeople__container--avatar counter' title="Foo • Bar • Baz">
                <Avatar>+3</Avatar>
              </Tooltip> : null
            }
          </AvatarGroup>
        </div>
      </div>
    );
  }
}


MiniCalendarInfo.defaultProps = {
  apuntados: {},
}

export default MiniCalendarInfo
