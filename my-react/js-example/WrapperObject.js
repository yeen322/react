// 객체타입의 메서드와 프로퍼티
let data = [1,2,3,4,5];

console.log(data.length); // 5
console.log(data.sort((a,b)=>b-a)); // [5,4,3,2,1]

// 원시타입에 프로퍼티와 메서드 접근
let str = 'Wrapper Object';

console.log(str.length);
console.log(str.toLowerCase());

// 원시타입 변수에 프로퍼티값 추가
str.shorten = 'JS';
console.log(str.shorten);

// 생성자를 사용해 래퍼 객체 생성
let a = new String("Hello");
a.shorten = 'Hi';
console.log(a.shorten); // Hi

// 자동변환 래퍼 객체 & 생성자를 사용한 래퍼 객체
console.log(typeof String('JavaScript')); // string
console.log(typeof new String('JavaScript')); // object

// 생성자를 사용하지 않아도 원하는 형의 원시형 변환(string, number, boolean)
let num = Number("123");
console.log(num); // 123(숫자형)