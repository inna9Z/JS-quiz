import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle} from "@ionic/react";

import './Result.css'
const Result: React.FC = () => {
    return (
              
        <IonCard>
        <IonCardHeader>
          <IonCardTitle>Final Result</IonCardTitle>
          <IonCardSubtitle>Scores : /</IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
          );
  };
  
  export default Result;
