import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';

export default function Videos() {
  const videoConstraints = {
    width: 500,
    height: 500,
    facingMode: 'user'
    // facingMode: { exact: 'environment' }
  };

  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <>
      <br />

      {/* <h1 className="text-center">Video Call</h1> */}
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Webcam
              audio={false}
              height={500}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={500}
              videoConstraints={videoConstraints}
            />
            <br />
            <button onClick={capture} className="btn bt-sm btn-primary">
              Capture photo
            </button>{' '}
          </div>
          <div className="col-6"> {imgSrc && <img src={imgSrc} />}</div>
        </div>
      </div>
    </>
  );
}
