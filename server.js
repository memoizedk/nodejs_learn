const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3500;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

app.get(["/", "/index", "/index.html"], (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get(["/new-page", "/new-page.html"], (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

const one = (req, res, next) => { console.log("one"); next(); };
const two = (req, res, next) => { console.log("two"); next(); };
const three = (req, res) => { console.log("three"); res.send("Finished!"); };

app.get(["/chain", "/chain.html"], [one, two, three]);

// 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
