import React from "react";

const YourActivity = props => {
    if (props.link) {
        return (
            <div>
                <p>{`You could ${props.advice.activity}!`}</p>
                <p>{`Type of activity: ${props.advice.type}`}</p>
                <p>{`Number of participants: ${props.advice.participants}`}</p>
                <p>{`Check out this link! ${props.advice.link}`}</p>
            </div>
        )
    }
    return (
        <div>
            <p>{`You could ${props.advice.activity}!`}</p>
            <p>{`Type of activity: ${props.advice.type}`}</p>
            <p>{`Number of participants: ${props.advice.participants}`}</p>
        </div>
    )
}

export default YourActivity;