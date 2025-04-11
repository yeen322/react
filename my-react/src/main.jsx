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
import EventMouse from "../2-js-example/3/EventMouse.jsx";
import EventCompare from "../2-js-example/3/EventCompare.jsx";
import StateFormUC from "../2-js-example/4/SateFormUC.jsx";


// const title= <p>회원 모집 중</p>
// const body = <p>리액트 세미나에 오신 것을 환영합니다</p>
createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/*<EventMouse*/}
        {/*    alt="로고 이미지"*/}
        {/*    beforeSrc="https://wwww.web-deli.com/image/linkbanner_l.gif"*/}
        {/*    afterSrc="https://www.web-deli.com/image/home_chara.gif" />*/}
        {/*<EventCompare/>*/}
        <StateFormUC/>

    </StrictMode>

)
