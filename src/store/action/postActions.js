import { postService } from "../../service/postService.js"

export function loadPosts(filterBy) {
    return async dispatch => {
        try {
            const posts = await postService.query(filterBy)
            dispatch({ type: 'SET_POSTS', posts })
        } catch (err) {
            console.log('Post Actions: err in load', err)
        }

    }
}
export function loadUserPosts(filterBy) {
    return async dispatch => {
        try {
            const eventies = await postService.queryByUser(filterBy)
            dispatch({ type: 'SET_POSTS', eventies })
        } catch (err) {
            console.log('Post Actions: err in load', err)
        }

    }
}



export function removePost(eventiId) {
    return async dispatch => {
        try {
            await postService.remove(eventiId)
            dispatch({ type: 'REMOVE_POST', eventiId })
        }
        catch (err) {
            alert('OOPs, try again');
            console.log('ERR:', err);
        }
    }
}

export function editPost(eventi) {
    return async dispatch => {
        try {
            const editedPost = await postService.update(eventi)
            console.log("editing  action ", editedPost);
            dispatch({ type: 'EDIT_POST', eventi: editedPost })
        } catch (err) {
            alert('OOPs, try again to edit');
            console.log('ERR:', err);
        }

    }
}
export function addPost(eventi) {
    return async dispatch => {
        try {
            const addPost = await postService.add(eventi)
            dispatch({ type: 'ADD_POST', eventi: addPost })
        } catch (err) {
            alert('OOPs, try again');
            console.log('ERR:', err);
        }

    }
}

