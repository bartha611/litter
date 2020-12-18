import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Component for editing Profile
 * @param {Object} props - Component props
 * @param {string} props.title - Field name of form
 * @param {number} props.maxCharacters - Total characters allowed
 * @param {string} props.value - Value of field
 * @param {function} prop.setValue - React hook to set value after change
 *
 */

const ProfileForm = ({ title, maxCharacters, value, setValue }) => {
  return (
    <div className="ProfileForm">
      <div className="ProfileForm__header">
        <span className="ProfileForm__title">{title}</span>
        <span className="ProfileForm__count">
          {value.length}/{maxCharacters}
        </span>
      </div>
      <textarea
        className="ProfileForm__input"
        value={value}
        rows={title === 'Name' ? 1 : 2}
        maxLength={maxCharacters}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
};

ProfileForm.propTypes = {
  title: PropTypes.string.isRequired,
  maxCharacters: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
};

export default ProfileForm;
