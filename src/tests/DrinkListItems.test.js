import React from 'react'
import DrinkListItem from '../DrinkListItem'
import { shallow } from 'enzyme'
<<<<<<< HEAD
import {DRINK_DATA} from '../test-data'
import fetch from 'jest-fetch-mock'
global.fetch = fetch

/* global it describe expect beforeEach jest done */

global.fetch.mockResponse(JSON.stringify(DRINK_DATA))

describe('DrinkListItem', () => {
  let wrapper
  const onDrinkSelect = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <DrinkListItem
        drink={DRINK_DATA}
        onDrinkSelect={onDrinkSelect}
      />
    )
  })
  it('Should display the drink image', () => {
    expect(wrapper.find('.Results').exists()).toBe(true)
  })

  it('Should display the drink name', () => {
    expect(wrapper.find('.DrinkName').exists()).toBe(true)
  })

  it('should call handleOnClick', () => {
    wrapper.find('.Results').simulate('click')
    setTimeout(() => {
      expect(wrapper.find('.RecipeDetail').exists()).toBe(true)
      done()
    }, 50)
  })
=======

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
>>>>>>> master
})
