import './index.css'

const HistoryItems = prop => {
  const {item} = prop
  const {delFunction} = prop
  const {id, timeAccessed, logoUrl, title, domainUrl} = item
  const deleteHistory = () => {
    delFunction(id)
  }

  return (
    <li className="main">
      <div className="list-items">
        <p>{timeAccessed}</p>
        <img className="app-logo" src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p className="url-name">{domainUrl}</p>
      </div>
      <button
        type="button"
        onClick={deleteHistory}
        data-testid="delete"
        className="btn1"
      >
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItems
