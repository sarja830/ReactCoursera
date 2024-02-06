import "./App.css";
import { useState } from "react";
// import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {

    return (<p className="FieldError">Password should have at least 8 characters</p>) };

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: ""  ,
        isTouched: false,
    });
    const [role, setRole] = useState("role");

    const getIsFormValid = () => {
        if (!firstName || !lastName || !email || !password ||  password.value.length < 8 || !['individual', ' business'].includes(role) )
            return false;

        return true;
    };

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setPassword("");
        setRole("role");
        setPassword("");
    };

    const handleSubmit = (e) => {
        alert("Account created!");
        clearForm();
        e.preventDefault();

    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Sign Up</h2>
                    <div className="Field">
                        <label>
                            First name <sup>*</sup>
                        </label>
                        <input placeholder="First name" value={firstName} onChange={(e) => {setFirstName(e.target.value) }}/>
                    </div>
                    <div className="Field" >
                        <label>Last name</label>
                        <input placeholder="Last name" value={lastName} onChange={(e) => {setLastName(e.target.value) }}/>
                    </div>
                    <div className="Field">
                        <label>
                            Email address <sup>*</sup>
                        </label>
                        <input placeholder="Email address" value={email} onChange={(e) => {setEmail(e.target.value) }} />
                    </div>
                    <div className="Field">
                        <label>
                            Password <sup>*</sup>
                        </label>
                        <input placeholder="Password" value={password.value} onChange={(e) => {
                            setPassword({ value: e.target.value, isTouched: true });
                        }}
                               onFocus={(e) => {setPassword({...password,isTouched:true}) }}
                            // onBlur={(e) => {setPassword({...password,isTouched:false}) }}

                        />
                        { password.isTouched?(password.value.length<8?< PasswordErrorMessage/>:<></>):<></>}
                    </div>

                    <div className="Field">
                        <label>
                            Role <sup>*</sup>
                        </label>
                        <select
                            value={role}
                            onChange={(e) => { setRole(e.target.value); }}
                        >
                            <option value="role">Role</option>
                            <option value="individual">Individual</option>
                            <option value="business">Business</option>
                        </select>
                    </div>
                    <button type="submit" disabled={!getIsFormValid()}>
                        Create account
                    </button>
                </fieldset>
            </form>
        </div>
    );
}

// export default App;

export default App;

// import "./App.css";
// import UncontrolledComponent from "./Components/UncontrolledComponent.jsx";
// import ControlledComponent from "./Components/ControlledComponent.jsx";
//
// function App() {
//
//
//     return (
//         <div >
//             <UncontrolledComponent/>
//             <ControlledComponent/>
//         </div>
//     )
// }
//
// export default App;
