import {combineReducers} from 'redux';
import courses from './courseReducer';

// ES6 shorthand property name
const rootReducer = combineReducers({
    courses
});

export default rootReducer;