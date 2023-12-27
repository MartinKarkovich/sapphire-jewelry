import './ItemDetail.css'

const ItemDetail = ({ product }) => {
  return (
    <div id='item-detail'>
        <img src={product.image_url} alt=""/>
      <ul>
        <li>Nombre - {product.name}</li>
        <li>Precio - ${product.price}</li>
        <li>Stock - {product.stock}</li>
        <li>Categoria - {product.category}</li>
        <button>Agregar al carrito</button>
      </ul>
    </div>
  )
}
export default ItemDetail