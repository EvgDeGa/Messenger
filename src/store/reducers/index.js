import {combineReducers} from 'redux';
import {selfInfReducer} from './selfInf';
import {socialReducer} from './sosial';
import {friendsReducer} from './friends';
import {groupReducer} from './group';
import {postInformationReducer} from './postInformation';
import {gallaryReducer} from './gallery';
import {postPhotoReducer} from './postPhoto';
import {commentListReducer} from './commentList';
import {authReducer} from './auth';

export const rootReducer = combineReducers({
  auth: authReducer,
  selfInf: selfInfReducer,
  social: socialReducer,
  friends: friendsReducer,
  group: groupReducer,
  postInformation: postInformationReducer,
  gallary: gallaryReducer,
  postPhoto: postPhotoReducer,
  commentList: commentListReducer,
});
