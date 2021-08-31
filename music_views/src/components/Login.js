import React, { useRef, useState } from 'react';
import { doAjax } from '../utils/ajax';
import { DashBoard } from './DashBoard';
import { Register } from './Register';
import { Admin } from './Admin';
export const Login = ()=>{
    
    const userid = useRef('');
    const password = useRef('');
    const [message, setMessage] =useState('');
    const [link , setLink] = useState(false);
    const check = ()=>{
        if(link === false)
        {
            setLink(true);
        }
        else setLink(false);
    };
    const doLogin = ()=>{
        console.log(userid, password);
        let uid = userid.current.value;
        let pwd = password.current.value;
        const userObject = {"userid":uid, "password":pwd};
        console.log('URL is ', process.env.REACT_APP_LOGIN_URL);
        const json= JSON.stringify(userObject);
        console.log('JSON is ', json, ' Object is ',userObject );
        const promise = doAjax(process.env.REACT_APP_LOGIN_URL, 'POST', json);
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
       if(userid.current.value === "admin1234")
       {
           return (<Admin/>);
       }
       else if(message.startsWith("Welcome")){
           return (<DashBoard msg = {message}/>)
       }
       else if (link===true)
       {
           return (<Register />);
       }
       else{
        return (
        <div className="login">
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
            <button onClick={doLogin} className='btn btn-primary'>Login</button>
            &nbsp;&nbsp;
            <button className='btn btn-secondary'>Reset</button>                
        </div>
        <div>
            <p>If you haven't registered already click here</p>
            <button className='btn btn-primary' onClick={check}>Click Me</button>
        </div>
    </div>
        )}
    }