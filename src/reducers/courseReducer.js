import * as types from '../actions/actionTypes';
export default function courseReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_COURSE:
        debugger;
          return [...state, // ES6 Spread Operator
                Object.assign({}, action.course)
            ];

        default: 
            return state;
    }
}