const { authenticate } = require('../config/jwt.config');
const Controller = require('../controllers/card.controllers');

module.exports = app => {
    app.post('/api/card/create', Controller.agregar)
    app.get('/api/card/list', Controller.listar)
    app.get('/api/card/:id', Controller.buscar)
    app.put('/api/card/:id', Controller.editar)
    app.delete('/api/card/:id', Controller.eliminar)
}