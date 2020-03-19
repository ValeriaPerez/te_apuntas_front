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

     return (
       <div>
         <SimpleImageSlider
           width={this.props.width}
           height={this.props.height}
           images={this.props.images}
           showBullets={this.props.showBullets}
           slideDuration={this.state.slideDuration}
         />
       </div>
     );
    }
}

export default Slider
