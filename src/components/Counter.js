/* @flow */

import React, { PropTypes } from "react";
import Radium from "radium";

const styles = {
    base: {
        padding: 48,
        width: 360,
        margin: "auto"
    },

    count: {
        fontFamily: "sans-serif",
        fontSize: 192,
        color: "#443b5d",
        textAlign: "center"
    },

    actions: {
        textAlign: "center"
    },

    square: {
        height: 34,
        width: 34
    },

    button: {
        display: "inline-block",
        appearance: "none",
        background: "#56acdf",
        color: "#fff",
        borderRadius: 2,
        border: 0,
        fontSize: 16,
        padding: 8,
        margin: 2,
        outline: 0,
        cursor: "pointer",

        ":hover": {
            background: "#60c0f7"
        },

        ":active": {
            background: "#4d98c4"
        }
    }
};

const Counter = props => {
    return (
        <div style={styles.base}>
            <div style={styles.count}>
                {props.counter}
            </div>
            <div style={styles.actions}>
                <button
                    key="increment"
                    style={[ styles.button, styles.square ]}
                    onClick={props.increment}
                >
                    +
                </button>
                <button
                    key="decrement"
                    style={[ styles.button, styles.square ]}
                    onClick={props.decrement}
                >
                    -
                </button>
                <button
                    key="incrementIfEven"
                    style={styles.button}
                    onClick={props.incrementIfEven}
                >
                    % 2 ? +
                </button>
            </div>
        </div>
    );
};

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementIfEven: PropTypes.func.isRequired
};

export default Radium(Counter);
