import './ItemListContainer.css'
import Item from "./Item/Item"

const ItemListContainer = () => {
  return (
    <div id='itemlistcontainer'>
      <Item fileName={'reloj'}/>
      <Item fileName={'anillo'}/>
      <Item fileName={'pulsera'}/>
      <Item fileName={'dije'}/>
      <Item fileName={'aro'}/>
    </div>
  )
}

export default ItemListContainer