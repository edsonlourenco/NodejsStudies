/**
 * Arquivo: server.js
 * Descrição: 
 * Autor: Edson Lourenço
 * Data de criação: 26/01/2019
 */

 //Configurar o Setuo da aplicação

// import express, { Router } from "express";
// var app = express();
// import { urlencoded, json } from "body-parser";

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useMongoClient: true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.port || 8000;

var router = express.Router();

//Rotas
router.get('/', (req, res) => {
    res.json({ message: "Funcionou!"});
});

app.use("/api", router);

app.listen(port, () => {
    console.log('Server started on port: ' + port);
});