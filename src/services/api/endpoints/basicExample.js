import api from '../api';

const path = '/teste/mock'

const getBasicExample = params => api.request(`${path}`, {params, method: 'GET'})

export default {
  getBasicExample,
}
