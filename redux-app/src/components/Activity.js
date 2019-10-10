import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import YourActivity from "./YourActivity"
import { fetchActivity } from "../actions";

const Activity = props => {
    useEffect(() => {
        props.fetchActivity();
    }, [])
    if (props.isFetching) {
        return <h2>Loading activity...</h2>
    }
    return (
        <div>
            {props.error && <p>{props.error}</p>}
            <YourActivity advice={props.advice}/>
            <form>
            <button type="submit">New Activity</button>
            </form>
        </div>
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