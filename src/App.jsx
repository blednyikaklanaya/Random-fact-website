import factsUa from "./DB/fatcsUa.json";
import factsEn from "./DB/factsEn.json";
//fake DB with random facts

import './App.css'
import { useState } from "react";
//style

export default function App() {

  const [isSwitchLanguage, setIsSwitchLanguage] = useState(false); // false = UA, true = EN.

  const getRandomFact = () => {
    let randomIndex;
    if (isSwitchLanguage == false) {
      randomIndex = Math.floor(Math.random() * factsUa.length);
      return factsUa[randomIndex].fact;
    }
    if (isSwitchLanguage == true) {
      randomIndex = Math.floor(Math.random() * factsEn.length);
      return factsEn[randomIndex].fact;
    }
  } //get random facts with facts.json and retunr this.

  const [fact, setFact] = useState(getRandomFact()); //set the values of the text field with the help of hook and function and track the changes - they will occur when the button is pressed.
  const [isFading, setIsFading] = useState(false);

  const handleNewFact = () => {

    setIsFading(true);//set the class for animation manifestation
    setTimeout(() => {
      setFact(getRandomFact);
      setIsFading(false);

    }, 500);//get new fact and remove class for animation manifestation
  }

  const handleSwitchLanguage = (language) => {
    if (language == "ua") setIsSwitchLanguage(false);
    if (language == "en") setIsSwitchLanguage(true);
  }

  return (

    <div
      className="container">

      <h1
        className={`text-field ${isFading ? "hidden" : ""}`}>
        {fact}
      </h1>
      <button
        className="button"
        onClick={handleNewFact}>
        Отримати факт
      </button>

      <div className="container-switch-language">
        <button
        onClick={() => { handleSwitchLanguage("ua")}}
          className="button-change-language ua">
          UA
        </button>
          <span>|</span>
        <button
          onClick={() => { handleSwitchLanguage("en")}}
          className="button-change-language en">
          EN
        </button>
      </div>

    </div>

  )
}
