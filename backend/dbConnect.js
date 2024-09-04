const mongoose=require('mongoose');
const url='mongodb+srv://sukhdeep9c:aXuYoFj5cYGUdqxN@cluster0.4e0y0.mongodb.net';
mongoose.connect(url,{useUnifiedTopology: true});

const connection=mongoose.connection;

connection.on('error', err=>console.log(err));
connection.on('connected', ()=>console.log('MongoDB connected'));