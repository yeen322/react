import { ErrorBoundary } from 'react-error-boundary';
import ErrorRetryThrow from './ErrorRetryThrow.jsx';

export default function ErrorRetryRoot() {
    // 오류 발생 시 실행되는 처리
    const handleFallback = ({ error, resetErrorBoundary }) => {
        const handleClick = () => resetErrorBoundary();
        return (
            <div>
                <h4>다음 오류가 발생했다.</h4>
                <p>{error.message}</p>
                <button type="button" onClick={handleClick}>
                    Retry
                </button>
            </div>
        );
    };
    // 리셋 시 실행되는 처리
    const handleReset = () => console.log('Retry!!');

    return (
        <>
            <h3>Error Boundary의 기본</h3>
            <ErrorBoundary
                onReset={handleReset}
                fallbackRender={handleFallback}
            >
                <ErrorRetryThrow />
            </ErrorBoundary>
        </>
    );
}
