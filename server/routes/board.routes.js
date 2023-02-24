const { authenticate } = require('../config/jwt.config');
const Controller = require('../controllers/board.controllers');

module.exports = app => {
    app.post('/api/board/create', Controller.agregar)
    app.get('/api/board/list', Controller.listar)
    app.get('/api/board/:id', Controller.buscar)
    app.put('/api/board/:id', Controller.editar)
    app.delete('/api/board/:id', Controller.eliminar)
}