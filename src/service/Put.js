import axios from 'axios';

const Put = (path, root, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.put(`${root}/${path}`, data).then((ress) => {
      resolve(ress);
    }, (err) => {
      reject(err);
    });
  })
  return promise;
}

export default Put;