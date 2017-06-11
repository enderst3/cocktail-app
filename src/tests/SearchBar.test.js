import React from 'react'
import SearchBar from '../SearchBar'
import { shallow } from 'enzyme'

/* global it describe expect beforeEach jest */

describe('SearchBar', () => {
  let onFilterTextInput
  let wrapper

  beforeEach(() => {
    onFilterTextInput = jest.fn()
  })

  it('will make the correct callback when adding text', () => {
    const searchBar = shallow(
      <SearchBar
        onFilterTextInput={onFilterTextInput}
      />
    )
    const textBox = searchBar.find('#drink-input')
    const event = {target: {value: 'gin'}}
    textBox.simulate('change', event)
    expect(onFilterTextInput).toBeCalledWith(event)
  })
})
