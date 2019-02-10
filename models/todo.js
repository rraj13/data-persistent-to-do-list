const orm = require("../config/orm.js");

var todo = {
    selectAll: function(cb) {
        orm.selectAll("todos", function(res) {
            cb(res);
        });
    },
    insertOne: function(col1, col2, val1, val2, cb) {
        orm.insertOne("todos", col1, col2, val1, val2, function(res) {
            cb(res);
        });
    },
    completeOne: function(cols, vals, primarykey, id, cb) {
        orm.completeOne("todos", cols, vals, primarykey, id, function(res) {
            cb(res);
        });
    },
    updateOne: function(cols, vals, primarykey, id, cb) {
        orm.updateOne("todos", cols, vals, primarykey, id, function(res) {
            cb(res);
        });
    },
    deleteOne: function(primarykey, id, cb) {
        orm.deleteOne("todos", primarykey, id, function(res) {
            cb(res);
        });
    }
};

module.exports = todo;