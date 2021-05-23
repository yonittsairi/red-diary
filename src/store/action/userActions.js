// import { StorageService } from "../../service/StorageService"
import { userService } from "../../service/userService"


export function loadUsers() {
    return async dispatch => {
        try {
            dispatch({ type: 'LOADING_START' })
            const users = await userService.getUsers()
            dispatch({ type: 'SET_USERS', users })
        } catch (err) {
            console.log('UserActions: err in loadUsers', err)
        } finally {
            dispatch({ type: 'LOADING_DONE' })
        }
    }
}

export function removeUser(userId) {
    return async dispatch => {
        try {
            await userService.remove(userId)
            dispatch({ type: 'REMOVE_USER', userId })
        } catch (err) {
            console.log('UserActions: err in removeUser', err)
        }
    }
}
export function login(userCreds) {
    return async dispatch => {
        try {
            const user = await userService.login(userCreds)
            dispatch({ type: 'SET_USER', user })
        } catch (err) {
            console.log('UserActions: err in login', err)
        }
    }
}
export function signup(userCreds) {
    return async dispatch => {
        try {
            const user = await userService.signup(userCreds)
            dispatch({ type: 'SET_USER', user })
        } catch (err) {
            console.log('UserActions: err in signup', err)
        }
    }
} export function logout() {
    return async dispatch => {
        try {
            await userService.logout()
            dispatch({ type: 'SET_USER', user: null })
        } catch (err) {
            console.log('UserActions: err in logout', err)
        }
    }
}
export function editUser(user) {
    return async dispatch => {
        try {
            const editedUser = await userService.update(user)
            console.log("editing  action ", editedUser);
            dispatch({ type: 'EDIT_USER', user: editedUser })
        } catch (err) {
            alert('OOPs, try again to edit');
            console.log('ERR:', err);
        }

    }
}