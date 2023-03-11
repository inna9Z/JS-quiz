import { Route } from 'react-router-dom';
import { IonApp, setupIonicReact, IonTitle, IonHeader, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Question from './pages/Question';

//import TestBeginner from './pages/TestBeginner';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Result from './pages/Result';
import axios from 'axios';
import { useEffect, useState } from 'react';



setupIonicReact();
export type IAnswers = {
  id: number;
  name: string;
  isCorrect: boolean;
}
export type IQuestion = {
  id: number;
  snippet?: string;
  module: string;
  hint: string;
  title: string;
  answers: IAnswers[];

}
export type IModule = {
  id: number;
  path: string;
  name: string;
  questions: IQuestion[];
}

const App: React.FC = () => {
   const [modules, setModules] = useState <IModule[]>([])
  
   useEffect(() => {
    const fethModules = async () => {
      try {
        const {data} = await axios.get<null,{data: IModule[]}>('data.json');
        setModules(data)
      } catch(e) {
        console.log(e);
      }
    }
    fethModules();
  }, []);
  
  return (<IonApp>
    <IonHeader>
        <IonToolbar>
          <IonTitle className = "title" >JS quiz</IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonReactRouter>
  
        <Route exact path="/">
          <Home modules={modules}/>
        </Route>

      
        {modules?.map((module: any) => (
        <Route key={module.id} exact path={`/questions/${module.id}`}>
          <Question module = {module} />
        </Route>
       ))}
        <Route exact path="/questions/:id/results">
          <Result />
        </Route>

     
    </IonReactRouter>
  </IonApp> 
  )

}
  


export default App;
