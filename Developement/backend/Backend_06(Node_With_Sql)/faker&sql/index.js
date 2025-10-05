const { faker } = require('@faker-js/faker');
const mysql=require("mysql2");

let getRandomUser=()=> {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

const connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"test",
    password:"root"
});

try{
    connection.query("show tables",(err,result)=>{
        if(err) throw(err);
        console.log(result);
    });
}
catch(err){
    console.log(err);
}

connection.end();// to end the process after the mysql queries has been executed.

console.log(getRandomUser());