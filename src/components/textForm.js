import React, {useState} from 'react';

export default function TextForm(props)
{
  const handleUpClick = () =>
  {
    console.log("Uppercase is selected" +text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  }
  const handleloClick = () =>
  {
    console.log("Lowercase is selected " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  }
  const handleclClick = () =>
  {
    console.log("Text is cleared " + text);
    let newText = ("");
    setText(newText);
    props.showAlert("Text is cleared", "success");
  }
  const handleOnChange = (event) =>
  {
    console.log("On Change");
    setText(event.target.value);
  }
  const toTitleCase = () => 
  {
    console.log("Title case is selected " + text);
    let newText = text.toLowerCase().replace(/(?:^|\s)\w/g, function(match)
    {
      return match.toUpperCase();
    });
    setText(newText);
    props.showAlert("Converted to Title case", "success");
  }
  const handleCopy = () =>
  {
    console.log('I am copy');
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied to clipboard !", "success");
  }
  const removeExtraSpace = () =>
  {
    console.log('Removing extra spaces');
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
    props.showAlert("Extra space is removed", "uccess");
  }
  const [text, setText] = useState('');
  // text = "new text"; // This is not the correct way to the state of the text
  // setText("new text"); // Correct way to change the state
  return (
    <>
      <div className = 'container' style = {{color: props.mode === 'dark' ? 'white' : '#042743'}}>
          <h2>{props.heading}</h2>
          {/* <h2> Enter the text here you want to analyze</h2> */}
          <div className = "mb-2">
          <textarea className = "form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor: props.mode === 'dark' ? 'grey' : 'light', color: props.mode === 'dark' ? 'white' : '#042743'}} id = "myBox" rows = "5"></textarea>
          </div>
          <button className = 'btn btn-primary mx-2' onClick = {handleUpClick} >Conert To Uppercase</button>
          <button className = 'btn btn-primary mx-2' onClick = {handleloClick} >Conert To Lowercase</button>
          <button className = 'btn btn-primary mx-2' onClick = {handleclClick} >Clear text</button>
          <button className = 'btn btn-primary mx-2' onClick = {toTitleCase} >Title Case</button>
          <button className = 'btn btn-primary mx-2' onClick = {handleCopy} >Copy text</button>
          <button className = 'btn btn-primary mx-2' onClick = {removeExtraSpace}>Removing extra spaces</button>
      </div>
      <div className ='container my-2' style = {{color: props.mode === 'dark' ? 'white' : '#042743'}} >
        <h3>Your text summary</h3>
        <p>You text have {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes is the average time to read</p>
        <h5>Preview</h5>
        <p>{text.length > 0 ? text :'Enter some thing in the above textbox to preview it here'}</p>
      </div>
    </>
  )
}