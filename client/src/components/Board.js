import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Card from "./Card"

const Board=({title,id,user})=>{

    //const[title,setTitle]=useState('')
    const[hasTitle,setHasTitle]=useState(false)
    const navigate=useNavigate()
    const[cards_by_board,setCards_by_board]=useState([])

    /* const handleSubmit=e=>{
        console.log('handling board')
        setHasTitle(true)
    } */

    useEffect(()=>{
        axios.get('http://localhost:8000/api/card/list')
        .then(res=>{
            console.log('doing', `${title}`,res.data)
            let cards_by_board_temp=res.data.filter(x=>x.fromBoard==`${title}`)
            console.log('cards by board temp...',cards_by_board_temp)
            setCards_by_board(cards_by_board_temp)
        })
    },[])


    const handleDelete=e=>{
        console.log('pushd')
        //alert('Are you sure you mean to DELETE this card?')
        var answer=window.confirm('Warning! Are you sure you want to DELETE this board, and all of its cards?')
        if (answer){
            console.log('yes')
            axios.delete(`http://localhost:8000/api/board/${id}`)
            .then (res=>{
                console.log('in then')
                navigate('/')

            } )

        }
        else{
            console.log('no')
        }
        
    }

    const prueba_board=()=>{
        console.log('s')
        console.log('wewewewe', cards_by_board[0].title)
    }


    return(
        <div className="board">
            <p>{title}</p>



            {cards_by_board.map((a,i)=>{
                return(
                    <Card key={i} title={a.title} comment={a.comment} id={a._id} />
                )
            })}
            <p>Created by {user}</p>
            <Link to='/add_card'>Add card...</Link>
            <button onClick={e=>handleDelete()} >Delete Board</button>
        </div>
    )
}

export default Board