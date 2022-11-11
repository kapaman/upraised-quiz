import { createContext, useState } from "react";

const QuizContext = createContext(0, () => {});

export const QuizDataProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [userResponse, setUserResponse] = useState([]);
  const [quizId, setQuizId] = useState(null);
  const addQuestions = (ques) => setQuestions(ques);
  const addUserResponse = (resp) => setUserResponse(resp);
  return (
    <QuizContext.Provider
      value={{
        questions,
        addQuestions,
        userResponse,
        addUserResponse,
        quizId,
        setQuizId,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
