import React, { useState } from "react";
export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [ageDetails, setAgeDetails] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const [showNotBornWarning, setShowNotBornWarning] = useState(false);

  const calculateAge = () => {
    if (!birthDate) {
      setShowWarning(true);
      setTimeout(() => {
        setShowWarning(false);
      }, 5000);
      return;
    }

    const birth = new Date(birthDate);
    const today = new Date();

    // Check if birthdate is in the future
    if (birth > today) {
      setShowNotBornWarning(true);
      setTimeout(() => {
        setShowNotBornWarning(false);
      }, 5000);
      return;
    }

    const ageInMilliseconds = today - birth;
    const ageDate = new Date(ageInMilliseconds);

    const years = ageDate.getUTCFullYear() - 1970; // 1970 is the epoch start year
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    const totalDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));

    setAgeDetails({ years, months, days, totalDays });
  };

  return (
    <section className="age">
      <div className="age__container container">
        <h1 className="age__title">Age Calculator</h1>
        <div className="form">
          <label className="age__label">Enter your date of birth: </label>
          <input
            className="age__input"
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        <button className="age__calcBtn" onClick={calculateAge}>
          Calculate
        </button>
        {showWarning && (
          <div className="modal">
            <div className="modal__content">
              <span className="close" onClick={() => setShowWarning(false)}>
                ❌
              </span>
              <p>Please enter your date of birth to calculate your age!</p>
            </div>
          </div>
        )}
        {showNotBornWarning && (
          <div className="modal">
            <div className="modal__content">
              <span
                className="close"
                onClick={() => setShowNotBornWarning(false)}
              >
                ❌
              </span>
              <p>You have not been born yet!</p>
            </div>
          </div>
        )}
        {ageDetails && (
          <div className="ageInfoBox">
            <h2 className="your__age">Your age:</h2>
            <p className="your__age__info">
              {ageDetails.years} year, {ageDetails.months} month,{" "}
              {ageDetails.days} day
            </p>
            <p className="common__days">Total days: {ageDetails.totalDays}</p>
          </div>
        )}
      </div>
    </section>
  );
}
