import "../styles/globals.css";
import { enableMapSet } from "immer";
import Head from "next/head";
import { RedirectToLoginScreenIfUserAbsent } from "@/components/RedirectToLoginScreenIfUserAbsent";

export default function App({ Component, pageProps }) {
  
  enableMapSet();
  
  return (
    <>
    <Head>
    <title>QnA App</title>
   
    </Head>
          <RedirectToLoginScreenIfUserAbsent>
          <Component {...pageProps}/>

          </RedirectToLoginScreenIfUserAbsent>
    </>
    
  )
}
