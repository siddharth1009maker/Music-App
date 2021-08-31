import React, { useRef, useState } from 'react';
import { doAjax } from '../utils/ajax';
export const Search = ()=>{
    const name = useRef('');
    const audioStyle = {
        width:'400px'
    }
    const imageStyle = {
        height:'100px',
        width:'100px'
    }
    const [songs , setSong ] = useState([0]);
    const doCheck = ()=>{
        let soName = name.current.value;
        console.log(soName);
        const userObject = {"name":soName};
        console.log('URL is ', process.env.REACT_APP_FIND_URL);
        const json= JSON.stringify(userObject);
        console.log('JSON is ', json, ' Object is ',userObject );
        const promise = doAjax("http://localhost:1234/search", 'POST', json);
        promise.then(response=>{
            response.json().then(data=>{
                    console.log('Data Rec From Server ',data);
                    setSong(data);
            }).catch(err=>{
                console.log("Invalid JSON ", err);
            })
        }).catch(err=>{
            console.log('Error During Server Call ', err);
        })
    }
    if(songs.length===0) return (<h1>Song Not Found</h1>);
    else if(songs[0]!==0)
    {
        return (<>
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
    else {
        return (<div>
            <div className='form-group'>
                   <label>Add The Song Name</label>
                   <input ref={name} className='form-control' type='text' placeholder='Type Song Name Here'/>
               </div>
               <div className='form-group'>
                   <button onClick={doCheck}  className='btn btn-primary'>Submit</button>              
               </div>
           </div>);
    }
}