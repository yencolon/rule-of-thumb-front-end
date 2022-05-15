import * as React from 'react';
import "./styles.css";
import thumbUp from "../../assets/img/thumbs-up.svg"
import thumbDown from "../../assets/img/thumbs-down.svg"

interface IGaugeBarProps {
    positiveVotes: number,
    negativeVotes: number
}

const GaugeBar = ({ positiveVotes, negativeVotes }: IGaugeBarProps) => {
    const positivePercentage = Math.round( (positiveVotes * 100 / (positiveVotes + negativeVotes)) * 10) / 10
    const negativePercentage = Math.round( (100 - positivePercentage ) * 10 ) / 10

    return (
        <div className="gauge-bar__container" >
            <div aria-label="positive-votes" style={{ width: positivePercentage + '%' }} className="gauge_bar--positive">
                <img src={thumbUp} alt="thumbs up" />
                <span>{`${positivePercentage}%`}</span>
            </div>
            <div aria-label="negative-votes" style={{ width: negativePercentage + '%' }} className="gauge_bar--negative">
                <img src={thumbDown} alt="thumbs down" />
                <span>{`${negativePercentage}%`}</span>
            </div>
        </div>
    )
}

export default GaugeBar;
