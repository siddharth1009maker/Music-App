const songOperations = require("../db/services/songoperations");

const musicOperations = {
    async getAllSongs(request, response){
        const songs = await songOperations.readAll();
        response.json(songs);
    },
    async getByArtist(request, response){
        const singerName = request.query.name;
        console.log('Singer Name is ', singerName);
        const songs = await songOperations.readBySinger(singerName);
        response.json(songs);
    },
    async addASong(request, response){
        console.log(request.body);
        const result  = await songOperations.add(request.body);
        response.json(result);
    },
    async deleteSong(request,response)
    {
        console.log(request.body);
        const songName = request.body.name;
        console.log(songName);
        const answer = await songOperations.removeSong(songName);
        response.json(answer);
    },
    async searchSong(request,response)
    {
        console.log(request.body);
        const search = request.body.name;
        console.log(search);
        const solution = await songOperations.findSong(search);
        response.json(solution);
    },
    async addSort(request,response)
    {
        const decisionName = request.query.name;
        console.log(decisionName);
        const get = await songOperations.sortSong(decisionName);
        response.json(get);
    },
    getPartySongs(request, response){

    },
    getLatestSongs(request, response){

    }
    
}
module.exports = musicOperations;