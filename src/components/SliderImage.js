import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

class Slider extends React.Component {

  constructor(props) {
    super(props);
    // No llames this.setState() aquí!
    this.state = {
      counter: 0,
      width: window.innertWidth,
      path: window.location.href,
      slideDuration: 1

    };
  }

   render() {
     console.log('slider', this.props.destinyInfo);
     const destinyInfo = this.props.destinyInfo;
     Object.keys(destinyInfo).map(obj, i) => {
       console.log(obj),
     };


     const images = [
       { url: "https://images.pexels.com/photos/373892/pexels-photo-373892.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" },
       { url: '../assets/destinyImage/destinyImage/bg2.png' },
       { url: "images/3.jpg" },
       { url: "images/4.jpg" },
     ];

     return (
       <div>
         <SimpleImageSlider
           width={this.props.width}
           height={this.props.height}
           images={images}
           showBullets={this.props.showBullets}
           slideDuration={this.state.slideDuration}
         />
       </div>
     );
    }
}

export default Slider
