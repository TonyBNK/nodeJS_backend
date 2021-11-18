const http = require('http');


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

const users = [{id: 1, name: "Nash"}, {id: 2, name: "Jason"}];

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
            if (req.method === 'POST') {
                users.push({id: 3, name: 'Tobi'});
                res.write(JSON.stringify({success: true}));
            } else {
                res.write(JSON.stringify(users));
            }
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
