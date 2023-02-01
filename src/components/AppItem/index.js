import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li>
      <div className="app-item-container">
        <img src={imageUrl} className="app-image" alt={appName} />
        <p>{appName}</p>
      </div>
    </li>
  )
}
export default AppItem
