class Producto {
    nombre: string;
    descripcion:string;
    codigo: number;
    stock: number;


    constructor(nombre: string, descripcion: string, 
                codigo: number, stock: number) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.codigo = codigo;
        this.stock = stock;
    }

    ingresarProducto(p: Producto) {
        let prod: Producto = new Producto(p.nombre, p.descripcion, p.codigo, p.stock)
        console.log(`producto Ingresado: ${prod.nombre}, ${prod.nombre}, ${prod.codigo}, ${prod.stock}`);
    }

    obtieneProductos() {
        return `Producto agregado: nombre ${this.nombre}, descripción ${this.descripcion}, 
                codigo ${this.codigo}, stock ${this.stock}.`
    }
    
}



const prodUno = new Producto('arroz', 'Arroz grano 3',  123456, 10);
const prodDos= new Producto('aceite', 'Aceite maravilla',  789421, 10);

console.log(prodUno.ingresarProducto(prodUno));
console.log(prodDos.ingresarProducto(prodDos));

console.log(prodUno.obtieneProductos());
console.log(prodDos.obtieneProductos());
