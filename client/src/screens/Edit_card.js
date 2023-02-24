import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import Navbar from "../components/Navbar"

const Edit_card=props=>{

    const {id}=useParams();
    const[title,setTitle]=useState('')
    const[comment,setComment]=useState('')
    const[user,setUser]=useState('')
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/card/${id}`)
        .then(res=>{
            console.log('en then ?? ')
            console.log('res coming....', res)
            console.log('res_data coming....', res.data.data)
            setTitle(res.data.data.title)
            setComment(res.data.data.comment)
            setUser(res.data.data.user)
        },[])
        .catch(err=>{
            console.log('catch')
        })
    },[])

    const submit_form=e=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/card/${id}`,{
            title:`${title}`,
            comment:`${comment}`
        })
        .then(res=>{
            console.log('en RES ..... EDIT CARD')
            console.log('esto es res:',res)
        })
        .catch(err=>{
            console.log('were in catch ??')
        })

        console.log('in submit still jeje ')
        navigate('/dashboard')
    }

    

    return(
        <div>
            <Navbar/>

            <h1>{title} </h1>
            <p>{comment} </p>
            <p className="p_pequeno" >Created by user : {user} </p>

            <form onSubmit={submit_form} className='form-group' >
                <label> Title
                    <input className="form-control" type='text' name='title' onChange={e=>setTitle(e.target.value)} />
                </label>
                <label> Comment

                <textarea className="form-control" name='comment' rows='5' cols='50' onChange={e=>setComment(e.target.value)} />
                </label>
                
                
                <button className="btn btn-outline-primary" >push</button>
            </form>



            <Link to="/dashboard">Back to main</Link>

        </div>
    )
}

export default Edit_card