import axios from 'axios'

const url = 'http://localhost:8080/users';

export const fecthUser = () => {
  axios.get(url)
};

export const editUser = () => axios.put(url)