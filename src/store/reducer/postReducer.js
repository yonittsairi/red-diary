const posts = []
let localLoggedinUser = null
if (sessionStorage.loggedinUser) localLoggedinUser = JSON.parse(sessionStorage.loggedinUser)

const initialState = {
    posts,
    loggedinUser: localLoggedinUser
}
export function postReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_POSTS':
            return { ...state, posts: action.posts }
        case 'EDIT_POST':
            const editedposts = state.posts.map(post => {
                if (post._id === action.post._id) {
                    return action.post;
                }
                return post;

            })
            return { ...state, posts: editedposts }
        case 'ADD_POST':
            // console.log('aciton post', action.post)
            const posts = state.posts
            posts.unshift(action.post)
            state = { ...state, posts: posts }
            return state

        case 'REMOVE_POST':
            state = { ...state, posts: state.posts.filter(post => post._id !== action.postId) }
            return state
        default:
            return state
    }

}

