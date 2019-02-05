/*
 * Aplicação simples de backend com Node.js
 * Pacotes utilizados: knex, restify, restify-errors e mysql
 */

const restify = require('restify');
const errs = require('restify-errors');

/*
 * @description: configuração e coneção com MySQL Server
 */
var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '@abc123!',
        database: 'db_node_crud'
    }
});

const server = restify.createServer({
    name: 'myapp', 
    version: '1.0.0'
});

/* ROTAS HTTP (get, put e delete) */

/*
 * @description: consulta tudo
 */
server.get('/', (req, res, next) => {
    knex('rest').then((dados) => {
        res.send(dados);
    }, next);
});

/*
 * @description: consulta por id
 */
server.get('/show/:id', (req, res, next) => {
    const { id } = req.params;
    knex('rest')
        .where('id', id)
        .first()
        .then((dados) => {
            if (!dados) res.send(new errs.BadRequestError('nada foi encontrado'))
            res.send(dados);
        }, next);

});

/*
 * @description: inclui um registro
 */
server.post('/create', (req, res, next) => {
    knex('rest')
        .insert(req.body)
        .then((dados) => {
            res.send(dados);
        }, next);
});

/*
 * @description: atualiza um registro
 */
server.put('/update/:id', (req, res, next) => {
    const { id } = req.params;
    knex('rest')
        .where('id', id)
        .update(req.body)
        .then((dados) => {
            if (!dados) res.send(new errs.BadRequestError('nada foi encontrado'));
            res.send('dados atualizados');
        }, next);

});

/*
 * @description: atualiza um registro
 */
server.del('/delete/:id', (req, res, next) => {
    const { id } = req.params;
    knex('rest') 
        .where('id', id)
        .delete()
        .then((dados) => {
            if (!dados) res.send(new errs.BadRequestError('nada foi encontrado'));
            res.send('dados excluídos');
        }, next);

});

/*
* @description: configurações do servidor
*/
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

/*
 * @description: inicializando servidor node.js 
 */
server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});