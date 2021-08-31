const SongModel = require("../models/song");

const songOperations = {
    async add(songObject){
        return await SongModel.create(songObject);
    },
    async readBySinger(singerName){
        return await SongModel.find({'artistName':singerName});
    },
    async readAll(){
        return await SongModel.find({});
    },
    async removeSong(songName){
        return await SongModel.deleteOne({"name":songName});
    },
    async findSong(search)
    {
        console.log(search);
        return await SongModel.find({'name':search});
    },
    async sortSong(decisionName)
    {
        if(decisionName==="ascending")
        {
            return await SongModel.find().sort({'name':1});
        }
        else return await SongModel.find().sort({'name':-1});
    }

}
module.exports = songOperations;