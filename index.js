var operaciones = require('./opreacionesEnteros/enteros.js')
const exp = require('express')

const app = exp();
app.get('/quierosumar',(req,res )=>{
    res.end('la suma de 5 y 6 es: '+operaciones.suma(5,6));
})
app.listen(8888,()=>{
        console.log('online')
});
