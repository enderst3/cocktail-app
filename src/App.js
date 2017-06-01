import React, { Component } from 'react';
import {Button, Jumbotron, ListGroup, ListGroupItem, Col, FormControl, Panel} from 'react-bootstrap'
import './App.css';

// api = http://www.thecocktaildb.com/api/json/v1/1/search.php?s=

class App extends Component {
  render() {
    return (
      <div className="App">
        <Col md={10} mdOffset={1}>
          <Panel footer="my footer">
            <Jumbotron className='header'>
            <h1>Cocktail Search App</h1>
            </Jumbotron>
            <Panel className='searchBar'>
              <h3>Enter a Drink Name:</h3>
              <form>
                <FormControl
                  id="drinkInput"
                  type="text"
                  placeholder="Enter Drink Name..."
                />
              </form>
              <br/>
              <Button bsSize='small'>Search</Button>
            </Panel>
            <ListGroup>
              <Col md={4}>
                <ListGroupItem className='results'>
                  <div className='cocktailImage'>
                    <img src='cocktail.jpg'
                      height='100'
                    />
                  </div>
                  <div className='drinkName'>
                    <h4>Rum and Coke</h4>
                  </div>
                </ListGroupItem>
              </Col>
              <Col md={4}>
                <ListGroupItem className='results'>
                    <img src='gnt.jpg'
                      height='100'
                    />
                    <h4>Gin and Tonic</h4>
                </ListGroupItem>
              </Col>
              <Col md={4}>
                <ListGroupItem className='results'>
                    <img src='cocktail.jpg'
                      height='100'
                    />
                    <h4>Bloody Mary</h4>
                </ListGroupItem>
              </Col>
            </ListGroup>
          </Panel>
        </Col>
      </div>
    );
  }
}

export default App;
