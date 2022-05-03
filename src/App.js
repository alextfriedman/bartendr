// MVP
// Get cocktail data from API
// Listen for user selection (from dropdown menu) of which mood they're in
// Attribute each mood selection to an individual cocktail by adding a class name
// Display the cocktail to the screen based on user selection

// Stretch Goal #1
// include cocktail ingredients & recipe along with name & photo

// Stretch Goal #2
// Styling

// Modules
import { useEffect, useState } from "react";
import axios from "axios";

// Components
import DynamicDrink from "./Components/DynamicDrink";


const App = () => {
  const [drinkResult, setDrinkResult] = useState(null);
  const [userSelection, setUserSelection] = useState("initial");
  const [form, setForm] = useState(null);
  
  const handleClick = (e) => {
    e.preventDefault();
    // Update form state to userSelection value
    setForm(userSelection);
  }

  useEffect(() => {
    axios({
      url: "https://www.thecocktaildb.com/api/json/v1/1/search.php",
      method: "GET",
      dataResponse: "json",
      params: {
        s: userSelection
      },
    }).then((res) => {
      setDrinkResult(res.data.drinks);
    })
  }, [form])

  return (
    <>
    <div className="wrapper">
      <h1>Mixed Feelings</h1>
      <form onSubmit={handleClick}>
        <label htmlFor="mood">Select your mood to reveal what cocktail you should make</label>
        <select name="mood" id="mood" onChange={(e) => {setUserSelection(e.target.value)}} value={userSelection}>
          <option value="initial" disabled>How are you feeling?</option>
          <option value="Margarita">Excited</option>
          <option value="Aperol_Spritz">Content</option>
          <option value="Dark_and_Stormy">Angry</option>
          <option value="White_Russian">Depressed</option>
          <option value="Dry_Martini">Nervous</option>
          <option value="Mojito">Peaceful</option>
          <option value="Old_Fashioned">Nostalgic</option>
          <option value="Champagne_Cocktail">Romantic</option>
          <option value="Pink_Lady">Whimsical</option>
          <option value="Espresso_Martini">Lethargic</option>
          <option value="Bloody_Mary">Vengeful</option>
          <option value="Grasshopper">Jealous</option>
          <option value="Long_Island_Iced_Tea">Confused</option>
        </select>
        <button>Submit</button>
      </form>

      <DynamicDrink drink={drinkResult}/>

    </div>
    <footer>
      <p>Created by Alexandra Friedman at <a href="https://junocollege.com/">Juno College</a></p>
    </footer>
    </>
  );
}

export default App;
