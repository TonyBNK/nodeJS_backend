const http = require('http');
const {getUsers, addUser} = require('./repository');
const {usersController} = require("./UsersController");


const cors = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return true;
    }

    return false;
}

const server = http.createServer((req, res) => {
    if (cors(req, res)) {
        return;
    }

    console.log('some request arrived');
    switch (req.url) {
        case '/':
            res.write(`<h1>Home</h1>`);
            break;
        case '/users':
            usersController(req, res);
            break;
        case '/tasks':
            res.write(`<h1>Tasks</h1>`);
            break;
        default:
            res.write(`<h1>Page not found</h1>`);
    }

    res.end();
});

server.listen(3010);

console.log(http);
