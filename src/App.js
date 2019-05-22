import React from 'react';
import './App.css';
import TextInput from './Components/TextInput'

function App() {
  return (
    <div class="container">
      <ul class="cards">
        <TextInput />
        <li class="cards-item">
          <div class="card">
            <div class="card-content">
              <div class="card-title">Date</div>
              <p class="card-text">
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
        <li class="cards-item">
          <div class="card">
            <div class="card-content">
              <div class="card-title">Number</div>
              <p class="card-text">
                <div className="input btn-block">
                  <input type="number" className="textInput" />
                </div>
                <div className="output">
                  <label for="numberOutput">State: </label>
                  <span name="numberOutput"></span>
                </div>
              </p>
            </div>
          </div>
        </li>
        <li class="cards-item">
          <div class="card">
            <div class="card-content">
              <div class="card-title">Button</div>
              <p class="card-text">
                <div className="input btn-block">
                  <input type="button" value="Click me!" className="btn"/>
                </div>
                <div className="output">
                  <label for="buttonOutput">State: </label>
                  <span name="buttonOutput"></span>
                </div>
              </p>
            </div>
          </div>
        </li>
        <li class="cards-item">
          <div class="card">
            <div class="card-content">
              <div class="card-title">Radio</div>
              <p class="card-text">
                <div className="input">
                  <input type="radio" name="radioInput" value="1" className="checkboxInput" />
                  <input type="radio" name="radioInput" value="2" className="checkboxInput" />
                  <input type="radio" name="radioInput" value="3" className="checkboxInput" />
                  <input type="radio" name="radioInput" value="4" className="checkboxInput" />
                  <input type="radio" name="radioInput" value="5" className="checkboxInput" />
                </div>
                <div className="output">
                  <label for="radioOutput">State: </label>
                  <span name="radioOutput"></span>
                </div>
              </p>
            </div>
          </div>
        </li>
        <li class="cards-item">
          <div class="card">
            <div class="card-content">
              <div class="card-image"></div>
              <div class="card-title">Color</div>
              <p class="card-text">
                <div className="input btn-block">
                  <input type="color" className="colorButton"/>
                </div>
                <div className="output" >
                  <label for="colorOutput">State: </label>
                  <span name="colorOutput"></span>
                </div>
              </p>
            </div>
          </div>
        </li>
        <li class="cards-item">
          <div class="card">
            <div class="card-content">
              <div class="card-title">Checkbox</div>
              <p class="card-text">
                <div className="input">
                  <input type="checkbox" name="checkboxInput" value="1" className="checkboxInput" />
                  <input type="checkbox" name="checkboxInput" value="2" className="checkboxInput" />
                  <input type="checkbox" name="checkboxInput" value="3" className="checkboxInput" />
                  <input type="checkbox" name="checkboxInput" value="4" className="checkboxInput" />
                  <input type="checkbox" name="checkboxInput" value="5" className="checkboxInput" />
                </div>
                <div className="output">
                  <label for="checkboxOutput">Count: </label>
                  <span name="checkboxOutput"></span>
                </div>
              </p>
            </div>
          </div>
        </li>
        <li class="cards-item">
          <div class="card">
            <div class="card-content">
              <div class="card-image"></div>
              <div class="card-title">Range Slider</div>
              <p class="card-text">
                <div className="input">
                  <input type="range" className="rangeInput" />
                </div>
                <div className="output">
                  <label for="rangeOutput">State: </label>
                  <span name="rangeOutput"></span>
                </div>
              </p>
            </div>
          </div>
        </li>
        <li class="cards-item">
          <div class="card">
            <div class="card-content">
              <div class="card-image"></div>
              <div class="card-title">Select</div>
              <p class="card-text">
                <div className="input">
                  <select className="selectInput">
                    <option value="">Choose one:</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Rabbit">Rabbit</option>
                    <option value="Fish">Fish</option>
                    <option value="Horse">Horse</option>
                  </select>
                </div>
                <div className="output">
                  <label for="selectOutput">Image: </label>
                  <span name="selectOutput"></span>
                </div>
              </p>
            </div>
          </div>
        </li>
        <li class="cards-item">
          <div class="card">
            <div class="card-content">
              <div class="card-title">URL</div>
              <p class="card-text">
                <div className="input btn-block">
                  <input type="url" placeholder="Type a URL here!" className="textInput" />
                </div>
                <div className="output">
                  <label for="urlOutput">State: </label>
                  <span name="urlOutput"><a href="http://" id="url" target="_blank" rel="noopener noreferrer"></a></span>
                </div>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
