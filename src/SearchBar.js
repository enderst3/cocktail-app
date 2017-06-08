import React, { Component } from 'react'
import {FormControl, Panel} from 'react-bootstrap'
import PropTypes from 'prop-types'

// change onchange to this:
// onChange={this.handleOnChange}

class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = {searchTerm: ''}
  }
  render () {
    return (
      <Panel className='SearchBar'>
        <h3>Enter a Drink Name:</h3>
        <form>
          <FormControl
            id='drink-input'
            type='text'
            placeholder='Enter Drink Name...'
            value={this.state.searchTerm}
            onChange={e => this.handleOnChange(e.target.value)}
          />
        </form>
      </Panel>
    )
  }

  handleOnChange (searchTerm) {
    this.setState({searchTerm})
    this.props.onSearchTermChange(searchTerm)
  }
}

SearchBar.propTypes = {
  onSearchTermChange: PropTypes.func
}

export default SearchBar
