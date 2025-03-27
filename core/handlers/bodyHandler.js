function bodyHandler(requiredParams) {
    return function(req, res, next) {
        const missingParams = requiredParams.filter(param => !req.body.hasOwnProperty(param));
        
        if (missingParams.length > 0) {
            return res.status(400).json({
                error: 'Missing required parameters',
                missingParams: missingParams
            });
        }
        
        next();
    };
}

module.exports = bodyHandler;