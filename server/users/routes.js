var Backbone   = require('backbone');
var jwt        = require('jsonwebtoken'); // used to create, sign, and verify tokens
var fixture    = require('./fixture');
var collection = new Backbone.Collection(fixture);

module.exports = function (api) {
    api.route('/api/users').get(function (req, res) {
        res.json(collection);
    });

    api.route('/api/users/:id').get(function (req, res) {
        var model = collection.get(req.params.id);
        res.json(model);
    });
    
    // ---------------------------------------------------------
    // authentication (no middleware necessary since this isnt authenticated)
    // ---------------------------------------------------------
    // http://localhost:9000/api-mock/users/authenticate
    api.route('/api/users/login').post(function (req, res) {

        // find the user
        var userMail = req.body.email;
        
        var user = collection.find(function(model) { 
            return model.get('email') === userMail; 
        });
        
            if (!user) {
                res.json({success: false, message: 'Authentication failed. User not found.'});
            } else if (user) {

                // check if password matches
                if (user.get('password') !== req.body.password) {
                    //res.json({success: false, message: 'Authentication failed. Wrong password.'});
                    return res.status(401).json({
                       'message': 'Fallo de autenticación. Password inválido.'
                    });
                } else {

                    // if user is found and password is right
                    // create a token
                    var token = jwt.sign(user, api.get('superSecret'), {
                        expiresIn: 86400 // expires in 24 hours
                    });

                    res.json({
                        success: true,
                        message: 'Disfrute su token!',
                        secret: token,
                        userId: user.get('id')
                    });
                }

            }
    });

    api.route("/api/users/logout").post(function (req, res, next) {
        // No hacemos nada con el token
        // por ahora. Ya que no lo hemos 
        // almacenado en nignún lado.
        // Solamente retornamos exito.
        return res.status(200).json({
                "message": "User has been successfully logged out"
        });
        
    });

};
