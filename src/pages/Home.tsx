import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from "@ionic/react";
import React, { Fragment } from "react";
import "./Home.css";
import BiblesController from "../components/BiblesController";

const Home: React.FC = () => {
  return (
    <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Passage suggestion</IonCardTitle>
            <IonButton>Generate</IonButton>
          </IonCardHeader>
        </IonCard>
        <BiblesController />
    </IonContent>
  );
};

export default Home;
