import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/oviond-logo.svg" />
        <title>Oviond</title>
        <meta
          name="Description"
          content="A Next.js starter styled using Tailwind CSS."
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
