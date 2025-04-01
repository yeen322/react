import './EventPropagation.css';

// export default function EventPropagation() {
//     const handleParent = () => alert('#parent run...');
//     const handleMy = () => alert('#my run...');
//     const handleChild = () => alert('#child run...');
//
//     return (
//         <div id="parent" onClick={handleParent}>
//             부모 요소
//             <div id="my" onClick={handleMy}>
//                 현재 요소
//                 <a id="child" href="https://wikibook.co.kr/" onClick={handleChild}>
//                     자식 요소
//                 </a>
//             </div>
//         </div>
//     );
// }



export default function EventPropagation() {
  const handleParent = () => alert('#parent run...');
  const handleMy = () => alert('#my run...');
  const handleChild = () => alert('#child run...');

  return (
  <div id="parent" onClickCapture={handleParent}>
    부모 요소
    <div id="my" onClickCapture={handleMy}>
      현재 요소
      <a id="child" href="https://wikibook.co.kr/" onClickCapture={handleChild}>
      자식 요소
      </a>
    </div>
  </div>
  );
}



// export default function EventPropagation() {
//   const handleParent = () => alert('#parent run...');
//   const handleMy = () => alert('#my run...');
//   const handleChild = e => {
//     e.stopPropagation();
//     alert('#child run...');
//   };



//   return (
//   <div id="parent" onClickCapture={handleParent}>
//     부모 요소
//     <div id="my" onClickCapture={handleMy}>
//       현재 요소
//       <a id="child" href="https://wikibook.co.kr/" onClickCapture={handleChild}>
//       자식 요소
//       </a>
//     </div>
//   </div>
//   );
// }



// export default function EventPropagation() {
//   const handleParent = () => alert('#parent run...');
//   const handleMy = () => alert('#my run...');
//   const handleChild = e => {
//     e.preventDefault();
//     alert('#child run...');
//   };


//   return (
//   <div id="parent" onClickCapture={handleParent}>
//     부모 요소
//     <div id="my" onClickCapture={handleMy}>
//       현재 요소
//       <a id="child" href="https://wikibook.co.kr/" onClickCapture={handleChild}>
//       자식 요소
//       </a>
//     </div>
//   </div>
//   );
// }