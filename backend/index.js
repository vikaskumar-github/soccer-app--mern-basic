import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/soccerRoutes'


const app =  express();
const PORT = 4000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());

routes(app);

app.get('/',(req, res) => {
    res.send(`Our Soccer application is running ${PORT}`);
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})