// `pages/_app.js`
import "/global.css";
import Head from "next/head";
<Head>
  <link
    href="https://fonts.googleapis.com/css2?family=Capriola&display=swap"
    rel="stylesheet"
  />
</Head>;
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
