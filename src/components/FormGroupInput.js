import React from 'react'

const FormGroupInput = (props) => {
    /* 
        accept props: name, label, type, placeholder
        format string
    */
  
    const label = props.label.toLowerCase().split('_').map((word)=>{return word.replace(word[0],word[0].toUpperCase())}).join(' ');
  return (
    <div className="formGroup row">
        <label className='u-pull-left' htmlFor={'formGroup_'+ props.name} >{label}</label>
        <input className='u-full-width' type={props.type} placeholder={'Item\'s '+ label} id={'formGroup_'+props.name} name={props.name} value={props.value} onChange={props.onChange}/>
    </div>
  )
}

export default FormGroupInput;

