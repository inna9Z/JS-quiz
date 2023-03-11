import {  IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonPage } from "@ionic/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import './Result.css';


const countResult = (result: any) => {
  
  let count = 0;
  let total = 0;
    Object.keys(result).forEach(idx => {
      if (result[idx].isCorrect) {
        count ++
      }
      total ++;
    });
    return {count, total};
};


const Result: React.FC = () => {

  const history = useHistory();
  const [results, setResults] = useState<any>();
  console.log(history.location.pathname.split('/')[2]);

  useEffect(() => {
    const moduleId = history.location.pathname.split('/')[2];

    const data = localStorage.getItem(`module-${moduleId}`);
    if (data) {
      setResults(JSON.parse(data));
    }
  }, [history.location.pathname]);
  return (
    <IonPage className="card">
      <IonCardHeader className="card-header">
        <IonCardTitle className="card-title">Final Result</IonCardTitle>
      {results && 
          <IonCardSubtitle className="card-subtitle">Scores : {countResult(results).count}/ 5</IonCardSubtitle>
      }
      </IonCardHeader>
      <IonCardContent className="card-content">
        <p className="score">/</p>
      </IonCardContent>
    </IonPage>
  );
};

export default Result;
