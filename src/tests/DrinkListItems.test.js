import React from 'react'
import DrinkListItem from '../DrinkListItem'
import { shallow } from 'enzyme'
import {DRINK_DATA} from '../test-data'

/* global it describe expect beforeEach */

describe('DrinkListItem', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <DrinkListItem
        drinks={DRINK_DATA}
      />
    )
  })
  it('Should display the drink', () => {
    expect(wrapper.find('.Results').exists()).toBe(true)
  })
})
