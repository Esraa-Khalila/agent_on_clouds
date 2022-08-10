const express = require("express");
const project = express();
const cors = require('cors')
project.use(cors());
project.use(express.json())


const itemsRouter = require("./routes/items");
project.use(itemsRouter);


const usersRouter = require("./routes/users");
project.use(usersRouter);

project.listen(3003, () => {
  console.log("connected");
});
