import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import StateFormUC from "../2-js-example/4/SateFormUC.jsx";
import FormTextarea from "../2-js-example/4/FormTextarea.jsx";
import FormSelect from "../2-js-example/4/FormSelect.jsx";
import FormList from "../2-js-example/4/FormList.jsx";
import FormRadio from "../2-js-example/4/FormRadio.jsx";
import FormCheck from "../2-js-example/4/FormCheck.jsx";
import FormCheckMulti from "../2-js-example/4/FormCheckMulti.jsx";
import FormFile from "../2-js-example/4/FormFile.jsx";
import StateNest from "../2-js-example/4/StateNest.jsx";
import StateNestImmer from "../2-js-example/4/StateNestImmer.jsx";
import StateNestImmer2 from "../2-js-example/4/StateNestImmer2.jsx";
import StateTodo from "../2-js-example/4/StateTodo.jsx";
import FormBasic from "../2-js-example/4/FormBasic.jsx";
import FormYup from "../2-js-example/4/FormYup.jsx";
import FormKorean from "../2-js-example/4/FormKorean.jsx";
import LazyBasic from "../2-js-example/5/LazyBasic.jsx";
import LazyMulti from "../2-js-example/5/LazyMulti.jsx";
import SuspenseSimple from "../2-js-example/5/SuspenseSimple.jsx";
import SuspenseResult from "../2-js-example/5/SuspenseResult.jsx";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/*<StateFormUC/>*/}
        {/*<FormTextarea/>*/}
        {/*<FormSelect/>*/}
        {/*<FormList/>*/}
        {/*<FormRadio/>*/}
        {/*<FormCheck/>*/}
        {/*<FormCheckMulti/>*/}
        {/*<FormFile/>*/}
        {/*<StateNest/>*/}
        {/*<StateNestImmer2/>*/}
        {/*<StateTodo/>*/}
        {/*<FormBasic/>*/}
        {/*<FormYup/>*/}
        {/*<FormKorean/>*/}
        {/*<LazyBasic/>*/}
        {/*<LazyMulti/>*/}
        {/*<SuspenseSimple/>*/}
        <SuspenseResult/>
    </StrictMode>

)
