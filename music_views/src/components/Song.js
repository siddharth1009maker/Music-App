import React, { useEffect, useState } from 'react';
export const Song = (props)=>{
    const [songs, setSongs] = useState([]);
    const audioStyle = {
        width:'400px'
    }
    const imageStyle = {
        height:'100px',
        width:'100px'
    }
    let singerName  = props.singerName;
    if(!singerName){
        singerName = props.match.params.singerName;
    }

   
    console.log('Singer Name Rec is ', singerName);
    useEffect(()=>{
            let url = `${process.env.REACT_APP_SONG_URL}?name=${singerName}`;
            const promise = fetch(url);
            promise.then(response=>{
                response.json().then(data=>{
                    console.log('Data is ', data);
                    setSongs(data);
                }).catch(err=>{
                    console.log('JSON Error is ', err);
                })
            }).catch(err=>console.log("Error is ",err));
    });
    return (<>
    <h3>Song of {singerName}</h3>
    {songs.map(song=>{
        return (<div>
            <img src={song.imageurl} style={imageStyle}/>
            <p>{song.name}</p>
            <audio controls style={audioStyle}>
                <source src={song.url} type="audio/mp4"></source>
            </audio>
        </div>)
    })}
    </>
    )
}