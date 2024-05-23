import { useState } from "react";
import "./Form.css";

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [message, setMessage] = useState("");
    const [consent, setConsent] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = {};
        if (!firstName.trim()) newErrors.firstName = "This field is required.";
        if (!lastName.trim()) newErrors.lastName = "This field is required.";
        if (!email.trim()) newErrors.email = "This field is required.";
        if (!selectedOption) newErrors.selectedOption = "Please select a query type.";
        if (!message.trim()) newErrors.message = "This field is required.";
        if (!consent) newErrors.consent = "This field is required.";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Thanks for submitting the form. We will contact you soon.");
            console.log(firstName, lastName, email, selectedOption, message, consent)
            setFirstName("");
            setLastName("");
            setEmail("");
            setSelectedOption("");
            setMessage("");
            setConsent(false);  
        }
    };

    return (
        <div className="App">
            <form style={{ width: "90%", maxWidth: 600, margin: "auto", padding: "20px", backgroundColor: "white",borderRadius: 10 }}>
                <h2>Contact Us</h2>
                <div className="form-group mb-3 mt-3">
                    <div className="row">
                        <div className=" col-md-6 col-12 mb-3">
                            <label>First name <sup>*</sup></label>
                            <input 
                            type="text" 
                            className={`input-hover form-control mt-2 ${errors.firstName ? 'is-invalid' : ''}`}
                            value={firstName}
                            onChange={event => setFirstName(event.target.value)} 
                            required
                            /> 
                            {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                        </div>   

                        <div className="col-md-6 col-12 mb-3 input-hover">
                            <label>Last name <sup>*</sup></label>
                            <input 
                            type="text" 
                            className={`input-hover form-control mt-2 ${errors.lastName ? 'is-invalid' : ''}`}
                            value={lastName}
                            onChange={event => setLastName(event.target.value)} 
                            required
                            />
                            {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                        </div>  
                    </div>
                </div>


                <div className="form-group mb-4">
                    <label>Email address <sup>*</sup></label>
                    <input 
                        type="email" 
                        className={`form-control mt-2 input-hover ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="Enter email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required   
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="form-group">
                    <label>Query Type <sup>*</sup></label>
                    <div className={` p-3 row d-flex justify-content-between ${errors.selectedOption ? 'is-invalid' : ''}`}>
                        <div className="col-md-5 col-12 input-hover input-group-text">
                            <input
                                type="radio"
                                value="General Enquiry"
                                onChange={event => setSelectedOption(event.target.value)}
                                checked={selectedOption === "General Enquiry"}
                                style={{marginRight: 10}}  
                            />
                            <span>General Enquiry</span>
                        </div>
                    
                        <div className="col-md-5 col-12 input-hover input-group-text">
                            <input
                                type="radio"
                                value="Support Request"
                                onChange={event => setSelectedOption(event.target.value)}
                                checked={selectedOption === "Support Request"}
                                style={{ marginRight: 10 }}
                            />
                            <span>Support Request</span>
                        </div>
                    </div>
                    {errors.selectedOption && <div className="invalid-feedback mb-3">{errors.selectedOption}</div>}
                </div>  

                
                <div className="form-group">
                    <label>Message <sup>*</sup></label>
                    <div className="mb-3">
                        <textarea 
                            className={`form-control mt-2 input-hover ${errors.message ? 'is-invalid' : ''}`}
                            rows="3"
                            value={message}
                            onChange={event => setMessage(event.target.value)}
                            required  
                        />
                        {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                    </div>
                </div>
                
                <div className="form-group">
                    <div className="mb-3 ">
                        
                        <input
                            className={`form-check-input  input-hover ${errors.consent ? 'is-invalid' : ''}`}
                            type="checkbox"
                            checked={consent}
                            onChange={event => setConsent(event.target.checked)}
                            style={{marginRight: 20 }}
                        /> 
                        <span>I consent to being contacted by the team.</span>
                    {errors.consent && <div className="invalid-feedback">{errors.consent}</div>}
                    </div>
                   
                </div>
              
                <div className="form-group">
                    <button 
                        type="submit" 
                        onClick={handleSubmit} 
                        className="btn" 
                        style={{ width: "100%", backgroundColor: "#007660", color: "white", transition:" backgroundColor 0.4s" }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = "#005a4e"}
                        onMouseLeave={(e) => e.target.style.backgroundColor = "#007660"}
                    >
                        Submit
                    </button>
                </div>
            </form>  
        </div>  
    );
}

export default Form;