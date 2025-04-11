export default function EventKey() {
    const handleKey = e => {
        if (e.ctrlKey && e.key === 'q') {
            alert('이름은 20자 이내로 입력');
        }
    };

    return (
        <form>
            <label>
                이름:
                <input type="text" size="20" onKeyDown={handleKey}/>
            </label>
        </form>
    );
}