var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(result) {
			cb(result);
		});
	},
	insertOne: function(cols, vals, cb) {
		orm.insertOne("burgers", cols, vals, function(result) {
			cb(result);
		});
	},
	updateOne: function(colsVals, condition, cb) {
		orm.updateOne("burgers", colsVals, condition, function(result) {
			cb(result);
		});
	}
};

module.exports = burger;