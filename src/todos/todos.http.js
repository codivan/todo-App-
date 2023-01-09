const {
  createTodo,
  deleteTodo,
  editTodo,
  getAllTodos,
  getTodoById,
} = require("./todos.controllers");

const getAll = (req, res) => {
  const data = getAllTodos();
  res.status(200).json({
    items: data.length,
    response: data,
  });
};

const getById = (req, res) => {
  const id = Number(req.params.id);
  if (id) {
    const data = getTodoById(id);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(400).json({ message: "Invalid Id" });
    }
  } else {
    res.status(400).json({ message: "Id is not a number" });
  }
};

const postNewTodo = (req, res) => {
  const data = req.body;
  if (data.title && data.description && typeof(data.status) === 'boolean') {
    const newTodo = createTodo(data);
    res.status(201).json({ message: "Todo created", data: newTodo });
  } else {
    res.status(400).json({ message: "Invalid arguments" });
  }
};

const putTodo = (req, res) => {
  const id = Number(req.params.id);
  const data = req.body;
  const newTodoEdited = editTodo(id, data);
  if (typeof(data.status) === 'boolean') {
    if (newTodoEdited) {
      if (newTodoEdited === 1) {
        res.status(200).json({ message: "No changes" });
      } else {
        res.status(200).json({ message: "Todo edited" });
      }
    } else {
      res.status(400).json({ message: "Invalid Id, todo doesn't exist" });
    }
  } else {
    res.status(400).json({ message: "Invalid arguments" });
  }
};

const delTodo = (req, res) => {
  const id = Number(req.params.id);
  if (id) {
    const data = deleteTodo(id);
    if (data) {
      res.status(200).json({ message: "Todo deleted" });
    } else {
      res.status(400).json({ message: "Invalid Id, todo doesn't exist" });
    }
  } else {
    res.status(400).json({ message: "Id is not a number" });
  }
};

module.exports = {
  getAll,
  getById,
  postNewTodo,
  putTodo,
  delTodo,
};
