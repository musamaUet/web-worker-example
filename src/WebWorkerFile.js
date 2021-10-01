// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  // eslint-disable-line no-restricted-globals
  // eslint-disable-next-line no-restricted-globals
  self.addEventListener('message', (e) => {
    console.log('e', e);
    if (!e) return;
    let result = 0;

    for (let i = 0; i < 100000000; i++) {
      console.log('dsd');
      result += i;
    }

    postMessage(result);
  });
};
