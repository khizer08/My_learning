const { faker } = require('@faker-js/faker');
const mysql=require("mysql2");

let getRandomUser=()=> {// this function returns "fake" user data in the form of an array
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ]
};

let q="insert into first_table (id,username,email,password) values ?"; // "?" is the "placeholder" which accepts the info from the "data" array.
let data=[];
for (let i=1; i<=100 ;i++){
  data.push(getRandomUser());// gets 100 fake users info and pushes to "data" array.
}

const connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"practice",
    password:"root"
});


try{
  connection.query(q,[data],(err,result)=>{
    if(err) throw err;
    console.log(result);
  });

}catch(err){
  console.log(err);
}

connection.end();// to end the process after the mysql queries has been executed.
