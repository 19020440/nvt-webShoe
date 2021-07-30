const express = require('express');
const cors = require('cors');
const app = express();
const route = require('./Route');
const cookieParser = require('cookie-parser');
const session = require('express-session');



app.use(express.urlencoded({
    extended: true,
}));
app.use(cors(
    {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST","DELETE"],
    credentials: true,
  }
  ))
app.use(express.json());
app.use(session({
    key: 'userId',
    secret: 'aothatday',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60*60*24,
    },
}))



app.use(cookieParser());

// app.get('/get_profile', (req, res) => {
    
//         if(req.session.user) {
//             res.json({username: req.session.user[0].username, login: true,})
//         } else {
//             res.json({login: false})
//         }
// })


route(app);

app.listen(3001, () => {
    console.log("running in port 3001")
})