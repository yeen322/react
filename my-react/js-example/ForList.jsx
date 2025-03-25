import React from 'react';

// 도서 정보는 Props(src)를 통해 수신
export default function ForList({ src }) {
    return (
        // 도서 정보(src 속성)를 <dt>/<dd> 목록으로 정형화
        <dl>
            {/*{src.map(elem => (*/}
            {/*    <>*/}
            {/*        <dt>*/}
            {/*            <a href={`https://wikibook.co.kr/images/cover/s/${elem.isbn}.jpg`}>*/}
            {/*                {elem.title}（{elem.price}원）*/}
            {/*            </a>*/}
            {/*        </dt>*/}
            {/*        <dd>{elem.summary}</dd>*/}
            {/*    </>*/}
            {/*))}*/}

             {src.map(elem => (
      <React.Fragment key={elem.isbn}>
        <dt>
          <a href={`https://wikibook.co.kr/images/cover/s/${elem.isbn}.jpg`}>
              {elem.title}（{elem.price}원）
          </a>
        </dt>
        <dd>{elem.summary}</dd>
      </React.Fragment>
    ))}

    {/*         {src.map((elem, index) => (*/}
    {/*  <React.Fragment key={index}>*/}
    {/*    <dt>*/}
    {/*      <a href={`https://wikibook.co.kr/images/cover/s/${elem.isbn}.jpg`}>*/}
    {/*          {elem.title}（{elem.price}원）*/}
    {/*      </a>*/}
    {/*    </dt>*/}
    {/*    <dd>{elem.summary}</dd>*/}
    {/*  </React.Fragment>*/}
    {/*))}*/}
        </dl>
    );
}