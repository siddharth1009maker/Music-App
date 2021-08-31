import React, { useEffect, useState } from 'react';
export const Sort = (props)=>{
    const [sorts, setSort] = useState([]);
    const audioStyle = {
        width:'400px'
    }
    const imageStyle = {
        height:'100px',
        width:'100px'
    }
    let decision  = props.decision;
    if(!decision){
        decision = props.match.params.decision
    }


    useEffect(()=>{
            let url = `${process.env.REACT_APP_SORT_URL}?name=${decision}`;
            const promise = fetch(url);
            promise.then(response=>{
                response.json().then(data=>{
                    console.log('Data is ', data);
                    setSort(data);
                }).catch(err=>{
                    console.log('JSON Error is ', err);
                })
            }).catch(err=>console.log("Error is ",err));
    });
    return (<>
    {sorts.map(song=>{
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