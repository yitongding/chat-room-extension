import { combineReducers } from 'redux';

import chatReducer from './chatReducer';

const reducer = combineReducers({
  chat: chatReducer,
});

export default reducer;
