const express=require("express");
const path=require("path");
const methodOverride=require("method-override");
const { faker } = require('@faker-js/faker');
const mysql=require("mysql2");

const app=express();

const port=8080;

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));


let getRandomUser=()=> {// this function returns "fake" user data in the form of an array
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ]
};

let getId=()=>{ // i made this function to get only id from "faker" while inserting new user.
  return faker.string.uuid();
}


const connection= mysql.createConnection({
  host:"localhost",
  user:"root",
  database:"practice",
  password:"root"
});

// let q="insert into first_table (id,username,email,password) values ?"; // "?" is the "placeholder" which accepts the info from the "data" array.
// let data=[];
// for (let i=1; i<=100 ;i++){
//     data.push(getRandomUser());// gets 100 fake users info and pushes to "data" array.
// }


// try{
//   connection.query(q,[data],(err,result)=>{ // with the "query" we are sending "data" too.
//     if(err) throw err;
//     console.log(result);
//   });
    
// }catch(err){
//   console.log(err);
// }
      
// connection.end();// to end the process after the mysql queries has been executed.


//home route
app.get("/",(req,res)=>{
  let q=`select count(*) from first_table`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      console.log(result); // this is the output of "result" :- [ { 'count(*)': 100 } ]
      let count=result[0]["count(*)"];// "count" varibale stores the number of users.
      res.render("home.ejs",{count});
    });
      
  }catch(err){
    console.log(err);
    res.send("some error in db");
  }
});
  
//show users route
app.get("/users",(req,res)=>{
let q=`select * from first_table`;
try{
  connection.query(q,(err,users)=>{
    if(err) throw err;
    res.render("showusers.ejs",{users});
    });
      
  }catch(err){
    console.log(err);
    res.send("some error in db");
  }
});

//Edit route
app.get("/user/:id/edit",(req,res)=>{
  let {id}=req.params;
  let q=`select * from first_table where id='${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      console.log(result); // user's full info will be fetched by this "result".
      let user=result[0];
      res.render("edit.ejs",{user});
      });
      
    }catch(err){
      console.log(err);
      res.send("some error in db");
    }
});

//Edit (db) route
app.patch("/user/:id",(req,res)=>{
  let {id}=req.params;
  let {password:formPass,username:newUsername}=req.body;
  let q=`select * from first_table where id='${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user=result[0];
      if(formPass!=user.password){
        res.send("wrong password");
      }else{
        let q2=`update first_table set username='${newUsername}' where id='${id}' `;
        connection.query(q2,(err,result)=>{
          if(err)throw err;
          res.redirect("/users");
        });
      }
    });
      
  }catch(err){
      console.log(err);
      res.send("some error in db");
  }
});

// delete route
app.get("/user/:id/delete",(req,res)=>{
  let {id}=req.params;
   let q=`select * from first_table where id='${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user=result[0];
      res.render("delete.ejs",{user});
      });
      
    }catch(err){
      console.log(err);
      res.send("some error in db");
    }
});

// delete (db) route
app.delete("/user/:id",(req,res)=>{
  let {id}=req.params;
  let {password:formPass,username:newUsername}=req.body;
  let q=`select * from first_table where id='${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user=result[0];
      if(formPass==user.password && newUsername==user.username){
        let q2=`delete from first_table where id='${id}'`;
        connection.query(q2,(err,result)=>{
          if (err) throw err;
          res.redirect("/users");
        });
      }else{
        res.send("either password or email is wrong");
      } 
  });

}catch(err){
      console.log(err);
      res.send("some error in db");
  }
});

// new user route
app.get("/newUser",(req,res)=>{
  res.render("newUser.ejs");
});

app.post("/newUser",(req,res)=>{
  let id=getId();
  let {username,email,password}=req.body;
  let q=`insert into first_table (id,username,email,password) values ('${id}','${username}','${email}','${password}') `;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      res.redirect("/users");
      });
      
    }catch(err){
      console.log(err);
      res.send("insertion error");
    }
});

app.listen(port,()=>{
  console.log(`app listing to port ${port}`);
});