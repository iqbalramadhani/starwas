import axios from 'axios';

const Get = (path, root) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${root}/${path}`)
      .then((ress) => {
        // console.log(ress)
        resolve(ress.data)
      }, (err) => {
        reject(err);
      });
  })
  return promise;
}

export default Get;