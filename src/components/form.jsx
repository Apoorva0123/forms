import { useState } from "react";

export const Form = () => {
    const [formData , setFormData] = useState({
        username: "",
        age: ""
    })

    const handleChange = (e) => {
        const {id , value} = e.target;

        setFormData({
            ...formData,
            [id] : value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3005/users" , {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(formData)
        })
    }

    return (
    <form onSubmit={handleSubmit}>
        <input 
        onChange={handleChange}
        value={formData.username} 
        type="text" 
        placeholder="Enter Username"
        id="username"
        />
        <input 
        onChange={handleChange}
        value={formData.age} 
        type="number" 
        placeholder="Enter age" 
        id="age"
        />
        <input type="submit" value="submit"/>
    </form>
    );
}