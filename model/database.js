require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "cereallovers",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =
    "DROP TABLE if exists gender; CREATE TABLE gender(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(40) NOT NULL, PRIMARY KEY (id));";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `gender` was successful!");
  });

  sql =
    "DROP TABLE if exists cereal; CREATE TABLE cereal(id INT NOT NULL AUTO_INCREMENT, type VARCHAR(40) NOT NULL, image TEXT, PRIMARY KEY (id));";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `cereal` was successful!");

  });


  sql =
  "DROP TABLE if exists users; CREATE TABLE users(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(40) NOT NULL, cereal_id INT, city VARCHAR(40), photo TEXT, dob TEXT, gender_id INT, PRIMARY KEY (id), FOREIGN KEY (cereal_id) references cereal (id), FOREIGN KEY (gender_id) references gender(id));";
     con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `users` was successful!");
  });
    
  



  sql =
    "INSERT INTO cereal (type, image) VALUES ('Frosted Flakes', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKoWyNvSnAM18frCHMzZ7oeHWO9f9IF0xiuA&usqp=CAU');";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log(" `Frosted Flakes` was added! ");
  });

  sql =
  "INSERT INTO cereal (type, image) VALUES ('Fruity Pebbles', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8g-LPNSnT2KOQR9ySJboklZl36nCRw1DCtQ&usqp=CAU');";
con.query(sql, function(err, result) {
  if (err) throw err;
  console.log("Fruity Pebbles was added!");
});

sql =
"INSERT INTO cereal (type, image) VALUES ('Corn Pops', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5VhR2E81nCRj3bY8NHFv8MmaB-1b_rsga7w&usqp=CAU');";
con.query(sql, function(err, result) {
if (err) throw err;
console.log("Corn Pops was added!");
});

sql =
"INSERT INTO cereal (type, image) VALUES ('Cookie Crisp', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKoWyNvSnAM18frCHMzZ7oeHWO9f9IF0xiuA&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQd3taG-eUbKUTrRV7d2bOPT_W0bt7H-E4mLQ&usqp=CAU');";
con.query(sql, function(err, result) {
if (err) throw err;
console.log("Cookie Crisp was added!");
});

sql =
"INSERT INTO cereal (type, image) VALUES ('Froot Loops', 'https://www.japonshop.com/med/img/productos/prd-cereales-froot-loops-japonshop.webp');";
con.query(sql, function(err, result) {
if (err) throw err;
console.log("Froot Loops was added!");
});

sql =
"INSERT INTO cereal (type, image) VALUES ('Raisin Bran', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwbrjCxr1VJFNOJpoydVeUahWsunspl__w2g&usqp=CAU');";
con.query(sql, function(err, result) {
if (err) throw err;
console.log("Raisin Bran was added!");
});

sql =
"INSERT INTO cereal (type, image) VALUES ('Oat Flakes', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJbKWkVjSmrCdgNzUBiSWS_kHnqhRjrGk65g&usqp=CAU');";
con.query(sql, function(err, result) {
if (err) throw err;
console.log("Oat Flakes was added!");
});

sql =
"INSERT INTO cereal (type, image) VALUES ('Special K', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwQB0aOevClm2bjKjb-_opdB9_fsgjFCf7SA&usqp=CAU');";
con.query(sql, function(err, result) {
if (err) throw err;
console.log("Special K was added!");
});

sql =
"INSERT INTO cereal (type, image) VALUES ('Cheerios', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTz7kwbkCfcqEU-YdUvYODeqMSJmHLftiWnvA&usqp=CAU');";
con.query(sql, function(err, result) {
if (err) throw err;
console.log("Cheerios was added!");
});

sql =
"INSERT INTO cereal (type, image) VALUES ('Trix', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVZpgsccTnoBOW12B1EKpC7Lki8VU04ybtbw&usqp=CAU');";
con.query(sql, function(err, result) {
if (err) throw err;
console.log("Trix was added!");
});




sql =
  "INSERT INTO users (name, cereal_id, city, photo, dob, gender_id) VALUES ('Zoe Saldana', 1, 'USA', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxbmp6e0JXaJuoW8miH5ogyntrNCa0SlNIyQ&usqp=CAU','6/19/1978', 1);";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("user was added!");
  });

sql =
  "INSERT INTO users (name, cereal_id, city, photo, dob, gender_id) VALUES ('Ana de Armas', 1, 'Cuba', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJND2MV6pk3qQHg0k-3NLfVY-g-yaeKYGE0w&usqp=CAU','1/4/1987', 2);";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("user was added!");
    console.log("Closing...");

  });

  con.end();
});
