import React, { Component } from 'react'
import firebase from '../config/firebase'
export default class AddItemView extends Component {
    state = {      
        name:'',
        type:'',
        unit:'',
        color:'',
        size:'',
        stockNumber:'',
        skuNumber:'',
        qty:0,
    }

  
    onSubmiting=(e)=> {
        e.preventDefault();
    
        var item = this.state   
        const databaseDB = firebase.database().ref('items');       
        databaseDB.push({   ...item}).then(()=>{this.setState({name:'',
        type:'',
        unit:'',
        color:'',
        size:'',
        stockNumber:'',
        skuNumber:'',
        qty:0,})})
        //firebaseDB.set({data}).then((()=>{console.log('updated')}))
      }
  handleInputChange = (event)=>{
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked :target.value;
      const name = target.name;

      this.setState({[name]:value})
  }

  render() {
      var divStyle ={
          backgroundColor:'#edeeef',
            margin: '0 auto',
            padding: '20px 50px'
      }
      var viewStyle = {
          maxWidth: '700px'
      }
     
    return (
      <div style={divStyle}>
          <div style={viewStyle}>
            <form onSubmit={this.onSubmiting}>
                <h2>Adding Item</h2>
               
                <hr/>
                <div className="formGroup">
                    <label htmlFor="itemName">Name</label>
                    <input type="text" placeholder='item name' name='name' value={this.state.name} onChange={this.handleInputChange}/>
                </div>
                <div className="formGroup">
                    <label htmlFor="itemName">Type</label>
                    <input type="text" placeholder='item type'name='type'value={this.state.type} onChange={this.handleInputChange}/>
                </div>
                <div className="formGroup">
                    <label htmlFor="itemName">color</label>
                    <input type="text" placeholder='item color'name='color' value={this.state.color} onChange={this.handleInputChange}/>
                </div>
               <hr/>
                <button type='submit'> Submit</button>
            </form>
          </div>
      </div>
    )
  }
}
