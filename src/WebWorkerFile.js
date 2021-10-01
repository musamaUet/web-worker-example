// export default () => {

// // onmessage = function (e) {
//   if (!e) return;

//   let result = 0;
//   for (let i = 0; i < 10000; i++) {
//     console.log('result', i);
//     result += i;
//   }
//   postMessage(result);
// };
// // // self.addEventListener('message', (e) => {
// // /* eslint-disable-line no-restricted-globals */

// // // });
// // // };

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  // eslint-disable-line no-restricted-globals
  // eslint-disable-next-line no-restricted-globals
  self.addEventListener('message', (e) => {
    if (!e) return;
    let result = 0;

    for (let i = 0; i < 100000000000; i++) {
      result += i;
    }

    postMessage(result);
  });
};
