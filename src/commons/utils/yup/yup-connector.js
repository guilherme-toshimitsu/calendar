import { whiteListValidEmail } from './validations';

const whiteListEmailValidation = function (msg) {
  return this.test({
    name: whiteListEmailValidation,
    message: msg || 'Campo Inválido',
    test: function (value) {
      return whiteListValidEmail(value);
    },
  });
};

export { whiteListEmailValidation };
