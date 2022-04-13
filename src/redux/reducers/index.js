import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer';
import streamReducer from './streamReducer';
import selectReducer from './selectReducer';
import tutorReducer from './tutorReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
  select: selectReducer,
  tutors: tutorReducer,
  user: usersReducer
});
