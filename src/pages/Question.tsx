import { IonButton, IonPage } from "@ionic/react";
import { IModule } from "../App";
import { useState } from "react";
import "./Questions.css";
import QuestionItem from "../components/QuestionItem";
import { useHistory } from "react-router";



const Question: React.FC<{ module: IModule }> = ({ module }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [result, setResult] = useState<any>({});
  const history = useHistory()

  const next = () => {
    if (activeSlide + 1 < module.questions.length) {
      setActiveSlide((prev) => prev + 1);
    } else {
      localStorage.setItem(`module-${module.id}`, JSON.stringify(result));
      history.push(`/questions/${module.id}/results`);
    }
  };
  

  return (
    <IonPage className="page">
      {module?.questions.map((question, i) => (
        <QuestionItem
          key={question.id}
          activeSlide={activeSlide}
          index={i}
          question={question}
          setResult={setResult}
        />
      ))}
      <IonButton onClick={next} className="next" color="dark">
        {module.questions.length > activeSlide + 1 ? "Next" : "Submit"}
      </IonButton>
    </IonPage>
  );
};
export default Question;
