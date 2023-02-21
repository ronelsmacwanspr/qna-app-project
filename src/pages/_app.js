import { DataProvider } from "@/context/dataContext";
import { UserProvider } from "@/context/userContext";
import "../styles/globals.css";
import { enableMapSet } from "immer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  
  enableMapSet();

  
  return (
    <>
    <Head>
    <title>QnA App</title>
   
    </Head>
    <DataProvider>
      <UserProvider>
        <Component {...pageProps}/>
      </UserProvider>
    </DataProvider>
    </>
    
  )
}
