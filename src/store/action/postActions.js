import { eventiService } from "../../service/postService.js"

export function loadEventis(filterBy) {
    return async dispatch => {
        try {
            const eventies = await eventiService.query(filterBy)
            dispatch({ type: 'SET_EVENTIES', eventies })
        } catch (err) {
            console.log('Eventi Actions: err in load', err)
        }

    }
}
export function loadUserEventis(filterBy) {
    return async dispatch => {
        try {
            const eventies = await eventiService.queryByUser(filterBy)
            dispatch({ type: 'SET_EVENTIES', eventies })
        } catch (err) {
            console.log('Eventi Actions: err in load', err)
        }

    }
}



export function removeEventi(eventiId) {
    return async dispatch => {
        try {
            await eventiService.remove(eventiId)
            dispatch({ type: 'REMOVE_EVENTI', eventiId })
        }
        catch (err) {
            alert('OOPs, try again');
            console.log('ERR:', err);
        }
    }
}

export function editEventi(eventi) {
    return async dispatch => {
        try {
            const editedEventi = await eventiService.update(eventi)
            console.log("editing  action ", editedEventi);
            dispatch({ type: 'EDIT_EVENTI', eventi: editedEventi })
        } catch (err) {
            alert('OOPs, try again to edit');
            console.log('ERR:', err);
        }

    }
}
export function addEventi(eventi) {
    return async dispatch => {
        try {
            const addEventi = await eventiService.add(eventi)
            dispatch({ type: 'ADD_EVENTI', eventi: addEventi })
        } catch (err) {
            alert('OOPs, try again');
            console.log('ERR:', err);
        }

    }
}

