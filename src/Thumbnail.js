import React from 'react'
import PropTypes from 'prop-types'

const Thumbnail = ({drink}) => {
  if (drink.strDrinkThumb === null) {
    return (
      <img
        src='cocktail.jpg'
        height='125'
        alt=''
      />
    )
  }

  return (
    <img
      src={drink.strDrinkThumb}
      height='125'
      alt=''
    />
  )
}

Thumbnail.propTypes = {
  drink: PropTypes.array
}
export default Thumbnail
