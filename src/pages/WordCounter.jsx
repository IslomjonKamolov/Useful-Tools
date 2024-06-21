import React, { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0); // Character count state
  const [showResults, setShowResults] = useState(false);

  const handleTextChange = (event) => {
    const textValue = event.target.value;
    setText(textValue);
    // Do not analyze text on every change, wait for button click
  };

  const analyzeText = () => {
    // Calculate word count
    if (text !== "") {
      const words = text.trim().split(/\s+/);
      setWordCount(words.length);
    } else {
      setWordCount(0);
    }
    // Calculate sentence count
    const sentences = text
      .trim()
      .split(/[.!?]+/)
      .filter((sentence) => sentence.trim() !== "");
    setSentenceCount(sentences.length);

    // Calculate paragraph count
    const paragraphs = text
      .trim()
      .split(/\n\s*\n/)
      .filter((paragraph) => paragraph.trim() !== "");
    setParagraphCount(paragraphs.length);

    // Calculate character count
    const characters = text.trim().length;
    setCharacterCount(characters);

    // Show results
    setShowResults(true);
  };

  return (
    <section className="wordCounterSec">
      <div className="container">
        <textarea
          className="textArea"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter your text here..."
          rows={10}
          cols={50}
        />
        <br />
        <button className="age__calcBtn" onClick={analyzeText}>
          Calculate
        </button>

        <div className="wordInformation">
          <p className="wirdInfoText">Word count: {wordCount}</p>
          <p className="wirdInfoText">Sentence count: {sentenceCount}</p>
          <p className="wirdInfoText">Paragraph count: {paragraphCount}</p>
          <p className="wirdInfoText">Character count: {characterCount}</p>
        </div>
      </div>
    </section>
  );
}