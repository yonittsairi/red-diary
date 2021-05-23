import { userService } from '../../service/userService.js'

const initialState = {
    loggedinUser: userService.getLoggedinUser() || null
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            state = { ...state, loggedinUser: action.user }
            return state
        case 'EDIT_USER':
            state = { ...state, loggedinUser: action.user }
            return state;


        default:
            return state
    }


} 