import axios from 'axios';

const Delete = (path, root) => {
  const promise = new Promise((resolve, reject) => {
    axios.delete(`${root}/${path}`)
      .then((ress) => {
        resolve(ress.data)
      }, (err) => {
        reject(err);
      });
  })
  return promise;
}

export default Delete;