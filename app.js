//Función constructora con sus atributos
class Producto {
    constructor(nombre, categoria, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = Number(precio);
    }
}
//igual a una variable, pero llamo con new al constructor
const productos = []
const carrito = [];

productos.push(new Producto('Shampoo', 'higiene', 100));
productos.push(new Producto('jabon', 'higiene', 120));
productos.push(new Producto('toallas', 'accesorios', 250));

const verProductos = (productos) =>{
    let texto = ``;
    for (const producto of productos) {
        texto += `Producto: ${producto.nombre}\nCategoria ${producto.categoria}\nPrecio $${producto.precio}\n\n`
    }

    return texto;
}

//find sirve para buscar dentro de un array y requiere una función
const comprar = () => {
    const productoUsuario = prompt(`¿Que producto desea comprar?\n\n ${verProductos(productos)}`);
    const productoEncontrado = productos.find(producto => producto.nombre.toLocaleLowerCase() === productoUsuario.toLocaleLowerCase().trim());
    if (productoEncontrado) {
        carrito.push(productoEncontrado);
        alert(`Agregaste ${productoEncontrado.nombre} al carrito`);
    } else{
        alert(`Producto no disponible`)
    }
         
}

//Mostrar los productos del carrito
const mostrarCarrito = () => {
    const productosCarrito = verProductos(carrito);
    if(productosCarrito) {
         alert(productosCarrito);
    } else{
        alert(`El carrito está vacío`);
    }
}
let opcion;
do {
    opcion = Number(prompt(`Ingrese una opción:
        1-Seleccionar
        2-Comprar
        3-Mostrar carrito
        4-Salir
        `));

    switch (opcion) {
        case 1:
           const valorRecibido = verProductos(productos);
           alert(valorRecibido);
            break;
        case 2:
            comprar();
            break;
        case 3:
            mostrarCarrito();
            break;
        case 4:
            alert(`Gracias por elegirnos`);  
            break;
        default:
            alert(`Lo sentimos, la opción no se encuentra en el menú`);
            break;
    }    
  
} while(opcion !== 4);

