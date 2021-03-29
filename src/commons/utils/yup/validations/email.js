import { emailWhiteList } from './whitelist';

const whiteListValidEmail = (email) => {
  const validEmail = email.split('@');
  return emailWhiteList.includes(validEmail[1]);
};

export { whiteListValidEmail };
