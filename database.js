const mysql = require("mysql2")

const pool = mysql.createPool({
    host :"localhost",
    user:"root",
    database:"nodejs",
    password : "vinaykumar1306"
})

 const db = pool.promise()

db.execute
