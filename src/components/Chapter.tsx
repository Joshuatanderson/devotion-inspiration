import { IonCardContent, IonCard, IonCardTitle, IonCardHeader } from '@ionic/react'
import { create } from 'domain';
import React from 'react'

interface chapter {
	html: string,
	title: string
}

const Chapter = ({html, title}: chapter) => {
	function createMarkup() {
		return {__html: html};
	  }
	return (
		<IonCard>
			<IonCardHeader>
				<IonCardTitle>
					{title}
				</IonCardTitle>
			</IonCardHeader>
			<IonCardContent>
				<div dangerouslySetInnerHTML={createMarkup()}></div>
			</IonCardContent>
		</IonCard>
	)
}

export default Chapter
