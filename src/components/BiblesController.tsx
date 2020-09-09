import React, { useState, useEffect, Fragment } from "react";
import { config } from "../env";
import Bible from "./Bible";
import axios from "axios";
const endpoint = "https://api.scripture.api.bible/v1/bibles";

const VerseController = () => {
	const [bibleData, setBibleData] = useState({});

	useEffect(() => {
		getData();
	}, []);

	async function getData() {
		const data = await axios.get(`${endpoint}`, {
			headers: { "api-key": config.BIBLE_SECRET, accept: "application/json" },
		});
		setBibleData(data);
	}

	function createBibleVersions(bibleData: any) {
		const bibleVersions = bibleData.data;
		const bibleCards = [];
		console.log(bibleData)
		for (let i = 0; i < bibleVersions?.length; i++) {
			const versionData = bibleVersions[i];
			bibleCards.push(<Bible key={versionData.id} data={versionData} />);
		}
		return bibleCards;
	}

	return <Fragment>{createBibleVersions(bibleData)}</Fragment>;
};

export default VerseController;
