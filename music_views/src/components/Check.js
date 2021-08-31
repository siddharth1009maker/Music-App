import React, { useRef } from 'react';
import { doAjax } from '../utils/ajax';

export const Check = (props)=>{
    const artistName = useRef('');
    const name = useRef('');
    const url = useRef('');
    const imageurl = useRef('');
    let checkName  = props.checkName;
    if(!checkName){
        checkName = props.match.params.checkName;
    }
    const doCheck = ()=>{
        let sName = artistName.current.value;
        let soName = name.current.value;
        let soURL = url.current.value;
        let soImage = imageurl.current.value;
        console.log(sName , soName , soURL , soImage);
        const userObject = { "name" : soName , "url" : soURL ,"artistName":sName , "imageurl" : soImage};
        console.log('URL is ', process.env.REACT_APP_INSERT_URL);
        const json= JSON.stringify(userObject);
        console.log('JSON is ', json, ' Object is ',userObject );
        const promise = doAjax(process.env.REACT_APP_INSERT_URL, 'POST', json);
        promise.then(response=>{
            response.json().then(data=>{
                    console.log('Data Added To Server Server ',data);
            }).catch(err=>{
                console.log("Invalid JSON ", err);
            })
        }).catch(err=>{
            console.log('Error During Server Call ', err);
        })
    }

    return (
        <div>
            <h3>Add A Song</h3>
            <div className='form-group'>
            <label>Add The Singer Name</label>
            <input ref={artistName} className='form-control' type='text' placeholder='Type Singer Name Here'/>
        </div>
        <div className='form-group'>
            <label>Add The Song Name</label>
            <input ref={name} className='form-control' type='text' placeholder='Type Song Name Here'/>
        </div>
        <div className='form-group'>
            <label>Add The Song URL</label>
            <input ref={url} className='form-control' type='text' placeholder='Type Song URL Here'/>
        </div>
        <div className='form-group'>
            <label>Add The Singer Image URL</label>
            <input ref={imageurl} className='form-control' type='text' placeholder='Type Singer Image URL Here'/>
        </div>
        <div className='form-group'>
            <button onClick={doCheck}  className='btn btn-primary'>Submit</button>              
        </div>
        </div>
    );
}