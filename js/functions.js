// Функция для проверки длины строки
const checkLengthString = (string, maxLength) => {
  const correctLengthString = string.length <= maxLength;
  return correctLengthString;
};

checkLengthString();

// Функция для проверки, является ли строка палиндромом
function checkPalindrome (string) {
  string = string.replaceAll(' ', '').toLowerCase();
  const normalizeString = string;
  let backString = '';
  for (let i = normalizeString.length - 1; i >= 0; i--) {
    backString += normalizeString.at(i);
  }
  const palindrome = (backString === normalizeString);
  return palindrome;
}
