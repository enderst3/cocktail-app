import React from 'react'
import SearchBar from '../SearchBar'
import { shallow } from 'enzyme'

/* global it describe expect beforeEach jest */

describe('SearchBar', () => {
<<<<<<< HEAD
  let onSearchTermInput
  // let wrapper
=======
  let handleOnChange
  let wrapper
>>>>>>> master

  beforeEach(() => {
    onSearchTermInput = jest.fn()
  })

  it('will make the correct callback when adding text', () => {
    const searchBar = shallow(
      <SearchBar
<<<<<<< HEAD
        onSearchTermInput={onSearchTermInput}
=======
        onSearchTermChange={handleOnChange}
>>>>>>> master
      />
    )
    const textBox = searchBar.find('#drink-input')
    const event = {target: {value: 'gin'}}
    textBox.simulate('change', event)
    expect(onSearchTermInput).toBeCalledWith(event)
  })

  beforeEach(() => {
    wrapper = shallow(
      <SearchBar />
    )
  })
  it('It should have a FormControl element', () => {
    expect(wrapper.find('#drink-input').exists()).toBe(true)
  })
  it('It should have a panel element', () => {
    expect(wrapper.find('.SearchBar').exists()).toBe(true)
  })
})
