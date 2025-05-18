var operaciones = require('./opreacionesEnteros/enteros.js')
const exp = require('express')
var invetario = require('./operacionesObjetos/inventario.js')

const app = exp();
app.get('/quierosumar',(req,res )=>{
    res.end('la suma de 5 y 6 es: '+operaciones.suma(5,6));
})
app.get('/consulta',(req,res)=>{
    res.end('mirar consola'+invetario.cargarDatos())
})
app.listen(8888,()=>{
        console.log('online')
});
