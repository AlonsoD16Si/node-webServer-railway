const http = require('http');

http.createServer((req, res) => {
    // res.setHeader('Content-Disposition', 'attachment;  filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv' });
    res.write('Hola mundo');
    // res.write('id,nombre\n');
    // res.write('1,Alonso\n');
    // res.write('2,Loreli\n');
    // res.write('3,Brissia\n');
    // res.write('4,Dulce\n');
    // const persona = {
    //     id: 1,
    //     nombre: 'Alonso'
    // }

    // res.write( JSON.stringify(persona));
    res.end();
})
    .listen(8080);

console.log('Escuchando el puerto', 8080);
// console.log(req);
