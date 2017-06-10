import React from 'react'
import RecipeDetail from '../RecipeDetail'
import { shallow } from 'enzyme'

/* global it describe expect beforeEach */

describe('RecipeDetail', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <RecipeDetail />
    )
  })
  it('It should display an empty div on load', () => {
    expect(wrapper.find('.StartDiv').exists()).toBe(true)
  })
  it('It should have a drink Ingredients element', () => {
    expect(wrapper.find('#DrinkIngredients').exists()).toBe(false)
  })
  it('It should display the drink name', () => {
    expect(wrapper.find('.DrinkName').exists()).toBe(false)
  })
  it('It should display and image', () => {
    expect(wrapper.find(<img />).exists()).toBe(false)
  })
})
