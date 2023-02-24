import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Adding_board_comp from "./Adding_board_comp"
import Adding_card_comp from "./Adding_card_comp"
import Board from "./Board"
import Card from "./Card"
import Test_comp from "./Test_comp"
import Prueba_prevent_default from '../screens/Prueba_prevent_default'

const Main_container=()=>{
    const [cards,setCards]=useState([])
    const[adding_board,setAdding_board]=useState(false)

    //let userDetail=JSON.parse(localStorage.getItem('user'))

    useEffect(()=>{
        axios.get('http://localhost:8000/api/card/list')
        .then(res=>{
            console.log('this is res.data....(main container) ', res.data)
            const data_rev=res.data.reverse()
            setCards(data_rev)
        })
    },[])


const Pushme=e=>{
    //e.preventDefault()
    console.log('yep')
    //setBoards([...boards,{title:'New Board'}])
    
    setAdding_board(true)
}

const go_here=e=>{
    console.log('prevent default prueba')
}

    return(
        <div className="container-fluid">

            <button className="btn btn-outline-primary" onClick={e=>Pushme()} >Add Card...</button>

            <div className="cool_container">
                {adding_board?
                    <Adding_card_comp user='Invitado' />
                    :''
                }
            {cards.map((a,i)=>{
                    return(
                        <Card key={i} title={a.title} comment={a.comment} id={a._id} current_user='Invitado' user={a.user} />    
                    )
                    })}
                

            </div>
           
        </div>
    )
}

export default Main_container