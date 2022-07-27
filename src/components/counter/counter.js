import React from "react";

const Counter = (props) => {
    const state = React.useState(props.value);
    const counterValue = state[0];
    const setCounterValue = state[1];

    console.log("El valor es: " + counterValue);

    return (
        <div>
            <p>El número de pulsaciones es: {counterValue}</p>
            <button onClick={(event) => {
                setCounterValue(counterValue + 1);
            }}>Sumar 1</button>
        </div>
    );
}

export default Counter;