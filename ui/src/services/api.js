import axios from 'axios';

export const getUsers = () => {
  const result = axios.get('/api/users/');
  return result;
};

export const getTasks = (_, user_id) => {
  if (user_id === '') return [];
  const result = axios.get(`/api/tasks/${user_id}`);
  return result;
};

export const setNewUser = (name) => {
  return axios({
    method: 'post',
    url: '/api/users',
    headers: {},
    data: {
      name,
    },
  });
};

export const setNewTask = (user_id, description) => {
  return axios({
    method: 'post',
    url: '/api/tasks',
    headers: {},
    data: {
      user_id,
      description,
    },
  });
};

export const updateTask = (_id, state) => {
  return axios({
    method: 'put',
    url: '/api/tasks',
    headers: {},
    data: {
      _id,
      state,
    },
  });
};

export const deleteUser = (_id) => {
  return axios({
    method: 'delete',
    url: '/api/users',
    headers: {},
    data: {
      _id,
    },
  });
};

export const updateUser = (_id, name) => {
  return axios({
    method: 'put',
    url: '/api/users',
    headers: {},
    data: {
      _id,
      name,
    },
  });
};
