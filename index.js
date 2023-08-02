// Task 1

function convertNums() {
  const num = +prompt('Введите первое число');
  const base = +prompt('Введите второе число');

  const isValidNums = !isNaN(num) && !isNaN(base);
  const isValidBase = base >= 2 && base <= 36;

  if (isValidNums && isValidBase) {
    console.log(num.toString(base));
  } else {
    console.log('Некорректный ввод!');
  }
}

convertNums();

// Task 2

function calculateNums() {
  const num1 = +prompt('Введите первое число');

  if (isNaN(num1)) {
    return console.log('Некорректный ввод!');
  }

  const num2 = +prompt('Введите второе число');

  if (isNaN(num2)) {
    console.log('Некорректный ввод!');
  } else {
    console.log(`Ответ: ${num1 + num2}, ${num1 / num2}`);
  }
}

calculateNums();