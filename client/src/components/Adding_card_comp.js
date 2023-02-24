import axios from "axios"
import { useState } from "react"

const Adding_card_comp=({user})=>{

    const[title,setTitle]=useState('')
    const[hasTitle,setHasTitle]=useState(false)
    const[boardID,setBoardId]=useState('')

    const handleSubmit=e=>{
        //e.preventDefault()
        console.log('handling board')
        setHasTitle(true)
        axios.post('http://localhost:8000/api/card/create',{
        title:`${title}`,
        comment:'Edit to add comment...',
        user:`${user}`

    })
        .then(res=>{
            console.log('this is my new res ..... feb 2023 ... ', res)
            console.log('this is my new res ..... feb 2023 ... ', res.data._id)
            setBoardId(res.data._id)
        })
    }

    return(
        <div className="card" >
            <form onSubmit={handleSubmit} >
                <label>
                    <input type='text' onChange={e=>setTitle(e.target.value)} placeholder='Card name...' />
                </label>
                <button>OK</button>
            </form>
            
            </div>
    )
}

export default Adding_card_comp