let arr = [1, 2, 4, 90, 80];

console.log(arr.includes(90));

arr.find(function (value, index, arr) {
  if (value === 4) {
    console.log(value, index);
  }
});

// 任何一个arr数组元素是否大于10

let a = arr.every(function (value) {
  return value > 10;
});
console.log(a);

// .some():用于判断数组中是否存在一个元素满足某个条件，只要有一个元素满足就返回true
// ，只有当所有元素都不满足时，才返回false。类似与逻辑判断中的或||关系
let b = arr.some(function (value) {
  return value < 10;
});
console.log(b);
