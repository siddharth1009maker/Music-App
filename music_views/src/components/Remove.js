import React, { useRef } from 'react';
import { doAjax } from '../utils/ajax';
export const Remove = ()=>{
    const name = useRef('');
    const doCheck = ()=>{
        let soName = name.current.value;
        const userObject = {"name":soName};
        console.log(name);
        
        const json= JSON.stringify(userObject);
        console.log('JSON is ', json, ' Object is ',userObject );
        const promise = doAjax("http://localhost:1234/removesong", 'POST', json);
        promise.then(response=>{
            response.json().then(data=>{
                    console.log('Data Added To Server ',data);
            }).catch(err=>{
                console.log("Invalid JSON ", err);
            })
        }).catch(err=>{
            console.log('Error During Server Call ', err);
        })
    }
    return (<div>
        <h3>Delete A Song</h3>
        <div className='form-group'>
            <label>Add The Song URL</label>
            <input ref={name} className='form-control' type='text' placeholder='Type Song URL Here That You Want To Delete'/>
        </div>
        <div className='form-group'>
            <button onClick={doCheck}  className='btn btn-primary'>Submit</button>              
        </div>
    </div>);
}