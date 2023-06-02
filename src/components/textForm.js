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
    document.getSelection().removeAllRanges();
    props.showAlert("Text is copied to clipboard !", "success");
  }
  const removeExtraSpace = () =>
  {
    console.log('Removing extra spaces');
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
    props.showAlert("Extra space is removed", "success");
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
          <textarea className = "form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} id = "myBox" rows = "5"></textarea>
          </div>
          <button disabled = {text.length === 0} className = 'btn btn-primary mx-2 my-1' onClick = {handleUpClick} >Conert To Uppercase</button>
          <button disabled = {text.length === 0} className = 'btn btn-primary mx-2 my-1' onClick = {handleloClick} >Conert To Lowercase</button>
          <button disabled = {text.length === 0} className = 'btn btn-primary mx-2 my-1' onClick = {handleclClick} >Clear text</button>
          <button disabled = {text.length === 0} className = 'btn btn-primary mx-2 my-1' onClick = {toTitleCase} >Title Case</button>
          <button disabled = {text.length === 0} className = 'btn btn-primary mx-2 my-1' onClick = {handleCopy} >Copy text</button>
          <button disabled = {text.length === 0} className = 'btn btn-primary mx-2 my-1' onClick = {removeExtraSpace}>Removing extra spaces</button>
      </div>
      <div className ='container my-2' style = {{color: props.mode === 'dark' ? 'white' : '#042743'}} >
        <h3>Your text summary</h3>
        <p>You text have {text.split(" ").filter((element) => {return element.length!== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes is the average time to read</p>
        <h5>Preview</h5> 
        <p>{text.length > 0 ? text :'Nothing to Preview !'}</p>
      </div>
    </>
  )
}