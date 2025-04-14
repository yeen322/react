import { useState } from 'react';
import '/src/StateTodo.css';

let maxId = 0;
export default function StateTodo() {
    // 입력값(title), 할 일 목록(todo)을 State로 관리
    const [title, setTitle] = useState('');
    const [todo, setTodo] = useState([]);

    // 텍스트 상자에 입력한 내용을 State에 반영
    const handleChangeTitle = e => {
        setTitle(e.target.value);
    };

    const handleClick = () => {
        // 새 할 일 추가하기
        setTodo([
            ...todo,
            {
                id: ++maxId, // id 값
                title, // Todo 본체
                created: new Date(), // 생성 날짜 및 시각
                isDone: false // 실행 완료?
            }
        ]);
    };

    // [완료] 버튼으로 Todo 항목을 완료 상태로 변경
    const handleDone = e => {
        // todo 배열을 스캔하여 id 값이 같은 것을 검색한다.
        setTodo(todo.map(item => {
            if (item.id === Number(e.target.dataset.id)) {
                return {
                    ...item,
                    isDone: true
                };
            } else {
                return item;
            }
        }));
    };

    return (
        <div>
            <label>
                해야 할 일:
                <input type="text" name="title"
                       value={title} onChange={handleChangeTitle} />
            </label>
            <button type="button"
                    onClick={handleClick}>추가하기</button>
            {/* 할 일을 목록으로 정리하기 */}

            <ul>
                {todo.map(item => (
                    <li key={item.id}
                        className={item.isDone ? 'done' : ''}>
                        {item.title}
                        <button type="button"
                                onClick={handleDone} data-id={item.id}>완료
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}