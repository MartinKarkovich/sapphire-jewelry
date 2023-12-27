import "./NavBar.css"
import CartWidget from "./CartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav id="nav-bar">
      <Link to={'/'}><img src="/icons/sapphire.png"/></Link>
      <ul>
        <Link to={'/category/watch'}><li>RELOJES</li></Link>
        <Link to={'/category/ring'}><li>ANILLOS</li></Link>
        <Link to={'/category/bracelet'}><li>PULSERAS</li></Link>
        <Link to={'/category/charm'}><li>DIJES</li></Link>
        <Link to={'/category/earring'}><li>AROS</li></Link>
      </ul>
      <CartWidget quantity={1}/>
    </nav>
  )
}

export default NavBar