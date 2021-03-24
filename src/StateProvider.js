// setup data layer
// We need to track the basket
import React, { createContext, useContext, useReducer} from "react";

// Data layer
export const StateContext = createContext();

// build a provider

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
     {children}
    </StateContext.Provider>
)


// this is how we use it inside a component

export const useStateValue = () => useContext(StateContext)