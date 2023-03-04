import React from "react";
import { IonButton } from "@ionic/react";


function Button() {

  return (
      <>
       <div className="button-container">
      <IonButton className="button" color="dark" size="large">Beginner<span>  &#128587;</span></IonButton>
    </div>
    <div className="container">
      <IonButton className="btn" color="dark" size="large">Intermediate<span> 👨‍💻 </span></IonButton>
    </div>

    <div className="content">
     <h3>Good luck!</h3>
    </div>
      </>
   
    
  );
}
export default Button;
