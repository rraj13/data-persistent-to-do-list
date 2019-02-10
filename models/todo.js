const orm = require("../config/orm.js");

var todo = {
    displayAll: function(cb) {
        orm.displayAll("todos", function(res) {
            cb(res);
        });
    },
    insertTodo: function(col1, col2, val1, val2, cb) {
        orm.insertTodo("todos", col1, col2, val1, val2, function(res) {
            cb(res);
        });
    },
    completeTodo: function(cols, vals, primarykey, id, cb) {
        orm.completeTodo("todos", cols, vals, primarykey, id, function(res) {
            cb(res);
        });
    },
    deleteTodo: function(primarykey, id, cb) {
        orm.deleteTodo("todos", primarykey, id, function(res) {
            cb(res);
        });
    }
};

module.exports = todo;