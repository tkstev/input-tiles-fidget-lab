import React from 'react';
import '../App.css'

function TextInput() {
  const component = new React.Component();
  component.state = {
    text: null
  }
  
  function handleChange(event) {
    component.setState({"text": event.target.value});
  }
  
//   function handleSubmit(event) {
//     //logic for handling submit here
//   }
//   component.componentDidMount = function() {
//     //some lifecycle action here
//   }

  component.render = function() {
    return (
      <li className="cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-title">Text</div>
            <p className="card-text">
              <div className="input btn-block">
                <input type="text" placeholder="Write here!" className="textInput" onChange={handleChange}/>
              </div>
              <div className="output">
                <label for="textOutput">State: </label>
                <span name="textOutput">{component.state.text}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    )
  }
  return component;
}

export default TextInput
