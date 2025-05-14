import {useState} from "react";
import { createPortal } from 'react-dom';
import ModalContent from "./ModalContent.jsx";

export default function PortalExample() {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick( true);
    }
    const handleClose = ()  => {
        setClick(false);
    }

    return (
        <form>
            <button type="button" onClick={handleClick} disabled={click}>
                포탈을 사용중인 모달 보여주기
            </button>
            {click && createPortal(
                <ModalContent onClose={handleClose}/>,
                document.getElementById('dialog')
            )}
        </form>
    )
}