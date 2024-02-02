import './loadEnv.js';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import moviesRouter from './routes.js/movies.js';
import usersRouter from './routes.js/users.js'

console.log(process.env.ATLAS_URI);

const app = express()
const PORT = process.env.PORT || 4000;

//middlewares
app.use(cors()); // allows forn end to connect to backend
app.use(morgan('dev')); // logger
app.use(express.json()); // for data in req.body
app.use(express.urlencoded({extended: true})); // Allows data in url string 

// Routes
app.use ('/api/movies', moviesRouter)
app.use('/api/users', usersRouter)

app.get('/', (req, res) => {
    res.send('backend...')
})

app.listen(PORT, () => 
console.log(`log server running on port: ${PORT}`))