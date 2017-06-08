import React from 'react'
import SearchBar from '../SearchBar'
import { shallow } from 'enzyme'

/* global it describe expect beforeEach jest */

describe('SearchBar', () => {
  let handleOnChange

  beforeEach(() => {
    handleOnChange = jest.fn()
  })

  it('will make the correct callback when adding text', () => {
    const searchBar = shallow(
      <SearchBar
        handleOnChange={handleOnChange}
      />
    )
    const textBox = searchBar.find('#drink-input')
    const event = {target: {value: 'gin'}}
    textBox.simulate('change', event)
    expect(handleOnChange).toBeCalledWith(event)
  })
})
