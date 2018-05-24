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
      var listItem = this.state.someData.map((item)=>{
        var id = item.id;
      return <li key={item.id}>{item.name} <button onClick={()=>{this.deleteItem(id)}}>X</button><button onClick={()=>{this.props.edit(id)}}>Edit</button></li>
      ;});
    return (
      <div>
        <ul>
            {listItem}
        </ul>
      </div>
    )
  }
}
