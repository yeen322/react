let name="딸기";

// 일반 함수
const fruit = {
    name: "orange",
    buyFruit: function() {
        console.log(this.name);
    }
};
fruit.buyFruit();

// 화살표 함수
const fruit2 = {
    name: "orange",
    buyFruit: () => {
        console.log(this.name);
    }
};

fruit2.buyFruit();