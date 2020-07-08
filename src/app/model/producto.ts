export class Producto {
  codigo: number;
  nombre: string;
  precio: number;
  fechaAlta: Date;
  descatalogado: boolean;

  constructor(
    codigo: number,
    nombre: string,
    precio: number,
    fechaAlta: Date,
    descatalogado: boolean
  ) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.fechaAlta = fechaAlta;
    this.descatalogado = descatalogado;
  }
}
