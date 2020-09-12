export interface bible {
	data: [
		{
			id: string;
			bibleId: string;
			abbreviation: string;
			name: string;
			nameLong: string;
			chapters: [
				{
					id: string;
					bibleId: string;
					number: string;
					bookId: string;
					reference: string;
				}
			];
		}
	];
}
