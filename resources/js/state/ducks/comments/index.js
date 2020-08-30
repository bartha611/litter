import {
  createComment,
  errorComment,
  deleteComment,
  uploadComment,
  readComment,
  paginateComment,
  requestComment
} from './actions';

import reducer from './reducers';

export default reducer;

export {
  requestComment,
  createComment,
  errorComment,
  deleteComment,
  uploadComment,
  readComment,
  paginateComment
};
