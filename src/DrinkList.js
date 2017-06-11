import React from 'react'
import DrinkListItem from './DrinkListItem'
import {ListGroup} from 'react-bootstrap'
import PropTypes from 'prop-types'

const DrinkList = (props) => {
  if (props.drinks === null) return null
  const drinkItems = props.drinks.map((drink) => {
    return (
      <DrinkListItem
        key={drink.idDrink}
        drink={drink}
        onDrinkSelect={props.onDrinkSelect}
      />
    )
  })
  return (
    <ListGroup className='DrinkList'>
      {drinkItems}
    </ListGroup>
  )
}

DrinkList.propTypes = {
  onDrinkSelect: PropTypes.func,
  drinks: PropTypes.array
}

export default DrinkList
