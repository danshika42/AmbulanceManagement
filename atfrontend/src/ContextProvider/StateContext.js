import React,{createContext, useContext} from "react";
import { useLocalStorageReducer } from "./useLocalStorageReducer";

export const StateContext=createContext();

function StateContextProvider({reducer,children,initialState}){
    
    return(
        <StateContext.Provider value={useLocalStorageReducer('dataList',initialState,reducer)}>
            {children}
        </StateContext.Provider> 
    )
}

export const useStateValue=()=>useContext(StateContext);

export default StateContextProvider;