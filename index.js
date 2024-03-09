const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const port = 8080;

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Venom-ous',
  password: 'Pawandeep@123',
  database: 'delta_app'
})


let getRandomUser = () => {
    return {
      Id: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }

  app.get("/", (req, res) => {
    res.send("app is working fine")
  })
  app.listen("8080", () =>{
    console.log(`server is listening to port:- ${port}`)
  })



// let q = "INSERT INTO user (ID, username, email, password) VALUES ?";
// let users = [
//   {"123b, 123_userb, abc@gmail.com, 1234"},
//   {"123c, 123_userc, abcc@gmail.com, 12345"},
// ]

// let data = [];
 

//for(let i = 0; i<100; i++){
//   data.push(getRandomUser());
// }
// try{
//   connection.query(q, [data], (err, result) => {
//     if(err) throw err;
//     console.log(result);
//   })
// }catch(err){
//   console.log(err);
// }