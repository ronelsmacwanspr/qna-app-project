import { createContext , useContext , useState } from "react";
import { questions } from "@/data";
import {useImmer} from 'use-immer';

const DataContext = createContext();

export function DataProvider({children}){

    // const [data, setData] = useState(questions);
    // const dataContextValue = [
    //     data,
    //     setData,
    // ];

    const [data , setData] = useImmer(questions);
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