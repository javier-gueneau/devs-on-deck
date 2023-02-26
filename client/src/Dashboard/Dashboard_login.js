//import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login_gen from '../Login-register/Login_gen';
import Navbar from './Navbar';

const Dashboard_login=()=>{

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


                {isDeveloper
                    ?
                    <Login_gen title="Welcome Developer!" subtitle="Let's connect you to a job!" 
                        button="Login" change='Sign in as organization' 
                        setIsDeveloper={setIsDeveloper} isDeveloper={isDeveloper} 
                        isLogin={isLogin} setIsLogin={setIsLogin} />
                    :
                    <Login_gen title="Welcome org!" subtitle="Let's find you some candidates!" 
                        button="Login" change='Sign in as developer' 
                        setIsDeveloper={setIsDeveloper} isDeveloper={isDeveloper} 
                        isLogin={isLogin} setIsLogin={setIsLogin}
                    />
                }

            </div>
            

        </div>

    )
}

export default Dashboard_login
