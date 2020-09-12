import React, { useState, useEffect, Fragment } from "react";
import {BIBLES, BOOKS_AND_CHAPTERS } from "../apiRoutes";
import { config } from "../env";
import Bible from "./Bible";
import axios from "axios";

const BiblesController = () => {
  const [bibleData, setBibleData] = useState({});
  const [books, setBooks] = useState({});
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
    const data = await axios.get(BIBLES, axiosConfig);
    setBibleData(data);
  }

  async function getBooks(bibleId: string) {
	const data = await axios.get(BOOKS_AND_CHAPTERS, axiosConfig);
	setBooks(data)
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
