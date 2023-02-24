import { Navigate, useNavigate } from "react-router-dom"

const Navbar=()=>{

    const navigate=useNavigate()

    //let userDetail=JSON.parse(localStorage.getItem('user'))
  
    const handleClick=e=>{
        //e.preventDefault()
        //console.log('userDetail is ...', userDetail)
        console.log(localStorage)
        //console.log(userDetail.user)
        //console.log(userDetail.user.name)
      }

    return(

        <div className='navbar'>
                <h1>Note Wall4</h1>
                <div className='navbar2' >
                    <h4>
                      Invitado
                    </h4>
                    <button className="btn btn-outline-dark" onClick={()=>navigate('/') } >log out</button>
                </div>
        </div>
    )
}

export default Navbar