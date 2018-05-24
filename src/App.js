import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddItemView from './views/AddItemView'
import ListItemView from './views/ListItemView'
import EditView from './views/EditView'
class App extends Component {

  state = {
    edit: false,
    itemId:''
  }
  editItem = (id) =>{
    this.setState({edit:true,itemId:id})
  }
  render() {
    console.log(this.state.edit)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mesa React Stockroom</h1>
        </header>
       <AddItemView/> 
        <ListItemView edit={this.editItem}/>
        {!!this.state.edit && (<EditView itemId={this.state.itemId}/>)}
      </div>
    );
  }
}

export default App;
