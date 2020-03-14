const express = require("express");
const app = express();
const port = 3000;
// A route /api/movies that returns a string
app.get("/api/movies/", (req, res) => {
  res.send("All films");
});
// // A route /api/movies/\<movie id\> that returns a JSON
app.get("/api/movies/:id", (req, res) => {
  res.json({ id: req.params.id });
});
// A route /api/employee/ that returns a status 304
app.get("/api/employee/", (req, res) => {
  res.sendStatus(304); //cached copy of a particular file is up to date with the server
});
// A route /api/employee?name=\<employee name\> that returns a 404 status and a string
app.get("/api/employees/", (req, res) => {
  const name = req.query.name;
  res.status(404).send(`Cannot find: ${name}`);
});
app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${port}`);
});
