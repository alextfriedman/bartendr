const DynamicDrink = (props) => {
    return (
        <>
        {props.drink ?
        <div>
            <h2>{props.drink[0].strDrink}</h2>
            <p>{props.drink[0].strInstructions}</p>
            <img src={props.drink[0].strDrinkThumb} alt={`A picture of the ${props.drink[0].strDrink}`} />
        </div>
        : null
        }
        </>
    )
}

export default DynamicDrink;