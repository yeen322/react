// 일반 함수
function args() {
    console.log(arguments);
}

args(1,2,3);

// 화살표함수 잘못된 사용
// let args1 = () => {
//     console.log(arguments);
// }
// args1(4,5,6);

// 화살표함수 올바른 사용
let args2 = (...args) => {
    console.log(args);
}

args2(4,5,6);