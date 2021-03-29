import api from '../api';

const path = '/oauth/token';

const login = (data) => {
  var bodyFormData = new FormData();
  bodyFormData.set('username', 'admin');
  bodyFormData.set('password', 'admin');
  bodyFormData.set('grant_type', 'password');

  return api.request(`${path}`, {
    data: bodyFormData,
    auth: {
      username: '@ngul@r0',
      password: 'angular',
    },
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

export default {
  login,
};
