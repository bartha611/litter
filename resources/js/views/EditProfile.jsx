import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import CropPicture from '../components/Profile/CropPicture';
import ProfileForm from '../components/Profile/ProfileForm';
import { fetchAuth } from '../state/ducks/auth/authThunk';

const EditProfile = ({ setCancel }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const [crop, setCrop] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [name, setName] = useState(user.name);
  const [biography, setBiography] = useState(user.biography);

  const handleFileChange = e => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      let id = e.target.id;
      reader.addEventListener('load', () => {
        setCrop({
          aspect: id === 'file-background' ? 3 : 1,
          src: reader.result
        });
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const DataUrlToFile = (url, filename) => {
    const arr = url.split(',');
    const bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    let croppedImageFile = new File([u8arr], filename, { type: 'image/png' });
    return croppedImageFile;
  };

  const handleSubmit = () => {
    let formData = new FormData();
    if (profileImage !== '') {
      let profile_file = DataUrlToFile(
        profileImage,
        `${user.username}_profile`
      );
      formData.append('profile_photo', profile_file);
    }
    if (backgroundImage !== '') {
      formData.append(
        'background_image',
        DataUrlToFile(backgroundImage, `${user.username}_background`)
      );
    }
    formData.append('name', name);
    formData.append('biography', biography);
    dispatch(fetchAuth(`/api/user/${user.username}`, 'UPDATE', null, formData));
  };

  return (
    <div>
      {_.isEmpty(crop) && (
        <div className="editProfile">
          <div className="editProfile__header">
            <div
              onClick={() => setCancel(true)}
              className="editProfile__cancel"
            >
              <FontAwesomeIcon
                icon={faTimes}
                size="lg"
                className="editProfile__icon"
              />
            </div>
            <div className="editProfile__title">Edit Profile</div>
            <button className="editProfile__save" onClick={handleSubmit}>
              Save
            </button>
          </div>
          <div className="editProfile__form">
            <div
              className="editProfile__background"
              style={{
                backgroundImage: `url('${
                  !backgroundImage ? user.background_image : backgroundImage
                }')`
              }}
            >
              <div className="editProfile__box">
                <div className="editProfile__centering">
                  <div className="editProfile__option">
                    <label htmlFor="file-background">
                      <FontAwesomeIcon
                        icon={faCamera}
                        color="grey"
                        className="editProfile__icon"
                      />
                    </label>
                    <input
                      type="file"
                      id="file-background"
                      className="editProfile__imageFile"
                      onChange={e => handleFileChange(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="editProfile__picture"
              style={{
                backgroundImage: `url('${
                  !profileImage ? user.profile_photo : profileImage
                }')`
              }}
            >
              <div className="editProfile__option editProfile__option--picture">
                <label htmlFor="file-picture">
                  <FontAwesomeIcon
                    icon={faCamera}
                    color="grey"
                    className="editProfile__icon"
                  />
                </label>
                <input
                  id="file-picture"
                  type="file"
                  className="editProfile__imageFile"
                  onChange={e => handleFileChange(e)}
                />
              </div>
            </div>
            <div className="editProfile__name">
              <ProfileForm
                title="Name"
                maxCharacters="50"
                value={name}
                setValue={setName}
              />
            </div>
            <div className="editProfile__biography">
              <ProfileForm
                title="Bio"
                maxCharacters="160"
                value={biography}
                setValue={setBiography}
              />
            </div>
          </div>
        </div>
      )}
      {!_.isEmpty(crop) && (
        <CropPicture
          settings={crop}
          setCancelCrop={setCrop}
          setBackgroundImage={setBackgroundImage}
          setProfileImage={setProfileImage}
        />
      )}
    </div>
  );
};

export default EditProfile;
