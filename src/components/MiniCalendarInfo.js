import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import { AvatarGroup } from '@material-ui/lab';
import { getImagesApuntados } from '../utilities/utils';

class MiniCalendarInfo extends React.Component {
  render() {
    const { data, destinyInfo } = this.props;
    const apuntados = getImagesApuntados(destinyInfo);
    const isMax = apuntados.length > 5 ? true : false;
    console.log('is max', isMax);
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
                        alt={`${apuntado.nombres} ${apuntado.paterno}`}
                        src={apuntado.foto}
                        key={`avatar-${apuntado.id}`}/>
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
