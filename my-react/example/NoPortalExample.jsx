import {useState} from "react";
import ModalContent from "./ModalContent.jsx";


export default function NoPortalExample() {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick( true);
    }
    const handleClose = ()  => {
        setClick(false);
    }

    return (
        <form>
            <button type='button' onClose={handleClick} disabled={click}>
                포탈 없이 모달 띄우기</button>
            {click && <ModalContent onClose={handleClose}/>}
        </form>
    )
}