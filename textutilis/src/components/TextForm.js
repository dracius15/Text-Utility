import React,{useState} from 'react'
import propTypes from 'prop-types'

export default function TextForms(props) {
  const handleupClick =()=>{
   // console.log("UpperCase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase","success");
  }
  
  const handleOnChange=(event)=>{
    //console.log("Change");
    setText(event.target.value);
   
  }

  const toLowerCase=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  }

  const toClear=()=>{
    setText("");
    props.showAlert("Text Cleared","success");
  }
  
const[text,setText]= useState('');
 


  return (
    <>
   <div className='Container'>
    
<div className="mb-3">
  <label htmlFor="myBox" className="form-label">{props.heading}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange} value={text}></textarea>
</div>
<button className="btn btn-primary mx-2 my-2" onClick={handleupClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2 my-2" onClick={toLowerCase}>Convert To LowerCase</button>
<button className="btn btn-primary mx-2 my-2" onClick={toClear}>Clear Text</button>
</div>

<div className="Container my-3">
  <h1>Your Text Summary</h1>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
  <p>Minutes to read text ={text.split(" ").length*0.008}</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Your text will preview here"}</p>
</div>
</>


  )

}

TextForms.propTypes={
  heading:propTypes.string
  };

TextForms.defaultProps={
  heading:"Enter Info About textarea"
}


