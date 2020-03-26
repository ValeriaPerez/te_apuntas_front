import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import { AvatarGroup } from '@material-ui/lab';

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
    return (
      <div className='Destination'>
        { destinyInfo === null ? <h1>Cargando</h1> :
        <div className='DestinationData__container'>
          <div className='DestinationData'>
            <MiniCalendarInfo data={this.props.destinyInfo}/>
            <div className='DestinationData__description'>
              <div className='DestinationData__description--title'>
                <h1>{`${destinyInfo.ciudad} ${destinyInfo.pais}`}</h1>
                {/* <p>Privado</p> */}
              </div>
              <p className='DestinationData__description--info'><span className='descriptionQuote'>{destinyInfo.descripcion}</span></p>
            </div>
          </div>
          <div className='DestinationPeople'>
            <div>
              <AvatarGroup className='DestinationPeople__container'>
                { apuntados.map(apuntado => {
                  return 
                    <Avatar
                      className='DestinationPeople__container--avatar'
                      alt={`${apuntado.nombres} ${apuntado.paterno}`}
                      src={apuntado.foto}
                      key={`avatar-${apuntado.id}`}/>
                })}
                <Tooltip className='DestinationPeople__container--avatar counter' title="Foo • Bar • Baz">
                  <Avatar>+3</Avatar>
                </Tooltip>
              </AvatarGroup>
            </div>
            <Link className='DestinationPeople__link' to="/Travel" destinyInfo={destinyInfo}>
              <Button className='btn--grey' variant='outlined'>
                Ver Más
              </Button>
            </Link>
          </div>
        </div>
      }
      </div>
    )
  }
}

export default Destination
