import React, { useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [copyButtonText, setCopyButtonText] = useState("Copy Password");

  const generatePassword = () => {
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let charSet = "";
    if (includeUppercase) charSet += upperCaseChars;
    if (includeLowercase) charSet += lowerCaseChars;
    if (includeNumbers) charSet += numberChars;
    if (includeSymbols) charSet += symbolChars;

    if (charSet === "") {
      setError("Please select at least one checkbox");
      setPassword("");
      return;
    }

    setError("");
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      newPassword += charSet[randomIndex];
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopyButtonText("Copied!");
    setTimeout(() => {
      setCopyButtonText("Copy Password");
    }, 3000);
  };

  return (
    <div className="password-generator container">
      <h2 className="title">Password Generator</h2>
      <div className="input-group">
        <label className="label">
          Length:
          <input
            className="input"
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            min="1"
          />
        </label>
      </div>
      <div className="input-group">
        <label className="label">
          <input
            className="checkbox"
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
          />
          Include Uppercase Letters
        </label>
      </div>
      <div className="input-group">
        <label className="label">
          <input
            className="checkbox"
            type="checkbox"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
          />
          Include Lowercase Letters
        </label>
      </div>
      <div className="input-group">
        <label className="label">
          <input
            className="checkbox"
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          Include Numbers
        </label>
      </div>
      <div className="input-group">
        <label className="label">
          <input
            className="checkbox"
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          Include Symbols
        </label>
      </div>
      <button className="generate-button" onClick={generatePassword}>
        Generate Password
      </button>
      <div className="password-output">
        <h3>Your Password:</h3>
        {error ? (
          <p className="password error">{error}</p>
        ) : (
          <div>
            <p className="password">{password}</p>
            {password && (
              <button className="copy-button" onClick={copyToClipboard}>
                {copyButtonText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordGenerator;
