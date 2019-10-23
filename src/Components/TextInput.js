import React from 'react';

const TextInput = () => {
  const component = new React.Component();
  component.state = {
    text: null
  }

  // The event will be passed in automatically.
  component.handleChange = (event) => {
    component.setState({"text": event.target.value});
  }

  component.render = () => {
    return (
      <li className="TextInput cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-title">Text</div>
            <p className="card-text">
              <div className="input btn-block">
                <input type="text" placeholder="Write here!" className="textInput" onChange={component.handleChange}/>
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
