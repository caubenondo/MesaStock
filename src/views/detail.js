import React from 'react'
import firebase from '../config/firebase'
const Details = (props) => {
    var viewRender;
    if(props.itemId !==''){
        // get ref
        this.firebaseRef = firebase.database().ref('items').child(props.itemId);
        this.firebaseRef.on('value', (snap) => {      
            viewRender = snap.val()   
        });
    }else{
        viewRender = {}
    }
    const renderView = Object.keys(viewRender).map((key,value)=>{
        return <li key={key}>{key.toLowerCase().split('_').map((word)=>{return word.replace(word[0],word[0].toUpperCase());}).join(' ')}: {viewRender[key]}</li>;
    })
  return (
    <div>
        <h2>Detail of item</h2>
     <ul>
         {renderView}
     </ul>
    </div>
  )
}
export default Details;