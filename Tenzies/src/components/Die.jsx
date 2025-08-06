import React from 'react';
import './Die.css';

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
        <button onClick={props.onClick} style={styles} className="die">{props.value}</button>
    )
}