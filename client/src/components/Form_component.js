import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Form_component1=()=>{
  
    return(
        <div>
            
            <form onSubmit={handleSubmit} >
                <div>
                    <label>
                      Title of Post
                      <input type='text' onChange={e=>setTitleOfPost(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                      Post
                      <textarea  name="description" defaultValue=''  onChange={e=>setPost(e.target.value)}/>
                    </label>
                </div>
                <button>Send Post </button>
            </form>
        </div>
    )
}

export default Form_component1