import React, {useState} from 'react';

export default function TextForm(props) 
{
  const [text, setText] = useState('Enter your text');
  return (
    <div>
        <h2>{props.heading}</h2>
        <div className = "mb-3">
        <textarea className = "form-control" id = "myBox" rows = "8"></textarea>            
        </div>
        <button className = 'btn btn-primary'>Conert To Uppercase</button>
    </div>
  )
}
