export interface bibles {
	data: [
		{
			id: string;
			dblId: string;
			abbreviation: string;
			abbreviationLocal: string;
			language: {
				id: string;
				name: string;
				nameLocal: string;
				script: string;
				scriptDirection: string;
			};
			countries: [
				{
					id: string;
					name: string;
					nameLocal: string;
				}
			];
			name: string;
			nameLocal: string;
			description: string;
			descriptionLocal: string;
			relatedDbl: string;
			type: string;
			updatedAt: string;
			audioBibles: [
				{
					id: string;
					name: string;
					nameLocal: string;
					description: string;
					descriptionLocal: string;
				}
			];
		}
	];
}
