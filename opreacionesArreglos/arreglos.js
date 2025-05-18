
var array=[12,45,23,56,78,45,3,45,76,34,28,65,98,16,32]
function buscarNumero(a){
array.find((Element)=>{
    if(Element==a){
        return console.log(Element,true)
    }
})
}
function sumarNumero(){
    let total=0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return console.log(total)
}
sumarNumero()
module.exports={buscarNumero}