import test from './mockApi/basicExample';
import auth from './mockApi/auth';
import workout from './mockApi/workout';

export default {
  local: {
    '/mock': () => ({ data: {} }),
    '/mock-error': () => ({ message: 'deu ruim', status: '404' }),
    '/test-mock': () => test.returnTestOk(),
    '/test-mock-error': () => test.returnTestError(),
    '/oauth/token': (config) => auth.returnLoginOk(config),
    '/oauth/token-error': (config) => auth.returnLoginError(config),
    '/treinos': (config) => workout.returnWorkout(config),
    '/treinos-error': () => workout.returnWorkoutError(),
  },
  external: {
    'http://bla.com/bla': () => ({ data: {} }),
    'http://bla.com/bla-error': () => ({ error: 'bla' }),
  },
};
