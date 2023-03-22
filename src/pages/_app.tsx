import "../styles/globals.css";
import { enableMapSet } from "immer";
import Head from "next/head";
import { RedirectToLoginScreenIfUserAbsent } from "../components/RedirectToLoginScreenIfUserAbsent";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  enableMapSet();

  return (
    <>
      <Head>
        <meta name="description" content="QnA app demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>QnA App</title>
      </Head>
      <RedirectToLoginScreenIfUserAbsent>
        <Component {...pageProps} />
      </RedirectToLoginScreenIfUserAbsent>
    </>
  );
}
