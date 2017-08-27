var connection = require("../config/connection.js");

function questionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();d
}

//taken from cats exercise
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

var orm = {
	//table (string), cb (function)
	selectAll: function(table, cb) {
		var queryString = "SELECT * FROM " + table + ";";

		console.log(queryString);

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			cb(result);
		});
	},
	//table (string), cols (array of strings), vals (array of strings), cb (function)
	insertOne: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table + " (" 
		+ cols.toString() + ") VALUES (" + questionMarks(vals.length) 
		+ ");"

		console.log(queryString);

		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}

			cb(result);
		});
	},
	//table (string), colsVals (obj from table), condition (string), cb (function)
	updateOne: function(table, colsVals, condition, cb) {
		var queryString = "UPDATE " + table + " SET " + objToSql(colsVals)
		+ " WHERE " + condition;

		console.log(queryString);

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			cb(result);
		});
	}
}

module.exports = orm;