import React from 'react'
import PropTypes from 'prop-types'

const Thumbnail = ({drink}) => {
  if (drink.strDrinkThumb === null) {
    return (
      <img
        src='cocktail2.jpg'
        height='100'
        alt=''
      />
    )
  }

  return (
    <img
      src={drink.strDrinkThumb}
      height='100'
      alt=''
    />
  )
}

Thumbnail.propTypes = {
  drink: PropTypes.object
}
export default Thumbnail
