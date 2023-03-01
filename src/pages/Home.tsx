import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import Button from '../components/Button';
//import ExploreContainer from '../components/ExploreContainer';
import Logo from '../components/Logo';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      
     
      <IonHeader>
        <IonToolbar>
          <IonTitle className = "title" >JS quiz</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Logo />
        <Button />
      </IonContent>
    </IonPage>
  );
};

export default Home;
