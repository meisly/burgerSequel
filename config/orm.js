//import connection
const conn = require("./connection.js");

const orm ={
    selectAll: function(table, cb){
        let query = `SELECT * FROM ${table}`;
        conn.query(query, function(err, result) {
            if(err){
                 console.log(err);
            }
            cb(result);
        });
    },
    updateOne: function(table, newVals, id, cb){
        let query = `UPDATE ${table} SET devoured = ${newVals} WHERE id = ${id}`;
        conn.query(query, function(err,result) {
            if(err){
                console.log(err);
            };
            cb(result);
        });
    },
    insertOne: function(table, val, cd){
        let query = `INSERT INTO ${table} (burger_name) VALUES ('${val}')`;
        conn.query(query, function(err, result){
            if(err){
                console.log(err);
            };
            cd(result);
        });
    }
};


module.exports = orm;