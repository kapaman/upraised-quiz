import "../styles/styles.css";
import Layout from "../components/Root";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps}></Component>
    </Layout>
  );
}
