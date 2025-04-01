import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import EventKey from "../2-js-example/3/EventKey.jsx";
import EventArgs from "../2-js-example/3/EventArgs.jsx";
import EventArgs2 from "../2-js-example/3/EventArgs2.jsx";



createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/*<EventKey/>*/}
        <EventArgs2/>
    </StrictMode>

)
