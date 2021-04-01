import React, {useState} from 'react';

function SignUp(props) {

    const initialState = {
        email: "",
        password: ""
    }

    const [inputs, setInputs] = useState(initialState)

    const handleSubmit = e => {
        e.preventDefault();
        console.log(inputs)
    }

    const handleChange = e => {
        setInputs(prevState => {
            return {
                ...prevState,
                [e.target.id]: e.target.value
            }
        })
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">LastName</label>
                    <input type="text" id="lastName" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <button className="btn pink z-depth-0">Login</button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;