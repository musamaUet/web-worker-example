import WebWorkerHTML from './WEbWorkerHTML';
import React from 'react';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    document.documentElement.focus();
    document.onkeydown = this.keyDown;
    document.getElementById('test').onclick = this.clicked;
  }
  clicked = (evt) => {
    var el;
    if (!evt) {
      evt = window.event;
      el = evt.srcElement;
    } else if (evt) {
      el = evt.target;
    }
    switch (el.id) {
      case 'left':
        this.fireKey(el);
        break;
      case 'right':
        this.fireKey(el);
        break;
    }
  };
  keyDown = (evt) => {
    var key;
    var el = document.getElementById('test');
    var left;
    if (!evt) {
      evt = window.event;
      if (!evt.which) {
        key = evt.keyCode;
      }
    } else if (evt) {
      key = evt.which;
    }
    if (el.style.left) {
      left = parseInt(el.style.left, 10);
    } else if (!el.style.left) {
      left = 0;
    }
    switch (key) {
      case 37:
        left -= 10;
        el.style['left'] = left + 'px';
        break;
      case 39:
        left += 10;
        el.style['left'] = left + 'px';
        break;
    }
  };
  fireKey = (el) => {
    var key;
    switch (el.id) {
      case 'left':
        key = 37;
        break;
      case 'right':
        key = 39;
        break;
    }
    if (document.createEventObject) {
      var eventObj = document.createEventObject();
      eventObj.keyCode = key;
      el.fireEvent('onkeydown', eventObj);
    } else if (document.createEvent) {
      var eventObj = document.createEvent('Events');
      eventObj.initEvent('keydown', true, true);
      eventObj.which = key;
      el.dispatchEvent(eventObj);
    }
  };
  render() {
    return (
      <div>
        <div id='test'>
          <div id='left'>Left</div>
          <div id='right'>Right</div>
        </div>
        <WebWorkerHTML />
      </div>
    );
  }
}

export default App;
