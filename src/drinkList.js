import React from 'react'
import DrinkListItem from './drinkListItem'
import {ListGroup} from 'react-bootstrap'


const DrinkList = (props) => {
  const drinkItems = props.drinks.map((drink) => {
    return (
      <DrinkListItem
        key={drink.idDrink}
        drink={drink}
      />
    )
  })
  return (
    <ListGroup className='drink-list'>
      {drinkItems}
    </ListGroup>
  )
}

export default DrinkList
