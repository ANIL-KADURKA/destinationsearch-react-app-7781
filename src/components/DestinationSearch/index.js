import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const searchInput2 = searchInput.toLowerCase()
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eacItem =>
      eacItem.name.toLowerCase().includes(searchInput2),
    )

    return (
      <div className="destination-app">
        <div className="card-container">
          <h1 className="heading">Destination Search</h1>
          <div className="card">
            <input
              type="search"
              value={searchInput2}
              onChange={this.onChangeSearchInput}
              className="inputElement"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="image-icon"
              alt="search icon"
            />
          </div>
          <ul className="undo-container">
            {searchResults.map(eacItem => (
              <DestinationItem
                DestinationEachItem={eacItem}
                key={eacItem.id}
                uniqueNo={eacItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
