import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddItemView from './views/AddItemView'
import ListItemView from './views/ListItemView'
import EditView from './views/EditView'
import Details from './views/detail'
class App extends Component {

  state = {
    edit: false,
    itemId:''
  }
  editItem = (id) =>{
    this.setState({itemId:id})
    this.setState({edit:true})
  }
  render() {
    
    return (
      <div className="App ">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mesa React Stockroom</h1>
        </header>
        
        <AddItemView className='container u-full-width'/> 
        <hr/>
        <ListItemView edit={this.editItem} className='container u-full-width'/>
       {/*{this.state.edit ===true && (<DetailView itemId={this.state.itemId}/>)}*/}
        <Details itemId={this.state.itemId}/>
      </div>
    );
  }
}

export default App;
