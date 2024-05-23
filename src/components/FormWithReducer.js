import { useReducer } from "react"
 const initialFormState = {
    firstName :" ",
    lastName : " ",
    email : " ",
    selectedOption : " ",
    message : " ",
    consent : false
    }

    const formReducer = (state, action) =>{
        switch(action.type){
            case "TEXT_CHANGE":
                return{
                    ...state,
                    [action.field] :action.payload
                }

            case "SET_CONSENT":
                return{
                    ...state,
                    consent : !state.consent
                }

            case "COMPLETE":
                alert(`Thanks for submitting the form. We will contact you soon.`);
                console.log("FormState after Submission", state);
                return state;

            default :
                return state
            }      

    }

const FormWithReducer = () =>{
    const [formState, dispatch] = useReducer(formReducer, initialFormState);

    const handleTextChange = (event) => {
        dispatch({
            type : "TEXT_CHANGE",
            field : event.target.name,
            payload : event.target.value
        })
    };

    const handleSubmit = (event) =>{
       event.preventDefault();
        dispatch({
            type: "COMPLETE"
        })
    }

    return(
    <div className="App">
            <form style={{ width: "45%", backgroundColor: "white", padding: 50, borderRadius: 10 }}
            onSubmit={handleSubmit} >
                <h2>Contact Us</h2>
                <div style={{ display: "flex", justifyContent: "space-between" }} className="form-group mb-3 mt-3">
                    <div className="col-md-5">
                        <label>First name <sup>*</sup></label>
                        <input 
                            type="text" 
                            className={`form-control mt-2`}
                            name="firstName"
                            value={formState.firstName}
                            onChange={event => handleTextChange(event)} 
                            required 
                        /> 
                        {/* {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>} */}
                    </div>   
                
                    <div className="col-md-5">
                        <label>Last name <sup>*</sup></label>
                        <input 
                            type="text" 
                            className={`form-control mt-2`}
                            name="lastName"
                            value={formState.lastName}
                            onChange={event => handleTextChange(event)} 
                            required 
                        />
                        {/* {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>} */}
                    </div>  
                </div>

                <div className="mb-3">
                    <label>Email address <sup>*</sup></label>
                    <input 
                        type="email" 
                        className={`form-control mt-2 `}
                        name = "email"
                        value={formState.email}
                        onChange={event => handleTextChange(event)}
                        required 
                    />
                    {/* {errors.email && <div className="invalid-feedback">{errors.email}</div>} */}
                </div>

                <div className="form-group">
                    <label>Query Type <sup>*</sup></label>
                    <div className={`form-control mt-2`} style={{ display: 'flex', justifyContent: 'space-between', border: "none" }}>
                        <div className="col-md-5 input-group-text">
                            <input
                                type="radio"
                                name="selectedOption"
                                value="General Enquiry"
                                checked = {formState.selectedOption === "General Enquiry"}
                                onChange={event => handleTextChange(event)}
                                style={{ marginRight: 20, marginLeft: 10 }} 
                            />
                            General Enquiry
                        </div>
                    
                        <div className="col-md-5 input-group-text">
                            <input
                                type="radio"
                                name="selectedOption"
                                value="Support Request"
                                checked = {formState.selectedOption === "Support Request"}
                                onChange={event => handleTextChange(event)}
                                style={{ marginRight: 20, marginLeft: 10 }} 
                            />
                            Support Request
                        </div>
                    </div>
                    {/* {errors.selectedOption && <div className="invalid-feedback">{errors.selectedOption}</div>} */}
                </div>  
                
                <div className="form-group">
                    <label>Message <sup>*</sup></label>
                    <div className="mb-3">
                        <textarea 
                            className={`form-control mt-2`}
                            rows="3"
                            name="message"
                            value={formState.message}
                            onChange={event => handleTextChange(event)}
                            required 
                        />
                        {/* {errors.message && <div className="invalid-feedback">{errors.message}</div>} */}
                    </div>
                </div>
                
                <div className="form-group">
                    <div className="mb-3">
                        <input 
                            className={`form-check-input mt-2`}
                            type="checkbox"
                            name="consent"
                            checked={formState.consent}
                            onChange={()=> dispatch({type : "SET_CONSENT"})}
                            style={{ marginRight: 20 }} 
                        /> 
                        I consent to being contacted by the team.
                        {/* {errors.consent && <div className="invalid-feedback">{errors.consent}</div>} */}
                    </div>
                </div>
              
                <div className="form-group">
                    <button 
                        type="submit" 
                        className="btn" 
                        style={{ width: "100%", backgroundColor: "#007660", color: "white" }}
                    >
                        Submit
                    </button>
                </div>
            </form>  
        </div>    
    )
}
export default FormWithReducer