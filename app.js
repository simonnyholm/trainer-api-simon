require("dotenv").config();
var express = require("express");
var app = express();
var router = require("./router");
var { testConnection } = require("./config/database");
var formidable = require("express-formidable");

testConnection();
app.use(formidable());
app.use(router);

module.exports = app;
