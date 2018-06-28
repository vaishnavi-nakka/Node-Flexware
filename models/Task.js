var db = require('../dbconnection'); //reference of dbconnection.js

var Task = {

    getAllTasks: function (callback) {

        return db.query("Select * from Flexware_Service_Order", callback);

    },
    getTaskById: function (id, callback) {

        return db.query("Select * from Flexware_Service_Order where SERVICE_ORDER = ?", [id], callback);
    }
    

};
module.exports = Task;
