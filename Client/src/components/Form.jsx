import { useState } from "react";
import validation from "./validation";

export default function Form(props){

    const [userData, setUserData] = useState({
        email: "",
        password: "",
     });

    const [errors, setErrors] = useState({}); 

    const handleChange = (event)=>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        props.login(userData);

    };

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" key={"email"} value={userData.email} 
            onChange={handleChange}/>
            {errors.email && <p>{errors.email}</p>}

            <label htmlFor="password">Password:</label>
            <input type="text" name="password" key={"password"} value={userData.password} 
            onChange={handleChange}/>
            {errors.password && <p>{errors.password}</p>}
            <button >Submit</button>
        </form>
    );
}