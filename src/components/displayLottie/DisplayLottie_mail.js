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
            height: 650, 
            width: 650,
            position: 'relative',
            top: topOffset || '-200px',
            left: this.props.leftOffset || '100px',
          }}
          speed={speed || .001} // Use the speed prop to control animation speed
        />
      </Suspense>
    );
  }
}
