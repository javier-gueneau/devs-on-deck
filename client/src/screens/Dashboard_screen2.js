//import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import moment from 'moment';
//import Stock from '../components/Stock';
//import Resumen from '../components/Resumen';
import CommentComponent from '../components/CommentComponent';
import List from '../components/List';
import Main_container_component from '../components/Main_container';
import Navbar from '../components/Navbar';
/* 
import List from '../components/List'; */


const Dashboard_screen=()=>{

  const [titleOfPost,setTitleOfPost]=useState('')
  const[post,setPost]=useState('')

    
  // 10 29 1 es mi app nueva , probando apis, calls, Register, Login, etc.
  

  const navigate=useNavigate()

  let userDetail=JSON.parse(localStorage.getItem('user'))


const handleClick=e=>{
  //e.preventDefault()
  //console.log('userDetail is ...', userDetail)
  console.log(localStorage)
  //console.log(userDetail.user)
  //console.log(userDetail.user.name)
}

const handleSubmit=e=>{
  e.preventDefault()
  console.log('this is handle submit ..... javier ')
}


    return(

        <div className="App">
            
            <div className='navbar'>
                <h1>Posting Wall</h1>
                <div className='navbar2' >
                    <h4>
                      {userDetail.user.name}
                    </h4>
                    <button onClick={()=>navigate('/login') } >log out</button>
                    <button onClick={e=>handleClick() } >action</button>
                </div>
            </div>

            <Navbar/>

            <Main_container_component/>

            <CommentComponent/>

            <List/>
      

        </div>


    )
}

export default Dashboard_screen;
