import {combineReducers} from 'redux';
import {selfInfReducer} from './selfInf';
import {friendsReducer} from './friends';
import {groupReducer} from './group';
import {postReducer} from './posts';
import {gallaryReducer} from './gallery';
import {commentListReducer} from './commentList';
import {authReducer} from './auth';
import {loaderReducer} from './loader';

export const rootReducer = combineReducers({
  loader: loaderReducer,
  auth: authReducer,
  selfInf: selfInfReducer,
  friends: friendsReducer,
  group: groupReducer,
  posts: postReducer,
  gallary: gallaryReducer,
  commentList: commentListReducer,
});
