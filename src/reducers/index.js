import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

// ES6 shorthand property name
const rootReducer = combineReducers({
    courses,
    authors
});

export default rootReducer;