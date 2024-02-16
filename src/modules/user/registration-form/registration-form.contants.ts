import * as yup from 'yup';
import { ERROR_MESSAGES } from 'shared/constants/error-messages';

export const REGISTRATION_FORM_SCHEME = yup.object({
  email: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED_FIELD)
    .email(ERROR_MESSAGES.INCORRECT_EMAIL),
  password: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED_FIELD)
    .min(6, ERROR_MESSAGES.MIN_SYMBOLS(6))
    .test('password-match', 'Введенные пароли не совпадают', function(value) {
      return value === this.resolve(yup.ref('repeatPassword'));
    }),
  repeatPassword: yup.string().required(ERROR_MESSAGES.REQUIRED_FIELD).min(6, ERROR_MESSAGES.MIN_SYMBOLS(6)),
});