import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './elements/avatar';
import Tooltip from '@material-ui/core/Tooltip';
import { AvatarGroup } from '@material-ui/lab';
import Loader from './elements/loader';

// TODO: 'destinyInfo' is defined but never used import destinyInfo from '../redux/reducers/destination';
import MiniCalendarInfo from './MiniCalendarInfo'
import { getImagesApuntados } from '../utilities/utils';

class Destination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    }

    this.handleOpenForm = this.handleOpenForm.bind(this);
  }

  handleOpenForm() {
    this.setState(state => ({
      showForm: true
    }));
  }

  render() {
    const { destinyInfo } = this.props;
    const apuntados = getImagesApuntados(destinyInfo);
    const isMax = apuntados.length > 5 ? true : false;
    return (
      <div className='Destination'>
        { destinyInfo === null ? <Loader /> :
        <div className='DestinationData__container'>
          <div className='DestinationData'>
            <MiniCalendarInfo destinyInfo={ destinyInfo } data={this.props.destinyInfo}/>
            <div className='DestinationData__description'>
              <div className='DestinationData__description--title'>
                <h1>{`${destinyInfo.ciudad} ${destinyInfo.pais}`}</h1>
                {/*<p>Privado</p> */}
              </div>
              <p className='DestinationData__description--info'>
                {destinyInfo.descripcion.substring(1, 350)}...
              </p>
            </div>
          </div>
          <div className='DestinationPeople'>
            <div className='show-desktop'>
              <AvatarGroup className='DestinationPeople__container'>
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
            <Link className='Button-Destination' to="/Travel" destinyInfo={destinyInfo}>Ver Más</Link>
          </div>
        </div>
      }
      </div>
    )
  }
}

export default Destination
