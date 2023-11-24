const http = require('http');

const PORT = 3000;
let users = [
    {
        name: "Alice",
        age: 25,
        email: "alice@example.com",
        city: "New York"
    },
    {
        name: "Bob",
        age: 30,
        email: "bob@example.com",
        city: "San Francisco"
    },
    {
        name: "Charlie",
        age: 28,
        email: "charlie@example.com",
        city: "Los Angeles"
    }
];
// request
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        const name = req.url.split("?")[1];
        const usuarios = users.find(x => x.name === name)
        if (usuarios) {
            res.writeHead(200, { "Content-Type": "aplication.json" });
            res.end(JSON.stringify(usuarios))} 
        else {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("User Not found\n")
        }
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

