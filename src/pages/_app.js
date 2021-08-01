import "tailwindcss/tailwind.css";
import Layout from "@components/layout/Layout";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
