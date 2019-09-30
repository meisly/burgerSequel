const orm = require("../config/orm");

const burgers = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    updateOne: function(newVal, id, cb){
        orm.updateOne("burgers", newVal, id, function(res){
            cb(res);
        });
    },
    insertOne: function(burgerName, cb){
        orm.insertOne("burgers", burgerName, function(res){
            cb(res);
        });
    }
};

module.exports = burgers;