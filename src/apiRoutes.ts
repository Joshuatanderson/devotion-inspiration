export const BIBLES = "https://api.scripture.api.bible/v1/bibles"
export const BOOKS_AND_CHAPTERS = (bibleId: string) => `https://api.scripture.api.bible/v1/bibles/${bibleId}/books?include-chapters=true`
export const CHAPTER = (bibleId: string, chapterId: string) => `https://api.scripture.api.bible/v1/bibles/${bibleId}/chapters/${chapterId}`