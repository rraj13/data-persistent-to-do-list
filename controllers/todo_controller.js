const express = require("express");

const router = express.Router();

const todo = require("../models/todo.js");

//display all todos on load 
router.get("/", function(req, res) {
    todo.displayAll(function(data) {
        
        var hbsObject = {
            todo: data
        };

        res.render("index", hbsObject);
    
    }); 
});

//allows user to add a new todo to the database and reloads to display updated set of todos

router.post("/todos", function(req, res) {
    let newToDoInfo = req.body;

    todo.insertTodo("todo_item", "completed", newToDoInfo.content, newToDoInfo.completed, function(result) {

        res.json({id: result.insertId});
        
    });
});

//allows user to mark a todo as complete. stills renders to page but as greyed out

router.put("/todos/:id", function(req, res) {
    let completedToDo = req.body; 

    todo.completeTodo("completed", completedToDo.completed, "id", req.params.id, function(result) {

        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }

    });
});

//allows user to delete a todo from the list (different from completing a todo)

router.delete("/todos/:id", function(req, res) {

    todo.deleteTodo("id", req.params.id, function(result) {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;





