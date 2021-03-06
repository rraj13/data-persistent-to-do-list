const connection = require("./connection.js");

var orm = {
    //display all todos on load, after a create and after an update
    displayAll: function (table, cb) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err

            cb(result);
        });
    },
    //creates a new todo
    insertTodo: function(table, col1, col2, val1, val2, cb) {
        let queryString = "INSERT INTO ?? (??,??) VALUES (?,?)";
        connection.query(queryString, [table, col1, col2, val1, val2], function(err, result) {
            if (err) throw err;

            cb(result);
        });
    }, 
    //marks todo as complete
    completeTodo: function(table, cols, vals, primarykey, id, cb) {
        let queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, cols, vals, primarykey, id], function(err, result) {
            if (err) throw err;

            cb(result);        
        });
    },
    //deletes todo
    deleteTodo: function(table, cols, vals, cb) {
        let queryString = "DELETE FROM ?? WHERE ?? = ?";
        connection.query(queryString, [table, cols, vals], function(err, result) {
            if (err) throw err;

            cb(result);

        });
    }
}

module.exports = orm;