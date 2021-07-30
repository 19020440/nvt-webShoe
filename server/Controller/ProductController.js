const con = require('../SQL/mysql');


class ProductController {

    shoe(req, res, next) {
        const idProduct = req.params.id;
        
        con.query('select * from product where id = ?',[idProduct], (err, rs) =>{
            if(err) throw err;
            res.json(rs);
        })
        
    }

}

module.exports = new ProductController;