const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));;

hbs.registerPartials(__dirname + '/views/partials');


// Express hbs
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Coronavirus',
    });

});

app.get('/about', (req, res) => {

    res.render('about');

});


//     // res.send('Hola Perra')
//     let salida = {
//         nombre: 'martin',
//         edad: '27',
//         url: req.url
//     };

//     res.send(salida)
// });

// app.get('/data', (req, res) => {
//     res.send('<h1>Hola Perra</h1>')
// });

app.listen(port, () => {
    console.log(`Tu vieja en ${port}`);
});