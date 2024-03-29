export const ERROR_MESSAGES = {
  MAX_SYMBOLS: (maxSymbolsCount: number) => `Не более ${maxSymbolsCount} символов`,
  MIN_SYMBOLS: (minSymbolsCount: number) => `Не менее ${minSymbolsCount} символов`,
  PASSWORD: 'Пароль должен содержать: заглавные, строчные буквы, цифры и спецсимволы: % , . - _ ! ',
  ONLY_NUMBERS: 'Только цифры',
  ONLY_NUMBERS_DASH_SLASH: 'Только цифры и символы "-" и "/"',
  ONLY_LETTERS: 'Только строчные и заглавные буквы',
  ONLY_LETTERS_NUMBERS: 'Только цифры и заглавные/строчные буквы',
  ONLY_LETTERS_NUMBERS_DASH: 'Только цифры, заглавные/строчные буквы и символ "-"',
  ONLY_LETTERS_NUMBERS_DASH_SLASH: 'Только цифры, заглавные/строчные буквы и символы "-" и "/"',
  ONLY_LETTERS_NUMBERS_DASH_DOT: 'Только цифры, заглавные/строчные буквы и символы "-" и "."',
  REQUIRED_FIELD: 'field required',
  INCORRECT_DATE: 'Некорректная дата',
  PHONE_NUMBER: 'Номер должен начинаться с 9 и содержать 10 цифр',
  INCORRECT_EMAIL: 'Неверный формат почты',
  INCORRECT_ICC: 'icc должен состоять из 20 цифр',
  LETTERS_WITHOUT_SPACE: 'Введён пробел',
  INVALID_CHARACTER: 'Введён недопустимый символ',
};