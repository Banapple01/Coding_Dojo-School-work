import React, { useState } from 'react'

const HookForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [fnError, setFnError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lnError, setLnError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [cpasswordError, setCPasswordError] = useState("");

    const handlefname = (e) => {
        setFirstname(e.target.value);

        if(e.target.value.length < 1) {
            setFnError("First Name required.");
        }
        else if(e.target.value.length < 2) {
            setFnError("First Name must be at least two characters.");
        }
        else if(e.target.value.length >= 2) {
            setFnError(null);
        }
    }
    const handlelname = (e) => {
        setLastname(e.target.value);

        if(e.target.value.length < 1) {
            setLnError("Last Name required.");
        }
        else if(e.target.value.length < 2) {
            setLnError("Last Name must be at least two characters.");
        }
        else if(e.target.value.length >= 2) {
            setLnError(null);
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);

        if(e.target.value.length < 1) {
            setEmailError("Email required.");
        }
        else if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters long.");
        }
        else if(e.target.value.length >= 5) {
            setEmailError(null);
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setCPasswordError("Password must be at least 8 characters long.");
        }
        else if(e.target.value.length >= 8) {
            setCPasswordError(null);
        }
    }
    const handleCPassword = (e) => {
        setCPassword(e.target.value);
        if(password.match(cpassword) === null) {
            setCPasswordError("Passwords must match.");
        }
        else if(e.target.value.length < 8) {
            setCPasswordError("Password must be at least 8 characters long.");
        }
        else if(e.target.value.length >= 8) {
            setCPasswordError(null);
        }
    }
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, cpassword };
        console.log("Welcome", newUser);
    };
    
    return(
        <>
        <form onSubmit={ createUser }>
            <div>
                <label>Firstname: </label> 
                <input type="text" /* onChange={ (e) => setFirstname(e.target.value) } */ onChange={ handlefname } />
                {
                    fnError ?
                    <p>{ fnError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Lastname: </label> 
                <input type="text" /* onChange={ (e) => setLastname(e.target.value) } */ onChange={ handlelname } />
                {
                    lnError ?
                    <p>{ lnError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" /* onChange={ (e) => setEmail(e.target.value) } */ onChange={ handleEmail } />
                {
                    emailError ?
                    <p>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" /* onChange={ (e) => setPassword(e.target.value) } */ onChange={ handlePassword } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" /* onChange={ (e) => setCPassword(e.target.value) } */ onChange={ handleCPassword } />
                {
                    cpasswordError ?
                    <p>{ cpasswordError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
        <p>First Name: {(firstname)}</p>
        <p>Last Name: {(lastname)}</p>
        <p>Email: {(email)}</p>
        <p>Password: {(password)}</p>
        <p>Confirm Password: {(cpassword)}</p>
        </>
    );
};

export default HookForm











