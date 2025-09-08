import React, { useContext } from "react";
import { QuestionsContext } from "../context/QuestionsContext";

export default function QuestionsAdmin() {
  const { questions } = useContext(QuestionsContext);

  return (
    <div>
      <h2>Бардык суроолор</h2>
      <ul>
        {questions.map(q => (
          <li key={q.id}>{q.text}</li>
        ))}
      </ul>
    </div>
  );
}
