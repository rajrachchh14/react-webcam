import React from 'react';

import TopBar from './TopBar';
import Webcam from 'react-webcam';

export default function App() {
  // const videoConstraints = {
  //   width: 1280,
  //   height: 720,
  //   facingMode: 'user'
  // };

  // const webcamRef = React.useRef(null);
  // const [imgSrc, setImgSrc] = React.useState(null);

  // const capture = React.useCallback(() => {
  //   const imageSrc = webcamRef.current.getScreenshot();
  //   setImgSrc(imageSrc);
  // }, [webcamRef, setImgSrc]);

  return (
    <>
      <TopBar />
      {/* <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
      {imgSrc && <img src={imgSrc} />} */}
    </>
  );
}
