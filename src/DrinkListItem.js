import React, { Component } from 'react'
import {ListGroupItem, Col} from 'react-bootstrap'
import Thumbnail from './Thumbnail'
import PropTypes from 'prop-types'

class DrinkListItem extends Component {
  constructor (props) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
  }
  handleOnClick (e) {
    this.props.onDrinkSelect(this.props.drink)
    window.scrollTo(0, 315)
  }

  render () {
    return (
      <div>
        <Col md={4}>
          <ListGroupItem
            className='Results'
            onClick={this.handleOnClick}
            value={this.props.drink}
           >
            <div className='CocktailImage'>
              <Thumbnail
                drink={this.props.drink}
              />
            </div>
            <div className='DrinkName'>
              <h4>{this.props.drink.strDrink}</h4>
              <p />
            </div>
          </ListGroupItem>
        </Col>
      </div>
    )
  }
}

DrinkListItem.propTypes = {
  drink: PropTypes.array,
  onDrinkSelect: PropTypes.func
}

export default DrinkListItem
