import Head from "next/head";

const title = "Doors";
const url = "https://doors.parkjoohyun.com/";
const description = "";
const author = "Joohyun Park";

export default function Header() {
  return (
    <Head>
      {/* Recommended Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="language" content="english" />
      <meta name="author" content={author} />
      <meta name="designer" content={author} />
      <meta name="publisher" content={author} />

      {/* Search Engine Optimization Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <meta name="distribution" content="web" />

      {/* 
        Facebook Open Graph meta tags
          documentation: https://developers.facebook.com/docs/sharing/opengraph */}
      <meta name="og:title" content={title} />
      <meta name="og:type" content="site" />
      <meta name="og:url" content={url} />
      <meta name="og:site_name" content={title} />
      <meta name="og:description" content={description} />

      {/* Meta Tags for HTML pages on Mobile */}
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1, initial-scale=1.0"
      />
      <meta name="theme-color" content="#000" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
}
