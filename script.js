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