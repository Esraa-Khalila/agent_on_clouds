const connection = require("../db");
const express = require("express");
const bcrypt = require("bcrypt");
const usersRouter = express.Router();
const jwt = require("jsonwebtoken");

usersRouter.post("/register", (req, res) => {
  const { user_name, email, password } = req.body;

  const hashPassword = bcrypt.hashSync(
    password,
    Number(process.env.SALT),
    (err, result) => {
      if (err) throw err;
    }
  );
  (data = `INSERT INTO users (user_name,email,password) VALUES('${user_name}','${email}','${hashPassword}')`),
    connection.query(data, (err) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Added success");
      }
    });
});
usersRouter.post("/login",  async(req, res) => {
  let SECRET = "item";
  const { email, bodyPassword } = req.body;
  const query = `SELECT * FROM users WHERE email ='${email} '`;
  connection.query(query, async (err, result) => {
    if (err) throw err;
    //check if there is user with the request data
    if (result.length) {
      let password =await bcrypt.compare(req.body.bodyPassword, result[0].password);
      console.log(password);
   console.log(bodyPassword);
      if ( password) {
        const payload = {
          id: result[0].id,
          user_name: result[0].user_name,
          email: result[0].email,
          password: result[0].password,
        };
        const options = {
          expiresIn: "10h",
        };
        //putting token to login account
        token = jwt.sign(payload, SECRET, options);
        res.status(200).header("x-auth", token).json(token);
      } else {
        return res.status(301).json("Invalid Email or password..");
      }
    } else return res.status(301).json("Invalid Email or password..");
  });
});
module.exports = usersRouter;
