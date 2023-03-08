import { IonButton, IonItem, IonLabel, IonList, IonPage, IonRadio, IonRadioGroup  } from '@ionic/react';
//import { useState } from 'react';
// import ExploreContainer from '../components/ExploreContainer';
import './Questions.css';
//import { questions } from '../data/data';


// eslint-disable-next-line @typescript-eslint/no-redeclare
const Question: React.FC = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(1);
//   const [score, setScore] = useState(1);
//   const [showResults, setShowResults] = useState(false);

//   const onClick = (isCorect: boolean) => {
//     if (isCorect) {
//       setScore(score + 1);
//     }
//     if (currentQuestion + 1 < questions.length) {
//       setCurrentQuestion(currentQuestion + 1)

//     } else {
//       setShowResults(true);
//     } 
//   } 

  
//   } 
  return (
      <IonPage className='page'>

      <div className = "content-question">
        <p > 1/5</p>  
        <h4>Inside which element do you put JavaScript? ?</h4>
       </div>
      <IonList className = "list">
        <IonRadioGroup allowEmptySelection={true} value="All of the above">
         
          <IonItem >
            <IonLabel >'var'</IonLabel>
            <IonRadio slot="end" color="dark" value="var"></IonRadio>
          </IonItem>

          <IonItem>
            <IonLabel>'script'</IonLabel>
            <IonRadio color="dark" slot="end" value="script"></IonRadio>
          </IonItem>

          <IonItem>
            <IonLabel> 'section'</IonLabel>
            <IonRadio color="dark" slot="end" value="section"></IonRadio>
          </IonItem>

          <IonItem>
            <IonLabel> 'code'</IonLabel>
            <IonRadio slot="end" color="dark" value="code"></IonRadio>
          </IonItem>
        </IonRadioGroup>
        </IonList>
        <IonButton className='next' color="dark"  >Next</IonButton> 

    </IonPage>
  );
  

  }
export default Question;
