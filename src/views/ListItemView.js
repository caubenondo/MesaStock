import React, { Component } from 'react'
import firebase from '../config/firebase'
export default class ListItemView extends Component {
    state = {
        someData: []
    }

    componentDidMount() {
        this.firebaseRef = firebase.database().ref('items');
        this.firebaseCallback = this.firebaseRef.on('value', (snap) => {      
        const somedata = []
          for (const key in snap.val()) {
              if (snap.val().hasOwnProperty(key)) {
                  const itemValue = snap.val()[key];
                  const item = {'id':key, ...itemValue}
                  somedata.push(item);
              }
          }
        this.setState({someData:somedata})
        });
    }
    componentWillUnmount() {
        // Un-register the listener on '/someData'.
        this.firebaseRef.off('value', this.firebaseCallback);
    }
    deleteItem = (itemId) => {
        console.log(itemId)
        firebase.database().ref('items/'+itemId).remove()
    }
  render() {
     /*  var listItem = this.state.someData.map((item)=>{
        var id = item.id;
      return <li key={item.id}>{item.name} <button onClick={()=>{this.props.edit(id)}}>Detail</button> <button onClick={()=>{this.deleteItem(id)}}>Delete</button></li>
      ;}); */

      var itemTable = this.state.someData.map((item)=>{
          var id= item.id;
        
          return <tr key={item.id}><td>{item.name}</td><td>{item.type}</td><td>{item.color}</td><td>{item.price}</td><td>{item.inventory}</td><td><button onClick={()=>{this.props.edit(id)}}>Detail</button></td><td><button onClick={()=>{this.deleteItem(id)}}>Delete</button></td></tr>; 
      });
    return (
      <div className='container'>
        <h2>List View</h2>
        {/* <ol className='u-pull-left row'>
            {listItem}
        </ol> */}
        <table className="u-full-width">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Color</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Detail</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {itemTable}
            </tbody>
        </table>
      </div>
    )
  }
}
