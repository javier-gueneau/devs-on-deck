import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import Edit_card from "../screens/Edit_card"

const Card=({title,id,user,comment})=>{

const navigate=useNavigate()
const handleDelete=()=>{
    console.log('were in delete in Card componnnt')
    var answer=window.confirm('Warning! Are you sure want to DELETE this card?')
        if (answer){
            console.log('yes')
            axios.delete(`http://localhost:8000/api/card/${id}`)
            .then (res=>{
                console.log('in then of the delete ... (Should navigate now.., to / ) ')
                navigate('/')

            } )

        }
        else{
            console.log('no')
        }
}


    return(
        <div className="card" /* style="width: 18rem;" */ >
            
            <div className="card-body" >
            <h5 className="card-title">{title}</h5>
                <p className="card-text">{comment}</p>
            <p>Created by {user} </p>

            <div className="card_bottom" >
                <Link to={`/${id}`}> 
                <button  className="btn btn-outline-primary">Edit...</button>
                </Link>

                <button  className="btn btn-outline-dark" onClick={e=>handleDelete()} >Delete card</button>

            </div>
            </div>
        </div>
    )
}

export default Card