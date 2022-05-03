import { useEffect, useState } from "react";

const DynamicDrink = (props) => {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        if (props.drink) {
            const drinkInfo = props.drink[0];
            // Making an array with all the ingredients & measurements
            let ingredientArray = [];
            for (let i = 1; i < 16; i++) {
                const measurement = `strMeasure${i}`
                const ingredient = `strIngredient${i}`
                const ingredientObj = {
                    [drinkInfo[ingredient]]: drinkInfo[measurement]
                }
                ingredientArray.push(ingredientObj)
            }
            // Making a new array with only the existing ingredients
            const filteredIngList = ingredientArray.filter((ing) => {
                const value = Object.values(ing)[0]
                return ing[value] !== null && ing[value] !== ""
            })

            setIngredients(filteredIngList);
        }
    }, [props])

    return (
        <>
        {props.drink ?
        <div className="drinkContainer">
            <div className="drinkImg">
                <img src={props.drink[0].strDrinkThumb} alt={`A picture of the ${props.drink[0].strDrink}`} />
            </div>
            <div className="drinkText">
                <h2>{props.drink[0].strDrink}</h2>
                <ul>
                    {
                    ingredients.map((ing, index) => {
                        return (
                            <li key={index}>
                                {Object.values(ing)[0]} {Object.keys(ing)[0]}
                            </li>
                        )
                    })
                    }
                </ul>
                <p>{props.drink[0].strInstructions}</p>
            </div>
        </div>
        : null
        }
        </>
    )
}

export default DynamicDrink;