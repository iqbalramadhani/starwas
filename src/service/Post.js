import axios from 'axios';

const Post = (path, root, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.post(`${root}/${path}`, data).then((ress) => {
      resolve(ress);
    }, (err) => {
      reject(err);
    });
  })
  return promise;
}

export default Post;