import axios from "axios";
import Image from "next/image";
import { useContext, useEffect } from "react";
import PrimaryButton from "../components/PrimaryButton";
import QuizContext from "../context/QuizProvider";
import UpraisedLogo from "../images/upraised-logo.png";
import {
  Circle,
  CircleText,
  GradientBackground,
  Logo,
} from "../styles/home.styled";
import Router from "next/router";

export default function Home() {
  const { addQuestions, quizId, setQuizId, setUserResponse } =
    useContext(QuizContext);

  useEffect(() => {
    const fetchId = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/quizid`);
        const qid = res.data.quizId;
        setQuizId(qid);
        setUserResponse([]);
        console.log(`The QuizId for this round: ${qid}`);
      } catch (err) {
        console.log(err);
      }
    };

    fetchId();
  }, [setQuizId, setUserResponse]);

  const handleStart = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/${quizId}/questions`
      );
      const data = res.data;
      addQuestions(data);
      Router.push("/question");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <GradientBackground>
      <Logo>
        <Image src={UpraisedLogo} alt="logo" height="auto" width="150" />
      </Logo>
      <Circle>
        <CircleText>QUIZ</CircleText>
      </Circle>
      <PrimaryButton text="Start" onClick={handleStart}></PrimaryButton>
    </GradientBackground>
  );
}
