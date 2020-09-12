import React from "react";
import { IonCard, IonCardHeader, IonCardTitle } from "@ionic/react";

const Bible = ({ data }: any) => {
  return <IonCard>
    <IonCardHeader>
      <IonCardTitle>{data.name}</IonCardTitle>
    </IonCardHeader>
  </IonCard>;
};

export default Bible;
