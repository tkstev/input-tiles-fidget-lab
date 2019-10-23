import React from 'react';

const DateInput = () => {
  const component = new React.Component();

  component.render = () => {
    return(
      <li className="cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-title">Date</div>
            <p className="card-text">
              <div className="input btn-block">
                <input type="date" className="textInput" />
              </div>
              <div className="output">
                <label for="dateOutput">State: </label>
                <span name="dateOutput"></span>
              </div>
            </p>
          </div>
        </div>
      </li>
    )
  }

  return component
}

export default DateInput
