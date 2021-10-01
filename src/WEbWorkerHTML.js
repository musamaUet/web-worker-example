import React from 'react';
import Worker from './WebWorkerFile';
import WebWorker from './WorkerSetup';

class WebWorkerHTML extends React.Component {
  componentDidMount() {
    this.workerObj = new WebWorker(Worker);
    let btn1 = document.getElementById('btn1');
    btn1.addEventListener('click', () => {
      console.log('btn1 of large data clicked');
      let printResult = 'Print Hi';
      document.querySelector('#h1').innerHTML += printResult;
    });
  }
  fetchLoopingData = () => {
    console.log('Im fetchLooping Data');

    this.workerObj.postMessage('start worker');
    this.workerObj.addEventListener('message', (e) => {
      console.log('service-worker-event', e);
      document.querySelector('#webworker').innerHTML += e.data;
    });
    // this.workerObj.onmessage = function (e) {
    //   console.log('service-worker-event', e);
    //   document.querySelector('#webworker').innerHTML = e.data;
    // };
  };
  render() {
    return (
      <div>
        <h1>Web Workers</h1>
        <h2 id='h1'></h2>
        <h2 id='webworker'></h2>
        <button id='btn1'>print Hi</button>
        <button id='btn2' onClick={this.fetchLoopingData}>
          Load large data
        </button>
      </div>
    );
  }
}

export default WebWorkerHTML;
