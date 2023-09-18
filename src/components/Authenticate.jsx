import { useState } from 'react'

export default function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState();
    const [error, setError] = useState(null);

    async function handleClick(){
        try{
            const response = await fetch
            ("https://fsa-jwt-practice.herokuapp.com/authenticate", 
              {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const result = await response.json();
            console.log(result)
            setSuccessMessage(result.message)
        }catch(error){
            setError(error.message)
        }
    };


    return (
    <>
    {/* <h2>Authenticate</h2> */}
    {successMessage && <p>{successMessage}</p>}
    {error && <p>{error}</p>}
    <button id="authen-button" onClick={handleClick}>Autenticate Token</button>
    </>
    

    );

}