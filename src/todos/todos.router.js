const router = require("express").Router();
const httpTodos = require("./todos.http");

router.route("/todos").get(httpTodos.getAll).post(httpTodos.postNewTodo);

router
  .route("/todos/:id")
  .get(httpTodos.getById)
  .put(httpTodos.putTodo)
  .delete(httpTodos.delTodo);

module.exports = {
  router,
};
