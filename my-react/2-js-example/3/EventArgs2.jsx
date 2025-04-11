export default function EventArgs2() {
    const current = e => {
        const type = e.target.dataset.type;
        const d = new Date();
        switch(type) {
            case 'date' :
                console.log(`${e.target.id}: ${d.toLocaleDateString()}`);
                break;
            case 'time':
                console.log(`${e.target.id}: ${d.toLocaleTimeString()}`);
                break;
            default:
                console.log(`${e.target.id}: ${d.toLocaleString()}`);

        }
    };

    return (
        <div>
            <button id = "dt"  data-type="datetime" onClick={current}>현재 날짜 및 시각</button>
            <button id="date" datat-ype="date" onClick={current}>현재 날짜</button>
            <button id="time" data-type="time" onClick={current}>현재 시각</button>
        </div>
    );
}