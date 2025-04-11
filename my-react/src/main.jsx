import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import StateFormUC from "../2-js-example/4/SateFormUC.jsx";
import FormTextarea from "../2-js-example/4/FormTextarea.jsx";
import FormSelect from "../2-js-example/4/FormSelect.jsx";
import FormList from "../2-js-example/4/FormList.jsx";
import FormRadio from "../2-js-example/4/FormRadio.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/*<StateFormUC/>*/}
        {/*<FormTextarea/>*/}
        {/*<FormSelect/>*/}
        {/*<FormList/>*/}
        <FormRadio/>
    </StrictMode>

)
