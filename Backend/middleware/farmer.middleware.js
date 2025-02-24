const farmerModel=require('../models/farmer');
const jwt = require('jsonwebtoken');


module.exports.authFarmer = async (req, res, next) => {    
    // Get token from cookies or headers
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    
    // Check if the token is missing
    if (!token) return res.status(401).json({ message: 'Unauthorized' });
    
    try {
        // Verify and decode the JWT token
        console.log('Verifying JWT token');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Check userType before proceeding
        if (decoded.userType !== 'farmer') {
            return res.status(403).json({ message: 'Forbidden: Not a valid Farmer' });
        }

        // Fetch user from the database
        req.farmer = await farmerModel.findById(decoded._id);
        
        // Proceed to the next middleware or route handler
        return next();
    } catch (error) {
        // Handle errors like invalid or expired token
        console.error('Token verification failed:', error);
        return res.status(401).json({ message: 'Unauthorized' });
    }
};
