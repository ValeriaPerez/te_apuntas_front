import { combineReducers } from 'redux';


import Profile from './profile';
import Destination from './destination';
import Login from './login';
import Home from './home';

export default combineReducers({
    Profile,
    Destination,
    Login,
    // Travel,
    // User,
    Home,
});
