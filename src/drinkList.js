import React from 'react'
import DrinkListItem from './DrinkListItem'
import {ListGroup} from 'react-bootstrap'


const DrinkList = (props) => {
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

export default DrinkList
