import React from 'react'
import DrinkListItem from '../DrinkListItem'
import { shallow } from 'enzyme'

/* global it describe expect beforeEach */

describe('DrinkListItem', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <DrinkListItem />
    )
  })

})
