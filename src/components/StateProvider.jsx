import React,{createContext,useContext,useReducer} from "react";

//prepares the datalayer
export const StateContext = createContext();

//wrap out app and provide the datalayer

export const  StateProvider = ({reducer, initialState, children})=> (
<StateContext.Provider value = {useReducer(reducer,initialState)}>
    {children}
    </StateContext.Provider>
);
//pull info from the data layer
export const useStateValue =() => useContext(StateContext);