// import { storageService } from './asyncStorageService'
// import { httpService } from './httpService'
import { StorageService } from './StorageService';

export const favService = {
    removeFav,
    addFav,
}

window.favService = favService

async function removeFav(favId) {
    var favs = await StorageService.load('favs')
    if (!favs) {
        return null
    }
    else favs = favs.filter(favi => favi !== favId)
    console.log(favs);
    StorageService.save('favs', favs)

    return favId
}

async function addFav(favId) {
    var favs = await StorageService.load('favs')
    if (!favs) {
        favs = []
        favs.push(favId)
    }
    else favs.push(favId)
    StorageService.save('favs', favs)
    return favId
}
