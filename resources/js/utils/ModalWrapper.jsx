import React, { Suspense, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

/**
 * Component that renders a modal wrapper
 */

const ModalWrapper = Component => props => {
  const history = useHistory();
  const location = useLocation();
  const [cancel, setCancel] = useState(false);
  const lastLocation = location.state && location.state.background.pathname;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);

  useEffect(() => {
    if (cancel) {
      history.push({
        pathname: `${lastLocation}`,
        state: {
          from: location.pathname
        }
      });
    }
  }, [cancel]);

  const back = e => {
    e.stopPropagation();
    if (e.target.className === 'modalCustom') {
      history.push({
        pathname: `${lastLocation}`,
        state: {
          from: location.pathname
        }
      });
    }
  };

  return (
    <Suspense fallback={<div>...Loading</div>}>
      <div onClick={back} className="modalCustom">
        <div className="modalCustom__component">
          <Component setCancel={setCancel} {...props} />
        </div>
      </div>
    </Suspense>
  );
};

export default ModalWrapper;
