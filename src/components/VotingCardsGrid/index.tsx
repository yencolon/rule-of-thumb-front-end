import * as React from 'react';
import "./styles.css"
import VotingCard from '../VotingCard';


const VotingCardsGrid = () => {
    return (
        <div className="voting-grid__container">
            <VotingCard />
            <VotingCard />
            <VotingCard />
            <VotingCard />
            <VotingCard />
            <VotingCard />
        </div>
    )
}

export default VotingCardsGrid;
