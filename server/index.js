import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts',postRoutes)

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit : "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb://127.0.0.1:27017/memoriesDB';
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL)
.then(()=> app.listen(PORT,()=> console.log(`app is live on ${PORT}`)))
.catch((err)=> console.log(err.message))

// mongoose.set('useFindAndModify', false);