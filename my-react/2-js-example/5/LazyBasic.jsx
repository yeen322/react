import { Suspense, lazy } from 'react';

// ms 밀리초의 지연을 발생시키는 sleep 함수
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
// LazyButton 지연 로드
const LazyButton = lazy(() => sleep(2000).then(() => import('./LazyButton')));

export default function LazyBasic() {
    // LazyButton이 로딩될 때까지 메시지를 표시.
    return (
        <Suspense fallback={<p>Now Loading...</p>}>
            <LazyButton />
        </Suspense>
    );
}
