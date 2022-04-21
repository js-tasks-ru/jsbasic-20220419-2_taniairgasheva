/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  let result = name === null || // Проверка на отмену ввода или пустую строку
  name.length < 4 || // Проверка на количество символов
  name.match(' ') ? false : true; // Проверка на наличие пробелов
  return result;
};

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
