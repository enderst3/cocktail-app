import React from 'react'
import SearchBar from '../SearchBar'
import { shallow } from 'enzyme'


describe('SearchBar', () => {
  let handleOnChange

  beforeEach(() => {
    handleOnChange = jest.fn()
  })

  it('will make the correct callback when adding text', () => {
    const SearchBar = shallow(
      <SearchBar
        handleOnChange={handleOnChange}
      />
    )
    const textBox = SearchBar.find('#drink-input')
    const event = {target: {value: 'gin'}}
    textBox.simulate('change', event)
    expect(handleOnChange).toBeCalledWith(event)
  })
})
