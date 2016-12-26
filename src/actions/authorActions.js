import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';

export function loadAuthorsSuccess(authors) {debugger;
    return { type: types.LOAD_AUTHORS_SUCCESS,
        authors
    };
}

export function loadAuthors() {debugger;
    return function(dispatch) {
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}
