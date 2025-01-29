import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

export default (req, res, next) => {
    // Allow OPTIONS requests without authentication
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);  // Respond OK for preflight
    }

    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) return res.status(401).json({success:false,message:'No token provided.'});

    // decode token, verifies secret and checks expiration
    jwt.verify(token, SECRET_KEY, function(err, decoded) {
        if (err){
            res.status(403).json({success:false, message:'Token not valid'});
        }else {
            // if everything is good, save in req object for use in other routes
            req.loggedUser = decoded;
            next();
        }
    });
};