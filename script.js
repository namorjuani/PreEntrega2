// // Le pido al usuario que seleccione una categoría
// let categoriaSeleccionada = prompt("Seleccione una categoría: \n\n 1. Cosmética para el automotor \n 2. Máquinas de lavado de autos \n 3. Autopartes");

// // Declarar variables y objetos necesarios para simular el proceso seleccionado
// let productos = [
//   {id: 1, nombre: "Cera para autos", categoria: "cosmetica", precio: 500},
//   {id: 2, nombre: "Shampoo para autos", categoria: "cosmetica", precio: 800},
//   {id: 3, nombre: "Máquina de lavado de autos", categoria: "maquinas", precio: 150000},
//   {id: 4, nombre: "Lanza para máquina de lavado", categoria: "maquinas", precio: 10000},
//   {id: 5, nombre: "Máquina de espuma", categoria: "maquinas", precio: 50000},
//   {id: 6, nombre: "Escobilla", categoria: "autopartes", precio: 3000},
//   {id: 7, nombre: "Cubre volante", categoria: "autopartes", precio: 2500},
// ];

// // Creo una funcion
// // Buscar productos por categoría
// function buscarProductosPorCategoria(productos, categoria) {
//   return productos.filter(p => p.categoria === categoria);
// }

// // Crear un carrito de compras
// let carrito = [];

// // Calcular el precio total de un carrito de compras
// function calcularPrecioTotal(carrito) {
//   let precioTotal = 0;
//   for (let i = 0; i < carrito.length; i++) {
//     precioTotal += carrito[i].precio;
//   }
//   return precioTotal;
// }

// // Mostrar productos según la categoría seleccionada
// if (categoriaSeleccionada === "1") {
//   let productosCosmetica = buscarProductosPorCategoria(productos, "cosmetica");
//   let listaProductos = "Productos de cosmetica:\n\n";
//   productosCosmetica.forEach(p => {
//     listaProductos += `${p.id}: ${p.nombre} - Precio: $${p.precio}\n`;
//   });
//   alert(listaProductos);

//   // Agregar productos al carrito de compras
//   let productoSeleccionado = prompt("Ingrese el ID del producto que desea agregar al carrito:");
//   let producto = productosCosmetica.find(p => p.id === parseInt(productoSeleccionado));
//   alert(`Producto agregado al carrito: ${producto.nombre} - Precio: $${producto.precio}`);
//   carrito.push(producto);

// } else if (categoriaSeleccionada === "2") {
//   let productosMaquinas = buscarProductosPorCategoria(productos, "maquinas");
//   let listaProductos = "Productos de máquinas de lavado:\n\n";
//   productosMaquinas.forEach(p => {
//     listaProductos += `${p.id}: ${p.nombre} - Precio: $${p.precio}\n`;
//   });
//   alert(listaProductos);

//   // Agregar productos al carrito de compras
//   let productoSeleccionado = prompt("Ingrese el ID del producto que desea agregar al carrito:");
//   let producto = productosMaquinas.find(p => p.id === parseInt(productoSeleccionado));
//   alert(`Producto agregado al carrito: ${producto.nombre} - Precio: $${producto.precio}`);
//   carrito.push(producto);

// } else if (categoriaSeleccionada === "3") {
//   let productosAutopartes = buscarProductosPorCategoria(productos, "autopartes");
//   let listaProductos = "Productos de autopartes:\n\n";
//   productosAutopartes.forEach(p => {
//     listaProductos += `${p.id}: ${p.nombre} - Precio: $${p.precio}\n`;
//   });
//   alert(listaProductos);

//   // Agregar productos al carrito de compras
//   let productoSeleccionado = prompt("Ingrese el ID del producto que desea agregar al carrito:");
//   let producto = productosAutopartes.find(p => p.id === parseInt(productoSeleccionado));
//   alert(`Producto agregado al carrito: ${producto.nombre} - Precio: $${producto.precio}`);
//   carrito.push(producto);
// }
// // Efectuar una salida, que es el resultado de los datos procesados
// if (carrito.length > 0) {
//   let precioTotal = calcularPrecioTotal(carrito);
//   alert(`El precio total del carrito de compras es: $${precioTotal}`);
// } else {
//   alert("No se han agregado productos al carrito de compras");
// }
//___________________________________________________________________________________________
//Este codigo representa una seccion de tienda virtual que permite al cliente listar productos, filtrar por categoria, agregar al carrito
// y mostrar el monto total a pagar por los productos seleccionados

// Declarar variables y objetos necesarios para simular el proceso seleccionado
let productos = [
  {id: 1, nombre: "Cera para autos", categoria: "cosmetica", precio: 500},
  {id: 2, nombre: "Shampoo para autos", categoria: "cosmetica", precio: 800},
  {id: 3, nombre: "Máquina de lavado de autos", categoria: "maquinas", precio: 150000},
  {id: 4, nombre: "Lanza para máquina de lavado", categoria: "maquinas", precio: 10000},
  {id: 5, nombre: "Máquina de espuma", categoria: "maquinas", precio: 50000},
  {id: 6, nombre: "Escobilla", categoria: "autopartes", precio: 3000},
  {id: 7, nombre: "Cubre volante", categoria: "autopartes", precio: 2500},
];

// Le pido al usuario que seleccione una categoría mostrandole el menú 
let opciones = "0 - Para abonar \n1 - Mostrar todos los productos \n2 - Filtrar por categoria \n3 - Ver carrito \n4 - Añadir al carrito por ID"

// Creo el carrito de compras
  let opcion
  let carrito = []
// Utilizo una estructura switch para determinar qué acción se debe realizar según la opción seleccionada por el usuario.
  do {
    opcion = Number(prompt(opciones))
    switch (opcion) {
      //opción 1, se muestra una lista de todos los productos disponibles en la tienda utilizando la función listarProductos.
      case 1:
        alert("Lista de productos: \n" + listarProductos(productos))
        break
        //opción 2, se le pide al usuario que ingrese una categoría y se utiliza la función filter para crear una lista de productos filtrados que pertenecen a esa categoría. Si la lista está vacía, se muestra un mensaje de error, de lo contrario, se muestra la lista de productos filtrados utilizando la función listarProductos.
      case 2:
        let categoria = prompt("Introduzca categoría para filtrar productos").toLowerCase()
        let productosFiltrados = productos.filter(producto => producto.categoria === categoria)
        if (productosFiltrados.length === 0) {
          alert("No existen dichas categorías, intente otra vez")
        } else {
          alert("Lista de productos filtrados por la categoría " + categoria + ": \n" + listarProductos(productosFiltrados))
        }
        break
        //opción 3, se muestra una lista de los productos que el usuario ha agregado al carrito utilizando la función listarProductos.
      case 3:
        alert("Productos en el carrito: \n" + listarProductos(carrito))
        break
        //opción 4, se le pide al usuario que seleccione un producto para agregar al carrito utilizando la función prompt. Se busca el producto correspondiente utilizando la función find y si se encuentra, se agrega al carrito y se muestra un mensaje de confirmación, de lo contrario, se muestra un mensaje de error.
      case 4:
        let idProducto = Number(prompt("Seleccione id del producto para agregar al carrito \n" + listarProductos(productos)))
        let productoBuscado = productos.find(producto => producto.id === idProducto)
        if (productoBuscado) {
          carrito.push(productoBuscado)
          alert("Producto agregado correctamente")
        } else {
          alert("El id ingresado no corresponde a ningún producto de la lista")
        }
        break

      default:
        if (opcion != 0) {
          alert("Opción ingresada incorrecta")
        }
        break
    }

  } while (opcion != 0)

  //Fuera del ciclo do-while, se calcula el monto total a pagar por los productos en el carrito utilizando la función reduce y se muestra un mensaje que incluye el monto total y un agradecimiento al usuario por elegir la tienda.
  if (opcion === 0) {
    let totalCarrito = carrito.reduce((total, producto) => total + producto.precio, 0);
    alert(`El monto total a pagar es de: $${totalCarrito} \nGracias por elegirnos`); 
  }


  function listarProductos(productos) {
    return productos.map(producto => {
      return `ID: ${producto.id} - Nombre: ${producto.nombre} - Precio: ${producto.precio}`
    }).join("\n")
  }

//La función listarProductos toma una lista de productos y crea una cadena de texto que muestra el ID, el nombre y el precio de cada producto en la lista separados por guiones y saltos de línea.