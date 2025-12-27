import Head from "next/head";
import PageTransition from "@/components/PageTransition";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Doors</title>
        <meta name="author" content="Joohyun Park" />
      </Head>

      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
    </>
  );
}
