import React from "react";
import { config } from "../.env";
import VerseView from "./VerseView";
import axios from "axios";
const endpoint = "https://api.scripture.api.bible/v1/"

const VerseController = () => {
	axios.get(`${endpoint}/bibles`, {apiKey})

	return <VerseView data={config.BIBLE_SECRET}>

	</VerseView>;
};

export default VerseController;
