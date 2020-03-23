import React from 'react';
import Avatar from '../components/elements/avatar';
import Card from './Card'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { doRequest } from '../api-wrapper/api.js';

class UserInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
      checked: [ false,false,false,false,false,false ],
      setChecked: false,
    };

    this.handleEditProfile = this.handleEditProfile.bind(this);
  }

  handleEditProfile() {
    this.setState(state => ({
     isEditable: true,
    }));
  }

  handleChangeToggle(index) {
    let arrayT = this.state.checked;
    const arrayPosition = !this.state.checked[index];
    arrayT[index] = arrayPosition;
    this.setState({
     checked: arrayT,
   });
  };

  handleSendData() {
    let data = '';
    console.log("enviar datos");
    doRequest(
      'http://7ee80e5c.ngrok.io/api/v1/perfil/1/',
      null,
      'PATCH',
      data = {
        nombres: 'Kike'
      },
    );
  }

  render() {
    console.log(this.state.checked);
    const IOSSwitch = withStyles(theme => ({
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
      },
      switchBase: {
        padding: 1,
        '&$checked': {
          transform: 'translateX(16px)',
          color: theme.palette.common.white,
          '& + $track': {
            backgroundColor: '#52d869',
            opacity: 1,
            border: 'none',
          },
        },
        '&$focusVisible $thumb': {
          color: '#52d869',
          border: '6px solid #fff',
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
      },
      checked: {},
      focusVisible: {},
    }))(({ classes, ...props }) => {
      return (
        <Switch
          focusVisibleClassName={classes.focusVisible}
          disableRipple
          classes={{
            root: classes.root,
            switchBase: classes.switchBase,
            thumb: classes.thumb,
            track: classes.track,
            checked: classes.checked,
          }}
          {...props}
        />
      );
    });

    const isEditable = this.state.isEditable;
    const { dataUser } = this.props;
    console.log('alv',this.props.dataUser);

    const codigo = dataUser ? dataUser.codigo : null;
    const edad = dataUser ? dataUser.edad : null;
    const email = dataUser ? dataUser.email : null;
    const favorito = dataUser ? dataUser.favorito : null;
    const foto = dataUser ? dataUser.foto : null;
    const genero = dataUser ? dataUser.genero : null;
    const materno = dataUser ? dataUser.materno : null;
    const nombres = dataUser ? dataUser.nombres : null;
    const pais = dataUser ? dataUser.pais : null;
    const paisCodigo = pais ? pais.code : null;
    const paisName = pais ? pais.name : null;
    const paterno = dataUser ? dataUser.paterno : null;
    const semblanza = dataUser ? dataUser.semblanza : null;

    console.log(paisCodigo);
    console.log(favorito)


    return this.state.isEditable ? (
      <section className='UserData'>
        <div className='UserData__container'>
          <Card />
          <div className='UserData__container--DataUser'>
            <h1 className='DataUser__title'>Hola, {dataUser.name}</h1>
            <div className='DataUser__Edit'>
              <p>Se registro en 2018</p>
              <button onClick={this.handleEditProfile}>Editar perfil</button>
            </div>
            <div className='DataUser__Description'>
              <div>
                <FormControlLabel control={<IOSSwitch checked={this.state.checked[0]} onChange={this.handleChangeToggle.bind(this, 0) } name="checkedB" />}/>
                <TextField required id="outlined-required" label="Required" variant="outlined" defaultValue={nombres} />
              </div>
              <div>
                <FormControlLabel control={<IOSSwitch checked={this.state.checked[1]} onChange={this.handleChangeToggle.bind(this, 1)} name="checkedB" />}/>
                <TextField required id="outlined-required" label="Required" variant="outlined" defaultValue={paisName} />
              </div>
              <div>
                <FormControlLabel control={<IOSSwitch checked={this.state.checked[2]} onChange={this.handleChangeToggle.bind(this, 2)} name="checkedB" />}/>
                <TextField required id="outlined-required" label="Required" variant="outlined" defaultValue={genero} />
              </div>
              <div>
                <FormControlLabel control={<IOSSwitch checked={this.state.checked[3]} onChange={this.handleChangeToggle.bind(this, 3)} name="checkedB" />}/>
                <TextField required id="outlined-required" label="Required" variant="outlined" defaultValue={edad + ' años'} />
              </div>
              <div>
                <FormControlLabel control={<IOSSwitch checked={this.state.checked[4]} onChange={this.handleChangeToggle.bind(this, 4)} name="checkedB" />}/>
                <TextField required id="outlined-required" label="Required" variant="outlined" defaultValue={email} />
              </div>
              <div>
                <FormControlLabel control={<IOSSwitch checked={this.state.checked[5]} onChange={this.handleChangeToggle.bind(this, 5)} name="checkedB" />}/>
                <TextField required id="outlined-required" label="Required" variant="outlined" defaultValue={favorito} />
              </div>
              <div>
                <button onClick={this.handleSendData}>enviar</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    ) : (
        <section className='UserData'>
          <div className='UserData__container'>
            <div className='UserData__container--Card'>
              <div className='userInfo'>
                <Avatar cssClass='AvatarL'/>
                <p className='editImage'>Cambiar foto</p>
                <p className='aliasText'>APP02</p>
              </div>
              <div className='userAbout'>
                <p className='editAbout'>Editar semblanza</p>
                <p className='editText'>{semblanza}</p>
              </div>
            </div>
            <div className='UserData__container--DataUser'>
              <h1 className='DataUser__title'>Hola, {nombres + ' ' + paterno}</h1>
              <div className='DataUser__Edit'>
                <p>Se registro en 2018</p>
                <button onClick={this.handleEditProfile}>Editar perfil</button>
              </div>
              <div className='DataUser__Description'>
                <div><p>{nombres}</p></div>
                <div><p>{paisName}</p></div>
                <div><p>{genero}</p></div>
                <div><p>{edad} años</p></div>
                <div><p>{email}</p></div>
                <div><p>{favorito}</p></div>
              </div>
            </div>
          </div>
        </section>
      )
  }
}

export default UserInfo
