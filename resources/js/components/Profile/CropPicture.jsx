import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import PropTypes from 'prop-types';

/**
 * Component that crops picture for background or profile pictures
 *
 * @param {Object} props - Props for component
 * @param {Object} props.settings - Settings property that contains src and aspect ratio
 * @param {Number} props.settings.aspect - Aspect ratio for cropping image
 * @param {File} props.settings.src - - Src for image
 * @param {function} props.setCancelCrop - React hook for Crop Settings.  Set to null to cancel
 * @param {function} props.setBackgroundImage - React hook that sets new Cropped Background Image.  Aspect 3:1.
 * @param {function} props.setProfileImage - React hook that sets new Cropped Profile Image.  Aspect 1:1
 *
 */

const CropPicture = ({
  setCancelCrop,
  settings,
  setBackgroundImage,
  setProfileImage
}) => {
  const imageRef = useRef(null);
  const [file, setFile] = useState(null);
  const [completedCrop, setCompletedCrop] = useState(null);
  const [crop, setCrop] = useState({
    unit: '%',
    x: 0,
    y: 22.5,
    width: 100,
    aspect: settings.aspect
  });

  const onLoad = useCallback(img => {
    imageRef.current = img;
  });

  const handleSubmit = () => {
    if (crop.aspect === 1) {
      setProfileImage(file);
    } else {
      setBackgroundImage(file);
    }
    setCancelCrop(null);
  };

  useEffect(() => {
    if (!imageRef.current || !completedCrop) {
      return;
    }
    const canvas = document.createElement('canvas');
    const image = imageRef.current;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const crop = completedCrop;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      scaleX * crop.x,
      scaleY * crop.y,
      scaleX * crop.width,
      scaleY * crop.height,
      0,
      0,
      crop.width,
      crop.height
    );

    const reader = new FileReader();
    canvas.toBlob(blob => {
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        setFile(reader.result);
      };
    });
  }, [completedCrop]);

  return (
    <div className="CropPicture">
      <div className="CropPicture__header">
        <div className="CropPicture__cancel">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="lg"
            onClick={() => setCancelCrop(null)}
            className="CropPicture__icon"
          />
        </div>
        <div className="CropPicture__title">Edit Media</div>
        <div className="CropPicture__save">
          <button className="CropPicture__button" onClick={handleSubmit}>
            Apply
          </button>
        </div>
      </div>
      {settings.src && (
        <ReactCrop
          ruleOfThirds
          src={settings.src}
          crop={crop}
          onImageLoaded={onLoad}
          onChange={c => setCrop(c)}
          onComplete={c => setCompletedCrop(c)}
          style={{ width: '100%' }}
        />
      )}
    </div>
  );
};

CropPicture.propTypes = {
  settings: PropTypes.shape({
    src: PropTypes.object.isRequired,
    aspect: PropTypes.number.isRequired
  }).isRequired,
  setCancelCrop: PropTypes.func.isRequired,
  setBackgroundImage: PropTypes.func.isRequired,
  setProfileImage: PropTypes.func.isRequired
};

export default CropPicture;
