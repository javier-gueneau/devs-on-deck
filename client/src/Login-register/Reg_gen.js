const Reg_gen=({title,subtitle,button,change,setIsDeveloper,isDeveloper,isLogin,setIsLogin})=>{
    

    
    
    
    const handle_user=e=>{
        e.preventDefault()
        console.log('log register form , handle user ')
        if(isDeveloper==false){
            setIsDeveloper(true)

        }
        else {
            console.log('isdeveloper:', isDeveloper)
            setIsDeveloper(false)

        } 
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
                <label className="form-label">Last Name</label>
                <input type="name" className="form-control" />
            </div>
             <div className="mb-3">
                <label className="form-label">Contact Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Address</label>
                <input type="email" className="form-control" id="address" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label className="form-label">City</label>
                <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Confirm Password</label>
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
                <label className="form-label">Org Name</label>
                <input type="email" className="form-control" id="org_name" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label className="form-label">First Name</label>
                <input type="email" className="form-control" id="first_name" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input type="email" className="form-control" id="last name" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Contact Email</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Org Address</label>
                <input type="email" className="form-control" id="org address" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Org City</label>
                <input type="email" className="form-control" id="city" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputPassword2"/>
            </div>
            
            <button type="submit" className="btn btn-success">{button}</button>
            <p  onClick={e=>handle_user(e)} className="horizontal_text" >{change} </p>
            </form>

</div>
}

        </div>
    )
}

export default Reg_gen