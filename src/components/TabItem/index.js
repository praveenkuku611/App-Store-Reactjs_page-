import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const changeTab = () => {
    updateTabId(tabId)
  }
  const className = isActive ? 'apply' : ''
  return (
    <li id={tabId}>
      <button
        type="button"
        onClick={changeTab}
        className={`tab-btn ${className}`}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
