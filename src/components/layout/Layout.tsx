import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Facebook Heroes</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen bg-offWhite">{children}</main>
    </>
  );
}
