const a = {
    name: 'yeeun',
    age: 22
};

const b = a;

a.age = 23;
console.log(b.age); // 23