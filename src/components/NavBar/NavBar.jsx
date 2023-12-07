import "./NavBar.css"
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <nav id="navbar">
      <a href="#"><img src="/icons/sapphire.png"/></a>
      <ul>
        <li><a href="#">Relojes</a></li>
        <li><a href="#">Anillos</a></li>
        <li><a href="#">Pulseras</a></li>
        <li><a href="#">Dijes</a></li>
        <li><a href="#">Aros</a></li>
      </ul>
      <CartWidget id="cartwidget" quantity={1}/>
    </nav>
  )
}

export default NavBar