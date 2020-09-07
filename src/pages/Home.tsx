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
import React from "react";
import "./Home.css";
import VerseController from "../components/VerseController";

const Home: React.FC = () => {
	return (
		<IonPage>
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
				<IonCardContent>
					<VerseController />
				</IonCardContent>
			</IonCard>
		</IonPage>
	);
};

export default Home;
