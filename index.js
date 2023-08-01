// Task 1

function convertNums() {
  const num = +prompt('Введите первое число');
  const base = +prompt('Введите второе число');

  if (!Number.isNaN(num) && !Number.isNaN(base) && base >= 2 && base <= 36) {
    const res = num.toString(base);
    console.log(res);
  } else {
    console.log('Некорректный ввод!');
  }
}

convertNums();

// Task 2

function calculateNums() {
  const num1 = +prompt('Введите первое число');

  if (Number.isNaN(num1)) {
    console.log('Некорректный ввод!');
    return;
  }

  const num2 = +prompt('Введите второе число');

  if (!Number.isNaN(num2)) {
    const sum = num1 + num2;
    const quotient = num1 / num2;
    console.log(`Ответ: ${sum}, ${quotient}`);
  } else {
    console.log('Некорректный ввод!');
  }
}

calculateNums();