import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap" rel="stylesheet" />

    <meta name="description" content="QnA app demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
