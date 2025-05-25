var operaciones = require('./opreacionesEnteros/enteros.js')
const exp = require('express')
var invetario = require('./operacionesObjetos/inventario.js')

const conexion = require('./config/connection.js')

const app = exp();

app.get('/conectar',(req,res)=>{
    console.log('entramos al endpoint')
    console.log(conexion)
    res.end();
});

const modeloUsuario = require('./models/usuario.models.js')

app.get('/insertarusuario', (req,res)=>{
    const nuevoUsuario = new modeloUsuario({
        nombre: 'Juanito',
        edad: 30,
        correo: 'juan.perez@ejemplo.com'
    });

    nuevoUsuario.save()
        .then(usuario => {
            console.log('Usuario creado:', usuario);
        })
        .catch(err => {
            console.error('Error al crear usuario:', err);
        });
});

app.get('/consultarusuarios',(req,res)=>{
    modeloUsuario.find()
    .then(usuario => {
        console.log('Usuarios encontrados:', usuario);
        res.end('Encontrado')

    })
    .catch(err => {
        console.error('Error al buscar usuarios:', err);
    });
})



app.get('/quierosumar',(req,res )=>{
    res.end('la suma de 5 y 6 es: '+operaciones.suma(5,6));
})
app.get('/quierorestar',(req,res)=>{
    res.end()
})
app.get('/consulta',(req,res)=>{
    res.end('mirar consola'+invetario.cargarDatos())
})
app.listen(8888,()=>{
        console.log('online')
});
