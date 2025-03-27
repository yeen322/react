const a = {
    name: 'yeeun',
    age: 22
};

const b = a;

a.age = 23;
console.log(b.age); // 23

//얕은 복사
let obj = {value: {num:10}};
// let obj2 = {value: {num:10}};
// let obj2 = obj;
let obj2 = {value: obj.value};

console.log(obj === obj2);
console.log(obj.value === obj2.value);