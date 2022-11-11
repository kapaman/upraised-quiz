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

export default function Home({ quizId }) {
  const { questions, addQuestions } = useContext(QuizContext);

  useEffect(() => {
    if (questions != undefined && questions.length > 0)
      Router.push("/question");
  }, [questions]);

  const handleStart = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/${quizId}/questions`
      );
      const data = res.data;
      addQuestions(data);
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
