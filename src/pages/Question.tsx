import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Question: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Question page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        My question 
      </IonContent>
    </IonPage>
  );
};

export default Question;
