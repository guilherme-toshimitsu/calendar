import api from '../api';

const path = '/treinos';

const getWorkout = (params) =>
  api.request(`${path}`, { params, method: 'GET' });

export default {
  getWorkout,
};
