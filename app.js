class producto
{
    constructor(nombre, precio)
    {
        tiempo = new Date();
        this.nombre = nombre;
        this.precio = precio;
        this.fecha = tiempo;
    }

}
class UI
{
    Add()
    {

    }
}

document.getElementById("productForm").addEventListener("submit",function()
{
    console.log("algo");
})