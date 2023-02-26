//import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login_gen from '../Login-register/Login_gen';
import Login_register_form from '../Login-register/Login_register_form';
import Reg_gen from '../Login-register/Reg_gen';
import Navbar from './Navbar';



const Dashboard=()=>{

  const [titleOfPost,setTitleOfPost]=useState('')
  const[post,setPost]=useState('')
  const[isDeveloper,setIsDeveloper]=useState(true)
  const[isLogin,setIsLogin]=useState(true)
  const[user_login,setUser_login]=useState('dev_login')
  //let userDetail=JSON.parse(localStorage.getItem('user'))
  
    return(


        
        <div className="App">
            {/* <Login_dev/> */}
            <Navbar text_1="Dev Registration" text_2="Org Registration" setIsDeveloper={setIsDeveloper} setIsLogin={setIsLogin} />
                     
            <div className='App_container' >


                {isDeveloper
                    ?
                    <Login_register_form title="Welcome Developer!" subtitle="Let's connect you to a job! .. is dev!" 
                    button="Login" change='Sign in as organization' setIsDeveloper={setIsDeveloper} 
                    isDeveloper={isDeveloper} />
                    :
                    <Login_register_form title="Welcome org!" subtitle="Let's find you some candidates!" 
                    button="Login" change='Sign in as developer' setIsDeveloper={setIsDeveloper} isDeveloper={isDeveloper} />
                }


                <Login_gen/>
                <Reg_gen isDeveloper={isDeveloper} setIsDeveloper={setIsDeveloper}/>





                <Login_register_form title="Welcome Developer!" subtitle="Let's connect you to a job!" button="Login" />
                <Login_register_form title="Welcome!" subtitle="Let's find you some candidates!" button="Login" />


                <Login_register_form title="Developer Sign Up" subtitle="" button="Register"/>
                <Login_register_form title="Organization Sign Up" subtitle="" button="Register"/>

            </div>
            

        </div>

    )
}

export default Dashboard
