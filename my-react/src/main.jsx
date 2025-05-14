import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import StyledComp from "../2-js-example/5/StyledComp.jsx";
import GlobalStyle from "../2-js-example/5/StyledGlobal.jsx"
import StyledProps from "../2-js-example/5/StyledProps.jsx";
import EmotionJsx from "../2-js-example/5/EmotionJsx.jsx";
import EmotionComp from "../2-js-example/5/EmotionComp.jsx";
import {css, Global} from "@emotion/react";
import PortalBasic from "../2-js-example/5/PortalBasic.jsx";
import ErrorRoot from "../2-js-example/5/ErrorRoot.jsx";
import ErrorRetryRoot from "../2-js-example/5/ErrorRetryRoot.jsx";
import ErrorEventRoot from "../2-js-example/5/ErrorEventRoot.jsx";
import NoPortalExample from "../example/NoPortalExample.jsx";
import PortalExample from "../example/PortalExample.jsx";



createRoot(document.getElementById('root')).render(
    <StrictMode>
        <NoPortalExample/>
        <PortalExample/>
    </StrictMode>

)
