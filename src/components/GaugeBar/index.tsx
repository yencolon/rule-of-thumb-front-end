import * as React from 'react';
import "./styles.css";

interface IGaugeBarProps {
}

const GaugeBar = ({  }: IGaugeBarProps) => {
    return (
        <div style={{ background:  'linear-gradient(90deg, rgba(60, 187, 180, 0.8) 50%, rgba(249, 173, 29, 0.8) 50%)'}} className="gauge-bar__container" >
        </div>
    )
}

export default GaugeBar;
