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
import "./Home.scss";
import BiblesController from "../components/BiblesController";

const Home: React.FC = () => {
  return (
    <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <BiblesController />
    </IonContent>
  );
};

export default Home;
