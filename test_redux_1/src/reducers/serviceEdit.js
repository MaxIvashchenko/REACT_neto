import { EDIT_SERVICE } from '../actions/actionTypes'

const initialState = false;

export default function serviceEditReducer(state = initialState, action) {
    switch (action.type) {
        case EDIT_SERVICE:
            return action.ed;
        default:
            return state;
    }
}