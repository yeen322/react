import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import StateFormUC from "../2-js-example/4/SateFormUC.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <StateFormUC/>
    </StrictMode>

)
