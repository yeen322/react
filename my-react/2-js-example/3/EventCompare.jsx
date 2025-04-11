import {useState} from "react";
import './EventCompare.css'

export default function EventCompare() {
    const [result, setResult] = useState('');

    const handleIn = e => setResult(r => `${r}enter:${e.target.id}<br/>`);
    const handleOut = e => setResult(r => `${r}leave:${e.target.id}`);
    return (
        <>
            <div id="outer"
                 onMouseEnter={handleIn} onMouseLeave={handleOut}>
                외부 (outer)
                <p id="inner">
                    내부 (inner)
                </p>
            </div>
            <div dangerouslySetInnerHTML={{__html: result}}></div>
        </>
    );
}