import {lazy, Suspense} from "react";
import NowLoading from "./NowLoading.jsx";
import PersonLoading from "./PersonLoading.jsx";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default function NestingSuspense() {
    const LazyTitle = lazy(() => sleep(1000).then(() => import('./LazyTitle.jsx')));
    const LazyPerson = lazy(() => sleep(3000).then(()=> import('./LazyPerson.jsx')));

    return (
        <Suspense fallback={<NowLoading/>}>
            <LazyTitle/>
            <Suspense fallback={<PersonLoading/>}><br/>
                <LazyPerson/>
            </Suspense>
        </Suspense>
    )
}