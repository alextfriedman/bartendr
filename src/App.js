// Pseudo code
// Get cocktail data from API
// Listen for user selection (from dropdown menu) of which mood they're in
// Attribute each mood selection to an individual cocktail by adding a class name
// Display the cocktail to the screen based on user selection

import { useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {
  useEffect(() => {
    axios({
      url: "https://www.thecocktaildb.com/api/json/v1/1/search.php",
      method: "GET",
      dataResponse: "json",
      params: {
        s: "Old Fashioned"
      },
    }).then((res) => {
      console.log(res.data.drinks);
    })
  }, [])

  return (
    <div className="App">
      <h1>Bartendr</h1>
      <p>Select your mood to reveal what cocktail you should make!</p>
      <form>
        <select name="mood" id="mood">
          <option value="initial" disabled selected>How are you feeling?</option>
          <option value="">Excited</option>
          <option value="">Content</option>
          <option value="">Angry</option>
          <option value="">Depressed</option>
          <option value="">Nervous</option>
          <option value="">Peaceful</option>
          <option value="">Nostalgic</option>
          <option value="">Romantic</option>
        </select>
        <button>Submit</button>
      </form>

      <p>Questions:</p>
      <ul>
        <li>Do I need to make a new API call with a different search param each time the button is clicked? Or can I somehow return an array of all 8 drinks I want on page load?</li>
      </ul>
    </div>
  );
}

export default App;
