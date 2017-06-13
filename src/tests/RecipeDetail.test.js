import React from 'react'
import RecipeDetail from '../RecipeDetail'
import { shallow } from 'enzyme'
import {DRINK_DATA} from '../test-data'

/* global it describe expect beforeEach */

describe('RecipeDetail', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <RecipeDetail
        drink={DRINK_DATA}
      />
    )
  })
  it('It should display an empty div on load', () => {
    expect(wrapper.find('.StartDiv').exists()).toBe(false)
  })
})
