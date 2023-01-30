const express = require("express");
const { url } = require("inspector");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3500;

/*
    app.get('/' , (req, res) => {
        res.send('Hello World!');
});
*/

/*
    web page load krna h using server
    ^( "/"" start aese hona) $(bss itna par end) | (or) "/index.html"
    (.html)? its mean optional h
*/

app.get("^/$|index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page");
  /* 
    302 desfult hota h but to say ki old permanently remove hogya h using 301
  */
});

app.get("/*", (req, res) => {
  //if send kr rahe toh status code 200 hoga but we want 404
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
