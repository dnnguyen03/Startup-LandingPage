import { useEffect, useLayoutEffect, useRef } from "react";
import { dataQuestions } from "../../../utils/data";

export default function Questions() {
  const listQuestion = useRef([]);
  const listAnswer = useRef([]);
  const Answer = useRef([]);
  useEffect(() => {
    listQuestion.current[0].classList.add("show");
    listAnswer.current[0].style.height =
      Answer.current[0].getBoundingClientRect().height + "px";
  });
  useLayoutEffect(() => {
    listQuestion.current.forEach((question, index) => {
      question.addEventListener("click", () => {
        listQuestion.current.forEach((item) => {
          if (item !== question) {
            item.classList.remove("show");
          }
        });
        listAnswer.current.forEach((item) => {
          item.style.height = 0;
        });
        question.classList.add("show");
        if (question.classList.contains("show")) {
          listAnswer.current[index].style.height =
            Answer.current[index].getBoundingClientRect().height + "px";
        } else {
          listAnswer.current[index].style.height = 0;
        }
      });
    });
  });

  return (
    <div className="Question">
      <div className="title">
        <p className="textUpCase">GET YOUR QUESTION ANSWER</p>
        <h2>Frequently asked question</h2>
      </div>
      <div className="container">
        <div className="questions">
          {dataQuestions.map((question, index) => (
            <div
              key={index}
              className="question"
              ref={(el) => (listQuestion.current[index] = el)}
            >
              <div className="ask">
                <span className="open">+</span>
                <span className="close">-</span>
                {question.ask}
              </div>
              <div
                className="answer"
                ref={(el) => (listAnswer.current[index] = el)}
              >
                <p ref={(el) => (Answer.current[index] = el)}>
                  {question.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
