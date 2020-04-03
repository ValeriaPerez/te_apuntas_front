import React, { Component } from "react";
import { connect } from 'react-redux';
// Components
import Header from '../components/base/header';
import Quotes from '../components/Quotes';
import FollowUs from '../components/FollowUs';
import Footer from '../components/base/footer';
import Slider from '../components/SliderImage';
import Loader from '../components/elements/loader';
import { retrieveImagesHome } from '../redux/actions/home';

const mapStateToProps = state => ({
  imagesHome : state.Home.imagesHome,
  loadingImagesHome : state.Home.loadingImagesHome,
  isLoading: state.Login.isLoading,
});

class Home extends Component {
  constructor() {
    super();
    this.state = {
      height: 0,
      width: 0,
      showBullets: false,
      showForm: false,
    };
    this.handleOpenForm = this.handleOpenForm.bind(this);
    window.addEventListener("resize", this.update);
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

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(retrieveImagesHome());
  }

  render() {
    /* mock paaraa irreegulalridad de imagenes
    const imagesMock = [
      { url: 'https://kiperbucket.s3.us-east-2.amazonaws.com/teapuntas/img2-min.jpg'},
      { url: 'https://kiperbucket.s3.us-east-2.amazonaws.com/teapuntas/img3-min.jpg'},
      { url: 'https://kiperbucket.s3.us-east-2.amazonaws.com/teapuntas/img4-min.jpg'},
      { url: 'https://kiperbucket.s3.us-east-2.amazonaws.com/teapuntas/img5-min.jpg'},
      { url: 'https://kiperbucket.s3.us-east-2.amazonaws.com/teapuntas/img6-min.jpg'},
    ];
    */
    return (
      <div className='home'>
        { this.renderSlider() }
        { this.renderContent() }
      </div>
    );
  }

  renderSlider() {
    const { imagesHome, isLoading, loadingImagesHome } = this.props;
    const { width, height } = this.state;
    const images = imagesHome.map(image => {
      return {'url': image.imagen};
    });

    return !loadingImagesHome ?
      <div className='home__image-background'>
        <Slider
          style={{ position: 'absolute',}}
          width={ width }
          height={ height }
          images={ images }
          isLoading={ isLoading }
        />
       </div> 
     : <Loader />;
  }

  renderContent() {
    return (
      <div className='home__content'>
        <Header isLogin={ false } imageLogo={ require('../assets/images/teApuntas.png') }/>
        { !this.state.showForm ?  this.renderBody() : <FollowUs /> }
        <Footer />
      </div>
    );
  }

  renderBody() {
    const { loadingImagesHome, imagesHome } = this.props;
    return (
      <div className='home__container'>
        <div className='home__columns'>
          <p className='home__text'>Bienvenido a Te Apuntas, si has llegado sin invitación escríbenos y cuéntanos por qué quieres ser parte de esto para que podamos enviarte una invitación personalizada.</p>
          <button className='button-Home button-Home--contact show-desktop' onClick={ this.handleOpenForm }>Contáctanos</button>
        </div>
        <div className='home__columns home__columns--quote'>
          { !loadingImagesHome && imagesHome.length > 0 ? <Quotes data={imagesHome[0]}/> : null} {/* Cambiar segun el id de la imagen*/}
        </div>
        <button className='button-Home show-mobile' onClick={ this.handleOpenForm }>Contáctanos</button>
      </div>
    );
  }

  handleOpenForm() {
    this.setState(state => ({
      showForm: true
    }));
  }
}

Home = connect(mapStateToProps)(Home);

export default Home;
