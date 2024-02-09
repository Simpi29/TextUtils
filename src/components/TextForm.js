import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
  return (
    <div>
    <h1>{props.text}</h1>
<div className="mb-3">

  <textarea className="form-control" value = {text} id="exampleFormControlTextarea1" rows="7"></textarea>
</div>
<button className='btn btn-primary'>Convert to Uppercase</button>
</div>
   
  )
}
