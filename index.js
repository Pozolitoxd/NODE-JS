const resta = require('./opreacionesEnteros/enteros.js')
const exp = require('express')

const app = exp();
app.get('/quierosumar',(req,res )=>{
    res.end(`<h2>la suma de 5 y 6 es: ${resta.resta(5,6)}</h2>`);
})
app.listen(8888,()=>{
        console.log('online')
});
