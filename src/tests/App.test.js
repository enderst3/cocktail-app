import React from 'react'
import App from '../App'
import { shallow } from 'enzyme'

/* global it describe expect beforeEach */

describe('SearchBar', () => {
  let wrapper, app

  beforeEach(() => {
    wrapper = shallow(<App />)
    app = wrapper.instance()
  })

  it('properly performs onSearchTermInput', () => {
    app.onSearchTermInput({target: {value: 'gin'}})
    expect(wrapper.state().searchTerm).toBe('gin')
  })
})
