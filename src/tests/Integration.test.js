import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import { mount } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('UI elements are rendered on page', () => {
    let wrapper

    beforeEach((done) => {
      wrapper = mount(<App />)
      setTimeout(() => {
        done()
      }, 50)
    })

    it('SearchBar exists', () => {
      expect(wrapper.find('.SearchBar').exists()).toBe(true)
    })

    it('Recipe details exists', () => {
      expect(wrapper.find('.RecipeDetail').exists()).toBe(false)
    })

    it('drink list exists', () => {
      expect(wrapper.find('.DrinkList').exists()).toBe(true)
    })

    it('header exists', () => {
      expect(wrapper.find('.Header').exists()).toBe(true)
    })

  })
