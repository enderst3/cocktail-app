import React, { Component } from 'react'
import {ListGroupItem, Col} from 'react-bootstrap'
import PropTypes from 'prop-types'

class DrinkListItem extends Component {
  constructor (props) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
  }
  handleOnClick (e) {
    console.log('i was clicked')
    this.props.onDrinkSelect(this.props.drink)
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
              <img
                src={this.props.drink.strDrinkThumb === null ? 'cocktail2.jpg' : this.props.drink.strDrinkThumb}
                height='100'
                alt=''
                className='Image'
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
  drink: PropTypes.object,
  onDrinkSelect: PropTypes.func
}

export default DrinkListItem
