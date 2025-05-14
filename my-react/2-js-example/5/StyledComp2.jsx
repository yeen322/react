// <button > 요소를 생성하는 MyButton 컴포넌트
import styled from "styled-components";

export function MyButton({className, children}) {
    return (
        <button type="button" className={className}>
            {children}
        </button>
    );
}

// MyButton에 스타일을 부여한 MyStyledButton을 정의
export const MyStyledButton = styled(MyButton)`
    display: block;
    background-color: royalblue;
    color: white; 
    font-weight: bold;
    width: 80px;
    height: 50px;
`;