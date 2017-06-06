import React, { Component } from 'react'
import {Jumbotron, Col, Panel} from 'react-bootstrap'
import SearchBar from './searchBar'
import DrinkList from './drinkList'
import './App.css'


const baseUrl = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?s='

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      drinks: []
    }

    this.drinkSearch('')

  }

  drinkSearch(searchTerm) {
    fetch(`${baseUrl}${searchTerm}`)
      .then((response) => {
        return response.json()
      }).then((json) => {
        this.setState({drinks: json.drinks})
        console.log('parsed json', json)
      }).catch((err) => {
        console.log('parsing failed', err)
      })
  }

  render() {
    return (
      <div className="App">
        <Col md={10} mdOffset={1}>
          <Panel footer="my footer">
            <Jumbotron className='header'>
            <h1>Cocktail Search App</h1>
            </Jumbotron>
            <SearchBar
              onSearchTermChange={searchTerm => this.drinkSearch(searchTerm)}
            />
            <DrinkList
              drinks={this.state.drinks}
            />
          </Panel>
        </Col>
      </div>
    );
  }
}

export default App
