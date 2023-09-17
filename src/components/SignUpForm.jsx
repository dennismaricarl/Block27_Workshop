import { useState } from 'react';

export default function SignUpForm({setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    
    //form validation
    
    function handleUsernameChange (e) {
        if(e.target.value.length < 8) {
            setError("Username too short")
        }
        if (error && e.target.value.length >=8) {
            setError("");
        }
        setUsername(e.target.value);
    }


    async function handleSubmit(e) {
        e.preventDefault();
        try{
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: "POST",
                result: JSON.stringify({username, password})
            });
            const result = await response.json();
            console.log(result)
            setToken(result.token);
        } catch(error){
            setError(error.message)
        }
    }
    return (
    <>
    


    <form method="post" onSubmit={handleSubmit}>
    <h2>Sign Up</h2>
        <label>
            Username:{" "}
            <input 
                value={username} 
                onChange={handleUsernameChange}
                // onChange={(e)=> setUsername(e.target.value)}
            />
        </label>
        <br/>
        <br/>
        <label>
            Password: {" "} 
            <input 
                value={password} 
                onChange={(e)=> setPassword(e.target.value)}
            />
        </label>
        <hr/>
        <button>Submit</button>  
        {error &&  <h4>{error}</h4>}
    </form>
    </>
    );
        
}