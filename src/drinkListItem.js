import React from 'react'
import {ListGroupItem, Col} from 'react-bootstrap'
import PropTypes from 'prop-types'

const DrinkListItem = ({drink, onDrinkSelect}) => {
  return (
    <div>
      <Col md={4}>
        <ListGroupItem
          className='Results'
          onClick={() => onDrinkSelect(drink)}
         >
          <div className='CocktailImage'>
            <img
              src={drink.strDrinkThumb === null ? 'cocktail2.jpg' : drink.strDrinkThumb}
              height='100'
              alt=''
             />
          </div>
          <div className='DrinkName'>
            <h4>{drink.strDrink}</h4>
            <p />
          </div>
        </ListGroupItem>
      </Col>
    </div>
  )
}

DrinkListItem.propTypes = {
  drink: PropTypes.object,
  onDrinkSelect: PropTypes.func
}

export default DrinkListItem
