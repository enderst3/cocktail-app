import React, { Component } from 'react'
import {Jumbotron, Col, Panel} from 'react-bootstrap'
import SearchBar from './SearchBar'
import DrinkList from './DrinkList'
import RecipeDetail from './RecipeDetail'
import './App.css'


const baseUrl = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?s='

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      drinks: [],
      selectedDrink: null
    }

    this.drinkSearch('')

  }

  drinkSearch(searchTerm) {
    if (searchTerm !== '') {
      fetch(`${baseUrl}${searchTerm}`)
        .then((response) => {
          return response.json()
        }).then((json) => {
          this.setState({
            drinks: json.drinks,
            selectedDrink: null
          })
          console.log('parsed json', json)
        }).catch((err) => {
          console.log('parsing failed', err)
        })
      }
  }

  render() {
    return (
      <div className="App">
        <Col md={8} mdOffset={2}>
          <Panel footer="&copy;2017 My Cocktails Inc.">
            <Jumbotron className='Header'>
            <h1>Cocktail Search App</h1>
            </Jumbotron>
            <SearchBar
              onSearchTermChange={searchTerm => this.drinkSearch(searchTerm)}
            />
            <RecipeDetail
              drink={this.state.selectedDrink}
             />
            <DrinkList
              drinks={this.state.drinks}
              onDrinkSelect={selectedDrink => this.setState({selectedDrink})}
            />
          </Panel>
        </Col>
      </div>
    );
  }
}

export default App
