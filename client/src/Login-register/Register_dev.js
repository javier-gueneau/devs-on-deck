const Register_dev=({title,subtitle,button,change,setIsDeveloper,isDeveloper,isLogin,setIsLogin})=>{
    
    
    
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


{isDeveloper
?
<div>
<form>
            <div className="mb-3">
                <label className="form-label">First Name</label>
                <input type="name" className="form-control" />
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Last Name</label>
                <input type="name" className="form-control" />
            </div>
             <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Contact Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">City</label>
                <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" />
            </div>
            
            <button type="submit" className="btn btn-success">{button}</button>
            <p  onClick={e=>handle_user(e)} className="horizontal_text" >{change} </p>
            </form>

</div>
:

<div>
            <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Org Name</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">First Name</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Last Name</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Contact Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Org Address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Org City</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            
            <button type="submit" className="btn btn-success">{button}</button>
            <p  onClick={e=>handle_user(e)} className="horizontal_text" >{change} </p>
            </form>

</div>
}

        </div>
    )
}

export default Register_dev