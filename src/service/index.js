import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';
import { filems, planets,characters } from './Config';


// --------->GET<------------------
const getMovie = (data) => Get(`?search=${data}`,filems);
const getActors = (data) => Get(`?search=${data}`, characters);
const getData = (data) => Get(data,'');

const API = {
  getMovie,
  getActors,
  getData,
}

export default API;