//import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login_gen from '../Login-register/Login_gen';
import Login_register_form from '../Login-register/Login_register_form';
import Reg_gen from '../Login-register/Reg_gen';
import Navbar from './Navbar';


const Dashboard_reg=()=>{

    const[isLogin,setIsLogin]=useState(false)
    const [titleOfPost,setTitleOfPost]=useState('')
    const[isDeveloper,setIsDeveloper]=useState(true)
  //let userDetail=JSON.parse(localStorage.getItem('user'))
  
    return(
        
        <div className="App">
            {/* <Login_dev/> */}
            <Navbar text_1="Dev Registration" text_2="Org Registration" setIsDeveloper={setIsDeveloper} setIsLogin={setIsLogin} />
                     
            <div className='App_container' >

                {isDeveloper
                    ?
                    <Reg_gen title="Developer Sign Up" subtitle="" 
                    button="Login" change='Sign in as organization' setIsDeveloper={setIsDeveloper} 
                    isDeveloper={isDeveloper} />
                    :
                    <Reg_gen title="Organization Sign Up" subtitle="" 
                    button="Login" change='Sign in as developer' setIsDeveloper={setIsDeveloper} isDeveloper={isDeveloper} />
                }


            </div>
            

        </div>

    )
}

export default Dashboard_reg
