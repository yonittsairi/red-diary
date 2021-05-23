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
            const postes = await postService.queryByUser(filterBy)
            dispatch({ type: 'SET_POSTS', postes })
        } catch (err) {
            console.log('Post Actions: err in load', err)
        }

    }
}



export function removePost(postId) {
    return async dispatch => {
        try {
            await postService.remove(postId)
            dispatch({ type: 'REMOVE_POST', postId })
        }
        catch (err) {
            alert('OOPs, try again');
            console.log('ERR:', err);
        }
    }
}

export function editPost(post) {
    return async dispatch => {
        try {
            const editedPost = await postService.update(post)
            console.log("editing  action ", editedPost);
            dispatch({ type: 'EDIT_POST', post: editedPost })
        } catch (err) {
            alert('OOPs, try again to edit');
            console.log('ERR:', err);
        }

    }
}
export function addPost(post) {
    return async dispatch => {
        try {
            const addPost = await postService.add(post)
            dispatch({ type: 'ADD_POST', post: addPost })
        } catch (err) {
            alert('OOPs, try again');
            console.log('ERR:', err);
        }

    }
}

