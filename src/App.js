import React , {Component} from 'react';
import './App.css';
import { CardList } from './component/card-list/card-list.component';
import {SearchBox} from './component/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
    monsters : [],
    searchField : ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}));
  }

  handleChange = (e) => {
     this.setState({searchField:e.target.value})
  }

  render(){
    const {monsters, searchField} = this.state;
    const FilteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Card Catalogue</h1>
        <SearchBox placeholder='search Monster'
        handleChange = {this.handleChange}/> 
        <CardList monsters={FilteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
