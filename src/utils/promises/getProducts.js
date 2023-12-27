import products from "/src/data/mockedData/products.json"

const getProducts = new Promise((res, rej)=>{
    setTimeout(()=> {
        res(products)
    }, 1000)
})

export default getProducts