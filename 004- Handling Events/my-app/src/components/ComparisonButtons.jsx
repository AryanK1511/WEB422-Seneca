import React from "react";

export default function ComparisonButtons(props) {
    const { buttonCount } = props;
    return (
        <>
            {buttonCount < 10
                ? <button>Less than 10</button>
                : <button> Greater than 10</button>
            }
        </>
    )
}