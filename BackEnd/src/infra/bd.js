import mysql from "mysql";

const database = {
  connection: mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "restaurante",
  }),

  query: (query, valores) => {
    return new Promise((resolve, reject) => {
      database.connection.query(query, valores, function (error, results, fields) {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
      );
    });
  }
};

export default database;
