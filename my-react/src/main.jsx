import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyHello from "./MyHello";
import EventBaisc from "./EventBasic.jsx";
import ForList from "../js-example/ForList.jsx";
import books from "../js-example/books.jsx";
import ForFilter from "../js-example/ForFilter.jsx";
import ForSort from "../js-example/ForSort.jsx";
import StateBasic from "../js-example/StateBasic.jsx";
import {Form} from "../js-example/Form.jsx";
import Counter from "../js-example/CounterButton.jsx";



createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/*<App />*/}
        {/*<MyHello myName="Yeeun"/>*/}
        {/*<EventBaisc type="time"/>*/}
        {/*<ForList src ={books}/>*/}
        {/*<ForFilter src={books}/>*/}
        {/*<ForSort src={books}/>*/}
        {/*<StateBasic/>*/}
        {/*<Form/>*/}
        <Counter></Counter>

    </StrictMode>,
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