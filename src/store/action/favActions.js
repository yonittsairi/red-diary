
import { favService } from './../../service/favService';
// export function loadFavs(filterBy) {
//     return (dispatch) => {
//         favService.query(filterBy)
//             .then(favs => { dispatch({ type: 'SET_FAVS', favs }) })
//     }
// }

export function removeFav(favId) {
    console.log('actions', favId);
    return (dispatch) => {
        favService.removeFav(favId).then(() => { dispatch({ type: 'REMOVE_FAV', favId }) })
    }
}

export function addFav(favId) {
    console.log(favId, 'actions');
    return (dispatch) => {
        favService.addFav(favId).then((savedFav) => { dispatch({ type: 'ADD_FAV', fav: savedFav }) })
    }
}

