require("dotenv").config();
var express = require("express");
var app = express();
var router = require("./router");
var { testConnection } = require("./config/database");

testConnection();

app.use(router);

module.exports = app;
