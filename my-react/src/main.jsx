import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StyledPanel from "../2-js-example/3/StyledPanel.jsx";
import TitledPanel from "../2-js-example/3/TitledPanel.jsx";
import ListTemplate from "../2-js-example/3/ListTemplate.jsx";
import books from "../js-example/books.jsx";
import MyHello from "../2-js-example/3/MyHello.jsx";
import StateParent from "../2-js-example/3/StateParent.jsx";


// const title= <p>회원 모집 중</p>
// const body = <p>리액트 세미나에 오신 것을 환영합니다</p>
createRoot(document.getElementById('root')).render(
    <StrictMode>
    {/*<ListTemplate src={books}>*/}
    {/*    {elem => (*/}
    {/*        <>*/}
    {/*        <dt>*/}
    {/*            <a href={`https://wikibook.co.kr/images/cover/s/${elem.isbn}.jpg`}>*/}
    {/*                {elem.title} ({elem.price}원)*/}
    {/*            </a>*/}
    {/*        </dt>*/}
    {/*        <dd>{elem.summary}< /dd>*/}
    {/*            </>*/}
    {/*            )}*/}
    {/*        </ListTemplate>*/}
    {/*<MyHello />*/}
        <StateParent/>
    </StrictMode>


)
// const user = {
//     name: "yeeun",
//     age: 22,
// }
//
// const {name,age} = user;
//
// const user =[ name:"yeeun", age:22];
//
// const {name,age} = user;