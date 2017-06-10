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
  it('Should display image', () => {
    expect(wrapper.find('.CocktailImage').exists()).toBe(true)
  })
  it('Should display drink name', () => {
    expect(wrapper.find('.DrinkName').exists()).toBe(true)
  })
})
