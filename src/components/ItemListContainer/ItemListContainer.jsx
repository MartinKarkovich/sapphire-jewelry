import './ItemListContainer.css'
import getProducts from '../../utils/promises/getProducts'
import ItemList from './ItemList/ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { category } = useParams()

  useEffect(()=>{
    getProducts
      .then((res)=>{
        setProducts(category ? res.filter((product)=> product.category === category) : res)
      })
      .catch((error)=> {
        console.log(error)
      })
  }, [category])


  return (
    <div id='item-list-container'>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer