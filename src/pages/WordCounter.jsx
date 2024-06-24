import React, { useState, useEffect } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0); // Character count state
  const [showResults, setShowResults] = useState(false);
  const [clipboardText, setClipboardText] = useState(""); // State to store clipboard text
  const [placeholderText, setPlaceholderText] = useState("Enter your text here..."); // Placeholder state

  const handleTextChange = (event) => {
    const textValue = event.target.value;
    setText(textValue);
    // Do not analyze text on every change, wait for button click
  };

  const analyzeText = (textValue) => {
    // Calculate word count
    if (textValue !== "") {
      const words = textValue.trim().split(/\s+/);
      setWordCount(words.length);
    } else {
      setWordCount(0);
    }
    // Calculate sentence count
    const sentences = textValue
      .trim()
      .split(/[.!?]+/)
      .filter((sentence) => sentence.trim() !== "");
    setSentenceCount(sentences.length);

    // Calculate paragraph count
    const paragraphs = textValue
      .trim()
      .split(/\n\s*\n/)
      .filter((paragraph) => paragraph.trim() !== "");
    setParagraphCount(paragraphs.length);

    // Calculate character count
    const characters = textValue.trim().length;
    setCharacterCount(characters);

    // Show results
    setShowResults(true);
  };

  const handlePasteClick = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setText(clipboardText);
      analyzeText(clipboardText); // Call analyzeText with the pasted text
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
  };

  const handleCalculateClick = () => {
    analyzeText(text); // Call analyzeText with the current text state
  };

  useEffect(() => {
    const fetchClipboardText = async () => {
      try {
        const clipboardText = await navigator.clipboard.readText();
        setClipboardText(clipboardText);
        const firstWord = clipboardText.trim().split(/\s+/)[0];
        if (firstWord) {
          setPlaceholderText(`Do you want paste: "${firstWord}..."`);
        }
      } catch (err) {
        console.error("Failed to read clipboard contents: ", err);
      }
    };

    fetchClipboardText();
  }, []);

  return (
    <section className="wordCounterSec">
      <div className="container">
        <div className="wordCounter__container">
          <h2 className="title">Word Counter</h2>
          <p className="miniText">
            Count words, sentences, characters and paragraphs with single click!
          </p>
          <textarea
            className="textArea"
            value={text}
            onChange={handleTextChange}
            placeholder={placeholderText}
            rows={10}
            cols={50}
          />
          <br />
          {text === "" ? (
            <button className="age__calcBtn" onClick={handlePasteClick}>
              Paste
            </button>
          ) : (
            <button className="age__calcBtn" onClick={handleCalculateClick}>
              Calculate
            </button>
          )}

          <div className="wordInformation">
            <p className="wirdInfoText">Word count: {wordCount}</p>
            <p className="wirdInfoText">Sentence count: {sentenceCount}</p>
            <p className="wirdInfoText">Paragraph count: {paragraphCount}</p>
            <p className="wirdInfoText">Character count: {characterCount}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
