import { createContext , useContext , useState } from "react";
import { dummyQuestions } from "@/data";
import {useImmer} from 'use-immer';
import { useLocalStorage } from "@/useLocalStorage/localStorage";

const DataContext = createContext();

export function DataProvider({children}){

    const [data , setData] = useLocalStorage('data' , dummyQuestions);
    const dataContextValue = [
        data,
        setData,
    ];

   

   return (
    <DataContext.Provider value={dataContextValue} >
        {children}
    </DataContext.Provider>
   )
}

export function useDataContext(){
    return useContext(DataContext);
}