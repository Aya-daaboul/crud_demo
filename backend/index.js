import express from 'express' //beacuse type is module i should use import instead of require
import mysql from "mysql";
const app =express();

const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"aya123",
    database:"test"

})

app.use(express.json())
app.listen(8800, ()=>{
    console.log('connected to backend');
}
) 

app.get("/",(req,res)=>{
    res.json('hello world backend');
    
})
app.get("/books",(req,res)=>{
    //we need sql query to get all books from our db
    const q="Select * FROM book";
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.post("/books",(req,res)=>{
    //backticks //to test post method use postman get browser otherr postman
    const q= 'INSERT INTO book (`title`,`decription`,`cover`) VALUES(?)';
    //values from body which is a json in postman
    // const values=["title from backend","desc from backend","cover from backend"];

    const values=[
        req.body.title,
        req.body.decription,
        req.body.cover,
    ]
// we should take input from the user
db.query(q,[values],(err,data)=>{
    if(err) return res.json(err);
        return res.json('book created ! DONE!');
})

})