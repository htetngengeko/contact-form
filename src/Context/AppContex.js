import { createContext, useReducer } from "react";

const appReducer = (state, action) =>{
    switch(action.type){
        case "COMPLETE":
            alert("Thanks for commiting form. We will contact you soon.")
    }

}

const initialState = {
    firstName :" ",
    lastName : " ",
    email : " ",
    selectedOption : " ",
    message : " ",
    consent : false
}

export const AppContext = createContext();

export const AppProvider = (props) =>{
    const [state, dispatch] = useReducer(initialState, appReducer);
    return(

        <AppContext.Provider value={{
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
            selectedOption : state.selectedOption,
            message : state.message,
            consent: state.consent
        }}>
            {props.children}
        </AppContext.Provider>)
}