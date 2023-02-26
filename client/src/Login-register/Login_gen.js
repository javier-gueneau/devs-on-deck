import { useNavigate } from "react-router-dom"

const Login_gen=({title,subtitle,button,change,setIsDeveloper,isDeveloper,isLogin,setIsLogin})=>{
    
    const navigate=useNavigate()
    const handle_submit=e=>{
        e.preventDefault()
        console.log('en submit')
        navigate('/dashboard_skills')
    }


    const handle_user=e=>{
        e.preventDefault()
        console.log('log register form , handle user ')
        if(isDeveloper==false){
            setIsDeveloper(true)

        }
        else setIsDeveloper(false)
    }
    
    
    return(
        

        <div className="login_register_form" >

            <h1>{title}</h1>
            <p>{subtitle}</p>


            <form onSubmit={e=>handle_submit(e)} >
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            
            <button type="submit" className="btn btn-success">{button}</button>
            <p  onClick={e=>handle_user(e)} className="horizontal_text" >{change} </p>
            </form>
            
            
        </div>
    )
}

export default Login_gen