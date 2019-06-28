const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const painter_controller = require('../controllers/painterController');


// a simple test url to check that all of our files are communicating correctly.
router.post('/create', painter_controller.painter_create);
router.get('/:id', painter_controller.painter_details);
router.put('/:id/update', painter_controller.painter_update);
router.delete('/:id/delete', painter_controller.painter_delete);
router.get('', function(req,res){//localhost:8080
    //lo que dice que cuando este localhost en su raiz osea sin nada que vaya y lo devuelva login.html
    res.sendfile('C:/Users/luisf/Desktop/artGalery/public/signUp.html');// Carga unica de la vista
});
module.exports = router;