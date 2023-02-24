import axios from "axios"
import { useEffect, useState } from "react"
import {    Link, useNavigate } from "react-router-dom"
//import Form_component from "../components/Form_component"
import Form_component2 from "../components/Form_component2"
import Navbar from "../components/Navbar"

const Add_card=()=>{
    
    const [titleOfPost,setTitleOfPost]=useState('')
    const[post,setPost]=useState('')
    const[fromBoard,setFromBoard]=useState('')
    const navigate=useNavigate()
    //let userDetail=JSON.parse(localStorage.getItem('user'))
    const[boards,setBoards]=useState([])
  
    const handleClick=e=>{
        console.log('handle click')
    }

    useEffect(()=>{
        axios.get('http://localhost:8000/api/board/list')
        .then(res=>{
            console.log('this is res.data....(add card) ', res.data)
            setBoards(res.data)
        })
    },[])
  
    const handleSubmit=e=>{
        e.preventDefault()
        console.log('handle sumbit ... add card ',e.target)
        axios.post('http://localhost:8000/api/card/create',{
            title:titleOfPost,
            comment:post,
            user:'Prueba',
            fromBoard:fromBoard
        })
        .then(res=>{
            console.log('this is then , res ....', res)
            //console.log('this is user - userDetail ... ', userDetail)
            //console.log('this is user - userDetail-user-name ... ', userDetail.user.name)
            alert('alert testing')
            navigate('/')
        })
    
    }
  

    return(
        <div>
            <Navbar/>

            {boards.map((e,i)=>{

            })}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                      Title of Post
                      <input type='text' onChange={e=>setTitleOfPost(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                      Post
                      <textarea name="description" defaultValue='' onChange={e=>setPost(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        select for real
                        <select id='seeing' onChange={e=>setFromBoard(e.target.value)} >
                        <option  >select </option>

                            {boards.map((e,i)=>{
                                return(
                                    <option key={i} >{e.title} </option>

                                )
                            })}
                        
                        </select>
                    </label>
                </div>
                <button>Send Post </button>
            </form>
            <Link to="/">Back to main</Link>
        </div>
    )
}

export default Add_card