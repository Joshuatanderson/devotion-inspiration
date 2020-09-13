import React from "react";
import {
	IonCardContent,
	IonCard,
	IonCardTitle,
	IonCardHeader,
} from "@ionic/react";
// https://github.com/americanbible/scripture-styles
import "scripture-styles/dist/css/scripture-styles.css";
import "./chapter.scss";

interface chapter {
	html: string;
	title: string;
}

const Chapter = ({ html, title }: chapter) => {

	function createMarkup() {
		return { __html: html };
	}
	return (
		<IonCard>
			<IonCardHeader>
				<IonCardTitle>{title}</IonCardTitle>
			</IonCardHeader>
			<IonCardContent>
				<div
					className="scripture-styles" // this comes from the scripture-styles package
					dangerouslySetInnerHTML={createMarkup()}
				/>
			</IonCardContent>
		</IonCard>
	);
};

export default Chapter;
