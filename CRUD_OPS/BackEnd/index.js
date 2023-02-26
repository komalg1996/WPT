//1-import all required modules

const express= require('express');
const cors= require('cors');
const bodyparser= require('body-parser');
const mysql=require('mysql');

//2-express obj
const app=express();

//3-middleware for express
app.use(cors());
app.use(bodyparser.json());

//4-create object of mysql
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Root@12345',
    database:'crud'
});


//default HOME- get request api
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to IACSD</h1>");
});

//get all data from db
app.get('/student/getall',(req,res)=>{
    con.query("select* from student",(err,result)=>{
        if(err){
            console.log("----error in query----");
            console.log(err);
        }else{
            res.send(result);
        }
    });


//get student by id
app.get('/student/:id',(req,res)=>{
    let stdid=req.params.id;
    const q=`select* from student where id=${stdid}`
    con.query(q,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})

//add user to database
app.post('/adduser',(req,res)=>{
    let user=req.body;
    let q=`insert into student values(${user.firstName},${user.lastName},${user.email},${user.password},${user.id})`
    

    con.query(q,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

//update data
app.put('/update',(req,res)=>{
    let stdid=req.params.id;
    let item = req.body;

})

});








//start server
app.listen((3000),()=>{
    console.log("Running on 3000");
})