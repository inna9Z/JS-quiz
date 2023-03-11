import {
  IonList,
  IonRadioGroup,
  IonItem,
  IonLabel,
  IonRadio,
} from "@ionic/react";
import React, { useState } from "react";
import { IQuestion } from "../App";

interface QuestionItemProps {
  activeSlide: number;
  question: IQuestion;
  setResult: Function;
  index: number;
}

const QuestionItem: React.FC<QuestionItemProps> = ({
  activeSlide,
  question,
  setResult,
  index,
}) => {
  const [selected, setSelected] = useState<number>();

  const changeChoice = (e: any, questionId: number) => {
    setSelected(e.detail.value);

    const answer = question.answers.find((a) => a.id === e.detail.value);

    setResult((prev: any) => ({ ...prev, [questionId]: answer }));
  };

  return (
    <div
      style={{ display: index === activeSlide ? "block" : "none" }}
      key={question.id}
    >
      <div className="content-question">
        <p> {index + 1}/5</p>
        {question.snippet && <p>{question.snippet}</p>}
        <h4>{question.title}</h4>
      </div>
      <IonList className="list">
        <IonRadioGroup
          allowEmptySelection={true}
          onIonChange={(e) => changeChoice(e, question.id)}
          value={selected}
        >
          {question.answers.map((answer) => (
            <IonItem key={answer.id}>
              <IonLabel>{answer.name}</IonLabel>
              <IonRadio slot="end" color="dark" value={answer.id}></IonRadio>
            </IonItem>
          ))}
        </IonRadioGroup>
      </IonList>
    </div>
  );
};

export default QuestionItem;
