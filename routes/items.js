const express = require("express");
const connection = require("../db");
const itemsRouter = express.Router();

itemsRouter.post("/addItem", (req, res) => {
  const { title, description,user_id ,price,location} = req.body;
  (data = `INSERT INTO items (title,description,user_id,price,location) VALUES('${title}','${description}','${user_id}','${price}','${location}')`),
    connection.query(data, (err) => {
      if (err) {
        console.log(err);
      } else {
        res.send();
        
      }
    });
});

itemsRouter.get("/item", (req, res) => {
  connection.query("SELECT * FROM items ", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

itemsRouter.get("/item/:id", (req, res) => {
   const id = req.params.id;
  connection.query(`SELECT * FROM items WHERE id=${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

itemsRouter.put("/updateItem/:id", (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;
    const location = req.body.location;
  const id = req.params.id;
  
  connection.query(
    "UPDATE items SET title=?,description=? ,price=?, location=? WHERE id=?  ",
    [name, description, , locationprice, id,location,price],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

itemsRouter.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    "DELETE  FROM items WHERE id=?",
    [id],

    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
module.exports = itemsRouter;
