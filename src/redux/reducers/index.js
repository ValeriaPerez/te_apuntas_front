import { combineReducers } from 'redux';

import Profile from './profile';
import Destination from './destination';
import Home from './home';

export default combineReducers({
    Profile,
    Destination,
    Home,
  });
