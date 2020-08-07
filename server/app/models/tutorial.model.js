const sql = require("./db.js");

const Tutorial = function(tutorial) {
  this.title = tutorial.title;
  this.decription = tutorial.description;
  this.published = tutorial.published;
};

Tutorial.create = (newTutorial, result) => {
  sql.query("INSERT INTO tutorials (id,title,description,published,createdAt,updatedAt) VALUES (DEFAULT,?,?,?,now(),now())", [newTutorial.title,newTutorial.description,newTutorial.published], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created tutorial: ", { id: res.insertId, ...newTutorial });
    result(null, { id: res.insertId, ...newTutorial });
  });
};

Tutorial.getAll = result => {
  sql.query("SELECT id, title, description, published, createdAt, updatedAt FROM tutorials", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("tutorials: ", res);
    result(null, res);
  });
};

Tutorial.getDesc = (title, result) => {
  console.log(title);
  sql.query("SELECT description FROM tutorials WHERE title = ? ", title, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("description: ", res);
    result(null, res);
  });
};


module.exports = Tutorial;