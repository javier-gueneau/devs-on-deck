import { Navigate, useNavigate } from "react-router-dom"

const Navbar=({setIsDeveloper,setIsLogin,isDeveloper,isLogin})=>{
  const navigate=useNavigate()

  const handle_reg=e=>{
      e.preventDefault()
      if(isLogin==true){
        //setIsLogin(false)
        navigate('/reg')
      }
      else{
        //setIsLogin(true)
        navigate('/')
      }
  }

  const handle_org_reg=e=>{
    e.preventDefault()
    if(isLogin==true){
      console.log('probando')
      setIsLogin(false)
      setIsDeveloper(false)
      navigate('/reg',isDeveloper={isDeveloper},setIsDeveloper={setIsDeveloper})
    }
    else{
      //setIsLogin(true)
      navigate('/')
    }
  }

    return(

        <div className='navbar'>
                <h1>Devs on deck</h1>
            {isLogin
                ?
                <div className="navbar2" >
                    <button onClick={e=>handle_reg(e)} className='nav_button' >Registration</button>

                </div>
                : 
                <div className="navbar2" >
                    <button onClick={e=>handle_reg(e)} className='nav_button' >Login</button>
                </div>
            }
        </div>
    )
}

export default Navbar