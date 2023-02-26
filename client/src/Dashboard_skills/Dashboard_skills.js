//import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Add_skill from '../bars/Add_skill';
import Navbar from '../Dashboard/Navbar';
import Login_gen from '../Login-register/Login_gen';

const Dashboard_skills=()=>{

  const[isDeveloper,setIsDeveloper]=useState(true)
  const[isLogin,setIsLogin]=useState(true)
  const[user_login,setUser_login]=useState('')
  
    return(
        
        <div className="App">
            {/* <Login_dev/> */}
            <Navbar text_1="Dev Registration" text_2="Org Registration" 
                isDeveloper={isDeveloper} setIsDeveloper={setIsDeveloper} 
                isLogin={isLogin} setIsLogin={setIsLogin} />
                     
            <div className='App_container' >

dashboard skills
<Add_skill/>

            </div>
            


            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.3632904693936!2d2.178432315289709!3d41.387916179264096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2fc60edf3e5%3A0xb71866b715343202!2sPla%C3%A7a%20de%20Sant%20Agust%C3%AD%20Vell%2C%2008003%20Barcelona%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2scl!4v1677445617494!5m2!1ses-419!2scl" 
            width="400" height="200"></iframe>

        </div>

    )
}

export default Dashboard_skills
