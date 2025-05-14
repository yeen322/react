import css, {globalCss, resolveCss} from './StyledCss.css.jsx';

export default function StyledCss() {
    return (
        <>
            {/* 외부 스타일 가져오기 */}
            {/*<style jsx>{css}</style>*/}
            {/*<div className="panel"><b>Styled JSX</b>는 표현식에 스타일 정의를...</div>*/}
            <style jsx>{css}</style>
            <style jsx>{globalCss}</style>
            {resolveCss.styles}
            <div className={`panel ${resolveCss.className}`}><b>Styled JSX</b>는...</div>
        </>
    )
}