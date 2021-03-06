import React from 'react'
import SearchBar from '../SearchBar'
import { shallow } from 'enzyme'

/* global it describe expect beforeEach jest */

describe('SearchBar', () => {
  let onSearchTermInput
  // let wrapper

  beforeEach(() => {
    onSearchTermInput = jest.fn()
  })

  it('will make the correct callback when adding text', () => {
    const searchBar = shallow(
      <SearchBar
        onSearchTermInput={onSearchTermInput}
      />
    )
    const textBox = searchBar.find('#drink-input')
    const event = {target: {value: 'gin'}}
    textBox.simulate('change', event)
    expect(onSearchTermInput).toBeCalledWith(event)
  })
})
