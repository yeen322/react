import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import EventKey from "../2-js-example/3/EventKey.jsx";



createRoot(document.getElementById('root')).render(
    <StrictMode>
        <EventKey/>
    </StrictMode>

)
