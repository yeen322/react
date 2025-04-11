import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import EventKey from "../2-js-example/3/EventKey.jsx";
import EventArgs from "../2-js-example/3/EventArgs.jsx";
import EventArgs2 from "../2-js-example/3/EventArgs2.jsx";
import StateParent from "../2-js-example/3/StateParent.jsx";
<<<<<<< HEAD
import EventMouse from "../2-js-example/3/EventMouse.jsx";
import EventCompare from "../2-js-example/3/EventCompare.jsx";
import StateFormUC from "../2-js-example/4/SateFormUC.jsx";
=======
import StateBasic from "../js-example/StateBasic.jsx";
import EventPropagation from "../2-js-example/3/Propagation.jsx";
import EventOnce from "../2-js-example/3/EventOnce.jsx";

>>>>>>> c259a65e7904746f4db0e9c39c11a584be720712


createRoot(document.getElementById('root')).render(
    <StrictMode>
<<<<<<< HEAD
        {/*<EventMouse*/}
        {/*    alt="로고 이미지"*/}
        {/*    beforeSrc="https://wwww.web-deli.com/image/linkbanner_l.gif"*/}
        {/*    afterSrc="https://www.web-deli.com/image/home_chara.gif" />*/}
        {/*<EventCompare/>*/}
        <StateFormUC/>

=======
        {/*<EventKey/>*/}
        {/*<EventArgs2/>*/}
        {/*<StateParent/>*/}
        {/*<StateBasic/>*/}
        {/*<EventPropagation/>*/}
        <EventOnce/>
>>>>>>> c259a65e7904746f4db0e9c39c11a584be720712
    </StrictMode>

)
