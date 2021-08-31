import React, { useRef, useState } from 'react';
import { doAjax } from '../utils/ajax';
import { DashBoard } from './DashBoard';
import { Login } from './Login';
export const Register = ()=>{
    
    const userid = useRef('');
    const password = useRef('');
    const name = useRef('');
    const [message, setMessage] =useState('');
    const [recent , setRecent] = useState(false);
    const setChange = ()=>
    {
        if(recent === false)
        {
            setRecent(true);
        }
        else setRecent(false);
    };
    const doRegister = ()=>{
        console.log(userid, password);
        let uid = userid.current.value;
        let pwd = password.current.value;
        let uname = name.current.value;
        const userObject = {"userid":uid, "password":pwd, "name":uname};
       // console.log('URL is ', process.env.REACT_APP_LOGIN_URL);
        const json= JSON.stringify(userObject);
        console.log('JSON is ', json, ' Object is ',userObject );
        const promise = doAjax(process.env.REACT_APP_REGISTER_URL, 'POST', json);
        promise.then(response=>{
            response.json().then(data=>{
                    console.log('Data Rec From Server ',data);
                    setMessage(data.message);
            }).catch(err=>{
                console.log("Invalid JSON ", err);
            })
        }).catch(err=>{
            console.log('Error During Server Call ', err);
        })
    }
    if(recent === true)
    {
        return (<Login />);
    }
    else {
        return (
        <>
        <h1> Register</h1>
        <h2>{message}</h2>
        <div className='form-group'>
            <label>Userid</label>
            <input ref={userid} className='form-control' type='text' placeholder='Type Userid Here'/>
        </div>
        <div className='form-group'>
            <label>Password</label>
            <input ref={password} className='form-control' type='password' placeholder='Type Password Here'/>
        </div>
        <div className='form-group'>
            <label>Name</label>
            <input ref={name} className='form-control' type='text' placeholder='Type Name Here'/>
        </div>
        <div className='form-group'>
            <button onClick={doRegister} className='btn btn-primary'>Register</button>
            &nbsp;&nbsp;
            <button className='btn btn-secondary'>Reset</button>                
        </div>
        <div>
            <p>Go Back to login page</p>
            <button className='btn btn-primary' onClick={setChange}>Click Me</button>
        </div>
    </>
        )}
        
    }