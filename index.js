var Producto = /** @class */ (function () {
    function Producto(nombre, descripcion, codigo, stock) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.codigo = codigo;
        this.stock = stock;
    }
    Producto.prototype.ingresarProducto = function (p) {
        var prod = new Producto(p.nombre, p.descripcion, p.codigo, p.stock);
        console.log("producto Ingresado: " + prod.nombre + ", " + prod.nombre + ", " + prod.codigo + ", " + prod.stock);
    };
    return Producto;
}());
var prodUno = new Producto('arroz', 'Arroz grano 3', 123456, 10);
var prodDos = new Producto('aceite', 'Aceite maravilla', 789421, 10);
console.log(prodUno.ingresarProducto(prodUno));
console.log(prodUno.ingresarProducto(prodDos));
