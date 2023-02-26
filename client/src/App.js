import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes, useNavigate, useNavigation } from 'react-router-dom';

import UserContext from './contexts/user_context';
import Dashboard from './Dashboard/Dashboard';
import Dashboard_login from './Dashboard/Dashboard_login';
import Dashboard_reg from './Dashboard/Dashboard_reg';
import Dashboard_skills from './Dashboard_skills/Dashboard_skills';


function App() {
  
  const navigate=useNavigate()
const [usuario,setUsuario]=useState([])

  return (

      <UserContext.Provider value={{usuario,setUsuario}} >

          <div className="App">
                <Routes>
                    

                      <Route path='/reg' element={<Dashboard_reg/> } />
                      <Route path='/dashboard_skills' element={<Dashboard_skills/> } />
                      <Route path='/reg' element={<Dashboard_reg/> } />
                      <Route path='/' element={<Dashboard_login/> } />

                </Routes>
            </div>

      </UserContext.Provider>

  );
}

export default App;
