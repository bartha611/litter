import followerSaga from './sagas';
import {
  followerCreate,
  followerDelete,
  followerError,
  followerLoad
} from './actions';
import reducer from './reducers';

export {
  followerCreate,
  followerDelete,
  followerError,
  followerLoad,
  followerSaga
};

export default reducer;
