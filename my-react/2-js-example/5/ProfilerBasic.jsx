import {Profiler} from "react";
import HeavyUI from "./HeavyUI.jsx";

export default function ProfilerBasic() {
    // 성능 측정을 위한 함수(onRender)
    const handlerMeasure = (id,phase, actualDuration,
        baseDuration, startTIme, endTime) => {
        console.log('id: ', id);
        console.log('phase: ', phase);
        console.log('actualDuration: ', actualDuration);
        console.log('baseDuration ', baseDuration);
        console.log('startTIme: ', startTIme);
        console.log('endTime: ', endTime);
    };

    return (
        <Profiler id="heavy" onRender={handlerMeasure}>
            <HeavyUI delay={1500}/>
            <HeavyUI delay={500}/>
            <HeavyUI delay={2000}/>
        </Profiler>
    );
}