const createTreinos = (nome, descricao, cargas, nomesexercicio) => {
  const exercicio = cargas.map((carga, idx) => {
    return {
      carga,
      nome: nomesexercicio[idx],
      codigo: Math.floor(Math.random() * 20 + 1),
      numeroSeries: Math.floor(Math.random() * 100) + 1,
    };
  });

  return {
    nome,
    descricao,
    exercicio,
    descando: Math.floor(Math.random * 20) + 1,
  };
};

const dataWorkout = [
  createTreinos(
    'pernas A',
    'treino de perna',
    [20, 10, 15, 30, 40],
    ['panturilha', 'bla', 'ble', 'bli']
  ),
  createTreinos(
    'pernas B',
    'treino de perna',
    [20, 10, 15, 30, 40],
    ['panturilha', 'bla', 'ble', 'bli']
  ),
  createTreinos(
    'pernas C',
    'treino de perna',
    [20, 10, 15, 30, 40],
    ['panturilha', 'bla', 'ble', 'bli']
  ),
  createTreinos(
    'pernas D',
    'treino de perna',
    [20, 10, 15, 30, 40],
    ['panturilha', 'bla', 'ble', 'bli']
  ),
  createTreinos(
    'pernas E',
    'treino de perna',
    [20, 10, 15, 30, 40],
    ['panturilha', 'bla', 'ble', 'bli']
  ),
  createTreinos(
    'pernas F',
    'treino de perna',
    [20, 10, 15, 30, 40],
    ['panturilha', 'bla', 'ble', 'bli']
  ),
  createTreinos(
    'peito A',
    'treino de peito',
    [20, 10, 15, 30, 40],
    ['peito', 'bla', 'ble', 'bli']
  ),
  createTreinos(
    'peito B',
    'treino de peito',
    [20, 10, 15, 30, 40],
    ['peito', 'bla', 'ble', 'bli']
  ),
  createTreinos(
    'peito C',
    'treino de peito',
    [20, 10, 15, 30, 40],
    ['peito', 'bla', 'ble', 'bli']
  ),
  createTreinos(
    'peito D',
    'treino de peito',
    [20, 10, 15, 30, 40],
    ['peito', 'bla', 'ble', 'bli']
  ),
  createTreinos(
    'peito E',
    'treino de peito',
    [20, 10, 15, 30, 40],
    ['peito', 'bla', 'ble', 'bli']
  ),
  createTreinos(
    'peito F',
    'treino de peito',
    [20, 10, 15, 30, 40],
    ['peito', 'bla', 'ble', 'bli']
  ),
  createTreinos(
    'braco A',
    'treino de braco',
    [20, 10, 15, 30, 40],
    ['braco', 'bla', 'ble', 'bli']
  ),
  createTreinos(
    'braco B',
    'treino de braco',
    [20, 10, 15, 30, 40],
    ['braco', 'bla', 'ble', 'bli']
  ),
  createTreinos(
    'braco C',
    'treino de braco',
    [20, 10, 15, 30, 40],
    ['braco', 'bla', 'ble', 'bli']
  ),
  createTreinos(
    'costas A',
    'treino de costa',
    [20, 10, 15, 30, 40],
    ['costa', 'bla', 'ble', 'bli']
  ),
  createTreinos(
    'costas B',
    'treino de costa',
    [20, 10, 15, 30, 40],
    ['costa', 'bla', 'ble', 'bli']
  ),
  createTreinos(
    'costas C',
    'treino de costa',
    [20, 10, 15, 30, 40],
    ['costa', 'bla', 'ble', 'bli']
  ),
  createTreinos(
    'costas D',
    'treino de costa',
    [20, 10, 15, 30, 40],
    ['costa', 'bla', 'ble', 'bli']
  ),
];

const returnWorkout = (config) => {
  let workout = dataWorkout;
  if (config.params && config.params.nome) {
    workout = workout.filter((work) => work.nome.includes(config.params.nome));
  }

  const page = (config && config.params && config.params.currentPage) || 0;
  const size = (config && config.params && config.params.pageSize) || 15;
  const start = page * size;
  const end = start + size;

  return {
    data: {
      result: workout.slice(start, end),
      totalPages: Math.floor(workout.length / size) + 1,
      message: 'ok',
    },
  };
};

const returnWorkoutError = () => {
  return {
    message: 'Falhou',
    status: '404',
  };
};

export default {
  returnWorkout,
  returnWorkoutError,
};
