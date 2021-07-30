const con = require('../SQL/mysql');
const bcrypt = require('bcrypt');
const { patch } = require('../Route/product');
const { connect } = require('../SQL/mysql');
const saltRounds = 10;
class SiteController {
    index(req, res, next) {
        // const userName = req.body.userName;
        // const passWord = req.body.passWord;
        // var insertSql = 'insert into product (userName, passWord) Values (?, ?)';
        // con.query(insertSql,[userName, passWord] ,function(err, result) {
        //     if (err) throw err;
        //     console.log(result);
        // })
        const sortType = req.query.sort;
        const brand = req.query.brand;
        // const brand = brands.toUpperCase();
        
        if(brand == undefined) {
            console.log(sortType)
            if(sortType == undefined) {
                const renderProduct = 'select * from product'
                con.query(renderProduct, (err, rs) => {
                    if(err) throw err;
                    res.json(rs);
                })}
            else {
                if(sortType == 'desc') {
                    const renderProduct = 'select * from product order by price desc'
                    con.query(renderProduct, (err, rs) => {
                        if(err) throw err;
                        res.json(rs);
                    })
                } else if( sortType == 'asc' ) {
                    const renderProduct = 'select * from product order by price asc'
                    con.query(renderProduct, (err, rs) => {
                        if(err) throw err;
                        res.json(rs);
                    })
                } 
            }
        } else {
            if(sortType == undefined) {
                // const renderProduct = `select * from product where type=${brand}`
                con.query(`select * from product where type like '%${brand}%' `, (err, rs) => {
                    if(err) throw err;
                    res.json(rs);
                })}
            else {
                // if(sortType == 'desc') {
                //     const renderProduct = 'select * from product order by price desc'
                //     con.query(renderProduct, (err, rs) => {
                //         if(err) throw err;
                //         res.json(rs);
                //     })
                // } else if( sortType == 'asc' ) {
                //     const renderProduct = 'select * from product order by price asc'
                //     con.query(renderProduct, (err, rs) => {
                //         if(err) throw err;
                //         res.json(rs);
                //     })
                // } 
                
                con.query(`select * from product where type like '%${brand}%' order by price ${sortType}`, (err, rs) => {
                        if(err) throw err;
                        console.log(rs.length);
                        res.json(rs);
                })
            }
        }
    }

    login(req, res, next) {
        const username = req.body.username;
        const password = req.body.password;
        con.query('select * from user where username = ?', username, (err, rs) => {
            if(rs.length > 0) {
                bcrypt.compare(password, rs[0].password, (error, hash) => {
                    if(err) throw err;
                    if (hash) {
                        req.session.user = rs;
                        
                        // res.cookie('user', rs, {maxAge: 360000})
                        res.json({succes: true})
                    } else {
                        res.json({password: 'sai mật khẩu'})
                    }
                });
            } else {
                res.json({username: 'username không tồn tại đăng ký để tiếp tục'})
            }
        });
    }
        
    

    register(req, res, next) {
        const username = req.body.username;
        const password = req.body.password;
        const fullname = req.body.fullname;
        const email = req.body.email;
        const phone = req.body.phone;
        var body = {};
        con.query('select * from user where username = ? or email = ? or phoneNumber = ?' , [username,email,phone], (err, rs) => {
            if(rs.length >0) {
                if(rs[0].email == email) body.email = 'Đã tồn tại email';
                if(rs[0].phoneNumber == phone) body.phonenumber = 'Đã tồn tại số điện thoại';
                if(rs[0].username == username) body.username = 'Đã tồn tại username';
                console.log(body);
                res.json(body)
                return;
            }
            bcrypt.hash(password, saltRounds, (err, hash) => {
                if(err) throw err;
    
                con.query('insert into user (username, password, phoneNumber,email,fullName) values (?,?,?,?,?) ',[username,hash,phone,email,fullname], (err, result) => {
                    console.log(err);
                });
            })
            res.json({regis: 'success'})
        })

    }


    search(req, res, next) {
        const product = req.query.product;
        const sort = req.query.sort;
        console.log(sort)
        if(sort === undefined) {
            con.query(`select * from product where product.name like '%${product}%' or product.type like '%${product}%' `, (err,rs) => {
                if(err) throw err;
                // console.log(rs)
                res.json(rs);
            })
        } else {
                con.query(`select * from product where product.name like '%${product}%' or product.type like '%${product}%' order by price ${sort}`, (err,rs) => {
                    if(err) throw err;
                    // console.log(rs)
                    res.json(rs);
                })
            }    
    }
    
    getProfile(req, res, next) {
        if(req.session.user) {
        //    console.log(req.session.user)
            res.json({username: req.session.user[0].username, login: true,})
        } else {
            res.json({login: false})
        }

    //     if(req.session.user) {
    //         console.log(req.session.user )
    //         console.log('neu nhu ngya anh buwoc den vi anh da yeu thuong em va noi em chung tinhy' )
    //         res.json({ login: true,})
    //     } else {
    //         res.json({login: false})
    //     }
    }

    logout(req, res, next) {
        
        // res.cookie('userId', {}, {maxAge: -1});
        // res.clearCookie('userId');
        // cookies.set('userId', {expires: Date.now()});
        // console.log('do')
        req.session.destroy(function(err) {
            if(err) throw err;
          })
        // req.clearCookie('user', { path: '/' ,expires: new Date (Date.now()+360000    )})
        // res.setHeader('set-cookie', 'user=; max-age=0');
        // res.cookie('user', {maxAge: -1});
        // res.clearCookie('user', {domain: "localhost"})
        // res.cookie("user", "", { expires: new Date(0),domain:'localhost', path: '/' });
        // res.clearCookie("user", {maxAge: 360000})
    }

    addCart(req, res, next) {
        if(req.session.user) {
            const productId = req.body.productId;
            con.query('select * from cart where customerId = ? and productId=?',[req.session.user[0].id,productId], (err, rs) => {
                if(err) throw err;
                if(rs.length == 0 ) {
                    con.query('insert into cart (customerId, productId, quantityProduct) values (?, ?, ?)', [req.session.user[0].id,productId,1], (err,rss) => {
                        if(err) throw err;
                    
                        res.json({addProduct: 'success'})
                        console.log('insert success!')
                    })
                } else {
                    con.query(' update cart set quantityProduct = quantityProduct +1 where productId = ? ', [productId], (err, rs) => {
                        if(err) throw err;
                        console.log('update success!')
                        res.json({addProduct: 'success'})
                    })
                }
            })
        }

    }

    shopCart(req, res, next) {
        if(req.session.user) {
            con.query('SELECT id, name, image, price, type, content, cart.quantityProduct FROM shopgiay.product inner join cart on cart.productId = product.id and cart.customerId = ?',req.session.user[0].id, (err,rs) => {
                if(err) throw err;
                res.json(rs);
            })
        }
    }

    shopCart2(req, res, next) {
        if(req.session.user) {
            con.query('SELECT id, name, image, price, cart.quantityProduct FROM shopgiay.product inner join cart on cart.productId = product.id and cart.customerId = ?',req.session.user[0].id, (err,rs) => {
                if(err) throw err;
                res.json(rs);
            })
        }
    }

    changeCart(req, res, next) {
        if(req.session.user) {
            const productId = req.body.productId;
            const quantityProduct = req.body.quantityProduct;
            con.query(' update cart set quantityProduct = ? where productId = ? and cart.customerId = ?', [quantityProduct,productId,req.session.user[0].id], (err, rs) => {
                if(err) throw err;
                console.log('update success!')
                res.json({addProduct: 'success'})
            })
        }
    }

     removeCart(req, res, next) {
        if(req.session.user) {
            // con.connect();
            
                const productId = req.params.id;
                const userId = req.session.user[0].id;
                con.query(' delete from cart where productId = ? and customerId = ? ',[productId,userId], (err, rs) => {
                    if(err) throw err;
                    console.log('dooo')
                })
                // con.end();
        }
    }

    removeCartAll(req, res, next) {
        if(req.session.user) {
                const arr = req.body.allId;
                const userId = req.session.user[0].id;
                console.log(arr)
                con.query(' delete from cart where productId in (?) and customerId = ? ',[arr,userId], (err, rs) => {
                    if(err) throw err;
                    console.log('dooosss')
        })
    }
}

    addAddress(req, res, next) {
        if(req.session.user) {
            const fullname = req.body.fullname
            const phonenumber = req.body.phonenumber
            const tinh = req.body.tinh
            const quan = req.body.quanhuyen
            const cuthe = req.body.cuthe
            const phuong = req.body.phuongxa
            const userId = req.session.user[0].id
            con.query('insert into address (fullname, phonenumber ,tinh ,quan ,phuong, cuthe ,customerId) values ( ?, ?, ?, ? ,?,?,?)',[fullname,phonenumber,tinh,quan,phuong,cuthe,userId], (err,rs) => {

            })
        }
    }
    
    checkAddress(req, res, next) {
        if(req.session.user) {
            const userId = req.session.user[0].id;
            con.query('select * from address where customerId = ?', userId, (err, rs) => {
                if(err) throw err;
                if(rs.length > 0) {res.json({address: true, value: rs})
            console.log('co')}
                else res.json({address: false})
            })
        }
    }

    newProduct(req, res, next) {
        con.query('select id,name,price,type,image from product limit 20', (err, rs) => {
            if(err) throw err;
            res.json(rs);
        })
    }

    comment(req, res, next) {
        if(req.session.user) {
            const userId = req.session.user[0].id;
            const idProduct = req.body.idProduct;
            const comment = req.body.comment;
            con.query('insert into comment (text, idUser, idProduct) values (?, ?, ?)',[comment, userId, idProduct], (err, rs) => {
                if(err) throw err;
                else {
                    con.query('select avatar from user where id = ?',[userId], (err, rss) => {
                        if(err) throw err;
                        res.json({username: req.session.user[0].username, avatar: rss[0].avatar})
                        
                    })
                    
                }
                console.log('add Comment success!!');
            })
        }
        
    }

    getComments(req, res, next) {
        
            const idProduct = req.params.id;
            con.query('select comment.text, (select user.username from user where id = comment.idUser) as username, (select user.avatar from user where id = comment.idUser) as avatar from comment where idProduct = ?', [idProduct], (err, rs) => {
                if(err) throw err;
                res.json(rs);
            })
        }
    
 }
module.exports = new SiteController;