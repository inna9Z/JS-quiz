import { IonButton, IonItem, IonLabel, IonList, IonPage, IonRadio, IonRadioGroup } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Questions.css';

// eslint-disable-next-line @typescript-eslint/no-redeclare
const Question: React.FC = () => {


  return (
      <IonPage className='page'>
        
      <div className = "content-question">
        <p>1/10</p>  
        <h4>Inside which element do you put JavaScript?</h4>
       
      </div>
      <IonList className = "list">
        <IonRadioGroup allowEmptySelection={true} value="All of the above">
         
          <IonItem >
            <IonLabel >'var'</IonLabel>
            <IonRadio slot="end" color="dark" value="false1"></IonRadio>
          </IonItem>

          <IonItem>
            <IonLabel>'script'</IonLabel>
            <IonRadio color="dark" slot="end" value="false2"></IonRadio>
          </IonItem>

          <IonItem>
            <IonLabel> 'section'</IonLabel>
            <IonRadio color="dark" slot="end" value="false3"></IonRadio>
          </IonItem>

          <IonItem>
            <IonLabel> 'code'</IonLabel>
            <IonRadio slot="end" color="dark" value="true"></IonRadio>
          </IonItem>
        </IonRadioGroup>
        </IonList>
        <IonButton className='next' color="dark" >Next</IonButton>
    </IonPage>
  );
};

export default Question;
