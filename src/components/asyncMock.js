const productos = [
    {id:'1', name:'',price:'',category:'',img:'',stock:'20',description:''}
]

export const getProductos = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}