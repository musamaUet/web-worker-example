import React from 'react';

class WebWorkerHTML extends React.Component {
  componentDidMount() {
    let btn1 = document.getElementById('btn1');
    btn1.addEventListener('click', () => {
      console.log('btn1 of large data clicked');
      let printResult = 'Print Hi';
      document.querySelector('#h1').innerHTML += printResult;
    });
    let btn2 = document.querySelector('#btn2');
    btn2.addEventListener('click', () => {
      console.log('largeData clicked');
      let result = 0;
      for (let i = 0; i < 10000000000; i++) {
        result += i;
      }
      document.querySelector('#webworker').innerHTML = result;
    });
  }
  render() {
    return (
      <div>
        <h1>Web Workers</h1>
        <h2 id='h1'></h2>
        <h2 id='webworker'></h2>
        <button id='btn1'>print Hi</button>
        <button id='btn2'>Load large data</button>
      </div>
    );
  }
}

export default WebWorkerHTML;
