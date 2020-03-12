import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import { AvatarGroup } from '@material-ui/lab';

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
    console.log('ole mis cosas',this.props);
    return (
      <div className='Destination'>
        <div className='DestinationData'>
          <div className='DestinationData__info'>
            <div>
              <p>CAN</p>
            </div>
            <div>
              <p>CAN</p>
            </div>
            <div>
              <p>CAN</p>
            </div>
          </div>
          <div className='DestinationData__description'>
            <div className='DestinationData__description--title'>
              <h1>Helinski Canada</h1>
              <p>Privado</p>
            </div>
            <p className='DestinationData__description--info'><span className='descriptionQuote'>“La experiencia definitiva: sin límites”</span> - El HeliSki es la experiencia definitiva para cualquier esquiador/rider sin ningún lugar a dudas. Todo aquello que has soñado o visto en películas y catálogos, donde los esquiadores disfrutan de interminables bajadas en laderas vírgenes de nieve polvo o entre bosques con tanto “powder” que quedan enterrados en cada giro ¡ES VERDAD! (…)</p>
          </div>
        </div>
        <div className='DestinationPeople'>
          <div>
            <AvatarGroup className='DestinationPeople__container'>
              <Avatar className='DestinationPeople__container--avatar' alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar className='DestinationPeople__container--avatar' alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Avatar className='DestinationPeople__container--avatar' alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              <Avatar className='DestinationPeople__container--avatar' alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              <Avatar className='DestinationPeople__container--avatar' alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              <Avatar className='DestinationPeople__container--avatar' alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              <Tooltip className='DestinationPeople__container--avatar counter' title="Foo • Bar • Baz">
                <Avatar>+3</Avatar>
              </Tooltip>
            </AvatarGroup>
          </div>
          <Link className='DestinationPeople__link' to="/DestinationDetail">
            <Button className='btn--grey' variant='outlined'>
              Ver Más
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Destination
