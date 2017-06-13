import React from 'react'
import DrinkList from '../DrinkList'
import { shallow } from 'enzyme'
import {DRINK_DATA} from '../test-data'

/* global it describe expect beforeEach */

describe('DrinkList', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <DrinkList
        drinks={null}
      />
    )
  })
  it('Should not display ListGroupItem if drinks is null', () => {
    expect(wrapper.find('.Results').exists()).toBe(false)
  })

  describe('When drinks has info', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <DrinkList
          drinks={DRINK_DATA}
        />
      )
    })

    it('should populate drink list', () => {
      expect(wrapper.find('.DrinkList').length).toBe(1)
    })
  })
})
