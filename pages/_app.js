import "../styles/styles.css";
import Layout from "../components/Root";
import { useEffect, useState } from "react";
import { QuizDataProvider } from "../context/QuizProvider";
import axios from "axios";

export default function MyApp({ Component, pageProps }) {
  const [quizId, setQuizId] = useState(null);

  useEffect(() => {
    const fetchId = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/quizid`);
        const qid = res.data.quizId;
        setQuizId(qid);
        console.log(qid);
      } catch (err) {
        console.log(err);
      }
    };

    fetchId();
  }, []);

  return (
    <QuizDataProvider>
      <Layout>
        <Component {...pageProps} quizId={quizId}></Component>
      </Layout>
    </QuizDataProvider>
  );
}
