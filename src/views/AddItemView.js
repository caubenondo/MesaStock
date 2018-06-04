import React, { Component } from 'react'
import firebase from '../config/firebase'
import FormGroupInput from '../components/FormGroupInput'
export default class AddItemView extends Component {
    state = {      
        name:'',
        type:'',
        color:'',
        size:'',
        stock_number:'',
        sku_number:'',
        unit_name:'',
        unit_count:0,       
        price: 0,
        inventory:0,
    }

    onSubmiting=(e)=> {
        e.preventDefault();
        /* todo:
            validate inputs
        */
        var item = this.state;
        // get reference from database
        const databaseDB = firebase.database().ref('items');
        
        // adding item to array list, then clear the form    
        databaseDB.push({   ...item}).then(()=>{this.setState({
            name:'',
            type:'',
            color:'',
            size:'',
            stock_number:'',
            sku_number:'',
            unit_name:'',
            unit_count:0,       
            price: 0,
            inventory:0,  
        })})
        //firebaseDB.set({data}).then((()=>{console.log('updated')}))
      }

  handleInputChange = (event)=>{
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked :target.value;
      const name = target.name;

      this.setState({[name]:value})
  }

  render() {
      
    // loop whatever in state of this component -> it will automatic expand in scale with component's state => more dynamic 
    var formInputs = Object.keys(this.state)
                            .map((key,val)=>{return <FormGroupInput className='row' key={key} name={key} value={this.state[key]} type={typeof(this.state[key])==='string'? 'text': 'number'} label={key} onChange={this.handleInputChange} />});
    return (
         
            <form onSubmit={this.onSubmiting} className='container' style={{padding:'10px 20px',backgroundColor:'#eeeeee'}}>
                <h2>Adding Item component</h2>
                {formInputs}
               <hr/>
                <button className='button-primary' type='submit'> Submit</button>
            </form>
         
     
    )
  }
}
