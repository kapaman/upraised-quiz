// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { questions } from "../../../util/QUESTIONS";
import { validate as uuidValidate } from "uuid";

export default function handler(req, res) {
  const reqType = req.method;
  const { quizId } = req.query;
  console.log(reqType);
  if (!uuidValidate(quizId)) {
    res.status(401).json({ error: "Please specify valid quizId" });
    return;
  }
  switch (reqType) {
    case "GET":
      res.status(200).json(questions);
      break;
    case "POST":
      console.log(JSON.stringify(req.body));
      res.status(200).json({ message: "Received" });
      break;
  }
}
