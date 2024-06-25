// Функция для проверки длины строки
const checkLengthString = (string, maxLength) => string.length <= maxLength;

// Функция для проверки, является ли строка палиндромом
const checkPalindrome = (string) => {
  const cleaned = string.replaceAll(' ', '').toLowerCase();
  const normalizeString = cleaned.split('').reverse().join('');

  return cleaned === normalizeString;
};
