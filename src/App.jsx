import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10
  });

  const inputIsValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(oldInput => ({
        ...oldInput,
        [inputIdentifier]: +newValue
    }));
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter valid Data !</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
    
  )
}

export default App
