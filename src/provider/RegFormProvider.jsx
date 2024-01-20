import { createContext, useContext, useReducer } from "react";

const RegFormContext = createContext();

export const useRegFormContext = () => {
    return useContext(RegFormContext);
}

const reducer = (state , action) => {
    switch (action.type) {
        case 'SET_INFO_DATA':
            return {...state , info: {...action.data} };
            break;
        case 'SET_PLAN_DATA':
            return {...state ,  plan: {...action.data} };
            break;
        case 'SET_ADDONS_DATA':
            return {...state ,  addOns: {...action.data} };
            break;
        case 'CHANGE_STEP':
            return {...state , step: action.data };
    }
    return state;
}

const RegFormContext = ({ children }) => {
    const [state , dispatch]  =  useReducer(reducer , { step: 0 } );


    return <RegFormContext.Provider value={ [state, dispatch] }>
        {children}
    </RegFormContext.Provider>
}


export default RegFormContext;