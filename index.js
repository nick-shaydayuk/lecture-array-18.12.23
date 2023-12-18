export const getMonth = (num) => {
  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  return `Месяц ${months[num - 1]}`;
};

export const getTotalPrice = (arr) => {
  let totalPrice = 0;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (typeof arr[i][j] === 'number') {
        totalPrice += arr[i][j];
      }
    }
  }
  return totalPrice;
};

export const countDuplicates = (arr) => {
  const count = {};
  arr.forEach((item) => (count[item] ? (count[item] += 1) : (count[item] = 1)));
  return count;
};

