const express = require('express');
const app = express();
const morgan = require('morgan');


const memberRouter = require('./routes/memberRoutes')


//1) MIDDLEWARES 
app.use(morgan('dev'))
app.use(express.json());

app.use((req, res, next) => {
    console.log('Hello from the middleware');
    next();
})

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})



// 3) ROUTES
app.use('/api/v1/members', memberRouter)


module.exports = app;

/////////////////
///Initial Code for paths

// app.get('/', (req, res) => {
//     res.status(200).json({message: 'Hello, yerrrr!', app: "/Natours"});
// });

// app.post('/', (req, res) =>{
//     res.send('You can post to this endpoint...!')
// })
