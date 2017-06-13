import React from 'react'
import App from '../App'
import { shallow } from 'enzyme'
import {DRINK_DATA} from '../test-data'
import fetch from 'jest-fetch-mock'
import renderer from 'react-test-renderer'
global.fetch = fetch

/* global it describe expect beforeEach */

global.fetch.mockResponse(JSON.stringify(DRINK_DATA))

describe('App', () => {
  it('checks a snapshot', () => {
    const component = renderer.create(<App />)
    const json = component.toJSON()
    expect(json).toMatchSnapshot()
  })
})

describe('SearchBar', () => {
  let wrapper, app
  const onDrinkSelect = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <App
        onDrinkSelect={onDrinkSelect}
      />)
    app = wrapper.instance()
  })

  it('properly performs onSearchTermInput', () => {
    app.onSearchTermInput({target: {value: 'gin'}})
    expect(wrapper.state().searchTerm).toBe('gin')
  })

  // it('should set the state of selectedDrink', () => {
  //   app.onDrinkSelect({se})
  //   wrapper.setState({isEditing: false})
  // })

})
