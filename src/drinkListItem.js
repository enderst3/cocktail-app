import React from 'react'
import {ListGroupItem, Col} from 'react-bootstrap'


const DrinkListItem =({drink}) => {
  return (
    <div>
      <Col md={4}>
         <ListGroupItem className='results'>
           <div className='cocktailImage'>
             <img
               src={drink.strDrinkThumb === null ? 'cocktail2.jpg' : drink.strDrinkThumb}
               height='100'
               alt=''
             />
           </div>
           <div className='drinkName'>
             <h4>{drink.strDrink}</h4>
           </div>
         </ListGroupItem>
       </Col>
    </div>
  )
}

export default DrinkListItem
