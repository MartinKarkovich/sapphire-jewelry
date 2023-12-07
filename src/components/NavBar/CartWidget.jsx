import "./CartWidget.css"

const CartWidget = ({ quantity }) => {
  return (
    <div id='cartwidget'>
      <a href="#"><img id='bag' src="/icons/shopping-bag.png" alt="shopping bag" /> {quantity}</a>
    </div>
  )
}

export default CartWidget