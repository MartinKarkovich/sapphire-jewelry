import "./ItemDetailContainer.css"
import ItemDetail from "./ItemDetail/ItemDetail"
import getProducts from "../../utils/promises/getProducts"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(()=>{
    getProducts
      .then((res)=>{
        setProduct(res.find((product) => product.id === id))
      })
      .catch((error)=> {
        console.log(error)
      })
  }, [id])

  return (
    <div id="item-detail-container">
      <ItemDetail product={product}/>
    </div>
  )
}
export default ItemDetailContainer