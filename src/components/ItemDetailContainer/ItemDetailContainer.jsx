import "./ItemDetailContainer.css"
import { Navigate } from "react-router-dom"
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
    <>
      { product ?
      <div id="item-detail-container">
        <ItemDetail product={product}/>
      </div> :
        <Navigate to={'/'}/>
      }
    </>

  )
}
export default ItemDetailContainer