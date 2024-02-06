import {useRef, useState} from "react";

function UncontrolledComponent ()  {
    const inputRef = useRef(null);
    const [show, setShow] = useState("");
    const handleSubmit = (event)=>{
        const inputValue = inputRef.current.value;

        setShow(inputValue)
        // to prevent the refresh behaviour
        event.preventDefault();
        console.log(inputValue)
    }
    return (   <>
        <form onSubmit={handleSubmit}>

            <input ref ={inputRef} type="text"/>
            <button onSubmit={handleSubmit}> submit</button>
        </form >
        <div >
            {show}
        </div>
        </> );
}


export default UncontrolledComponent