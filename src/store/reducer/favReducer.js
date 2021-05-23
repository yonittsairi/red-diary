import { StorageService } from '../../service/StorageService.js'
const favs = StorageService.load('favs') || [0]
let localLoggedinUser = null
if (sessionStorage.loggedinUser) localLoggedinUser = JSON.parse(sessionStorage.loggedinUser)

const initialState = {
    favs,
}
export function favReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_FAVS':
            return { ...state, favs: action.favs }
        case 'EDIT_FAV':
            const editedfavs = state.favs.map(fav => {
                if (fav._id === action.fav._id) {
                    return action.fav;
                }
                return fav;

            })
            console.log(editedfavs);
            return { ...state, favs: editedfavs }
        case 'ADD_FAV':
            console.log('aciton fav', action.fav)
            state = { ...state, favs: [...state.favs, action.fav] }
            return state
        case 'FILTER':
            const regex = new RegExp(action.filterBy.text, 'i')
            if (action.filterBy.type === "All" && action.filterBy.text === "") {
                state = { ...state, favs, filterBy: action.filterBy }
                return state
            }
            else {
                state = {
                    ...state, favs: favs.filter(fav => ((regex.test(fav.name)
                        && fav.inStock === action.filterBy.type
                        && fav.type === action.filterBy.type

                    ))), filterBy: action.filterBy
                }
                return state
            }
        case 'REMOVE_FAV':
            state = { ...state, favs: state.favs.filter(fav => fav !== action.favId) }
            return state
        default:
            return state
    }

}

