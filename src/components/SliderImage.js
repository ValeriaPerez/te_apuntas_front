import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      width: window.innertWidth,
      path: window.location.href,
      slideDuration: 1.9
    };
  }

   render() {
     const { width, height, images } = this.props;
     return (
       <div>
         <SimpleImageSlider
           width={ width }
           height={ height }
           images={ images }
           showBullets={ true }
           navStyle={ false }
           showNavs={ false }
           onCompleteSlide={ 1 }
           slideDuration={this.state.slideDuration}
         />
       </div>
     );
    }
}

export default Slider
