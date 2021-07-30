

function validateUser (req, res, next)  {
    if(req.session.user) {
        res.json({login: true})
    } else {
        res.json({login: false})
        next();
    }
}

module.exports = {validateUser};

