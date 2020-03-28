import React from 'react';
import Avatar from '../components/elements/avatar';
import Card from './Card'
// import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
// import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
// import { doRequest } from '../api-wrapper/api.js';

import { submitProfileInfo } from '../redux/actions/profile';

class UserInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
      checked: [ false,false,false,false,false,false ],
      setChecked: false,
      edad: '',
      email: '',
      favorito: '',
      genero: '',
      materrno: '',
      nombre: '',
      pais: '',
      paisCodigo: '',
      paterno: '',

      height: 0,
      width: 0,
    };

    window.addEventListener("resize", this.update);
    this.handleEditProfile = this.handleEditProfile.bind(this);
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

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
    const { dispatch } = this.props;
    const data = {
      edad: document.getElementById('profile-edad').value,
      email: document.getElementById('profile-email').value,
      favorito: document.getElementById('profile-favorito').value,
      genero: document.getElementById('profile-genero').value,
      materrno: document.getElementById('profile-materno').value,
      nombre: document.getElementById('profile-nombre').value,
      pais: document.getElementById('profile-pais').value,
      paisCodigo: document.getElementById('profile-paisCodigo').value,
      paterno: document.getElementById('profile-paterno').value,
    }
    dispatch(submitProfileInfo(data));
  }

  render() {
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
        backgroundColor: '#FFFFFF',
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
    }); // End Switch Button Function

    const { dataUser } = this.props;
    const widthPage = this.state.width;
    console.log(widthPage);

    // const codigo = dataUser ? dataUser.codigo : null;
    const profileEdad = dataUser.profileInfo ? dataUser.profileInfo.edad : null;
    const profileEmail = dataUser.profileInfo ? dataUser.profileInfo.email : null;
    const profileFavorito = dataUser.profileInfo ? dataUser.profileInfo.favorito : null;
    // TODO : const profileFoto = dataUser.profileInfo ? dataUser.profileInfo.foto : null;
    const profileGenero = dataUser.profileInfo ? dataUser.profileInfo.genero : null;
    const profileMaterno = dataUser.profileInfo ? dataUser.profileInfo.materno : null;
    const profileNombres = dataUser.profileInfo ? dataUser.profileInfo.nombres : null;
    // TODO : const profilePais = dataUser.profileInfo ? dataUser.profileInfo.pais : null;
    // TODO : const profilePaisCodigo = dataUser.profileInfo ? dataUser.profileInfo.code : null;
    const profilePaisName = dataUser.profileInfo ? dataUser.profileInfo.name : null;
    const profilePaterno = dataUser.profileInfo ? dataUser.profileInfo.paterno : null;
    const profileSemblanza = dataUser.profileInfo ? dataUser.profileInfo.semblanza : null;

    if (widthPage > 750) {
      return this.state.isEditable ? (
        <section className='UserData'>
          <div className='UserData__container'>
            <Card />
            <div className='UserData__container--DataUser'>
              <h1 className='DataUser__title'>Hola, {dataUser.name}</h1>
              <div className='DataUser__Edit'>
                <p>Se registro en 2018</p>
              </div>
              <div className='DataUser__Description'>
                <div className='ProfileData'>
                  <img className='ProfileData__icon' src={ require('../assets/images/profileIcon-black.png')} alt='icono'/>
                  <input type='text' className='inputData' required id="profile-nombre" label="Required" variant="outlined" defaultValue={profileNombres} />
                  <FormControlLabel control={<IOSSwitch checked={this.state.checked[0]} onChange={this.handleChangeToggle.bind(this, 0) } name="checkedB" />}/>
                </div>
                <div className='ProfileData'>
                  <img className='ProfileData__icon' src={ require('../assets/images/profileIcon-black.png')} alt='icono'/>
                  <input type='text' className='inputData' required id="profile-paterno" label="Required" variant="outlined" defaultValue={profilePaterno} />
                  <FormControlLabel control={<IOSSwitch checked={this.state.checked[1]} onChange={this.handleChangeToggle.bind(this, 1) } name="checkedB" />}/>
                </div>
                <div className='ProfileData'>
                  <img className='ProfileData__icon' src={ require('../assets/images/profileIcon-black.png')} alt='icono'/>
                  <input type='text' className='inputData' required id="profile-materno" label="Required" variant="outlined" defaultValue={profileMaterno} />
                  <FormControlLabel control={<IOSSwitch checked={this.state.checked[2]} onChange={this.handleChangeToggle.bind(this, 2) } name="checkedB" />}/>
                </div>
                <div className='ProfileData'>
                  <img className='ProfileData__icon' src={ require('../assets/images/profileIcon-black.png')} alt='icono'/>
                  <input type='text' className='inputData' required id="profile-pais" label="Required" variant="outlined" defaultValue={profilePaisName} />
                  <FormControlLabel control={<IOSSwitch checked={this.state.checked[3]} onChange={this.handleChangeToggle.bind(this, 3)} name="checkedB" />}/>
                </div>
                <div className='ProfileData'>
                  <img className='ProfileData__icon' src={ require('../assets/images/profileIcon-black.png')} alt='icono'/>
                  <input type='text' className='inputData' required id="profile-genero" label="Required" variant="outlined" defaultValue={profileGenero} />
                  <FormControlLabel control={<IOSSwitch checked={this.state.checked[4]} onChange={this.handleChangeToggle.bind(this, 4)} name="checkedB" />}/>
                </div>
                <div className='ProfileData'>
                  <img className='ProfileData__icon' src={ require('../assets/images/profileIcon-black.png')} alt='icono'/>
                  <input type='text' className='inputData' required id="profile-edad" label="Required" variant="outlined" defaultValue={profileEdad} />
                  <FormControlLabel control={<IOSSwitch checked={this.state.checked[5]} onChange={this.handleChangeToggle.bind(this, 5)} name="checkedB" />}/>
                </div>
                <div className='ProfileData'>
                  <img className='ProfileData__icon' src={ require('../assets/images/googlePlus.png')} alt='icono'/>
                  <input type='text' className='inputData' required id="profile-email" label="Required" variant="outlined" defaultValue={profileEmail} />
                  <FormControlLabel control={<IOSSwitch checked={this.state.checked[6]} onChange={this.handleChangeToggle.bind(this, 6)} name="checkedB" />}/>
                </div>
                <div className='ProfileData'>
                  <img className='ProfileData__icon' src={ require('../assets/images/airplane.png')} alt='icono'/>
                  <input type='text' className='inputData' required id="profile-favorito" label="Required" variant="outlined" defaultValue={profileFavorito} />
                  <FormControlLabel control={<IOSSwitch checked={this.state.checked[7]} onChange={this.handleChangeToggle.bind(this, 7)} name="checkedB" />}/>
                </div>
                <div className='ProfilePreference'>
                  <div className='Options'>
                    <button>
                      <img className='ProfileData__icon' src={ require('../assets/images/preference1.png')} alt='icono'/>
                    </button>
                    <button>
                      <img className='ProfileData__icon' src={ require('../assets/images/preference2.png')} alt='icono'/>
                    </button>
                    <button>
                      <img className='ProfileData__icon' src={ require('../assets/images/preference3.png')} alt='icono'/>
                    </button>
                    <button>
                      <img className='ProfileData__icon' src={ require('../assets/images/preference4.png')} alt='icono'/>
                    </button>
                  </div>
                  <div className='Options'>
                    <button>
                      <img className='ProfileData__icon' src={ require('../assets/images/preference5.png')} alt='icono'/>
                    </button>
                    <button>
                      <img className='ProfileData__icon' src={ require('../assets/images/preference6.png')} alt='icono'/>
                    </button>
                    <button>
                      <img className='ProfileData__icon' src={ require('../assets/images/preference1.png')} alt='icono'/>
                    </button>
                    <button>
                      <img className='ProfileData__icon' src={ require('../assets/images/preference2.png')} alt='icono'/>
                    </button>
                  </div>
                </div>
                <div className='socialMediaProfile'>
                  <div>
                    <div class="round">
                      <input type="checkbox" id="checkboxTwitter" />
                      <label for="checkboxTwitter"></label>
                    </div>
                    <img className='socialMedia--icon' src={ require('../assets/images/twitter-black.png')} alt='icono'/>
                  </div>
                  <div>
                    <div class="round">
                      <input type="checkbox" id="checkboxFacebook" />
                      <label for="checkboxFacebook"></label>
                    </div>
                    <img className='socialMedia--icon' src={ require('../assets/images/fb-black.png')} alt='icono'/>
                  </div>
                  <div>
                    <div class="round">
                      <input type="checkbox" id="checkboxInstagram" />
                      <label for="checkboxInstagram"></label>
                    </div>
                    <img className='socialMedia--icon' src={ require('../assets/images/instagram-black.png')} alt='icono'/>
                  </div>
                </div>
                <div className='options-Zone'>
                  <button className='btn-SaveProfileData' onClick={this.handleSendData}>Enviar</button>
                  <button className='btn-SaveProfileData' onClick={this.handleSendData}>Enviar</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
          <section className='UserData'>
            <div className='UserData__container'>
              <Card />
              <div className='UserData__container--DataUser'>
                <h1 className='DataUser__title'>Hola, {profileNombres + ' ' + profilePaterno}</h1>
                <div className='DataUser__Edit'>
                  <p>Se registro en 2018</p>
                  <button className='editButton' onClick={this.handleEditProfile}>Editar perfil</button>
                </div>
                <div className='DataUser__Description'>
                  <div className='ProfileData'>
                    <img className='ProfileData__icon' src={ require('../assets/images/profileIcon-black.png')} alt='icono'/>
                    <p>{profileNombres}</p>
                  </div>
                  <div className='ProfileData'>
                    <img className='ProfileData__icon' src={ require('../assets/images/profileIcon-black.png')} alt='icono'/>
                    <p>{profilePaterno}</p>
                  </div>
                  <div className='ProfileData'>
                    <img className='ProfileData__icon' src={ require('../assets/images/profileIcon-black.png')} alt='icono'/>
                    <p>{profileMaterno}</p>
                  </div>
                  <div className='ProfileData'>
                    <img className='ProfileData__icon' src={ require('../assets/images/profileIcon-black.png')} alt='icono'/>
                    <p>{profilePaisName}</p>
                  </div>
                  <div className='ProfileData'>
                    <img className='ProfileData__icon' src={ require('../assets/images/profileIcon-black.png')} alt='icono'/>
                    <p>{profileGenero}</p>
                  </div>
                  <div className='ProfileData'>
                    <img className='ProfileData__icon' src={ require('../assets/images/profileIcon-black.png')} alt='icono'/>
                    <p>{profileEdad} años</p>
                  </div>
                  <div className='ProfileData'>
                    <img className='ProfileData__icon' src={ require('../assets/images/googlePlus.png')} alt='icono'/>
                    <p>{profileEmail}</p>
                  </div>
                  <div className='ProfileData'>
                    <img className='ProfileData__icon' src={ require('../assets/images/airplane.png')} alt='icono'/>
                    <p>{profileFavorito}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    } else {
      return (
        <section className='UserDataMob'>
          <div className='UserDataMob-Header'>
            <section className='UserDataMob-Header__Sections'>
              <div className='elements'>
                <Avatar />
                <p className='aliasText'>APP02</p>
              </div>
            </section>
            <section className='UserDataMob-Header__Sections'>
              <button onClick={this.handleEditProfile}><img className='editProfileIcon' src={ require('../assets/images/editProfileMobile.png')} alt='icono'/></button>
              <div className='SocialNetwork'>
                <img className='SocialNetwork__icon' src={ require('../assets/images/fb-black.png')} alt='icono'/>
                <img className='SocialNetwork__icon' src={ require('../assets/images/instagram-black.png')} alt='icono'/>
              </div>
            </section>
          </div>
          <div className='UserDataMob-Body'>
            <h1 className='DataUser__title'>Hola, {profileNombres + ' ' + profilePaterno}</h1>
            <div className='DataUser__date'>
              <p>Se registro en 2018</p>
            </div>
            <div className='DataUser__semblanza'>
              <p>{profileSemblanza}</p>
            </div>
            <div className='DataUser__Description'>
              <div><p>{profileNombres}</p></div>
              <div><p>{profilePaterno}</p></div>
              <div><p>{profileMaterno}</p></div>
              <div><p>{profilePaisName}</p></div>
              <div><p>{profileGenero}</p></div>
              <div><p>{profileEdad}</p></div>
              <div><p>{profileEmail}</p></div>
              <div><p>{profileFavorito}</p></div>
            </div>
            <div className='DataUser__line'>
              <hr></hr>
            </div>
          </div>
        </section>
      )
    }
  }
}

export default UserInfo
