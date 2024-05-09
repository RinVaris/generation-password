const { generatePassword } = require('./index.js');

const passwordWithSpecialChars = generatePassword(12, true);
console.log('Пароль со специальными символами:', passwordWithSpecialChars);

const passwordWithoutSpecialChars = generatePassword(8, false);
console.log('Пароль без специальных символов:', passwordWithoutSpecialChars);
