import React from "react";
import { IonCard, IonCardTitle } from "@ionic/react";

const Bible = ({ data }: any) => {
return <IonCard><IonCardTitle>Bible Version: {data.name}</IonCardTitle></IonCard>;
};

export default Bible;
