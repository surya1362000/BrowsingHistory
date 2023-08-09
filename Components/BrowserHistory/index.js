import {Component} from 'react'
import './index.css'
import HistoryItems from '../HistoryItems'

class BrowserHistory extends Component {
  state = {searchValue: ''}

  filterFunction = event => {
    this.setState({searchValue: event.target.value})
  }

  render() {
    const {searchValue} = this.state
    const {HistoryList} = this.props
    const {deleteFunction} = this.props
    const filterData = HistoryList.filter(each =>
      each.title.toLowerCase().includes(searchValue.toLowerCase()),
    )
    return (
      <div>
        <div className="bar">
          <img
            className="brand-logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-bar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input
              type="search"
              className="input-bar"
              onChange={this.filterFunction}
            />
          </div>
        </div>
        <ul>
          {filterData.map(each => (
            <HistoryItems
              delFunction={deleteFunction}
              item={each}
              key={each.id}
            />
          ))}
          {filterData.length === 0 ? (
            <p className="no-history">There is no history to show</p>
          ) : null}
        </ul>
      </div>
    )
  }
}

export default BrowserHistory
