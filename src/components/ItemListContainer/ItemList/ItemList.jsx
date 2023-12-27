import './ItemList.css'
import Item from './Item/Item'

const ItemList = ({ products }) => {
  return (
    <div id="item-list">
      { 
      products.map((product)=> (
        <Item product={product} key={product.id}/>
      )) 
      }
    </div>
  )
}
export default ItemList