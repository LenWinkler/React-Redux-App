import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import YourActivity from "./YourActivity"
import { fetchActivity } from "../actions";
import styled from "styled-components";


const Div1 = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f68146;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    font-family: 'Indie Flower', cursive;
    font-size: 1.5rem;
`
const Button = styled.button`
    width: 10rem;
    height: 3rem;
    border-radius: 12px;
    margin: 3rem 0;
    background: #c0e8fc;
    box-shadow: 1px 1px 1px grey;
    font-size: 1rem;
    font-weight: bold;
`

const Activity = props => {
    useEffect(() => {
        props.fetchActivity();
    }, [])
    if (props.isFetching) {
        return <h2>Loading activity...</h2>
    }
    return (
        <Div1 className="div_1">
            {props.error && <p>{props.error}</p>}
            <YourActivity advice={props.advice}/>
            <form>
            <Button type="submit">New Activity</Button>
            </form>
        </Div1>
    )
}

const mapStateToProps = state => {
    return {
        advice: state.advice,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchActivity })(Activity);