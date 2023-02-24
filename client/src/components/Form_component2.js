import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Form_component2=handleSubmit=>{
    const [titleOfPost,setTitleOfPost]=useState('')
    const[post,setPost]=useState('')

     

    return(
        <div>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                      Title of Post
                      <input type='text' id='text' onChange={e=>setTitleOfPost(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                      PostsetTitleOfPost()
                      <textarea name="description" defaultValue='' id='description' />
                    </label>
                </div>
                <button>Send Post </button>
            </form>
        </div>
    )
}

export default Form_component2