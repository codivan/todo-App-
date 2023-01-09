const express = require("express");
const useRouter = require("./todos/todos.router").router;
require("dotenv").config();

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/todoapi/v1", useRouter);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
