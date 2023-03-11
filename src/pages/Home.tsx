import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import { IModule } from '../App';



//import ExploreContainer from '../components/ExploreContainer';
import Logo from '../components/Logo';
import './Home.css';

const Home: React.FC<{modules: IModule[]}> = ({modules}) => {
  return (
    <IonPage>
      
     
      <IonHeader>
        <IonToolbar>
          <IonTitle className = "title" >JS quiz</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Logo />
        <div className="button-container">
      <IonButton className="button" color="dark" size="large" routerLink={`/questions/${modules[0]?.id}`}
      >Beginner<span>  &#128587;</span></IonButton>
      <div className="container">
      <IonButton className="btn" color="dark" size="large">Intermediate<span> 👨‍💻 </span></IonButton>
    </div>
        </div>
       
      </IonContent>
    </IonPage>   
  );
};

export default Home;
