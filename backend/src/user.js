const mysql = require("mysql");
var Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "project1",
};

const ConnectionCheck = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("Donee....");
  await connection.endAsync();
};

const addUser = async (user) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  const sql = `insert into partyinfo values (?,?,?,?,?,?)`;
  await connection.queryAsync(sql, [
    user.title,
    user.firstname,
    user.lastname,
    user.email,
    user.mobno,
    user.address,
  ]);
  //console.log("Record Added");
  await connection.endAsync();
};

// const data = {
//   title: "You",
//   firstname: "Yogesh",
//   lastname: "Makhare",
//   email: "kha@gfs",
//   mobno: "5648215",
//   address: "Pune",
// };

//addUser(data);
module.exports = { addUser };
//ConnectionCheck();
