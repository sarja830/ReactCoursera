import {useState} from "react";
import Header from "./Header.jsx";

function HeaderWithButton()
{
    const [title, setTitle] = useState(['Sarthak', 'Shrishti']);
    function updateTitle()
    {
        setTitle([Math.random()]);
    }
    return (
        <>
            <Header title = {title}></Header>
            <button onClick={updateTitle}>Update Header</button>
        </>);

}
export default HeaderWithButton;