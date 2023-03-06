import { IonItem, IonLabel, IonList, IonRadio, IonRadioGroup } from "@ionic/react";
import React from "react";

interface TestProps {
  module: {
    id: number;
    path: string;
    name: string;
    
  };
}

const Test: React.FC<TestProps> = ({ module }) => {
  return (
   
      <IonList>
        <IonRadioGroup allowEmptySelection={true} value="turtles">
          <IonItem>
            <IonLabel>Dogs</IonLabel>
            <IonRadio slot="end" value="dogs"></IonRadio>
          </IonItem>

          <IonItem>
            <IonLabel>Cats</IonLabel>
            <IonRadio slot="end" value="cats"></IonRadio>
          </IonItem>

          <IonItem>
            <IonLabel>Turtles</IonLabel>
            <IonRadio slot="end" value="turtles"></IonRadio>
          </IonItem>

          <IonItem>
            <IonLabel>Fish</IonLabel>
            <IonRadio slot="end" value="fish"></IonRadio>
          </IonItem>
        </IonRadioGroup>
      </IonList>
    
  );
};
export default Test;
