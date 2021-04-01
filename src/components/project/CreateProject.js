import React, {useState} from 'react';

function CreateProject(props) {

    const initialState = {
        title: "",
        content: ""
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
                <h5 className="grey-text text-darken-3">New Project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea id="content" className="materialize-textarea" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <button className="btn pink z-depth-0">Create</button>
                </div>
            </form>
        </div>
    );
}

export default CreateProject;