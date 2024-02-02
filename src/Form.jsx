import { useState} from 'react'

const INIT_FORM_STATE = {
    name: "",
    lastname: "",
    email: "",
    phone: ""
}

export const Form = () => {
    const formStorageObject = JSON.parse(localStorage.getItem("formState"));

    const [form, setForm] = useState(formStorageObject)

    const submitManager = (e) => {
        e.preventDefault();
        
    };

    const clearFormManager = (e) => {
        e.preventDefault();
        setForm(INIT_FORM_STATE)
        localStorage.setItem("formState", JSON.stringify(INIT_FORM_STATE))
    }
    const inputManager = (e) => {
        setForm(prev => {
            const temp = {
                ...prev,
                [e.target.name]: e.target.value
            }
            localStorage.setItem("formState", JSON.stringify(temp))
            return temp
        })
    }
    return (
        <div className="form-wrapper">
           <h1>NEW FORM</h1> 
           <div className="form-block">
                <div className="fill">
                    <form action="" onSubmit={submitManager}>
                        <input value={form.name} onInput={inputManager} type="text" placeholder="Name" name="name"/>
                        <input value={form.lastname} onInput={inputManager} type="text" placeholder="Lastname" name="lastname"/>
                        <input value={form.email} onInput={inputManager} type="text" placeholder="Email"name="email"/>
                        <input value={form.phone} onInput={inputManager} type="text" placeholder="Phone"name="phone"/>
                        <button>SUBMIT</button>
                        <button onClick={clearFormManager}>CLEAR</button>
                    </form>
                </div>
                <div className="show">
                    {
                        Object.keys(form).map(formLine => {
                            return (
                                <div key={formLine} className="line">
                                    {form[formLine]}
                                </div>    
                            )
                        })
                    }
                    
                </div>
           </div>
           
        </div>    
    )
}