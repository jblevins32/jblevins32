import React, {Component, Suspense} from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  render() {
    const {animationData, height, width, topOffset, speed} = this.props;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
    };

    return (
      <Suspense fallback={<Loading />}>
        <Lottie
          animationData={defaultOptions.animationData}
          loop={defaultOptions.loop}
          style={{
            height: 550, 
            width: 550,
            position: 'relative',
            top: topOffset || '50px',
            left: this.props.leftOffset || '200px',
          }}
          speed={speed || .001} // Use the speed prop to control animation speed
        />
      </Suspense>
    );
  }
}
