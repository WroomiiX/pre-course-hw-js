let number = Math.floor(Math.random() * 100);
const num = (n) => n % 2 === 0 ? `${n}: Это четное число` : `${n}: Это нечетное число`;
console.log(num(number));
