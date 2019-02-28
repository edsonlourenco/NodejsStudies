/**
 * Arquivo: produto.js
 * Autor: Edson Lourenço
 * Descrição: modelo que representará o objeto/documento no MongoDB
 * Data: 26/01/2019
 * obs.: https://mongoosejs.com/docs/schematypes.html
*/

//import mongoose from 'mongoose';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var produtoSchema = new Schema({
    nome: String,
    preco: Number,
    descricao: String
});

modules.exports = mongoose.model('Produto', produtoSchema);

//parei aqui: https://www.youtube.com/watch?v=gSutX_3L9WE&index=5&list=PLb2HQ45KP0WstF2TXsreWRv-WUr5tqzy1
//Procima aula é a 06