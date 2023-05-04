import React from "react";

function DisplayTotals(props) {
    return (
        <>
            <h1>Candidate {props.name} had a total vote count of {props.count}</h1>
        </>
    )
}

export default DisplayTotals;