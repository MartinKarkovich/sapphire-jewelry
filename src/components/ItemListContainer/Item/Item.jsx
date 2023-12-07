import "./Item.css"

const Item = ({fileName}) => {
  return (
    <div id='item'>
      <a href="#"><img src={`/images/${fileName}.png`} alt={fileName} /></a>
    </div>
  )
}

export default Item