const jwt= require('jsonwebtoken');
const { secret } = require('../config/jwt.config');
const Model = require('../models/card.model');

module.exports.agregar = (req, res) => {

    /* jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
        console.log(payload)
    }); */
    
    //const purchaseUser=payload._id
    
    const {title,comment,user,fromBoard}=req.body
    Model.create({
        title,
        comment,
        user,
        fromBoard
    })
    .then((purchases) =>res.json(purchases))
    
    .catch(err=>res.json(err))
}

module.exports.listar = (req, res) => {

    //const payload=jwt.decode(req.cookies.usertoken, secret  );

    console.log(Model)

    Model.find({})
        .then((purchases) =>res.json(purchases))
        .catch(err=>res.json(err))
    }
    

//editar
module.exports.editar = (req, res) => {
    Model.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
    .then((autores) =>res.json(autores))
    .catch(err=>res.json(err))
}

//eliminar
module.exports.eliminar=(request,response)=>{
    Model.deleteOne({_id: request.params.id}  )
    .then(deleteConfirmation =>response.json(deleteConfirmation))
    .catch(err=>response.json(err))
}


//look up
module.exports.buscar = (req, res) => {
    Model.findById(req.params.id)
    .then(data =>res.json({data:data}))
    .catch(err=>res.json(err))
}