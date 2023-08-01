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