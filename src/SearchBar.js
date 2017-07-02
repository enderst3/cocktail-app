import React, { Component } from 'react'
import {FormControl, Panel} from 'react-bootstrap'
import PropTypes from 'prop-types'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.textChangeCallback = this.props.onSearchTermInput.bind(this)
  }

  handleOnKeyPress (e) {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
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
            value={this.props.searchTerm}
            onChange={this.textChangeCallback}
            onKeyPress={this.handleOnKeyPress}
          />
        </form>
      </Panel>
    )
  }
}

SearchBar.propTypes = {
  onSearchTermInput: PropTypes.func,
  searchTerm: PropTypes.string
}

export default SearchBar
