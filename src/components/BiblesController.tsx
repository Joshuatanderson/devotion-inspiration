import React, { useState, useEffect, Fragment } from "react";
import { IonCard, IonCardTitle, IonButton, IonCardHeader } from "@ionic/react";

import { BIBLES, BOOKS_AND_CHAPTERS, CHAPTER } from "../apiRoutes";
import { config } from "../env";
import Bible from "./Bible";
import axios from "axios";
import DOMPurify from "dompurify";
import { bibles } from "../types/bibles";
import { bible } from "../types/bible";
import { chapter } from "../types/chapter";
import Chapter from "./Chapter";

// TODO: stop from displaying intro
// TODO: allow user to change version
// TODO: make formatting less ugly

const BiblesController = () => {
	const [bibleData, setBibleData] = useState<bibles | null>(null);
	const [books, setBooks] = useState<bible | null>(null);
	const [chapter, setChapter] = useState<chapter | null>(null);
	const [activeVersion, setActiveVersion] = useState({
		abbreviation: "ASV",
		id: "06125adad2d5898a-01",
		dblId: "06125adad2d5898a",
	});

	const axiosConfig = {
		headers: { "api-key": config.BIBLE_SECRET, accept: "application/json" },
	};

	const SHOW_BIBLE_VERSIONS = false;

	useEffect(() => {
		getBibles();
		getBooks(activeVersion.id);
	}, []);

	useEffect(() => {
		if (books) {
			getRandomChapter(activeVersion.id, books);
		}
	}, [books]);

	async function getBibles() {
		const data: null | bibles = await axios
			.get(BIBLES, axiosConfig)
			.then((resp) => resp.data)
			.catch((err) => {
				console.error(err);
				return null;
			});
		setBibleData(data);
	}

	function getRandomChapter(bibleId: string, books: bible) {
		getChapter(bibleId, pickRandomChapter(books));
	}

	function handleGeneratePassage(bibleId: string, books: bible | null) {
		if (books) {
			getRandomChapter(activeVersion.id, books);
		}
	}

	async function getBooks(bibleId: string) {
		const data: null | bible = await axios
			.get(BOOKS_AND_CHAPTERS(bibleId), axiosConfig)
			.then((resp) => resp.data)
			.catch((err) => {
				console.error(err);
				return null;
			});
		setBooks(data);
	}

	function pickRandomChapter(bible: bible) {
		const randomBook =
			bible.data[Math.floor(Math.random() * bible.data.length)];
		const randomChapter =
			randomBook.chapters[
				Math.floor(Math.random() * randomBook.chapters.length)
			];
		return randomChapter.id;
	}

	async function getChapter(bibleId: string, chapterId: string) {
		const data: chapter = await axios
			.get(CHAPTER(bibleId, chapterId), axiosConfig)
			.then((resp) => resp.data)
			.catch((err) => {
				console.error(err);
				return null;
			});
		setChapter(data);
	}

	function createBibleVersions(bibleData: bibles) {
		const bibleCards = [];
		for (let i = 0; i < bibleData.data.length; i++) {
			const versionData = bibleData.data[i];
			bibleCards.push(<Bible key={versionData.id} data={versionData} />);
		}
		return bibleCards;
	}

	return (
		<Fragment>
			<IonCard>
				<IonCardHeader>
					<IonCardTitle>Passage suggestion</IonCardTitle>
					<IonButton
						onClick={() => handleGeneratePassage(activeVersion.id, books)}
					>
						Generate
					</IonButton>
				</IonCardHeader>
			</IonCard>
			{SHOW_BIBLE_VERSIONS && bibleData && createBibleVersions(bibleData)}
			{chapter && (
				<Chapter
					html={DOMPurify.sanitize(chapter.data.content)}
					title={chapter.data.reference}
				/>
			)}
		</Fragment>
	);
};

export default BiblesController;
