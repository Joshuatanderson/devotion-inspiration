export interface chapter {
	data: {
	  id: string,
	  bibleId: string,
	  number: string,
	  bookId: string,
	  content: string,
	  reference: string,
	  next: {
		id: string,
		bookId: string,
		number: string
	  },
	  previous: {
		id: string,
		bookId: string,
		number: string
	  },
	  copyright: string
	},
	meta: {
	  fums: string,
	  fumsId: string,
	  fumsJsInclude: string,
	  fumsJs: string,
	  fumsNoScript: string
	}
  }