// import { storageService } from './asyncStorageService'
import { httpService } from './httpService'
import data from '../data/data.json'
export const postService = {
    getEventies,
    getById,
    remove,
    update,
    add,
    query,
    // queryByUser
}

window.eventiService = postService
// Note: due to async, must run one by one...

function getEventies() {
    // return storageService.query('eventi')
    // return httpService.get(`eventi`)
}

function getById(eventiId) {
    // return storageService.get('eventi', eventiId)
    return httpService.get(`eventi/${eventiId}`)
}
function remove(eventiId) {
    // return storageService.remove('eventi', eventiId)
    return httpService.delete(`eventi/${eventiId}`)
}

async function update(eventi) {
    const editedEventi = await httpService.put(`eventi/${eventi._id}`, eventi)
    console.log(editedEventi);
    return editedEventi
}

function query(filterBy = "") {
    // console.log(filterBy);
    // var queryStr = (!filterBy) ? '' : `?title=${filterBy.title}&tags=${filterBy.tags}&minPrice=${filterBy.minPrice}&maxPrice=${filterBy.maxPrice}&sort=anaAref`
    // console.log(queryStr);
    // return httpService.get(`eventi${queryStr}`)
    return data.posts
    // return storageService.query('eventi')

}
// function queryByUser(filterBy) {
//     var queryStr = (!filterBy) ? '' : `?host=${filterBy.host}&sort=anaAref`
//     return httpService.get(`eventi/user/dash${queryStr}`)
//     // return storageService.query('eventi')
// }


async function add(post) {
    // const addedEventi = await httpService.post(`eventi`, eventi)
    return post
}
