import {useState} from "react";

// 함수형 프로그래밍
export default function Counter() {
    // 데이터
    const [count, setCount] = useState(0);

    // 계산
    const increase = (value) => value + 1;

    // 액션
    const onClick = () => setCount(increase(count));

    // 선언적 패턴
    return <button onClick={onClick}>{count}</button>;
}

