//clase constructora

class Carrito {
  constructor() {
    this.productos = [];
  }

 //metodos
  enCarrito(nuevoProducto) {
    for (let producto of this.productos) {
      if (producto.nombre == nuevoProducto.nombre) {
        return true;
      }
    }
    return false; 
  }

  
  agregar(nuevoProducto) {
    if (this.enCarrito(nuevoProducto)) {
    
      alert("El producto " + nuevoProducto.nombre + " ya está en el carrito.");
    } else {
      
      this.productos.push(nuevoProducto);
      alert(
        "El producto " + nuevoProducto.nombre + " fue agregado al carrito."
      );
    }
   
    this.listar();
  }


  listar() {
    console.clear(); 
    console.log("Mis productos en el carrito:");
   
    for (let producto of this.productos) {

      console.log("------");
      console.log("Nombre: " + producto.nombre);
      console.log("Precio: " + producto.precio);
      console.log("Cantidad: " + producto.cantidad);
    }
  }

  
  quitar(nombre) {

    for (let producto of this.productos) {
  
      if (producto.nombre == nombre) {
        
        let indice = this.productos.indexOf(producto);
      
        this.productos.splice(indice, 1);
        alert("El producto " + nombre + " fue borrado del carrito");
       
        this.listar();
      }
    }
  }

  mostrarTotal(){

    let totalCarrito = this.productos.reduce(
      (acumulador, producto) => acumulador + producto.precio,
      0
    );
    console.log("Llevas Gastado " + totalCarrito + " $");



  }





}

// creacion del objeto
const carrito = new Carrito();

//funciones regulares del html

function agregarProducto() {

  let nombre = prompt("Introduzca el nombre del producto");
  let precio = prompt("Introduzca el precio del producto");

  const nuevoProducto = {
    nombre: nombre,
    precio: parseInt(precio),
    cantidad: 1,
  };

  
  carrito.agregar(nuevoProducto);
}

function quitarProducto() {
 
  let nombre = prompt("Introduzca el nombre del producto que desea quitar");

 
  carrito.quitar(nombre);
}
