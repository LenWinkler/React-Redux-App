import React from "react";
import styled from "styled-components"

const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: 1rem;
`

const YourActivity = props => {
    if (props.link) {
        return (
            <Div2>
                <p>{`You could ${props.advice.activity}!`}</p>
                <p>{`Type of activity: ${props.advice.type}`}</p>
                <p>{`Number of participants: ${props.advice.participants}`}</p>
                <p>{`Check out this link! ${props.advice.link}`}</p>
            </Div2>
        )
    }
    return (
        <Div2>
            <p>{`You could ${props.advice.activity}!`}</p>
            <p>{`Type of activity: ${props.advice.type}`}</p>
            <p>{`Number of participants: ${props.advice.participants}`}</p>
        </Div2>
    )
}

export default YourActivity;