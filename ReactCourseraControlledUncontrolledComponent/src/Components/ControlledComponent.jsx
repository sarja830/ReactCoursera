

import {useState} from "react";

const  ControlledComponent= ()=>
{
    const [name,setName] = useState("");
    const handleSubmit = (e)=>{
        // this is again set in the input component to display if you do not do it then the values will just console log
        console.log("form submitted")
        console.log(name)
        e.preventDefault();
    }
    const handleInputChange = (e)=>{

        // this is again set in the input component to display if you do not do it then the values will just console log
        setName(e.target.value);
        console.log(e.target.value);

    }

    return (
        <form onSubmit={handleSubmit}>
            {/*htmlFor - pass the id of the name for input*/}
            <label htmlFor="input">Type name</label>
            <input id="input" name="name"  type="text" placeholder="name" value={name} onChange={handleInputChange}/>
            <div>{name}</div>
            <button disabled={!name} type="submit">Submit</button>
        </form>
    )
}
export default ControlledComponent