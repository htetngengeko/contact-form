import { useEffect, useState } from "react";

const FormWithUseEffectAndUseState = () =>{
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [message, setMessage] = useState("");
    const [consent, setConsent] = useState(false)

    // const [state, setState] =useState ({
    //     firstName :"",
    //     lastName:"",
    //     email:"",
    //     selectedOption:"",
    //     message:"",
    //     consent:false
    // })

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setState((prevProps) => ({
//       ...prevProps,
//       [name]: value
//     }));
//   };

    useEffect(()=>{
        setFirstName(" ")
        setLastName(" ")
        setEmail(" ")
        setSelectedOption(" ")
        setMessage(" ")
        setConsent(false)
    },[])

    const validOrInvalid = (value) =>{
        if(value.length < 0 ){
            return(
                <div class="invalid-feedback">
                    This field is required.
                </div>
            )
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Thanks for commiting form. We will contact you soon.")
        setFirstName(" ")
        setLastName(" ")
        setEmail(" ")
        setSelectedOption(" ")
        setMessage(" ")
        setConsent(false)
        console.log(firstName, lastName, email, selectedOption, message, consent);
    };

    return(
     <div className='App'>
        <form style={{width:"45%", backgroundColor:"white", padding:50, borderRadius:10}}>
            <h2>Contact Us</h2>
            <div 
            style={{display:"flex", justifyContent:"space-between"}} 
            className="form-group mb-3 mt-3">
                <div class="col-md-5">
                    <label>First name  <sup>*</sup></label>
                    <input 
                    type="text" 
                    className={firstName.length > 0 ? "form-control mt-2" : "form-control mt-2 is-invalid "} 
                    id="inputBox" 
                    value={firstName}
                    onChange={event=> setFirstName(event.target.value)} 
                    required /> 
                      {validOrInvalid(firstName)}
                </div>   
            
                <div class="col-md-5">
                    <label >Last name  <sup>*</sup></label>
                    <input 
                    type="text" 
                    className={lastName.length > 0 ? "form-control mt-2" : "form-control mt-2 is-invalid "} 
                    id="inputBox" 
                    value={lastName}
                    onChange={event=> setLastName(event.target.value)} 
                    required />
                    {validOrInvalid(lastName)}
                </div>  
            </div>

            <div>
                <div class="mb-3">
                    <label>Email address  <sup>*</sup></label>
                    <input 
                    type="email" 
                    className={email.length > 0 ? "form-control mt-2" : "form-control mt-2 is-invalid "} 
                    id="inputBox" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter email"
                    value={email}
                    onChange={(event)=> setEmail(event.target.value)}
                    required/>
                </div>
                {validOrInvalid(email)}
            </div>


            <div class="form-group">
                <label>Query Type  <sup>*</sup></label>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', border:"none" }} className={selectedOption.length > 0 ? "form-control mt-2" : "form-control mt-2 is-invalid "} >
                        <div className="col-md-5 input-group-text">
                            <input
                            type="radio"
                            value="General Enquiry"
                            checked={selectedOption === 'General Enquiry'}
                            onChange={ (event)=> setSelectedOption(event.target.value)}
                            style={{marginRight:20, marginLeft:10}}/> 
                            General Enquiry
                        </div>
                    
                        <div className="col-md-5 input-group-text">
                            <input
                            type="radio"
                            value="Support Request"
                            checked={selectedOption === 'Support Request'}
                            onChange={(event)=> setSelectedOption(event.target.value)}
                            style={{marginRight:20, marginLeft:10}} /> 
                            Support Request
                        </div>
                    </div>
                        {validOrInvalid(selectedOption)}
                </div>
            </div>  
            
            <div class="form-group">
                <label>Message  <sup>*</sup></label>
                <div className="mb-3" >
                    <textarea 
                    className={message.length > 0 ? "form-control mt-2" : "form-control mt-2 is-invalid "}             
                    rows="3" 
                    name=""
                    id="inputBox" 
                    value={message} 
                    onChange={(event) => setMessage(event.target.value)}
                    required/>
                    {validOrInvalid(message)}
                </div>
            </div>
            
            <div class="form-group">
                <div className="mb-3" style={{display:"flex", justifyContent:"space-between"}} >
                    <input 
                    className={consent ? "form-check-input mt-2" : "form-check-input mt-2 is-invalid "} 
                    type="checkbox" 
                    value="" 
                    checked = {consent}
                    onChange={(event) => setConsent(event.target.checked)}
                    aria-label="Checkbox for following text input" 
                    style={{marginRight:20}}/> 
                    I consent to being contected by the team.
                </div>
                <div class="invalid-feedback">
                    This field is required.
                </div>
                
            </div>
          
            <div class="form-group">
                <button type="submit" onClick={handleSubmit} className="btn" style={{width:"100%", backgroundColor: "#007660", color:"white"}}>Submit</button>
            </div>
        </form>  
      </div>  
    )
}
export default FormWithUseEffectAndUseState