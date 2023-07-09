let usuario = "Usuario1";
let contraseña = "098";
let estado = true;
let clave = 0;

const colchon = {
    color: 'blanco',
    peso: 150,
    material: 'goma',
    tamanio: 'grande',
}
console.log(pelota)

const celular = {
    color: 'azul',
    peso: 200,
    material: 'plástico, aluminio, fibra de carbono e incluso oro',
    tamanio: '4,7 pulgadas',
}
console.log(celular)



const carrito = [];
agregarProducto()


while (estado == true){
    function agregarProducto(){
        const id = prompt("Ingrese un Numero")
        const marca = prompt("Ingrese una Marca")
        const nombre = prompt("Ingrese un Nombre")
        const precio = prompt("Ingrese un Precio")
    
        const nuevoProducto = {
            id : id,
            marca : marca,
            nombre : nombre,
            precio : precio,
        }
        carrito.push(nuevoProducto)
    
    }

}
console.log(carrito)

const mensaje = document.getElementById('mensaje');
  mensaje.innerText='Soy un mensaje dinámico generado desde JS'


