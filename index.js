console.log('2 sex')
import path from'path';

import express from 'express';
import mongoose from 'mongoose';    
import UserModel from './models/User.js';


const createPath = (page) => path.resolve( `${page}.html`);

mongoose.connect('mongodb+srv://valdis:1234@cluster0.lrnns58.mongodb.net/blog?retryWrites=true&w=majority')

.then(()=> console.log('ss galiciya end'))
.catch(() => console.log('pomylka'))

const app = express(); 

console.log('1 nane')
app.use(express.json())

app.post('/auth/register', async(req, res)=>{res.send('111jello'), console.log('ssssss')
const doc = new UserModel({
    email: req.body.email,
    fullName: req.body.fullName,
    
});

// console.log(doc)

    const user = await doc.save();
})

app.get('/auth/register',(req, res)=>{
    res.sendFile(createPath('index'));
});
console.log('2 sex')

app.listen(process.env.PORT, (err)=> {
    if(err){
        return console.log('sos')
    }
});
















