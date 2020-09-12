import React, { useState, useEffect, Fragment } from "react";
import {BIBLES, BOOKS_AND_CHAPTERS, CHAPTER } from "../apiRoutes";
import { config } from "../env";
import Bible from "./Bible";
import axios from "axios";
import { bibles } from "../types/bibles";
import { bible } from "../types/bible";
import { chapter } from "../types/chapter";

const BiblesController = () => {
  const [bibleData, setBibleData] = useState<null | bibles>(null);
  const [books, setBooks] = useState<null | bible>(null);
  const [chapter, setChapter] = useState<null | chapter>(null);
  const [activeVersion, setActiveVersion] = useState(
    {
      abbreviation: "ASV",
      id: "06125adad2d5898a-01",
      dblId: "06125adad2d5898a",
    },
  );

  const axiosConfig = {
	  headers: { "api-key": config.BIBLE_SECRET, accept: "application/json" }
  }

  useEffect(() => {
	getBibles();
	getBooks(activeVersion.id)
  }, []);

  async function getBibles() {
    const data: bibles = await axios.get(BIBLES, axiosConfig);
    setBibleData(data);
  }

  async function getBooks(bibleId: string) {
	const data: bible = await axios.get(BOOKS_AND_CHAPTERS(bibleId), axiosConfig);
	setBooks(data)
  }

//   function pickRandomChapter(bibleData: )

  async function getChapter(bibleId: string, chapterId: string) {
	const data: chapter = await axios.get(CHAPTER(bibleId, chapterId), axiosConfig);
	setChapter(data)

  }

  function createBibleVersions(bibleData: any) {
    const bibleVersions = bibleData.data;
    const bibleCards = [];
    console.log(bibleData);
    for (let i = 0; i < bibleVersions?.data.length; i++) {
      const versionData = bibleVersions?.data[i];
      if (i === 0) {
        console.log(versionData);
      }
      bibleCards.push(<Bible key={versionData.id} data={versionData} />);
    }
    return bibleCards;
  }

  return <Fragment>{createBibleVersions(bibleData)}</Fragment>;
};

export default BiblesController;
