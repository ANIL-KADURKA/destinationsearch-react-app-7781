// Write your code here
import './index.css'

const DestinationItem = props => {
  const {DestinationEachItem} = props
  const {name, imgUrl} = DestinationEachItem
  console.log('Manalni eavdra AApedi')
  return (
    <li className="list-container">
      <img src={imgUrl} className="icon-image" alt={name} />
      <p className="header">{name}</p>
    </li>
  )
}

export default DestinationItem
