import axios from 'axios';
import React,{useState,useEffect, useContext} from 'react';
import { Link, Navigate, useNavigate, useNavigation } from 'react-router-dom';
import UserContext from '../contexts/user_context';
//import moment from 'moment';


const Login_screen=()=>{
    
  const context=useContext(UserContext)
  
  const [password,setPassword]=useState('')
  const [user,setUser]=useState('')
  const[email,setEmail]=useState('')
  const[error,setError]=useState('')
  const navigate=useNavigate()


  const handleSubmit=e=>{
  
    e.preventDefault()
    console.log('. . . . . . new run')
    
    axios.post('http://localhost:8000/api/user/login',{
      email,
      password,
      
    })
        .then(res=>{
          console.log('this is res...', res)
          console.log('this is res.data JAVIER...', res.data)

          const users=res.data
          //localStorage.setItem('jwt',users.auth_token)
          //localStorage.setItem('user',JSON.stringify(users))
          //localStorage.setItem('user',users.user.name)
          console.log('users is ....',users)
          console.log('users.user.name ....',users.user.name)
          console.log('context is :', context)
          
          //setUser(users.user.name)
          
          if(res.data.errors){
            console.log('in app.js ... in error...')
            setError(`hay un error estimado .... ${Object.values(res.data.errors)[0].message}` )
          }
          else{
            console.log('we are ok, we are in ELSE (of then)')
            setError('')
            context.setUsuario(res.data.user)
            navigate('/dashboard')
          }

        })
        .catch(err=>{
          console.log('this is ERR in LOGIN SCREEN...', err)
          //console.log('err.response.data.msg...', err.response.data.msg)
            
          if(err.response.data.msg){
              console.log('err.response.data.msg...', err.response.data.msg)
              setError(`${err.response.data.msg} `)
          }
          else if(err.message){
          console.log('err.message...', err.message)
          setError(`${err.message}`)

          }
          else{
            setError(`Error - invalid hook call , probably the NAVIGATION HOOK `)

          }


        } 
        )

}

//console.log('s')



    return(

        <div className="App">

        <h2> Login Screen </h2>
  
      <p className='error' >{error} </p>
  
      <p className='error' >
          {error ? '':'' }
      </p>
  
  
        <form onSubmit={handleSubmit} >
          <div>
              <label>
                E-mail
                <input type='text' onChange={e=>setEmail(e.target.value)} />
              </label>
  
          </div>
          <div>
              <label>
                Password
                <input type='password' onChange={e=>setPassword(e.target.value)} />
              </label>
  
          </div>
          
          <button>Login me </button>

        </form>

        <Link to='/register' > Register </Link>
  
  
        </div>



    )
}

export default Login_screen;
