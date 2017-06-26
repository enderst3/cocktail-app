import React from 'react'
import Thumbnail from '../Thumbnail'
import { shallow } from 'enzyme'
import {DRINK_DATA} from '../test-data'
import fetch from 'jest-fetch-mock'
global.fetch = fetch

/* global it describe expect done */

global.fetch.mockResponse(JSON.stringify(DRINK_DATA))

describe('SearchBar', () => {
  let wrapper

  it('should return an image', () => {
    wrapper = shallow(
      <Thumbnail
        drink={DRINK_DATA}
      />
    )
    setTimeout(() => {
      expect(wrapper.find(<img />).exists()).toBe(true)
      done()
    }, 50)
  })

  it('should call show supplied image url', () => {
    wrapper = shallow(
      <Thumbnail
        drink={DRINK_DATA[2]}
      />
    )
    setTimeout(() => {
      expect(wrapper.find(<Thumbnail />)).toEqual('http://www.thecocktaildb.com/images/media/drink/qwxysv1478819943.jpg')
      done()
    }, 50)
  })

  it('should call show default image', () => {
    wrapper = shallow(
      <Thumbnail
        drink={DRINK_DATA[0]}
      />
    )
    setTimeout(() => {
      expect(wrapper.find(<Thumbnail />)).toEqual('cocktail2')
      done()
    }, 50)
  })
})
