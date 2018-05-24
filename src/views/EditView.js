import React, { Component } from 'react'
import firebase from '../config/firebase'
export default class EditView extends Component {
    state={
       item:{}
      
    }
    componentDidMount() {
        this.firebaseRef = firebase.database().ref('items').child(this.props.itemId);
        this.firebaseCallback = this.firebaseRef.on('value', (snap) => {      
            
            this.setState({item:snap.val()})   
        });
    }
    componentWillUnmount() {
        // Un-register the listener on '/someData'.
        this.firebaseRef.off('value', this.firebaseCallback);
    }
  render() {
      console.log(this.state.view)
    return (
      <div>
          <ul>
              {Object.keys(this.state.item).map((key,val)=>{
                  return <li key={key}>{key} : {this.state.item[key]} </li>
              })}
          </ul>
      </div>
    )
  }
}
