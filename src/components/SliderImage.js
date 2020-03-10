import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

class Slider extends React.Component {

  constructor(props) {
    super(props);
    // No llames this.setState() aquí!
    this.state = {
      counter: 0,
      width: window.innertWidth
    };
  }

   render() {
     console.log(this.props.width);
     const images = [
       { url: "images/1.jpg" },
       { url: "images/2.jpg" },
       { url: "images/3.jpg" },
       { url: "images/4.jpg" },
       { url: "images/5.jpg" },
       { url: "images/6.jpg" },
       { url: "images/7.jpg" },
     ];

     return (
       <div>
         <SimpleImageSlider
           width={this.props.width}
           height={this.props.height}
           images={images}
           showBullets={this.props.showBullets}
         />
       </div>
     );
    }
}

export default Slider
