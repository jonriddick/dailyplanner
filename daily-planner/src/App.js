import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="Menu" className="border">
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="/">The Positive Planner</a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active"><a href="/">Home</a></li>
              <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="/">Page 1 <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="/">Page 1-1</a></li>
                  <li><a href="/">Page 1-2</a></li>
                  <li><a href="/">Page 1-3</a></li>
                </ul>
              </li>
              <li><a href="/">Page 2</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><a href="/"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a href="/"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
          </div>
        </nav>
        </div>
        
        <div id="MorningReview" className="box mt">
          <div className="border"><h1>Morning Review</h1></div>
          <div className="sides border">
            <div className="border side"><p>I'm Greatful For:<input type="text" name=""/></p></div>
            <div className="border side"><p>I'm Looking Forward To:<input type="text" name=""/></p></div>
          </div>
          <div className="border"><p>Daily Affirmation:<input type="text" name=""/></p></div>
          <div className="sides border">
            <div className="border side"><p>Today's Focus:<input type="text" name=""/></p></div>
            <div className="border side"><p>Today's Fitness Challenge:<input type="text" name=""/></p></div>
          </div>
        </div>

        <div id="Priorities" className="box mt">
          <div className="border"><h1>Priorities</h1></div>
            <div className="sides border">
              <div className="border side"><p><form>Priority #1:<input type="text" name=""/></form></p></div>
              <div className="border side"><p><form>Priority #2:<input type="text" name=""/></form></p></div>
            </div>
            <div className="sides border">
              <div className="border side"><p><form>Priority #3:<input type="text" name=""/></form></p></div>
              <div className="border side"><p><form>Priority #4:<input type="text" name=""/></form></p></div>
            </div>
          </div>

          <div id="" className="box mt">
            <div className="border"><h1>Schedule</h1></div>
            <div className="border sides">
              <div className=" border side">
                <form>
                  12:00am:<input type="text" name=""/><br />
                  01:00am:<input type="text" name=""/><br />
                  02:00am:<input type="text" name=""/><br />
                  03:00am:<input type="text" name=""/><br />              
                  04:00am:<input type="text" name=""/><br />
                  05:00am:<input type="text" name=""/><br />
                  06:00am:<input type="text" name=""/><br />
                  07:00am:<input type="text" name=""/><br />
                  08:00am:<input type="text" name=""/><br />
                  09:00am:<input type="text" name=""/><br />              
                  10:00am:<input type="text" name=""/><br />
                  11:00am:<input type="text" name=""/><br />
                </form>
              </div>  
              <div className=" border side">
                <form>
                  12:00pm:<input type="text" name=""/><br />
                  01:00pm:<input type="text" name=""/><br />              
                  02:00pm:<input type="text" name=""/><br />
                  03:00pm:<input type="text" name=""/><br />
                  04:00pm:<input type="text" name=""/><br />
                  05:00pm:<input type="text" name=""/><br />
                  06:00pm:<input type="text" name=""/><br />
                  07:00pm:<input type="text" name=""/><br />
                  08:00pm:<input type="text" name=""/><br />
                  09:00pm:<input type="text" name=""/><br />              
                  10:00pm:<input type="text" name=""/><br />
                  11:00pm:<input type="text" name=""/><br />
                </form>
              </div>
            </div>
          </div>

          <div id="" className="box mt">
            <div className="border"><h1>Tasks</h1></div>
            <div className="border">
            <p>
              <form>
                Task #1:<input type="text" name=""/><br />
                Task #2:<input type="text" name=""/><br />
                Task #3:<input type="text" name=""/><br />
                Task #4:<input type="text" name=""/><br />
              </form>
            </p>
          </div>
          </div>
          
          <div id="" className="box mt">
            <div className="border"><h1>Notes</h1></div>
            <div className="border">
              <p><textarea rows="5" cols="150">
                Notes go here.
              </textarea></p>
            </div>
          </div>
          
          <div id="" className="box mt">
            <div className="border"><h1>End of Day Review</h1></div>
            <div className="border sides">
              <div className="border side">
                <h3>How I won today:</h3>
                <ol>
                  <li><input type="text" name=""/></li>
                  <li><input type="text" name=""/></li>
                </ol>
              </div>
              <div className="border side">
                <h3>How I will improve tomorrow:</h3>
                <ol>
                  <li><input type="text" name=""/></li>
                  <li><input type="text" name=""/></li>
                </ol>
              </div>
            </div>
          </div>

          <div id="Footer" className="box mt">
            <p>Footer goes here</p>
          </div>









        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
