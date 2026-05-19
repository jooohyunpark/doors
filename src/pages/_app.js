import Head from "next/head";
import PageTransition from "@/components/PageTransition";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Doors</title>
        <meta name="author" content="Joohyun Park" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>

      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
    </>
  );
}
