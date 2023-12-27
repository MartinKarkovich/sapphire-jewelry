import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({ product }) => {
  return (
    <div className='item'>
      <img src={product.image_url} alt="" />
      <Link to={`/details/${product.id}`}><button>Ver mas detalles</button></Link>
    </div>
  )
}

export default Item