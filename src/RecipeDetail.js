import React from 'react'
import {Panel} from 'react-bootstrap'
import Thumbnail from './Thumbnail'
import PropTypes from 'prop-types'

const RecipeDetail = ({drink}) => {
  if (!drink) {
    return (
      <div className='StartDiv' />
    )
  }

  return (
    <Panel className='RecipeDetail'>
      <div className='CocktailImage'>
        <Thumbnail
          drink={drink}
        />
      </div>
      <div className='DrinkName'>
        <h1>{drink.strDrink}</h1>
        <h3>Directions:</h3>
        <h4>{drink.strInstructions}</h4>
      </div>
      <div className='DrinkIngredients'>
        <h3>Ingredients:</h3>
        <p>{drink.strMeasure1} {drink.strIngredient1}</p>
        <p>{drink.strMeasure2} {drink.strIngredient2}</p>
        <p>{drink.strMeasure3} {drink.strIngredient3}</p>
        <p>{drink.strMeasure4} {drink.strIngredient4}</p>
        <p>{drink.strMeasure5} {drink.strIngredient5}</p>
        <p>{drink.strMeasure6} {drink.strIngredient6}</p>
        <p>{drink.strMeasure7} {drink.strIngredient7}</p>
        <p>{drink.strMeasure8} {drink.strIngredient8}</p>
        <p>{drink.strMeasure9} {drink.strIngredient9}</p>
        <p>{drink.strMeasure10} {drink.strIngredient10}</p>
        <p>{drink.strMeasure11} {drink.strIngredient11}</p>
        <p>{drink.strMeasure12} {drink.strIngredient12}</p>
        <p>{drink.strMeasure13} {drink.strIngredient13}</p>
        <p>{drink.strMeasure14} {drink.strIngredient14}</p>
        <p>{drink.strMeasure15} {drink.strIngredient15}</p>
      </div>
    </Panel>
  )
}

RecipeDetail.propTypes = {
  drink: PropTypes.object
}

export default RecipeDetail
