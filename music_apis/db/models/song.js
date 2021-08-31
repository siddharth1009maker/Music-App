const mongoose = require('../connect');
const {Schema, SchemaTypes} = mongoose;
const SongSchema  = new Schema({
    name:{type:SchemaTypes.String, required:true},
    url:{type:SchemaTypes.String, required:true},
    artistName:{type:SchemaTypes.String, required:true},
    imageurl:{type:SchemaTypes.String, required:true}
});
const SongModel = mongoose.model('songs',SongSchema);
module.exports  = SongModel;