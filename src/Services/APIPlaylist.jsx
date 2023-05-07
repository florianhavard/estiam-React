import apiAxios from "../Configuration/InstanceAxios"

function postPlaylist(namePlaylist) {
    return apiAxios.post('/playlist', {
        name: namePlaylist,
    })
        .then(response => response.data)
        
}

function findAll() {
    return apiAxios.get("playlist")
        .then(response => response.data)
    }
function findOne(id) {
    return apiAxios.get("playlist/" + id)
        .then(response => response.data)
    }      


export default {postPlaylist, findAll, findOne}