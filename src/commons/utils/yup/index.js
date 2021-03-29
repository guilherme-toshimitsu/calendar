import * as yup from 'yup';

import { whiteListEmailValidation } from './yup-connector';

yup.addMethod(yup.string, 'whiteListEmailValidation', whiteListEmailValidation);

export default yup;
